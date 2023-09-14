import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import '../assets/styles/index.scss';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NextJs PokeDex',
  description: 'NextJs PokeDex by Zane',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={montserrat.className}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
