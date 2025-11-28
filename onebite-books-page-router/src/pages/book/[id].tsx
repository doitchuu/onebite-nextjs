import style from "./[id].module.css";

import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import fetchOneBook from "@/lib/fetch-one-book";
import { useRouter } from "next/router";
import fetchBooks from "@/lib/fetch-books";
import Head from "next/head";

export async function getStaticPaths() {
  const books = await fetchBooks();

  return {
    paths: books.map((book) => ({ params: { id: String(book.id) } })),
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params!.id;
  const book = await fetchOneBook(Number(id));

  return { props: { book } };
}

export default function Page({
  book,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div>
        <Head>
          <title>한입북스 - 검색결과</title>
          <meta property="og:title" content="한입북스 - 검색결과" />
          <meta property="og:image" content="./thumbnail.png" />
          <meta
            property="og:description"
            content="한입북스에 등록된 도서들을 만나보세요."
          />
        </Head>
        로딩 중입니다...
      </div>
    );
  }

  if (!book) {
    return <div>오류가 발생했어요. 다시 시도해 주세요.</div>;
  }

  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    book;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={coverImgUrl} />
      </Head>

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
    </>
  );
}
