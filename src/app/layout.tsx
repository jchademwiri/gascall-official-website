import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/context/ThemeProvider';
import { Analytics } from '@vercel/analytics/react';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.playhousemedia.net'),
  title: 'Playhouse Media Group - Web Design and Development Services',
  description:
    'Transform your online presence with Playhouse Media Group. We create captivating, user-friendly websites to boost brand visibility and drive organic traffic. Experts in web design, development, and SEO services.',
  alternates: {
    canonical: 'https://www.playhousemedia.net',
  },

  openGraph: {
    title: 'Playhouse Media Group - Web Design and Development Services',
    siteName: 'Playhouse Media Group',
    description:
      'Transform your online presence with Playhouse Media Group. We create captivating, user-friendly websites to boost brand visibility and drive organic traffic. Experts in web design, development, and SEO services.',
    url: 'https://www.playhousemedia.net',
    locale: 'en_US',
    type: 'website',
    images: '/opengraph-image.png',
  },
  category: 'technology',
  twitter: {
    title: 'Playhouse Media Group - Web Design and Development Services',
    description:
      'Transform your online presence with Playhouse Media Group. We create captivating, user-friendly websites to boost brand visibility and drive organic traffic. Experts in web design, development, and SEO services.',
    creator: '@jchademwiri',
    creatorId: '1467726470533754880',
    siteId: '1467726470533754880',
    card: 'summary_large_image',
    images: '/twitter-image.png',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
