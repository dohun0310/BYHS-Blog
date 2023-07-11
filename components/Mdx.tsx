import { useMDXComponent } from "next-contentlayer/hooks";

interface MdxProps {
  code: string
}

const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code)

  return <Component />
}

export default Mdx