import Head from 'next/head';
import Image from 'next/image';
import About from '../components/about';
import Education from '../components/education';
import Experience from '../components/experience';
import Header from '../components/header';
import Nav from '../components/nav';
import Skills from '../components/skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <Header/>
      <About/>
      <Education/>
      <Skills/>
      <Experience/>
    </div>
  )
}
