import Link from "next/link";

interface NavLinkProps {
  text: string;
  href: string;
}

const NavLink = ({ text, href }: NavLinkProps) => {
  return (
    <Link href={href}>
      <a className="group bg-cyan-500 hover:bg-blue-700 self-center rounded-md p-3 cursor-pointer text-center">
        {text}
      </a>
    </Link>
  );
};

export default NavLink;
