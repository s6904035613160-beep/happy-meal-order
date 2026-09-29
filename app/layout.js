import { Prompt } from 'next/font/google';
import './globals.css';

const prompt = Prompt({
  subsets: ['thai', 'latin'],
  weight: ['400', '600', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'happy meal',
  description: 'ระบบสั่งอาหารร้านสเต๊ก happy meal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className={prompt.className}>{children}</body>
    </html>
  );
}
