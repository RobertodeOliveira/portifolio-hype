"use client";

import { Formik, Form, FormikHelpers, Field } from "formik";
import { useState } from "react";
import { Button } from "../../ui/Button";
import { ContactFormValues, formContactValidation } from "./validation";
import { ApiResponseContact } from "../../../../../api/types";
import { API_URL } from "../../../../../api/api";
import { CardPersonalInfo } from "./components/CardPersonalInfo";

export const SectionContactForMe = () => {
  const [loading, setLoading] = useState(false);
  const [responseForm, setResponseForm] = useState<ApiResponseContact | null>(
    null
  );

  async function addContact(
    contactData: ContactFormValues
  ): Promise<ApiResponseContact> {
    try {
      const response = await fetch(`${API_URL}/contacts`, {
        method: "POST",
        headers: {
          "Content-type": "application-json",
        },
        body: JSON.stringify(contactData),
      });
      if (!response.ok) {
        throw new Error("Erro ao adicionar o contato.");
      }
      return {
        success: true,
        message: "Contato adicionado com sucesso",
      };
    } catch (erro: unknown) {
      return {
        success: false,
        message: "Erro ao adicionar o contato.",
      };
    }
  }

  const submitForm = async (
    contactData: ContactFormValues,
    callback: () => void
  ) => {
    setResponseForm(null);
    setLoading(true);
    const response: ApiResponseContact = await addContact(contactData);
    setResponseForm(response);
    if (!response.success) {
      callback();
    }
    setLoading(false);
  };

  return (
    <section>
      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={formContactValidation}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(
          values: ContactFormValues,
          { resetForm }: FormikHelpers<ContactFormValues>
        ) => {
          submitForm(values, () => resetForm({}));
        }}
      >
        {({ values, errors }) => {
          return (
            <Form className="p-12  bg-white col-span-full  lg:col-span-7 rounded-lg text-neutral-600">
              <h3 className="text-black text-3xl font-medium mb-6">
                Let me know here.
              </h3>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <Field
                    id="name"
                    name="name"
                    placeholder="Full name"
                    className="w-[100%] border border-[#DFE3EB] py-3 px-5 rounded focus:border-sky-500"
                  />
                  {errors?.name && (
                    <p className="text-red-600">{errors.name}</p>
                  )}
                </div>
                <div className="w-1/2">
                  <Field
                    id="email"
                    name="email"
                    placeholder="Email address"
                    className="w-[100%] border border-[#DFE3EB] py-3 px-5 rounded"
                  />
                  {errors?.email && (
                    <p className="text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>
              <Field
                id="subject"
                name="subject"
                className="border border-[#DFE3EB] py-3 px-5 rounded w-full mt-4"
                placeholder="Subjects"
              />
              {errors?.subject && (
                <p className="text-red-600">{errors.subject}</p>
              )}
              <Field
                id="message"
                name="message"
                component="textarea"
                className="text-neutral-600 border border-[#DFE3EB] py-3 px-5 rounded w-full mt-4 h-36"
                placeholder="Message"
              ></Field>
              {errors?.message && (
                <p className="text-red-600">{errors.message}</p>
              )}
              <div className="mt-8">
                <Button type="submit" variant="primary">
                  SEND MESSAGE <img src="/icons/send.svg" alt="" />
                </Button>
              </div>
              {responseForm && responseForm.message && (
                <p
                  className={`${
                    responseForm.success ? "text-green-600" : "text-red-600"
                  } m-1`}
                >
                  {responseForm.message}
                </p>
              )}
            </Form>
          );
        }}
      </Formik>
      <div className="col-span-full lg:col-span-5 ">
        <CardPersonalInfo />
      </div>
    </section>
  );
};
