import rina from '~/assets/images/rina.png'
import tricogo from '~/assets/images/tricogo.png'
import strata from '~/assets/images/strata.png'

type Testimonial = {
  name: string
  title: string
  imageSrc: string
  quote: string
  color: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Bert Potts',
    title: 'RURAL INDEPENDENT NETWORK ALLIANCE (RINA)',
    imageSrc: rina,
    quote: `"awesome to work with! Amir and his team are not just quick to respond, but proactive in developing solutions so the RINA companies can be responsive to more than 22,000 customers."`,
    color: '#6bd098',
  },
  {
    name: 'Joe Lightsey',
    title: 'NETWORK ADMINISTRATOR',
    imageSrc: tricogo,
    quote: `"The Camvio product is extremely user friendly. It works on all platforms (Laptop/tablet/phone/ Apple and Android) which allows all our employees to use the device they are most comfortable with. The support Team at Camvio has been a pleasure to work with. They are smart, quick to respond, and willing to hop on a call to resolve any issues that we encounter. The Camvio product and the staff have exceeded my expectations thus far. I can’t wait to continue to refine and enhance our integration."`,
    color: '#fbc658',
  },
  {
    name: 'Chris Jones',
    title: 'WIRELESS TECHNICIAN',
    imageSrc: strata,
    quote: `"has enabled STRATA to cut down the time it takes to provision a new customer from hours to minutes. This benefits our operational efficiencies and translates to better service to our customers."`,
    color: '#e91e63',
  },
]
