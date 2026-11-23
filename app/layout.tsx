import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanity app",
  description: "A new next.js app built on Sanity",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={` h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
