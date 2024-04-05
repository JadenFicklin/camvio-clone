import { ReactElement } from 'react'
import {
  FaChild,
  FaMapSigns,
  FaAsterisk,
  FaChartArea,
  FaPuzzlePiece,
} from 'react-icons/fa'

interface Product {
  icon: ReactElement
  name: string
  about: string
}

export const products: Product[] = [
  {
    icon: <FaMapSigns className="w-full h-full fill-subRed" />,
    name: 'Order Assignment',
    about: `With camvio, placing orders and activating accounts is not only quick, it's seamless.`,
  },
  {
    icon: <FaChild className="w-full h-full fill-subBlue" />,
    name: 'Billing',
    about: `Your billing system should work for you, not the other way around.`,
  },
  {
    icon: <FaAsterisk className="w-full h-full fill-subYellow" />,
    name: 'Workflow',
    about: `Camvio is designed from best industry practices that support an efficient business model for future growth.`,
  },
  {
    icon: <FaChartArea className="w-full h-full fill-subGreen" />,
    name: 'Analytics',
    about: `Profitability comes from a strong foundation and a proactive mindset.`,
  },
  {
    icon: <FaPuzzlePiece className="w-full h-full fill-subPurple" />,
    name: 'Open API',
    about: `We believe in Best of Breed solutions and have full bi-directional API's.`,
  },
]
