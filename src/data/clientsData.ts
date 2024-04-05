import calix from '~/assets/images/calix.png'
import vetro from '~/assets/images/vetro.png'
import esri from '~/assets/images/esri.png'
import nokia from '~/assets/images/nokia.png'
import aws from '~/assets/images/aws.png'
import uex from '~/assets/images/uex.png'
import nrtc from '~/assets/images/nrtc.png'
import metaswitch from '~/assets/images/metaswitch.png'
import ericsson from '~/assets/images/ericsson.png'
import css from '~/assets/images/css.png'
import microsoftazure from '~/assets/images/microsoft-azure.png'
import salesforce from '~/assets/images/salesforce.png'
import mapcom from '~/assets/images/mapcom.png'

type Client = {
  link: string
  imgSource: string
}

export const clients: Client[] = [
  {
    imgSource: calix,
    link: 'https://www.calix.com/',
  },
  {
    imgSource: vetro,
    link: 'https://www.vetrofibermap.com/',
  },
  {
    imgSource: esri,
    link: 'https://www.esri.com/',
  },
  {
    imgSource: nokia,
    link: 'https://www.nokia.com/',
  },
  {
    imgSource: aws,
    link: 'http://aws.amazon.com/',
  },
  {
    imgSource: uex,
    link: 'https://www.onlineis.com/',
  },
  {
    imgSource: nrtc,
    link: 'https://www.nrtc.coop/',
  },
  {
    imgSource: metaswitch,
    link: 'http://www.metaswitch.com/',
  },
  {
    imgSource: ericsson,
    link: 'http://www.ericsson.com/',
  },
  {
    imgSource: css,
    link: 'https://solutionsbycss.com/',
  },
  {
    imgSource: microsoftazure,
    link: 'https://azure.microsoft.com/',
  },
  {
    imgSource: salesforce,
    link: 'http://www.salesforce.com/',
  },
  {
    imgSource: mapcom,
    link: 'http://www.mapcom.com/',
  },
]
