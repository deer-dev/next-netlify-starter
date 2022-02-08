import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SportsSteps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="SportsSteps" />
        <p className="description">
          Coming soon
        </p>
      </main>

      <Footer />
    </div>
  )
}
