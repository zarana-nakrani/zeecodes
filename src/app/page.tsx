import Landing  from '@/app/components/landing'
import Header from '@/app/components/header'
import SkillsPage from './skills/page'
import { Separator } from '@/components/ui/separator'
import ProjectsPage from './projects/page'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] h-screen md:grid-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] sm:mx-10 ">
      <header className='absolute md:fixed top-10'>
        <Header />
      </header>
      {/* <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center"> */}
      <main className='container flex flex-col row-start-2 items-center'>
        <Landing />
        <Separator orientation='vertical' className='mt-8' />
        <SkillsPage />
        <Separator orientation='vertical' className='mt-8' />
        <ProjectsPage />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap lg:items-end items-end justify-end">
        
      </footer>
    </div>
  )
}
