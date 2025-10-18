import Link from "next/link";
import { ReactNode } from "react";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header>
        <Link href="/">BOOKS</Link>
      </header>
      <main>{children}</main>
      <footer>@doitchuu</footer>
    </>
  );
}
