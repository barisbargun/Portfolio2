import { menuLinks } from "@/constants/index";
import Link from "next/link";
import { MenuCreatorName } from "../index";

const NavDesktop = () => {
  return (
    <nav className="pageWidth items-center justify-between gap-4 max-lg:hidden">
      <MenuCreatorName />
      <ul className="flex-center justify-between gap-10 font-source text-base font-semibold uppercase">
        {Object.values(menuLinks)
          .slice(1)
          .map((v) => (
            <li key={v.name}>
              <Link
                className="text-sm opacity-60 transition-opacity hover:opacity-100"
                href={v.link}
              >
                {v.name}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default NavDesktop;
