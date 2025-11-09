import style from "./[id].module.css";

import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchOneBook from "@/lib/fetch-one-book";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params!.id;
  const book = await fetchOneBook(Number(id));

  return { props: { book } };
}

export default function Page({
  book,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!book) {
    return <div>오류가 발생했어요. 다시 시도해 주세요.</div>;
  }

  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    book;

  return (
    <div className={style.container} key={id}>
      <div className={style.cover_img_container}>
        <img src={coverImgUrl} alt="커버 이미지" />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <br />
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
