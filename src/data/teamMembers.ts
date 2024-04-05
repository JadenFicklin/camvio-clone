import jennifer from '~/assets/images/jennifer.jpg'
import amir from '~/assets/images/amir.jpeg'

type TeamMember = {
  name: string
  title: string
  imageSrc: string
  socials: {
    twitter: string
    linkedIn: string
  }
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Jennifer Logsdon',
    title: 'CEO & CO-FOUNDER',
    imageSrc: jennifer,
    socials: {
      twitter: 'https://twitter.com/camvioinc',
      linkedIn: 'https://www.linkedin.com/in/jennifer-logsdon-b0859719/',
    },
  },
  {
    name: 'Amir Heydarkhan',
    title: 'CTO & CO-FOUNDER',
    imageSrc: amir,
    socials: {
      twitter: 'https://twitter.com/e3amir',
      linkedIn: 'https://www.linkedin.com/in/amir-heydarkhan-8b14ab2/',
    },
  },
]
