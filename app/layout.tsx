import './globals.css';
import type { Metadata } from 'next';
import { Inter, Orbitron, Rock_Salt } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });
const rockSalt = Rock_Salt({ subsets: ['latin'], weight: '400', variable: '--font-rock-salt' });

export const metadata: Metadata = {
  title: "Afro'z Rep - Banda de Rock | Site Oficial",
  description: 'Site oficial da banda Afro\'z Rep. Ouça nossas músicas, veja nossos clipes e acompanhe nossas novidades e shows.',
  keywords: 'Afroz Rep, banda de rock, música, shows, clipes, rock brasileiro',
  authors: [{ name: "Afro'z Rep" }],
  openGraph: {
    title: "Afro'z Rep - Banda de Rock | Site Oficial",
    description: 'Site oficial da banda Afro\'z Rep. Ouça nossas músicas, veja nossos clipes e acompanhe nossas novidades e shows.',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Afro'z Rep Band",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Afro'z Rep - Banda de Rock | Site Oficial",
    description: 'Site oficial da banda Afro\'z Rep. Ouça nossas músicas, veja nossos clipes e acompanhe nossas novidades e shows.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} ${orbitron.variable} ${rockSalt.variable} bg-black text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}