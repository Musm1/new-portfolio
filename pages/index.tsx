import Head from 'next/head'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import WorkExperience from '@/components/WorkExperience/WorkExperience'
import Skills from '@/components/Skills/Skills'
import Projects from '@/components/Projects/Projects'
import Contact from '@/components/Contact'
import Link from 'next/link'
import { ArrowLongUpIcon } from '@heroicons/react/24/solid'
import { GetStaticProps } from 'next'
import { Experience, PageInfo, Project, Skill, Social } from '@/typings'
import { fetchPageInfo } from '@/utiils/fetchPageInfo'
import { fetchExperiences } from '@/utiils/fetchExperiences'
import { fetchSkills } from '@/utiils/fetchSkills'
import { fetchProjects } from '@/utiils/fetchProjects'
import { fetchSocial } from '@/utiils/fetchSocials'

type Props={
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

export default function Home(props:Props) {
  
   const {pageInfo,experiences,skills,projects,socials }= props;

  return (
    <div 
    className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    shrink-0 overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#49f70a]/80'>
      <Head>
        <title>Mishkat Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header socials={socials}/>

      {/* hero */}
      <section id='hero' className='snap-start'>
        <Hero pageInfo= {pageInfo}/>
      </section>

      {/* about me */}
      <section id='about' className='snap-center'>
        <About pageInfo= {pageInfo}/>
      </section>

      {/* experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences}/>
      </section>

     {/* skills */}
      <section id='skills' className='snap-start'>
        <Skills skills= {skills}/>
      </section>
      
      {/* projects */}
      <section id='projects' className='snap-start'>
        <Projects projects={projects}/>
      </section>

      {/* contact me */}
      <section id='contacts' className='snap-start'>
        <Contact/>
      </section>

      <Link href="#hero">
          <footer className='sticky w-full cursor-pointer bottom-5'>
            <div className='flex items-center justify-center'>
              <ArrowLongUpIcon 
              className='w-8 h-8 rounded-full cursor-pointer filter grayscale hover:grayscale-0'
             />
            </div>
          </footer>
      </Link>

    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () =>{
  const pageInfo: PageInfo= await fetchPageInfo();
  const experiences : Experience[]= await fetchExperiences();
  const skills : Skill[]= await fetchSkills();
  const projects : Project[]= await fetchProjects();
  const socials : Social[]= await fetchSocial();

  return {
    props:{
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    }
  }
}