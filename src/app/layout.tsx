import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head"; // Headコンポーネントをインポート

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moriyama",
  description: "Japanese School in Amsterdam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* デフォルトのファビコンとして使用 */}
        <link rel="icon" href="/images/moriyamalogo.png" />
        {/* Appleデバイス用のホーム画面アイコン */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/moriyamalogo.png"
        />
        {/* PNG形式のファビコンを指定 */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/moriyamalogo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/moriyamalogo.png"
        />
        {/* PWA用のウェブアプリマニフェストファイル（存在する場合） */}
        <link rel="manifest" href="/site.webmanifest" />
        {/* 他のメタデータをここに追加できます */}
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
