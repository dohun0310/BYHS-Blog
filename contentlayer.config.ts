import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from 'rehype-highlight';
import rehypePrettyCode from 'rehype-pretty-code';

export const StudentsPost = defineDocumentType(() => ({
  name: 'StudentsPost',
  contentType: 'mdx',
  filePathPattern: `students/**/*.md`,
  fields: {
    date: { type: 'string', required: true},
    title: { type: 'string', required: true },
    author: { type: 'string', required: true },
  }
}))

export const ProspectiveStudentsPost = defineDocumentType(() => ({
  name: 'ProspectiveStudentsPost',
  contentType: 'mdx',
  filePathPattern: `prospective_students/**/*.md`,
  fields: {
    date: { type: 'string', required: true },
    title: { type: 'string', required: true },
    author: { type: 'string', required: true }
  }
}))

const contentSource = makeSource({
  contentDirPath: 'posts',
  documentTypes: [StudentsPost, ProspectiveStudentsPost],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'github-dark'
        },
      ],
      highlight,
    ],
  },
});

export default contentSource;
