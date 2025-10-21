import { useRouter } from "next/router";
import style from "./[id].module.css";
import books from "@/mock/books.json";

export default function Page() {
  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    books[0];
  const router = useRouter();

  return (
    <div className={style.container}>
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
