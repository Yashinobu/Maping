import { Inter, Shippori_Mincho, Noto_Sans } from "next/font/google";
import "./globals.css";
import ClientProvider from "@/components/ClientProviders";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
});
const shippori_mincho = Shippori_Mincho({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-shippori-mincho'
})
const noto_sans = Noto_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans'
})

export const metadata = {
  title: "Matching App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${shippori_mincho.variable} ${noto_sans.variable}`}>
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
