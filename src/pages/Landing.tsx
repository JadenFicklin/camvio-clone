import { About } from '~/components/About'
import { Clients } from '~/components/Clients'
import { Contact } from '~/components/Contact'
import { Hero } from '~/components/Hero'
import { Nav } from '~/components/Nav'
import { NavSub } from '~/components/NavSub'
import { Products } from '~/components/Products'
import { Team } from '~/components/Team'
import { Testimonials } from '~/components/Testimonials'
import UsePosition from '~/utils/UsePosition'

export const Landing = () => {
  return (
    <>
      <NavSub />
      <Nav />

      <UsePosition>
        <Hero />
      </UsePosition>

      <UsePosition>
        <Products />
      </UsePosition>

      <UsePosition>
        <About />
      </UsePosition>

      <UsePosition>
        <Team />
      </UsePosition>

      <UsePosition>
        <Testimonials />
      </UsePosition>

      <Clients />

      <UsePosition>
        <Contact />
      </UsePosition>
    </>
  )
}
