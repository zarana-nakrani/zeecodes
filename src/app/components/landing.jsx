'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaMediumM } from 'react-icons/fa'
import { SiLeetcode, SiMedium } from 'react-icons/si'
import { SlSocialLinkedin } from 'react-icons/sl'
import { TfiDownload } from 'react-icons/tfi'
import { Button } from '@/components/ui/button'
import action_figure from "@/assets/images/action_figure.jpg"

const Landing = () => {
  const qualities = [
    'good communicator',
    'focused',
    'self-starter',
    'empathetic',
    'detail-oriented',
    'problem-solver',
    'life-long learner',
  ]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = qualities[currentWordIndex]
    const speed = isDeleting ? 50 : 150

    const timeout = setTimeout(() => {
      setDisplayText((prev) => {
        return isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      })

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000) // Pause before deleting
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % qualities.length)
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting])

  return (
    <div className="container overflow-hidden my-10">
      <div className="grid lg:grid-cols-2 flex-col columns-2 lg:gap-5 gap-10 justify-between h-full">
        <div className="flex flex-row">
          <Image
            src={action_figure}
            alt="action figure"
            height="100"
            width="100"
            className="h-100 w-75 col-start-1.5 border-none rounded-lg md:h-130 md:w-80"
          />
          <div
            className="
            w-110
            h-70
            lg:w-50
            lg:h-110
            md:w-80
            md:h-90
            border
            border-gray-600
            rounded-tr-full
            rounded-br-full
            my-auto
            -translate-x-20
            z-[-1]
            "
          >
            <Link
              href="https://github.com/zarana-nakrani"
              className="absolute translateabsolute top-[4%] left-[55%] text-4xl md:text-5xl text-gray-500 hover:scale-110 transition-transform bg-black m-0"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/zarana-nakrani"
              className="absolute translateabsolute top-[30%] left-[80%] md:left-[85%] text-3xl md:text-4xl text-gray-500 hover:scale-110 border rounded-full transition-transform z-10 p-3 bg-black"
            >
              <SiLeetcode />
            </Link>
            <Link
              href="https://github.com/zarana-nakrani"
              className="absolute translateabsolute top-[60%] left-[80%] md:left-[85%] text-3xl md:text-4xl text-gray-500 hover:scale-110  border rounded-full transition-transform z-10 p-3 bg-black"
            >
              <FaMediumM />
            </Link>
            <Link
              href="https://www.linkedin.com/in/zarana-nakrani"
              className="absolute translateabsolute top-[80%] md:top-[85%] left-[55%] text-2xl md:text-3xl text-gray-500 hover:scale-110 border rounded-full transition-transform z-10 p-3 bg-black"
            >
              <SlSocialLinkedin />
            </Link>
          </div>
        </div>
        <div className="flex flex-col font-mono gap-5 my-auto">
          <h1 className="text-5xl text-green-400">
            {'<'}Zarana Nakrani{'/>'}
          </h1>
          <p className="text-base">
            {'let zarana = '}"{displayText}"<span className="cursor">|</span>
          </p>
          <p className="text-xl md:text-2xl">
            Hey there👋🏻
            <span>
              {' '}
              I am out here solving problems as a Full Stack developer, Cloud and ML enthusiast.
              Being an engineer I love making things easy for public by the means of technology. I
              identify as a person who likes to "figure things out".
            </span>
          </p>
          <p>Scroll down to learn more about me</p>
          <Button className="w-50 mt-3">
            Resume <TfiDownload />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Landing
