import { ReactNode } from "react";

export default function SearchbarLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div>임시 검색 폼</div>
      {children}
    </>
  );
}
