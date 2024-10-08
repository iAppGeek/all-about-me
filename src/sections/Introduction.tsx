import { Container } from '@/components/Container'
import coverImage from '@/images/logo.png'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-26 lg:py-10"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
        "Students and staff have worked very hard to make HSHB the outstanding school it is and we are all proud of our achievements.
        </p>
        
        <div>
        </div>
      </Container>
      
      <div className='overflow-hidden content-center' style={{maxHeight:"50vh"}}>
        <video width="100%" height="80px" src="assets/video/drone.webm" autoPlay loop></video>
      </div>
    </section>
  )
}
