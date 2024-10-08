import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "조우식",
  description: "조우식의 페이지 입니다.",
  keywords: ["조우식", "개발자", "웹 개발", "프로그래밍", "포트폴리오", "saccharin01"]
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="robots" content="index, follow" /> 
      </head>
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
