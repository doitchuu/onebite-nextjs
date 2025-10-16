import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <Link href="/">홈</Link>
        &nbsp;
        <Link href="/search">검색</Link>
        &nbsp;
        <Link href="/book/1">1번 도서</Link>
      </header>
      <Component {...pageProps} />
    </>
  );
}
