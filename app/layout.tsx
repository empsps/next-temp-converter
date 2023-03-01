import './globals.css';
import { Lexend } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'], weight: ['500', '700', '800'] });

export const metadata = {
  title: 'Home | Temp Converter',
  description: 'A simple temperature converter',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${lexend.className} bg-background`}>
        <header className='flex px-2 items-center bg-mine-shaft-200 h-16 w-full'>
          <span className='text-3xl font-bold'>Temp Converter</span>
        </header>
        <main className='px-2'>{children}</main>
      </body>
    </html>
  );
}
