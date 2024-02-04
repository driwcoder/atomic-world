import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'

const fontRoboto = Roboto_Mono({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
})

export const metadata: Metadata = {
  title: 'Apresentação de Adriano',
  description: 'Este será o meu presente para todos!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt' >
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`px-5 ${fontRoboto.className}`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
