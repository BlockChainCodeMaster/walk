import { Html, Head, Main, NextScript } from 'next/document'
import Header from './header'
import Footer from './footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-black">
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
