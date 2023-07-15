import { allStudentsPosts } from "contentlayer/generated";
import Link from "next/link";

import { StyledContents } from "./style";

export const metadata = {
  title: "재학생",
  description: "선배로서 후배들에게 알려주고 싶은 학교생활 팁과 교내 활동, 동아리 및 교내 부서에 대한 내용들을 담은 글들이 있는 페이지예요.",
  openGraph: {
    type: "website",
    url: "https://byhs.vercel.app",
    title: "재학생",
    description: "선배로서 후배들에게 알려주고 싶은 학교생활 팁과 교내 활동, 동아리 및 교내 부서에 대한 내용들을 담은 글들이 있는 페이지예요.",
    siteName: "BYHS Blog",
    images: [{
      url: "/opengraph.png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://byhs.vercel.app",
    title: "재학생",
    description: "선배로서 후배들에게 알려주고 싶은 학교생활 팁과 교내 활동, 동아리 및 교내 부서에 대한 내용들을 담은 글들이 있는 페이지예요.",
    images: [{
      url: "/opengraph.png",
    }],
  },
}

const students = () => (
  <div>
    <StyledContents>
      <div className="contents-container">
        <h1 className="page-title">재학생</h1>
        <h1 className="page-content">
          이 페이지는 부용고 재학생들을 위한 페이지예요.
  
          <br />
  
          선배로서 후배들에게 알려주고 싶은 학교생활 팁과 교내 활동, 동아리 및 교내 부서에 대한 내용을 담았어요.
        </h1>
        {allStudentsPosts.map((post) => (
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
