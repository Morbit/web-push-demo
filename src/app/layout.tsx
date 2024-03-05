export const metadata = {
  title: ' WebPush Demo',
  description: 'Демо работы web push',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#90cdf4" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}