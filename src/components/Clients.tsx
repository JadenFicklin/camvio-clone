import { clients } from '~/data/clientsData'
export const Clients = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center w-10/12 mx-auto my-32 xl:w-8/12 h-max">
        {clients.map((client) => (
          <a href={client.link} target="_blank" rel="noreferrer">
            <img
              src={client.imgSource}
              className="object-cover m-10 duration-200 bg-no-repeat cursor-pointer w-max h-max hover:opacity-75"
            />
          </a>
        ))}
      </div>
    </>
  )
}
