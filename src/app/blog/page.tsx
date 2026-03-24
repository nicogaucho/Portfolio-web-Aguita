import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { TagList, TagListItem } from '@/components/TagList'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { loadArticles } from '@/lib/mdx'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { ArrowIcon } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="More services"
        title="Sustainable tourism, since 2020"
      >
        <p>
          Since 2020 we have been guiding hostels in
          Las Palmas de Gran Canaria on a path of conscious growth. Every
          project starts by listening — to the land, to the people who live
          here, and to the travellers who arrive curious. Our goal is a
          tourism that leaves something good behind.
        </p>
        <Link
          href="/process"
          className="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
          aria-label={`Read more: /process`}
        >
          Discover more
          <ArrowIcon className="w-6 flex-none fill-current" />
          <span className="absolute inset-0" />
        </Link>
      </SectionIntro>


      <Container className="mt-24">
        <GridList>
          <GridListItem title="Staff Training">
            People are the heart of every hospitality project. We train teams
            to welcome guests with genuine warmth, turning every stay into
            a memory worth carrying home.
          </GridListItem>
          <GridListItem title="Hostel Setup & Launch">
            From the first idea to opening day, we support each project through
            its most critical phase — operations, licenses, and the identity
            of the space — with hands-on experience and care for every detail.
          </GridListItem>
          <GridListItem title="Revenue Management">
            We help properties find the right balance between occupancy and
            profitability, with pricing strategies built around Grancanaria
            market dynamics and seasonal rhythms.
          </GridListItem>
          {/* <GridListItem title="Digital Marketing">
            We tell your story on the channels that matter — OTAs, social
            media, and local search — to attract exactly the kind of traveller
            who will love what you have built.
          </GridListItem> */}
          {/* <GridListItem title="Sustainability Certifications">
            We guide hostels through recognised certifications such as Green
            Key and Biosphere, turning sustainable values into concrete,
            measurable everyday practices.
          </GridListItem> */}
          {/* <GridListItem title="Local Territory Promotion">
            We build bridges between properties and the soul of Las Palmas —
            local artisans, producers, guides, and authentic itineraries that
            enrich every traveller&apos;s experience and give back to the community.
          </GridListItem> */}
        </GridList>
      </Container>
    </div>
  )
}


export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Stay up-to-date with the latest industry news as our marketing teams finds new ways to re-purpose old CSS tricks articles.',
}

export default async function Blog() {
  let articles = await loadArticles()

  return (
    <>
      <PageIntro eyebrow="What we do" title="Digital Services">
        <p>
          We are developing expertise in building interactive digital experiences focused on ocean and environmental awareness, including map-based platforms and data visualization tools designed to communicate real-world impact.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-20">
        <div className="space-y-24 lg:space-y-10">
          {articles.map((article) => (
            <FadeIn key={article.href}>
              <article>
                <Border className="pt-10">
                  <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-2xl font-semibold text-neutral-950">
                        <Link href={article.href}>{article.title}</Link>
                      </h2>
                      <dl className="lg:absolute lg:top-0 lg:left-0 lg:w-1/3 lg:px-4">
                        {/* <dt className="sr-only">Published</dt>
                        <dd className="absolute top-0 left-0 text-sm text-neutral-950 lg:static">
                          <time dateTime={article.date}>
                            {formatDate(article.date)}
                          </time>
                        </dd> */}
                        <dt className="sr-only">Author</dt>
                        <dd className="mt-6 flex gap-x-4">
                          <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                            <Image
                              alt=""
                              {...article.author.image}
                              className="h-12 w-12 object-cover grayscale"
                            />
                          </div>
                          <div className="text-sm text-neutral-950">
                            <div className="font-semibold">
                              {article.author.name}
                            </div>
                            <div>{article.author.role}</div>
                          </div>
                        </dd>
                      </dl>
                      <p className="mt-6 max-w-2xl text-base text-neutral-600">
                        {article.description}
                      </p>
                          
                      <h3 className="mt-4 font-display text-base font-semibold text-neutral-950">
                        Some tools we use:
                      </h3>
                      <TagList className="mt-4">
                        {article.tools?.map((tool) => (
                          <TagListItem key={tool}>{tool}</TagListItem>
                        ))}
                      </TagList>
                      <Button
                        href={article.href}
                        aria-label={`Read more: ${article.title}`}
                        className="mt-8"
                      >
                        More detail
                      </Button>
                    </div>
                  </div>
                </Border>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>

      <Values />

      <ContactSection />
    </>
  )
}
