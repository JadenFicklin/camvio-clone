import city from '~/assets/images/hero.jpg'

export const Hero = () => {
  return (
    <>
      <div>
        <img
          src={city}
          alt="city"
          className="absolute top-0 object-cover w-full h-[95vh] bg-no-repeat bg-cover brightness-50 -z-10 pointer-events-none select-none"
        />
        <div className="absolute left-1/2 -translate-x-1/2 top-[20vh] sm:top-[33vh]">
          <div className="grid w-full place-content-center">
            <h1 className="text-6xl max-w-[800px]  font-bold text-center text-min">
              The Next Evolution of Billing Systems
            </h1>
          </div>
          <h2 className="py-6 text-xl text-center text-min">
            Change to Simplicity, Change to Camvio
          </h2>
          <div className="grid justify-center w-full grid-rows-2 space-y-6 sm:space-y-0  sm:flex  sm:max-w-[380px] sm:mx-auto sm:justify-between place-items-center sm:mt-8 ">
            <button className="px-8 py-5 font-bold rounded-md text-min h-max w-max bg-accent hover:bg-opacity-75">
              GET QUOTE
            </button>
            <button className="py-3 px-6 border-2 border-min rounded-[26px] text-min font-bold hover:opacity-80">
              LEARN MORE ABOUT US
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
