// Import necessary modules and components
import { Inter } from 'next/font/google';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Navbar from '../components/Navbar';
import NextTopLoader from 'nextjs-toploader';

// Define font settings
const inter = Inter({ subsets: ['latin'] });

// Define metadata for SEO
export const metadata = {
  title: 'PDF Tools - Your Ultimate PDF Processing Solution',
  description:
    'Unlock the full potential of your PDFs with PDF Tools. Crop, cut, compress, and more!',
  keywords:
    'PDF tools, PDF processing, PDF crop, PDF cut, PDF compress, PDF editing',
};

// Root layout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags for SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        {/* AppRouterCacheProvider for routing */}
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          {/* Loader for visual indication of page loading */}
          <NextTopLoader color="#DEF2FF" height={2} showSpinner={false} />
          {/* Navigation bar component */}
          <Navbar />
          {/* Main content area */}
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
