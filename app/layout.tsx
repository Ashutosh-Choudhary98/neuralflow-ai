import type { Metadata } from 'next';
import { JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NeuralFlow AI — Intelligent Data Automation Platform',
  description:
    'Automate complex data workflows with AI-powered intelligence. 10x faster processing, zero manual effort.',
  keywords: [
    'AI automation',
    'data platform',
    'machine learning',
    'workflow automation',
  ],
  openGraph: {
    title: 'NeuralFlow AI — Intelligent Data Automation Platform',
    description:
      'Automate complex data workflows with AI-powered intelligence.',
    url: 'https://neuralflow.vercel.app',
    siteName: 'NeuralFlow AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuralFlow AI',
    description: 'AI-powered data automation at scale.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
