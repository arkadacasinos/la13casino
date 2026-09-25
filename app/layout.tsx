import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'La Casino — официальный сайт и зеркало для игры онлайн 2026',
  description: 'La Casino: официальный сайт, рабочее зеркало и понятный гид по игре онлайн. Узнайте, как проверить адрес, открыть каталог и играть с телефона безопасно и ответственно.',
  generator: 'Next.js',
  metadataBase: new URL('https://la13casino.vercel.app/'),
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: { icon: '/la13-favicon.png', apple: '/la13-favicon.png' },
  openGraph: { title: 'La Casino — официальный сайт и зеркало', description: 'Понятный игровой гид La Casino для мобильных пользователей.', url: 'https://la13casino.vercel.app/', siteName: 'La Casino', locale: 'ru_RU', type: 'website' },
}

export const viewport: Viewport = { themeColor: '#101111', colorScheme: 'dark', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" className="bg-background"><head><meta name="yandex-verification" content="" /></head><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}

