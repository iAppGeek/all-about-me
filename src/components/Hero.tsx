import Image from 'next/image'
import { GridPattern } from '@/components/GridPattern'
import coverImage from '@/images/logo.png'

function Testimonial() {
  return (
    <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
      <blockquote className="mt-2">
        <p className="font-display text-xl font-medium text-slate-900">
          "A fabulous, fun atmosphere for children to learn about the Greek language, Greek & Cypriot culture, dance and customs.”
        </p>
      </blockquote>
      <figcaption className="mt-2 text-sm text-slate-500">
        <strong className="font-semibold text-blue-600 before:content-['—_']">
          George
        </strong>
        , Chairman
      </figcaption>
    </figure>
  )
}

export function Hero() {
  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-y-16 md:pt-20 lg:grid-cols-12 lg:px-3 lg:pb-36">
        <div className="relative flex items-center lg:col-span-5 lg:row-span-2">
          <div className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 rounded-br-6xl bg-blue-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          <div className="relative z-10 mx-auto flex w-64 rounded-xl bg-slate-600 shadow-xl md:w-80 ">
            <Image className="w-full" src={coverImage} alt="" priority />
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
          <div className="hidden lg:absolute lg:-top-32 lg:bottom-0 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-slate-100" />
          <Testimonial />
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-0 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
              Hellenic School of High Barnet
            </h1>
            <p className="mt-4 text-3xl text-slate-600">
            We don’t just teach our children the Greek language, we also educate and enhance their knowledge of Greek and Cypriot lifestyles; from the Greek Orthodox religion, to the history and culture of the Hellenes. This includes traditional costumes, dance and music, celebrations of popular events, folk plays, what it was like to be Greek in our grandparents' time, and to move with changing times.
            </p>
            <div className="mt-8 flex gap-4">
              {/* <Button href="#free-chapters" color="blue">
                Get sample chapter
              </Button>
              <Button href="#pricing" variant="outline" color="blue">
                Buy book
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
