import { FC } from "react";
import Link from "next/link";
import { BACK_ARROW_SVG } from "@/icons/backArrowSvg";
("use-client");

type Props = {
  pageTitle?: string;
};

const Header: FC<Props> = ({ pageTitle }) => (
  <h1 className="p-5 text-white text-18 font-semibold tracking-wide break-words border-b border-neutral-600 cursor-default">
    {pageTitle ?? (
      <Link href={"/"}>
        <BACK_ARROW_SVG />
      </Link>
    )}
  </h1>
);

export default Header;
