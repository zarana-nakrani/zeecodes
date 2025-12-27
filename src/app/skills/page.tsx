"use client"
import SkillsChart from "../components/SkillsChart"

export default function SkillsPage() {
  // return (
  //   
  // )
  
  return (
    // Skills and Project section
    <div className="flex my-10 items-center flex-col">
    <h1 className='font-bold text-3xl my-10'>Skills</h1>
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
    </div>
    // <div>Hello world</div>
  )
}
