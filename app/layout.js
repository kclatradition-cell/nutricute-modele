import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import AsmrButton from '../components/AsmrButton';
import Navbar from '../components/Navbar';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata = {
  title: 'NutriCute - Alimentation gourmande et fonctionnelle',
  description: 'Des préparations simples, rapides et gourmandes conçues avec des ingrédients sélectionnés.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-cream">
        <Navbar />
        {children}
        <AsmrButton />
      </body>
    </html>
  );
}
