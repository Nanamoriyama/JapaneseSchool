import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Japans Les Moriyama", // ここでタイトルを設定
  description:
    "Leer Japans in Amsterdam met Moriyama. Wij bieden persoonlijke Japanse lessen voor alle niveaus, van beginners tot gevorderden. Ontdek de rijke Japanse cultuur en taal met onze ervaren docent.",

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
