import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 '>
      <Head>
        <title>MR-Portfolio</title>
        <meta name="description" content="Developed by Mehrdad Roienyan" />
      </Head>
   
    <Header/>
    <section className='snap-center'>
      <Hero/>
    </section>
    
    </div>
  )
}
