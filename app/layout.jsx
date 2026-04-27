import "./globals.css";

export const metadata = {
  title: "Pratik.dev | Portfolio",
  description: "Portfolio website for Pratik, built with Next.js and backend API routes."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
