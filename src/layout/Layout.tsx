"use client"
import '../index.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ThemeProvider } from '../components/theme/ThemeProvider';
import Home from '@/page/Home';

export const metadata = {
  title: 'Enhanced Animated Portfolio',
  description: 'A responsive and animated portfolio with dark mode, header, and footer',
};

export default function Layout() {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-white dark:bg-gray-900">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {
                <Home />
              }
               
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
