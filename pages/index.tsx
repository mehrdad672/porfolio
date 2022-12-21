import Head from 'next/head'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white max-w-fulllg: h-screen snap-y snap-mandatory overflow-scroll z-0 '>
      <Head>
        <title>MR-Portfolio</title>
        <meta name="description" content="Developed by Mehrdad Roienyan" />
      </Head>
   
    <Header/>
    <section className='lg:snap-center snap-none'>
      <Hero/>
    </section>
    <section id='about' className='lg:snap-start snap-none'>
      <About />
    </section>
    <section id='skills' className='lg:snap-start snap-none '>
      <Skills />
    </section>
    <section id='projects' className='lg:snap-start snap-none'>
      <Projects />
    </section>
    <section id='contact' className='lg:snap-center snap-none'>
      <ContactMe />
    </section>
    
    </div>
  )
}
