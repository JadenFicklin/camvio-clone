import { About } from '~/components/About'
import { Clients } from '~/components/Clients'
import { Contact } from '~/components/Contact'
import { Hero } from '~/components/Hero'
import { Nav } from '~/components/Nav'
import { NavSub } from '~/components/NavSub'
import { Products } from '~/components/Products'
import { Team } from '~/components/Team'
import { Testimonials } from '~/components/Testimonials'

export const Landing = () => {
  return (
    <>
      <NavSub />
      <Nav />
      <Hero />
      <Products />
      <About />
      <Team />
      <Testimonials />
      <Clients />
      <Contact />
    </>
  )
}
