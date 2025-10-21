import { ReactNode } from "react";
import style from "./index.module.css";
import SearchbarLayout from "@/components/searchbar-layout";

export default function Home() {
  return (
    <div>
      <h1 className={style.title}>인덱스</h1>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
