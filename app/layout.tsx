import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";

import { Header, Footer } from "../components";

const noto_sans_kr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

export const metadata = {
  title: "BYHS Blog",
  description: "학생들이 생각하는 부용고의 모습을 진솔하게 담아 소개해요. 재학생, 예비 입학생들을 위한 정보를 선배들이 직접 공유해요.",
  openGraph: {
    type: "website",
    url: "https://byhs.vercel.app",
    title: "BYHS Blog",
    description: "학생들이 생각하는 부용고의 모습을 진솔하게 담아 소개해요. 재학생, 예비 입학생들을 위한 정보를 선배들이 직접 공유해요.",
    siteName: "BYHS Blog",
    images: [{
      url: "/opengraph.png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://byhs.vercel.app",
    title: "BYHS Blog",
    description: "학생들이 생각하는 부용고의 모습을 진솔하게 담아 소개해요. 재학생, 예비 입학생들을 위한 정보를 선배들이 직접 공유해요.",
    images: [{
      url: "/opengraph.png",
    }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={noto_sans_kr.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
