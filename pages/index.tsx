import Head from 'next/head'
import Header from '../components/Header'
export default function Home() {
  return (
    <div >
      <Head>
        <title>MR-Portfolio</title>
        <meta name="description" content="Developed by Mehrdad Roienyan" />
      </Head>
    {/* Header section */}
    <Header/>
     
    </div>
  )
}
