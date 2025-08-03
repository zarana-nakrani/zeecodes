import * as React from 'react'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { SiPandas } from 'react-icons/si'
import { SiNumpy } from 'react-icons/si'
import { SiTensorflow } from 'react-icons/si'
import { SiPytorch } from 'react-icons/si'
import { SiPython } from 'react-icons/si'
import { SiNodedotjs } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { SiAmazon } from 'react-icons/si'
import { SiGooglecloud } from 'react-icons/si'
import { SiDocker } from 'react-icons/si'
import { SiKubernetes } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'

export const description = 'An interactive pie chart'

const SkillsChart = ({ language }: { language: string }) => {
  return (
    <div className="container size-[100px] md:size-[160px] -translate-x-2 border-emerald-500/5 -translate-y-2 relative border-2 inset-0 rounded-full flex items-center justify-center shadow-[0_0_80px] shadow-emerald-300 mx-8 my-5 -z-30">
      {language === 'Frontend' && (
        <>
          <div className="absolute size-[180px] animate-spin animation-duration-[10s]">
            <div className="absolute top-6 -left-8 text-5xl text-blue-500 z-0 animate-spin animation-duration-[20s]">
              <FaReact />
            </div>
          </div>
          <div className="absolute size-[175px] animate-spin animation-duration-[8s]">
            <div className="absolute -top-3 -right-3 text-5xl text-white animate-spin animation-duration-[20s]">
              <SiNextdotjs />
            </div>
          </div>
          <div className="absolute size-[170px] animate-spin animation-duration-[12s] ">
            <div className="absolute top-1/2 -right-7 text-5xl text-teal-500 animate-spin animation-duration-[20s]">
              <SiTailwindcss />
            </div>
          </div>
        </>
      )}
      {language === 'ML/AI' && (
        <>
          <div className="absolute size-[180px] animate-spin animation-duration-[10s]">
            <div className="absolute top-6 -left-8 text-5xl text-green-500 animate-spin animation-duration-[25s]">
              <SiPandas />
            </div>
          </div>
          <div className="absolute size-[180px] animate-spin animation-duration-[8s]">
            <div className="absolute -top-3 -right-3 text-5xl text-blue-600 animate-spin animation-duration-[30s]">
              <SiNumpy />
            </div>
          </div>
          <div className="absolute size-[180px] animate-spin animation-duration-[12s]">
            <div className="absolute bottom-2 -left-8 text-5xl text-orange-500 animate-spin animation-duration-[35s]">
              <SiTensorflow />
            </div>
          </div>
          <div className="absolute size-[180px] animate-spin animation-duration-[14s]">
            <div className="absolute bottom-5 -right-6 text-5xl text-red-500 animate-spin animation-duration-[40s]">
              <SiPytorch />
            </div>
          </div>
        </>
      )}
      {language === 'Backend' && (
        <>
          <div className="absolute size-[180px] animate-spin animation-duration-[8s]">
            <div className="absolute top-3 -left-8 text-5xl text-yellow-500 animate-spin animation-duration-[28s]">
              <SiPython />
            </div>
          </div>
          <div className="absolute size-[180px] animate-spin animation-duration-[10s]">
            <div className="absolute -top-4 -right-6 text-5xl text-orange-600 animate-spin animation-duration-[32s]">
              <FaJava />
            </div>
          </div>
          <div className="absolute size-[180px] animate-spin animation-duration-[12s]">
            <div className="absolute bottom-3 -left-10 text-5xl text-green-600 animate-spin animation-duration-[36s]">
              <SiNodedotjs />
            </div>
          </div>
          <div className="absolute size-[180px] animate-spin animation-duration-[14s]">
            <div className="absolute top-6 -right-8 text-5xl text-blue-500 animate-spin animation-duration-[40s]">
              <SiPostgresql />
            </div>
          </div>
          <div className="absolute size-[180px] animate-spin animation-duration-[16s]">
            <div className="absolute bottom-6 -right-4 text-5xl text-green-500 animate-spin animation-duration-[44s]">
              <SiMongodb />
            </div>
          </div>
        </>
      )}
      {language === 'Cloud' && (
        <>
          <div className="absolute size-[180px] animate-spin animation-duration-[8s]">
            <div className="absolute top-4 -left-11 text-5xl text-orange-500 animate-spin animation-duration-[26s]">
              <SiAmazon />
            </div>
          </div>
          <div className="absolute size-[180px] animate-spin animation-duration-[10s]">
            <div className="absolute -top-2 -right-8 text-5xl text-blue-600 animate-spin animation-duration-[34s]">
              <SiGooglecloud />
            </div>
          </div>
          <div className="absolute size-[180px] animate-spin animation-duration-[12s]">
            <div className="absolute bottom-4 -left-8 text-5xl text-blue-500 animate-spin animation-duration-[38s]">
              <SiDocker />
            </div>
          </div>
          <div className="absolute size-[180px] animate-spin animation-duration-[14s]">
            <div className="absolute bottom-2 -right-6 text-5xl text-blue-600 animate-spin animation-duration-[42s]">
              <SiKubernetes />
            </div>
          </div>
        </>
      )}
      <p className="text-center text-lg font-semibold">{language}</p>
    </div>
  )
}

export default SkillsChart
