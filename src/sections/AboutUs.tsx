import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import {FaqSample} from "@/components/Faq";
import {FaqAcordian} from "@/components/CenteredAccordion";
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  'Curriculum': {
    'Education': 1,
    'Culture': 10,
    'Dance': 28,
    'Events': 20,
  },
  'The Commitee': {
    'Why Join': 21,
    'How it Works': 22,
    'Fundraisers': 26,
    'Volunteers': 31,
    'Non elected memebers': 45,
  },
  'Boolean operations': {
    'Combining shapes': 50,
    'Subtracting shapes': 57,
    'Intersecting shapes': 66,
    Flattening: 78,
  },
  'Optimizing for production': {
    'Preparing for SVG': 82,
    'Configuring your export settings': 88,
    'Minifying and removing metadata': 95,
  },
}

export function AboutUs() {
  return (
    <section
      id="about-us"
      aria-labelledby="about-us-title"
      className="py-16 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="about-the-school-title">
          About Us
        </SectionHeading>
        <p className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
          We don’t just teach our children the Greek language, we also educate and enhance their knowledge of Greek and Cypriot lifestyles; from the Greek Orthodox religion, to the history and culture of the Hellenes. This includes traditional costumes, dance and music, celebrations of popular events, folk plays, what it was like to be Greek in our grandparents' time, and to move with changing times.
        </p>
        <Expandable>
          <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
            <ExpandableItems>
              {Object.entries(tableOfContents).map(([title, pages]) => (
                <li key={title}>
                  <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                    {title}
                  </h3>
                  <ol
                    role="list"
                    className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
                  >
                    {Object.entries(pages).map(([title, pageNumber]) => (
                      <li
                        key={title}
                        className="flex justify-between py-3"
                        aria-label={`${title} on page ${pageNumber}`}
                      >
                        <span
                          className="font-medium text-slate-900"
                          aria-hidden="true"
                        >
                          {title}
                        </span>
                        <span
                          className="font-mono text-slate-400"
                          aria-hidden="true"
                        >
                          {pageNumber}
                        </span>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ExpandableItems>
          </ol>
          <ExpandableButton>See more</ExpandableButton>
        </Expandable>
      </Container>

      <FaqSample />
      <FaqAcordian />
    </section>
  )
}
