import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import { ArrowIcon } from '@/components/PageLinks'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageMeet from '@/images/meet.jpeg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import imageAguitaTeam from '@/images/aguitateam.png'
import Link from 'next/link'
import Image from 'next/image'


function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            {/* <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            /> */}
            <Image
                src={image.src}
                alt="aguita team"
                className="justify-center lg:justify-end"
              />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            {/* <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            /> */}
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We work closely with our clients to understand their{' '}
          <strong className="font-semibold text-neutral-950">needs</strong> and
          goals, embedding ourselves in their every day operations to understand
          what makes their business tick.
        </p>
        <p>
          Our team of private investigators shadow the company director’s for
          several weeks while our account managers focus on going through their
          trash. Our senior security experts then perform social engineering
          hacks to gain access to their{' '}
          <strong className="font-semibold text-neutral-950">business</strong>{' '}
          accounts — handing that information over to our forensic accounting
          team.
        </p>
        <p>
          Once the full audit is complete, we report back with a comprehensive{' '}
          <strong className="font-semibold text-neutral-950">plan</strong> and,
          more importantly, a budget.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Blood samples</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Forensic audit</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Work, surf, connect" image={{ src: imageAguitaTeam, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We never set out to build just a place to sleep. Agüita was created as a space where people could feel something: connection, freedom, belonging. What started as one house became a small family of homes, each with its own personality but the same soul. Here, strangers share tables, stories turn into friendships, and leaving is always the hardest part.
        </p>
        <p>
          Gran Canaria isn’t just a destination, it’s a way of living. Days are active, outdoors and connected to nature. Surf in the morning, explore during the day, share food in the evening. Time slows down, priorities shift, and the simple things start to matter more. It’s easy to be healthy here without trying, moving more, eating better, sleeping deeper. And maybe that’s why so many people come for a short stay… and end up staying much longer.
        </p>
        <p>
          The island is full of contrast, and that’s exactly what makes it special. But beyond the landscapes, there’s something else: a slower rhythm, a softer way of living, and a feeling that life happens more outside than in.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Damiano Finizio', role: 'Co-Founder of Agüita' }}
        className="mt-12"
      >
        Let the ocean become part of your daily rhythm without you even noticing.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="How we do it" image={{ src: imageMeet, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Since 2020 we have been guiding hostels in
          Las Palmas de Gran Canaria on a path of conscious growth. Every
          project starts by listening — to the land, to the people who live
          here, and to the travellers who arrive curious. Our goal is a
          tourism that leaves something good behind. 
        </p>   
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Staff Training">
          People are the heart of every hospitality project. We train teams
            to welcome guests with genuine warmth, turning every stay into
            a memory worth carrying home.
        </ListItem>
        <ListItem title="Hostel Setup & Launch">
          From the first idea to opening day, we support each project through
            its most critical phase — operations, licenses, and the identity
            of the space — with hands-on experience and care for every detail.
        </ListItem>
        <ListItem title="Revenue Management">
          We help properties find the right balance between occupancy and
            profitability, with pricing strategies built around Grancanaria
            market dynamics and seasonal rhythms.
        </ListItem>
        <ListItem title="Sustainability Certifications">
          We guide hostels through recognised certifications such as Green
            Key and Biosphere, turning sustainable values into concrete,
            measurable everyday practices.
        </ListItem>
      </List>
    </Section>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our vision" title="Hostel life and more">
        <p>

        We build bridges between properties and the soul of Las Palmas —
          local artisans, producers, guides, and authentic itineraries that
          enrich every traveller&apos;s experience and give back to the community. 
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-18 lg:space-y-32">
        {/* <Discover /> */}
        <Deliver />
        <Build />
      </div>

      {/* <Values /> */}

      <ContactSection />
    </>
  )
}
