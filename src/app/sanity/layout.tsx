import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio - La perla negra",
  description: "Sanity Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
