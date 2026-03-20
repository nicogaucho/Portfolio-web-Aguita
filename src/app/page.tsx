import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
// import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoAulab from '@/images/clients/aulab/logo-aulab.png'
import logoElittoral from '@/images/clients/elittoral/logo-elittoral-white.webp'
import logoOcean from '@/images/clients/ocean/logo-ocean-affairs.webp'
import logoAguita from '@/images/clients/aguita/logo-aguita-clear.png'
import logoTamaran from '@/images/clients/tamaran/logo-tamaran.png'
import logoTaboire from '@/images/clients/taboire/logo-taboire.webp'
import logoCama from '@/images/clients/cama/logo-cama.png'
import logoPure from '@/images/clients/pure/pure-surf-logo-white.webp'
import imageSurfing from '@/images/surfing.jpeg'
import bgCard from '@/images/bg-card.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Aulab', logoAulab],
  ['Elittoral', logoElittoral],
  ['OceanAffairs', logoOcean],
  ['Aguita', logoAguita],
  ['Tamaran', logoTamaran],
  ['Taboire', logoTaboire],
  ['Cama', logoCama],
  ['Pure surf Maldives', logoPure],
]

function Clients() {
  return (
    <div style={{ backgroundImage: `url(${bgCard.src})` }} className="mt-24 py-10 sm:mt-32 sm:py-32 lg:mt-56 bg-cover bg-center">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve collaborated with amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={crypto.randomUUID()} className='flex justify-center items-center'>
                <FadeIn>
                  <Image width={120} src={logo} alt="image" />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Modern technologies and responsible engineering practices"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe that digital products should not only perform well, but also align with a more <span className='text-[#e27f1e]'>sustainable future</span>
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl shadow-md p-6 transition sm:p-8">
                <h3>
                  <Link /* href={caseStudy.href}  */href="#">
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="object-contain"
                      width={100}
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-500">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Project - Case Study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-800">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Application development, visual content creation and digital strategy"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From fullstack applications to digital products, we help companies create solutions that are both technically robust and aligned with long-term <span className='text-[#e27f1e]'>environmental goals.</span>
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              {/* <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              /> */}
              <Image
                src={imageSurfing}
                alt="surfing"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              Design and development of modern web applications using React, Next.js and Node.js, with a focus on performance, scalability and long-term maintainability.
            </ListItem>
            <ListItem title="Digital Marketing & Strategy">
              Consulting and support in digital marketing strategies to help companies effectively position their products and services online.
            </ListItem>
            <ListItem title="Branding & Visual Content">
              Creation of logos, corporate visual identity and video content to support brand communication and digital presence.
            </ListItem>
            <ListItem title="Educational & Interactive Content">
              We are specializing in the creation of educational and interactive digital content designed to raise awareness and generate impact on ocean and environmental topics.

This includes the development of interactive maps and data-driven visual experiences that help communicate complex information in an accessible and engaging way.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="flex min-h-screen items-center justify-center">
        <FadeIn className="max-w-3xl text-center">
          <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-900 sm:text-7xl">
            Web, marketing & digital consultancy studio based in <span className='text-[#e27f1e]'>Canarias</span>
          </h1>
          <h2 className="text-2xl font-medium tracking-tight [text-wrap:balance] text-neutral-700 sm:text-3xl mt-4">Build scalable web applications and digital products</h2>
          <p className="mt-6 text-xl text-neutral-600">
            We design, develop and support modern digital platforms combining software engineering, marketing strategy and visual communication.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Aguita', logo: logoAguita }}
      >
        We adopt technical solutions that promote efficiency, maintainability and reduced environmental impact, collaborating with companies in sustainability, environmental and ocean-related sectors.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
