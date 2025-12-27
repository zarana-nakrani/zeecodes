import Image from 'next/image'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import UberClone from '@/assets/images/UberClone.png'
import propertyPulse from '@/assets/images/PropertyPulse.png'
import stockMarketDataPipeline from '@/assets/images/Stock market data pipeline.png'
import BrainTumorDetection from '@/assets/images/braintumordetection.png'

export default function ProjectsPage() {
  const projects = [
    {
      tech_stack: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      title: 'Ride-renting application',
      link: 'https://github.com/zarana-nakrani/Uber_Clone',
      image: UberClone,
      description:
        'Ride-renting application where user is connected with driver in real-time and can select their choice of vehicle',
    },
    {
      tech_stack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'MongoDB'],
      title: 'Property Pulse',
      link: 'https://github.com/zarana-nakrani/Uber_Clone',
      image: propertyPulse,
      description:
        'Short term property rental application were users search for properties in particular area and can connect with hosts',
    },
    {
      tech_stack: ['Python', 'Fast API', 'Apache Kafka', 'PostgreSQL', 'Docker'],
      title: 'Stock Market Data Pipeline',
      link: 'https://github.com/zarana-nakrani/market-data-service',
      image: stockMarketDataPipeline,
      description:
        'Real-time fetching of stock market data from specific provider, calculate moving average of each ticker symbol requested by user and view the analysis in beautiful grafana dashboards',
    },
    {
      tech_stack: ['Numpy', 'Pandas', 'Matplotlib', 'Tensorflow'],
      title: 'Brain Tumor Detection',
      link: 'https://github.com/zarana-nakrani/BrainTumorDetection',
      image: BrainTumorDetection,
      description: 'Classified images of brain x-rays into 4 classes() using customized CNN models',
    },
  ]
  return (
    <section className="mt-8 pb-16 md:py-24">
      <div className="container">
        <div className="flex justify-center text-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
            Solution to Real World Problems
          </p>
        </div>
        <h2 className="font-sans text-3xl md:text-5xl text-center mt-6 font-medium text-white">
          Best Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl max-w-md mx-auto text-white/60 mt-4">
          Build solutions that are data-driven, full stack and AI-integrated
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20 ">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl  after:outline-white/20 px-8 pt-8 md:pt-12 md:px-12 lg:pl-20 lg:pt-16 lg:pr-0"
            >
              <div className='lg:grid lg:grid-cols-2 lg:gap-20'>
              <div>
              <div className="flex ">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent flex flex-row flex-wrap md:inline-flex gap-2 font-bold uppercase tracking-widest text-sm ">
                  {project.tech_stack.map((tech, index) => (
                    <span key={tech}>
                      {tech}
                      {index < project.tech_stack.length - 1 && ' •'}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt5" />
              <p className="flex gap-2 text-sm md:text-base text-white/50 my-2 md:my-5">
                <span>✨</span>
                {project.description}
              </p>
              <Link href={project.link}>
                <button className="bg-white text-gray-950 h-12 w-full md:w-auto md:px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                  <span>View Project</span>
                  <FiArrowUpRight className="size-5" />
                </button>
              </Link>
              </div>
              {/* <div className='h-1/2'> */}
              <div className='lg:relative'>
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
                className="mt-8 -mb-8 md:-mb-0 overflow-clip lg:mt-0 lg:w-full lg:h-full lg:rounded-2xl"
              />
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
