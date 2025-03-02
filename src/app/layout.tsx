import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import Footer from '~/components/layouts/footer';
import Navbar from '~/components/layouts/navbar';
import InvokeClient from '~/components/utils/invoke-client';
import './globals.css';

export const metadata: Metadata = {
  title: 'Redesign softcomp.io',
  description: 'Build by : --epenflow@25'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <InvokeClient />
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
