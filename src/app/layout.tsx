import type { Metadata } from "next";
import localFont from "next/font/local";
import { ViewTransitions } from "next-view-transitions";

import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import { getPosts } from "@/lib/posts";
import "./globals.css";

const hanken = localFont({
  src: "../fonts/HankenGrotesk.woff2",
  variable: "--font-hanken",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Shubham Khakha",
    template: "%s · Shubham Khakha",
  },
  description: "I write software.",
};

const themeScript = `try{if(localStorage.theme==='dark')document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${hanken.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full font-sans">
        <ViewTransitions>
          <Providers>
            <div className="wrap">
              <SiteHeader posts={getPosts()} />
              {children}
            </div>
          </Providers>
        </ViewTransitions>
      </body>
    </html>
  );
}
