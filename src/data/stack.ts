import HtmlMobileIcon from "../assets/html-mobile-48.svg";
import HtmlDesktopIcon from "../assets/html-desktop-480.svg";
import TailwindDesktopIcon from "../assets/tailwindcss-desktop-480.svg";
import TailwindMobileIcon from "../assets/tailwindcss-mobile-48.svg";
import ReactDesktopIcon from "../assets/react-desktop-480.svg";
import ReactMobileIcon from "../assets/react-mobile-48.svg";
import JavascriptDesktopIcon from "../assets/javascript-desktop-480.svg";
import JavascriptMobileIcon from "../assets/javascript-mobile-48.svg";
import TypescriptDesktopIcon from "../assets/typescript-desktop-480.svg";
import TypescriptMobileIcon from "../assets/typescript-mobile-48.svg";
import NodejsDesktopIcon from "../assets/nodejs-desktop-240.svg";
import NodejsMobileIcon from "../assets/nodejs-mobile-48.svg";
import SqlIcon from "../assets/sql-database.svg";
import SqlMobileIcon from "../assets/icons8-sql-48.png";

type StackT = {
  srcMobile: string;
  srcDesktop: string;
  alt: string;
};

export const stack: StackT[] = [
  {
    alt: "html5",
    srcMobile: HtmlMobileIcon,
    srcDesktop: HtmlDesktopIcon,
  },
  {
    alt: "tailwindcss",
    srcMobile: TailwindMobileIcon,
    srcDesktop: TailwindDesktopIcon,
  },
  {
    alt: "react",
    srcMobile: ReactMobileIcon,
    srcDesktop: ReactDesktopIcon,
  },
  {
    alt: "javascript",
    srcMobile: JavascriptMobileIcon,
    srcDesktop: JavascriptDesktopIcon,
  },
  {
    alt: "typescript",
    srcMobile: TypescriptMobileIcon,
    srcDesktop: TypescriptDesktopIcon,
  },
  {
    alt: "nodejs",
    srcMobile: NodejsMobileIcon,
    srcDesktop: NodejsDesktopIcon,
  },
  {
    alt: "sql",
    srcMobile: SqlMobileIcon,
    srcDesktop: SqlIcon,
  },
];
