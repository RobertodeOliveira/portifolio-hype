import Image from "next/image";
import { Container } from "./styles/Container";
import { Button } from "./components/Button";
import { SectionMyWorks } from "./components/SectionMyWorks";
import { SectionServices } from "./components/SectionServices";

export default function Home() {
  return (
    <>
    <main className="w-full flex items-center flex-col">
      {/* <section className="bg-red-500 max-w-[1320px] w-full">
        <Container>
          <div className="flex justify-center max-w-[1980px] max-h-[1080px] relative items-center pt-24">
            <div className="z-50 w-full absolute left-0 ml-[-480px]">
                <div className="w-full">
                  <h1 className="text-[80px]">
                    Hello, I’m Roberto, a <span className="text-[#7D00FF]">Software Engineer</span>.
                  </h1>
                  <p className="w-[673px] text-[#A5A5A5]">
                    Product Designer, UI/UX Designer, and developer based in Brazil.
                    Over the past 17 years, as an art director and designer, I’ve worked with big companies and up-and-coming startups.
                  </p>
                  <div>
                    <Button color="#fff" padding="16px">Teste</Button>
                  </div>
                </div>  
            </div>
            <div className="h-full z-[-1]">
              <Image
                  width={870}
                  height={974}
                  layout="intrinsic"
                  src="https://avatars.githubusercontent.com/u/92532306?s=400&u=546f15382d9a90c80cf94c58b10a51e286acfec6&v=4" alt={""}/>
            </div>  
          </div>
        </Container>
      </section> */}
      <SectionMyWorks />
      <SectionServices />
    </main>
    </>
  );
}
