import type { Metadata } from "next";
import { Noto_Sans_KR, Outfit } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
  weight: ["300", "400", "500", "700", "900"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "하영아 | 대학생 진로 및 취업 컨설턴트",
  description: "대학생들의 성장과 성공적인 취업을 돕는 하영아 컨설턴트입니다. 1:1 진로 상담, 자기소개서/면접 클리닉, 취업 프로그램 기획 및 운영 전문가.",
  keywords: ["하영아", "진로상담", "취업컨설팅", "취업상담", "프로그램기획", "대학생진로", "대학생취업", "판교스타트캠퍼스"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
