import Head from 'next/head'
import Image from 'next/image'
import Abount from '../components/Abount'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y 
    snap-mandatory 
    overflow-y-scroll  
    overflow-x-hidden 
    z-0 scrollbar 
    scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]/80
    scrollbar-thin
    ">
      <Head>
        <title>devnahidxyz</title>
        <meta name="description" content="Nahid Islam nahid940" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header/>

      {/* Hero */}
      <section id="hero" className="snap-start">
          <Hero/>
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <Abount/>
      </section>

      {/* Experience */}
      <section id="about" className="snap-center">
          <Experience/>
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact me */}
    </div>
  )
}
