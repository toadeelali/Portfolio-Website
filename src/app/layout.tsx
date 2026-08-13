import { RevealObserver } from "@/components/RevealObserver";
import { TitleBlock } from "@/components/TitleBlock";
import { Topbar } from "@/components/Topbar";
import type { Metadata } from "next";
import { Big_Shoulders, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const display = Big_Shoulders({
  weight: ["600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-display",
});

const body = IBM_Plex_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Adeel — CodeGinx",
  description:
    "Five disciplines, one build process. Agents, interfaces, mobile apps, games, and the servers underneath — designed and shipped end to end under CodeGinx.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`js ${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        /> */}
        <article className="sheet-wrap">
          <Topbar />
          {children}
          <TitleBlock />
        </article>
        <RevealObserver />
      </body>
    </html>
  );
}
