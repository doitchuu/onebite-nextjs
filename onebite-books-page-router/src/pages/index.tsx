import { ReactNode } from "react";
import style from "./index.module.css";
import SearchbarLayout from "@/components/searchbar-layout";
import BookItem from "@/components/book-item";
// import books from "../mock/books.json";

import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";

import { InferGetServerSidePropsType } from "next";

export async function getServerSideProps() {
  const books = await fetchBooks();
  const randomBooks = await fetchRandomBooks();

  return { props: { books, randomBooks } };
}

export default function Home({
  books,
  randomBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>모든 도서</h3>
        {randomBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
