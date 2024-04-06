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

      <UsePosition name="HOME">
        <Hero />
      </UsePosition>

      <UsePosition name="PRODUCTS">
        <Products />
      </UsePosition>

      <UsePosition name="ABOUT">
        <About />
      </UsePosition>

      <UsePosition name="TEAM">
        <Team />
      </UsePosition>

      <Testimonials />

      <UsePosition name="CLIENTS">
        <Clients />
      </UsePosition>

      <UsePosition name="CONTACT">
        <Contact />
      </UsePosition>
    </>
  )
}
