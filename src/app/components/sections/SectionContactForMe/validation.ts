import * as Yup from "yup";

const requiredMessage = "Campo obrigatório";

export type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
}
export function formContactValidation() {
  return Yup.object<ContactFormValues>().shape({
    name: Yup.string()
      .required(requiredMessage)
      .min(3, "O nome deve ter no mínimo 3 caracteres"),
    email: Yup.string()
      .required(requiredMessage)
      .email("E-mail incorreto"),
    subject: Yup.string()
      .required(requiredMessage),
    message: Yup.string()
      .required(requiredMessage)
      .max(500, "Limite da mensagem deve ser de até 500 caracteres")
  });
}