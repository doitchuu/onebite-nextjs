import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import style from "./searchbar-layout.module.css";

export default function SearchbarLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const onSubmit = () => {
    if (!search || router.query.q === search) {
      return;
    }

    router.push(`/search?q=${search}`);
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  useEffect(() => {
    setSearch((router.query.q as string) || "");
  }, [router.query.q]);

  return (
    <>
      <div>
        <div className={style.searchbar_container}>
          <input
            value={search}
            onChange={onChangeSearch}
            onKeyDown={onKeyDown}
            placeholder="도서 검색"
          />
          <button onClick={onSubmit}>검색</button>
        </div>
        {children}
      </div>
    </>
  );
}
