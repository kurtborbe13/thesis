import Header from '../components/layout/Header.jsx'
import heroImage from '../assets/images/hero.png'
import projectImage1 from '../assets/images/arcose-project-1.png'
import projectImage2 from '../assets/images/arcose-project-2.png'
import projectImage3 from '../assets/images/arcose-project-3.png'
import projectImage4 from '../assets/images/arcose-project-4.png'
import aboutImage from '../assets/images/arcose-project-about.png'
import { ResidentialIcon, CommercialIcon, CorporateIcon, SolarIcon } from '../components/icons/ServiceIcons.jsx'

const services = [
  {
    title: 'Residential Construction',
    description: "Construction solutions for residential properties tailored to the client's project requirements.",
    Icon: ResidentialIcon,
  },
  {
    title: 'Commercial Construction',
    description: 'Construction solutions for commercial spaces and properties designed around project needs.',
    Icon: CommercialIcon,
  },
  {
    title: 'Corporate Projects',
    description: 'Construction solutions for corporate and business-related projects.',
    Icon: CorporateIcon,
  },
  {
    title: 'Solar Installation',
    description: 'Solar installation solutions for properties seeking reliable renewable energy systems.',
    Icon: SolarIcon,
  },
]

// TEMPORARY DEMO CONTENT — replace with verified Arcose project data.
// Names, categories, locations, and descriptions below are placeholders
// used only to demonstrate the intended layout and information hierarchy.
// The images themselves (arcose-project-1..4.png) are the real, existing
// Arcose assets and have been preserved as-is.
const projects = [
  {
    image: projectImage1,
    name: 'Meridian Residence',
    category: 'Residential',
    location: 'Quezon City, Metro Manila',
    description: 'A two-story family home built around a durable structural frame and a practical, modern layout.',
    layout: 'featured',
  },
  {
    image: projectImage2,
    name: 'Harborview Commercial Center',
    category: 'Commercial',
    location: 'Pasig City, Metro Manila',
    layout: 'standard',
  },
  {
    image: projectImage3,
    name: 'Novatech Corporate Office',
    category: 'Corporate',
    location: 'Taguig City, Metro Manila',
    layout: 'standard',
  },
  {
    image: projectImage4,
    name: 'Sunridge Solar Retrofit',
    category: 'Solar Installation',
    location: 'Antipolo, Rizal',
    layout: 'wide',
  },
]

const projectLayoutClasses = {
  featured: 'sm:col-span-2 lg:col-span-2 lg:row-span-2',
  standard: 'lg:col-span-1 lg:row-span-1',
  wide: 'sm:col-span-2 lg:col-span-2 lg:row-span-1',
}

const projectImageAspect = {
  featured: 'aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto',
  standard: 'aspect-[4/3] lg:aspect-auto',
  wide: 'aspect-[16/9] sm:aspect-[21/9] lg:aspect-auto',
}

function Home({ onOpenChat }) {
  return (
    <>
      <Header />
      <main id="home">
        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-18 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
            <div className="max-w-2xl">
              <p className="mb-5 text-sm font-bold tracking-[0.16em] text-[#8F1823] uppercase">
                Arcose Construction Services
              </p>
              <h1 className="max-w-xl text-4xl font-bold tracking-tight text-[#181818] sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                Building Solutions for Every Project
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#242424] sm:text-lg sm:leading-8">
                From residential and commercial buildings to corporate projects and solar installations, Arcose Construction Services delivers reliable solutions tailored to your needs.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  className="inline-flex items-center justify-center bg-[#8F1823] px-6 py-3.5 text-sm font-bold text-[#F8F7F3] transition-colors hover:bg-[#181818]"
                  type="button"
                  onClick={onOpenChat}
                >
                  Ask AI Assistant
                </button>
                <a
                  className="inline-flex items-center justify-center border border-[#181818] bg-white px-6 py-3.5 text-sm font-bold text-[#181818] transition-colors hover:border-[#8F1823] hover:text-[#8F1823]"
                  href="#services"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-3 -left-3 hidden h-full w-full border border-[#8F1823] sm:-top-5 sm:-left-5 sm:block" aria-hidden="true" />
              <div className="relative overflow-hidden bg-[#ECEBE7] shadow-xl shadow-[#181818]/10">
                <img
                  className="aspect-[4/3] h-full w-full object-cover"
                  src={heroImage}
                  alt="Arcose Construction project"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#F8F7F3]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
              <div>
                <p className="text-sm font-bold tracking-[0.16em] text-[#8F1823] uppercase">
                  Our Services
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#181818] sm:text-4xl">
  Solutions Built Around Your Needs
</h2>
                <p className="mt-5 text-base leading-7 text-[#242424] sm:text-lg sm:leading-8">
                  From building construction to solar installation, Arcose Construction Services provides solutions for residential, commercial, and corporate projects.
                </p>
              </div>

              <div className="divide-y divide-[#ECEBE7] border-t border-b border-[#ECEBE7]">
                {services.map(({ title, description, Icon }) => (
                  <div
  key={title}
  className="group flex gap-5 py-7 transition-transform duration-200 hover:translate-x-1 first:pt-0 last:pb-0 sm:gap-7"
>
                    <span
                     className="flex size-14 shrink-0 items-center justify-center border-2 border-[#8F1823] text-[#8F1823] transition-all duration-200 group-hover:bg-[#8F1823] group-hover:text-[#F8F7F3]"
                      aria-hidden="true"
                    >
                      <Icon className="size-7" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-[#181818] sm:text-xl">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#242424] sm:text-base">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-[#ECEBE7]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-8">
            <div className="max-w-2xl">
              <p className="text-sm font-bold tracking-[0.16em] text-[#8F1823] uppercase">
                Our Work
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#181818] sm:text-4xl">
                Projects That Speak for Themselves
              </h2>
              <p className="mt-5 text-base leading-7 text-[#242424] sm:text-lg sm:leading-8">
                Explore a selection of actual project work by Arcose Construction Services.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:auto-rows-[14rem]">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className={`group relative overflow-hidden bg-[#181818] ${projectLayoutClasses[project.layout]}`}
                >
                  <img
                    className={`h-full w-full object-cover transition duration-300 group-hover:scale-105 ${projectImageAspect[project.layout]}`}
                    src={project.image}
                    alt={`${project.name}, a ${project.category.toLowerCase()} project in ${project.location}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818]/90 via-[#181818]/10 to-transparent" aria-hidden="true" />
                  <span className="absolute top-4 left-4 bg-[#8F1823] px-3 py-1 text-xs font-bold tracking-[0.08em] text-[#F8F7F3] uppercase">
                    {project.category}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-lg font-bold text-[#F8F7F3] sm:text-xl">{project.name}</h3>
                    <p className="mt-1 text-xs font-semibold text-[#ECEBE7]">{project.location}</p>
                    {project.description && (
                      <p className="mt-2 max-w-md text-sm leading-6 text-[#ECEBE7]">{project.description}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#181818]">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-bold tracking-[0.16em] text-[#F3E5E7] uppercase">
                About Arcose
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#F8F7F3] sm:text-4xl lg:text-5xl lg:leading-tight">
                Building with Purpose. Delivering with Reliability.
              </h2>
              <p className="mt-6 text-base leading-7 text-[#ECEBE7] sm:text-lg sm:leading-8">
                Arcose Construction Services provides construction solutions for residential, commercial, and corporate projects, along with solar installation services. The company focuses on delivering solutions that respond to the specific needs and requirements of each project.
              </p>
              <a
                className="mt-8 inline-flex items-center justify-center bg-[#8F1823] px-6 py-3.5 text-sm font-bold text-[#F8F7F3] transition-colors hover:bg-[#F3E5E7] hover:text-[#8F1823]"
                href="#about"
              >
                Learn More
              </a>
            </div>

            <div className="relative">
              <div className="absolute -right-3 -bottom-3 h-full w-full border border-[#8F1823] sm:-right-5 sm:-bottom-5" aria-hidden="true" />
              <img
                className="relative aspect-[4/3] w-full object-cover shadow-2xl shadow-[#181818]/30"
                src={aboutImage}
                alt="Arcose Construction project"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#181818] text-[#ECEBE7]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <a className="text-lg font-bold tracking-[0.12em] text-[#F8F7F3] uppercase" href="#home">
                Arcose Construction Services
              </a>
              <p className="mt-5 text-sm leading-6 text-[#ECEBE7]">
                Construction solutions for residential, commercial, and corporate projects, including solar installation services.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-bold tracking-[0.14em] text-[#F3E5E7] uppercase">Navigation</h2>
              <nav className="mt-5 flex flex-col items-start gap-3" aria-label="Footer navigation">
                <a className="text-sm hover:text-[#F3E5E7]" href="#home">Home</a>
                <a className="text-sm hover:text-[#F3E5E7]" href="#services">Services</a>
                <a className="text-sm hover:text-[#F3E5E7]" href="#about">About</a>
                <a className="text-sm hover:text-[#F3E5E7]" href="#projects">Projects</a>
                <button className="text-left text-sm hover:text-[#F3E5E7]" type="button" onClick={onOpenChat}>
                  AI Assistant
                </button>
              </nav>
            </div>

            <div>
              <h2 className="text-sm font-bold tracking-[0.14em] text-[#F3E5E7] uppercase">Services</h2>
              <ul className="mt-5 space-y-3 text-sm text-[#ECEBE7]">
                <li>Residential Construction</li>
                <li>Commercial Construction</li>
                <li>Corporate Projects</li>
                <li>Solar Installation</li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-bold tracking-[0.14em] text-[#F3E5E7] uppercase">Get Started</h2>
              <div className="mt-5 flex flex-col gap-3">
                <button
                  className="inline-flex items-center justify-center bg-[#8F1823] px-4 py-3 text-sm font-bold text-[#F8F7F3] transition-colors hover:bg-[#F3E5E7] hover:text-[#8F1823]"
                  type="button"
                  onClick={onOpenChat}
                >
                  Ask AI Assistant
                </button>
                {/* TEMPORARY DEMO CONTENT — replace once a dedicated inquiry form/backend exists */}
                <p className="text-xs leading-5 text-[#ECEBE7]/70">
                  Project inquiries are currently routed through the AI Assistant.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-[#ECEBE7]/30 pt-6 sm:mt-16">
            <p className="text-sm text-[#ECEBE7]">© 2026 Arcose Construction Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home