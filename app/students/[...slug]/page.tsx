import { notFound } from "next/navigation";
import { allStudentsPosts } from "contentlayer/generated";
import { Metadata } from "next";

import { StyledPost } from "./style";
import { Mdx } from "../../../components";

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allStudentsPosts.find((post) => post._raw.flattenedPath.split("/").slice(1).join("/") === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.author,
  }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allStudentsPosts.map((post) => ({
    slug: post._raw.flattenedPath.split("/").slice(1).join("/").split("/"),
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <div>
      <StyledPost>
          <div className="post-container">
            <h1 className="post-title">{post.title}</h1>
            <p className="post-author">{post.author}</p>
            <Mdx code={post.body.code} />
          </div>
      </StyledPost>
    </div>
  )
}