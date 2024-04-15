import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavSub } from '~/components/NavSub'

interface Pokemon {
  name: string
  sprites: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
  abilities: Ability[]
}

interface Ability {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}

export const Announcements = () => {
  const [data, setData] = useState<Pokemon | null>(null)
  const [name, setName] = useState<string | undefined>()
  const [number, setNumber] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      const URL = `https://pokeapi.co/api/v2/pokemon/${number}`
      try {
        const response = await axios.get<Pokemon>(URL)
        setData(response.data)
        setName(response.data.name)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [number])

  return (
    <>
      <div>
        <NavSub />
        <div>{number}</div>
        Announcements
        <button className="bg-blue-500" onClick={() => setNumber(number + 1)}>
          add 1
        </button>
        <button className="bg-red-500" onClick={() => setNumber(number - 1)}>
          subtract 1
        </button>
        <h2 className="text-4xl font-bold text-red-500">{name}</h2>
        {data && data.sprites.other.dream_world.front_default && (
          <img
            src={data.sprites.other.dream_world.front_default}
            alt={`Image of ${name}`}
          />
        )}
        {data &&
          data.abilities.map((ability, key) => (
            <div key={key}>{ability.ability.name}</div>
          ))}
      </div>
    </>
  )
}
