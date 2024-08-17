import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Moriyama",
  description: "Japans Cursus in Amsterdam",
  keywords:
    "japanese lesson amsterdam, japans les, japans docent, japanese teacher amsterdam, japans cursus, japans leren",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        <meta name="keywords" content={metadata.keywords} />
        <link rel="icon" href={metadata.icons.icon} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={metadata.icons.apple}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={metadata.icons.icon}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={metadata.icons.icon}
        />
        <meta
          name="google-site-verification"
          content="s9eDLYKL8NrFJjYqb7LBB8L8uOyqldQQcgcJfo27Hec"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
