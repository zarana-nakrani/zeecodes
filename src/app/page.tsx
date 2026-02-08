import Landing  from '@/app/components/landing'
import Header from '@/app/components/header'
import SkillsPage from './skills/page'
import { Separator } from '@/components/ui/separator'
import ProjectsPage from './projects/page'
import Education from './education/page'

export default function Home() {
  return (
    <>
      <Header />
      <main className='container flex flex-col items-center mt-10'>
        <section id="landing" className="w-full">
          <Landing />
        </section>
        <Separator orientation='vertical' className='mt-8 ' />
        <section id="skills" className="w-full">
          <SkillsPage />
        </section>
        <Separator orientation='vertical' className='mt-8' />
        <section id="projects" className="w-full">
          <ProjectsPage />
        </section>
        <Separator orientation='vertical' className='mt-8' />
        <section id="experience" className="w-full">
          <Education />
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap lg:items-end items-end justify-end">
        
      </footer>
    </>
  )
}
