// app/layout.js
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { Metadata } from 'next';
import './globals.css';


const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AIRAVAT Security Service - Professional Security Solutions in Gujarat',
  description: 'Premier security solutions provider offering 24/7 protection across Gujarat with trained ex-servicemen professionals.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
