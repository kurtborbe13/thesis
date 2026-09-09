import Header from '../components/layout/Header.jsx'
import heroImage from '../assets/images/hero.png'
import projectImage1 from '../assets/images/arcose-project-1.png'
import projectImage2 from '../assets/images/arcose-project-2.png'
import projectImage3 from '../assets/images/arcose-project-3.png'
import projectImage4 from '../assets/images/arcose-project-4.png'
import aboutImage from '../assets/images/arcose-project-about.png'

const services = [
  {
    title: 'Residential Construction',
    description: "Construction solutions for residential properties tailored to the client's project requirements.",
    icon: '⌂',                                                            
  },
  {
    title: 'Commercial Construction',
    description: 'Construction solutions for commercial spaces and properties designed around project needs.',
    icon: '▦',
  },
  {
    title: 'Corporate Projects',
    description: 'Construction solutions for corporate and business-related projects.',
    icon: '▤',
  },
  {
    title: 'Solar Installation',
    description: 'Solar installation solutions for properties seeking reliable renewable energy systems.',
    icon: '☼',
  },
]

const projectImages = [projectImage1, projectImage2, projectImage3, projectImage4]

function Home() {
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
                <a
                  className="inline-flex items-center justify-center bg-[#8F1823] px-6 py-3.5 text-sm font-bold text-[#F8F7F3] transition-colors hover:bg-[#181818]"
                  href="#ai-assistant"
                >
                  Ask AI Assistant
                </a>
                <a
                  className="inline-flex items-center justify-center border border-[#181818] bg-white px-6 py-3.5 text-sm font-bold text-[#181818] transition-colors hover:border-[#8F1823] hover:text-[#8F1823]"
                  href="#services"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="overflow-hidden bg-[#ECEBE7] shadow-xl shadow-[#181818]/10">
              <img
                className="aspect-[4/3] h-full w-full object-cover"
                src={heroImage}
                alt="Arcose Construction project"
              />
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#F8F7F3]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="max-w-2xl">
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

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group border border-[#ECEBE7] bg-[#F8F7F3] p-6 shadow-sm transition-colors hover:border-[#8F1823] hover:shadow-md"
                >
                  <span
                    className="flex size-12 items-center justify-center bg-[#F3E5E7] text-2xl font-bold text-[#8F1823]"
                    aria-hidden="true"
                  >
                    {service.icon}
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-[#181818]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#242424]">{service.description}</p>
                  <span className="mt-6 block h-0.5 w-8 bg-[#8F1823] transition-all group-hover:w-12" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        

        <section id="projects" className="bg-[#ECEBE7]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
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

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
              {projectImages.map((image, index) => (
                <div key={image} className="overflow-hidden border border-[#ECEBE7] bg-[#ECEBE7] shadow-sm">
                  <img
                    className="aspect-square w-full object-cover"
                    src={image}
                    alt={`Featured Arcose Construction project ${index + 1}`}
                  />
                </div>
              ))}
            </div>

            <div className="mt-10 text-center lg:mt-12">
              <a
                className="inline-flex items-center justify-center border border-[#181818] px-6 py-3.5 text-sm font-bold text-[#181818]"
                href="#projects"
              >
                View More
              </a>
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
                <a className="text-sm hover:text-[#F3E5E7]" href="#ai-assistant">AI Assistant</a>
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
                <a className="inline-flex items-center justify-center bg-[#8F1823] px-4 py-3 text-sm font-bold text-[#F8F7F3]" href="#ai-assistant">
                  Ask AI Assistant
                </a>
                <a className="inline-flex items-center justify-center border border-[#ECEBE7] px-4 py-3 text-sm font-bold text-[#F8F7F3]" href="#inquiry">
                  Submit an Inquiry
                </a>
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
