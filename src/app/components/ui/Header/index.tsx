import { links } from "./data";

export const Header = () => {
  return (
    <header id="header" className="flex col-span-full justify-end gap-8 items-center">
      <ul className="contents">
        {links.map((link) => (
          <li key={link.name}>
            <a className="text-sm font-bold uppercase" href={link.href}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};
