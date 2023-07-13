import { allProspectiveStudentsPosts } from "contentlayer/generated";
import Link from "next/link";

import { StyledContents } from "./style";

export const metadata = {
  title: "예비 입학생",
  description: "부용고에 들어오지 않아서 알 수 없는 교칙이나 시설의 모습, 그리고 학교생활을 하며 느꼈던 경험들을 담은 글들이 있는 페이지예요.",
  og: {
    type: "website",
    url: "https://byhs.vercel.app",
    title: "예비 입학생",
    desciption: "부용고에 들어오지 않아서 알 수 없는 교칙이나 시설의 모습, 그리고 학교생활을 하며 느꼈던 경험들을 담은 글들이 있는 페이지예요.",
  },
  twitter: {
    card: "summary_large_image",
    url: "https://byhs.vercel.app",
    title: "예비 입학생",
    desciption: "부용고에 들어오지 않아서 알 수 없는 교칙이나 시설의 모습, 그리고 학교생활을 하며 느꼈던 경험들을 담은 글들이 있는 페이지예요.",
  },
}

const students = () => (
  <div>
    <StyledContents>
      <div className="contents-container">
        <h1 className="page-title">예비 입학생</h1>
        <h1 className="page-content">
          이 페이지는 부용고에 입학하고자 하는 예비 고1 학생들을 위한 페이지예요.

          <br />

          부용고에 들어오지 않아서 알 수 없는 교칙이나 시설의 모습, 그리고 학교생활을 하며 느꼈던 경험들을 담았어요.
        </h1>
        {allProspectiveStudentsPosts.map((post) => (
          <article key={post._id}>
            <Link href={post._raw.flattenedPath}>
              <p className="post-date">{post.date}</p>
              <h1 className="post-title">{post.title}</h1>
              <p className="post-author">{post.author}</p>
            </Link>
          </article>
        ))}
      </div>
    </StyledContents>
  </div>
)

export default students;
