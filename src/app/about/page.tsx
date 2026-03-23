import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import imageNico from '@/images/team/nico.jpeg'
import imageDamiano from '@/images/team/Damiano.png'
import imageJaco from '@/images/team/Jacopo.png'
import imageGabriella from '@/images/team/Gabriella.png'
import imageEuge from '@/images/team/Eugenie.jpeg'
import bgCard from '@/images/bg-card.jpg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div style={{ backgroundImage: `url(${bgCard.src})` }} className="mt-24 bg-cover bg-center py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Who we are"
        title="Our approach"
        invert
      >
        <p>
          If you&apos;re looking for a partner who can combine technical excellence, strategic vision and strong visual communication, we’re here to help.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
            We start by deeply understanding your goals, challenges and market.
          </GridListItem>
          <GridListItem title="Desing" invert>
            Designing the right solution, we define the architecture, strategy and roadmap.
          </GridListItem>
          <GridListItem title="Simplicity" invert>
            Simplicity beats complexity, clean architecture is a long-term investment
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Jacopo Scafura',
        role: 'Co-Founder / Videomaker',
        image: { src: imageJaco },
      },
      {
        name: 'Nicola Gasparro',
        role: 'Co-Founder / Developer',
        image: { src: imageNico },
      },
      {
        name: 'Damiano Finizio',
        role: 'Co-Founder / Business Relations',
        image: { src: imageDamiano },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Gabriella Vitiello',
        role: 'Manager / Project Manager',
        image: { src: imageGabriella },
      },
      {
        name: 'Eugenie Chereau',
        role: 'Manager / Photographer',
        image: { src: imageEuge },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'At Digital Consulting Aguita, we combine technical expertise and strategic thinking to help companies design, build and scale digital products.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="We are not just developers or marketers — we are partners in your growth.">
        <p>
          We build digital products that grow with your business
At Digital Consulting Aguita, we combine technical expertise and strategic thinking to help companies design, build and scale digital products.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            We are a team of professionals with complementary skills in software development, architecture and digital strategy.
          </p>
          <p>
            What makes us different is the way we combine development and marketing into a single, cohesive process. We don’t just build products — we make sure they: solve real business problems are scalable and maintainable communicate value clearly generate measurable results
          </p>

        </div>
      </PageIntro>
{/*       <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container> */}

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="All Services"
        intro="We are a team of professionals with complementary skills in software development, architecture and digital strategy."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
