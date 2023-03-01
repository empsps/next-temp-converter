import './globals.css';
import { Lexend } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'], weight: ['500', '700', '800'] });

export const metadata = {
  title: 'Temp Converter',
  description: 'A simple temperature converter',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${lexend.className} bg-background`}>{children}</body>
    </html>
  );
}
