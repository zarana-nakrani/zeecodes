'use client'
import { useEffect, useState } from 'react'
import React from 'react'


const Education = () => {
  const allData = [
    {
      year: '2018 - 2022',
      title: 'Bachelor of Engineering in Computer Engineering',
      institution: 'Gujarat Technological University',
      description:
        ['Started with Block Programming and transitioned to Object Oriented Programming.', 'Made my fundamentals strong. Practiced Java and Python problems on HackerRank and explored little bit of cybersecurity.', ' Participated in sports and cultural events while contributing to Google crowdsource program.'],
      status: 'Graduated',
    },
    {
      year: 'Jan 2021 - Jun 2023',
      title: 'Software Engineer I',
      institution: 'Divine Systems',
      description:
        ['Collaborated with Cheif Executive Officer to understand user requirements.', 'Collaborated on designing ER diagrams for Full Stack web applications from scratch, modeling 10+ entities and ensuring scalable and normalized data structure for efficient backend operations.', ' Developed a robust role-based access control system, enabling secure feature access Express.js, JWT and OAuth.'],
    },
    {
      year: '2023 - 2025',
      title: 'Master of Science in Computer Science',
      institution: 'California State University Long Beach',
      description:
        ['Learned about Advanced Analysis of Algorithms and Advanced Software Engineering.', 'Gained new skills through Advanced Artifical Intelligence, Pattern Recognition and Generative AI.', 'Contributed to MarinaHacks 3.5 as Web Developer.', 'Practiced a lot of LeetCode and System Design.'],
      status: 'Graduated',
    },
    {
      year: 'May 2024 - Aug 2024',
      title: 'Software Engineering Intern',
      institution: 'Tramona Inc',
      description:
        ['Adapted quickly to Scrum-based development practices at a travel tech startup enabling users to bid on rental properties.' ,'Developed and debugged critical frontend and backend features using TypeScript, resulting in a 75% reduction in runtime errors.', 'Implemented 10+ responsive web interfaces from Figma using Next.js and Shadcn UI, improving user engagement by 25% and reducing frontend bugs by 40%.' ,'Worked with the team to clean up and restructure the codebase, which cut down bug-related delays by 40% and boostedoverall code quality by 25%.',' Revamped the messaging feature to enable real-time communication, reducing response times by 40% and redesigning it to support seamless interaction between the admin and 1000+ unauthenticated users, increasing user engagement by 25%.'],
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth)
    updateWidth() // Set initial width
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  // 1 cycle ≈ 4s: 0.5s zoom in, 2s hold, 0.5s zoom out, 1s slide to next
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allData.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [allData.length])

  // Dynamic calculations
  const cardWidth = windowWidth >= 768 ? 420 : 320
  const gap = 10
  const halfCard = cardWidth
  const centerOffset = windowWidth / 2 - halfCard
  const slideOffset = -currentIndex * gap + centerOffset


  return (
    <>

    
    <div className="flex justify-center text-center mt-10">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
            Journey that shaped me professionally
          </p>
        </div>
        <h2 className="font-sans text-3xl md:text-5xl text-center mt-6 font-medium text-white">
          Education & Experience
        </h2>
        <p className="text-center md:text-lg lg:text-xl max-w-md mx-auto text-white/60 mt-4">
          Entering the world of computer science with curiosity, continually learning and putting that knowledge into practice.
        </p>
    <section className="w-full py-16 overflow-hidden">
      <div className="flex gap-10 " 
      style={{ transform: `translateX(${slideOffset}px)` }}>
        {allData.map((edu, index) => (
          <div
            key={edu.year}
            className="flex flex-col gap-6 flex-shrink-0 transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (320)}px)` }}
          >
            <div
              className={`flex flex-col items-center gap-6 w-[320px] md:w-[420px] snap-center ${
                index === currentIndex
                  ? 'animate-zoomCycle scale-110'
                  : 'scale-100'
              }`}
            >
            {/* Year text */}
            <span className="text-lg font-semibold tracking-[0.25em] text-white/70">
              {edu.year}
            </span>

            {/* Circle + card */}
            <div className="relative flex flex-col items-center">
              {/* Small circle */}
              <div className="absolute top-[-15] w-10 h-10 rounded-full border-4 border-white/50 bg-gray-800" />

              {/* Main card */}
              <div className="w-full max-w-xl rounded-[32px] bg-gray-800 p-2">
                <div className="rounded-[24px] bg-gray-800 text-center space-y-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-white/50 bg-gray-800 px-4 pt-6 ">
                    {edu.title}
                    <p className='pt-4 text-lg'>@ {edu.institution}</p>
                  </h3>

                  <div className="space-y-4 text-base md:text-lg text-black rounded-[32px] bg-white  px-6 py-4">
                    {edu.description.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Education

