import { Inter } from "next/font/google";

import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Japans Les Moriyama",
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
    <html lang="nl">
      <head>
        <title>{metadata.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        <meta name="description" content={metadata.description} />
        <meta property="og:title" content="Japans Les Moriyama" />
        <meta
          property="og:description"
          content="Leer Japans in Amsterdam met Moriyama. Wij bieden persoonlijke Japanse lessen voor alle niveaus, van beginners tot gevorderden."
        />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="https://moriyama.vercel.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Japans Les Moriyama" />
        <meta
          name="twitter:description"
          content="Leer Japans in Amsterdam met Moriyama. Wij bieden persoonlijke Japanse lessen voor alle niveaus, van beginners tot gevorderden."
        />
        <meta name="twitter:image" content="/images/logo.png" />

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
