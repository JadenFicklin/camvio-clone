import city from '~/assets/images/hero.jpg'

export const Hero = () => {
  return (
    <>
      <div>
        <img
          src={city}
          className="absolute top-0 object-cover w-full h-screen bg-no-repeat bg-cover brightness-50 -z-10"
        />
      </div>
    </>
  )
}
