import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="col-span-full self-center justify-self-center">
      <Image
        src="/image/logo.svg"
        width={263}
        height={60}
        alt="Hypesoft Logo"
      />
      <small className="text-sm">
        Made with ♥ by Roberto and <span className="text-purple">Hypesoft</span>
      </small>
    </footer>
  );
};
