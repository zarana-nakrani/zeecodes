import Image from 'next/image'
import Link from 'next/link'
import Landing  from '@/app/components/landing'
import Header from '@/app/components/header'
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] h-screen md:grid-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] mx-10 lg:mx-50">
      <header className='absolute md:fixed top-10'>
        <Header />

      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Landing />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap lg:items-end items-end justify-end">
        
      </footer>
    </div>
  )
}
