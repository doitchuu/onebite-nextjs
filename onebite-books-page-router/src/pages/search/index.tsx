import SearchbarLayout from "@/components/searchbar-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import BookItem from "@/components/book-item";

import fetchBooks from "@/lib/fetch-books";

import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const q = context.query.q;
  const books = await fetchBooks(q as string);
  return { props: { books } };
}

export default function Page({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  return (
    <div>
      <h1>검색: {router.query.q}</h1>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
