// import Image from 'next/image'
// import { Progress } from '@/components/ui/progress'
"use client"
import SkillsChart from "../components/SkillsChart"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { SiNodedotjs } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import { SiGooglecloud } from "react-icons/si";

export default function SkillsPage() {
  // return (
  //   
  // )
  
  return (
    // Skills and Project section
    <>
    <h1 className='font-bold text-3xl mt-10'>Skills</h1>
    {/* <div className="grid grid-cols-2 gap-3 w-full h-screen justify-center"> */}
      <section className='grid grid-cols-2 md:grid-col-2 lg:flex ld:flex-row  justify-center gap-20 my-10'>
      <SkillsChart language="Frontend"/>
      <SkillsChart language="Backend"/>
      <SkillsChart language="Cloud"/>
      <SkillsChart language="ML/AI"/>
      </section>
      {/* <section className='flex flex-col'> */}
    {/* <Carousel className="w-60 max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-5">
              <Card className="w-50 h-50">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel> */}

      {/* </section> */}
    {/* </div> */}
    </>
    // <div>Hello world</div>
  )
}
