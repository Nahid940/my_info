import Head from 'next/head'
import Image from 'next/image'
import Abount from '../components/Abount'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>devnahidxyz</title>
        <meta name="description" content="Nahid Islam nahid940" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header/>

      {/* Hero */}
      <section id="hero" className="snap-center">
          <Hero/>
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <Abount/>
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact me */}
    </div>
  )
}
