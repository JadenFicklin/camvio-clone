import city from '~/assets/images/hero.jpg'

export const About = () => {
  return (
    <>
      <div
        className="relative"
        style={{
          backgroundImage: `url(${city})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-65"></div>

        <div className="relative z-10 max-w-[1200px] w-[95%] mx-auto py-[150px]">
          <h2 className="text-[37px] text-min font-bold text-center">
            About Us
          </h2>
          <p className="text-[18px] text-min text-center py-6">
            Emerging out of the Software and Communications Industries, Camvio
            has made a bold statement of the need for Simplicity when it comes
            to Operational Efficiencies. Our founders have a firm belief that
            billing systems should not be complex, expensive and painful to
            implement. After 20+ years of research in the communications space,
            we’ve learned what works for the industry verses what does not. Our
            pledge is to provide tools that enable our users to solve problems,
            produce revenue and become the technology leaders of tomorrow.
          </p>
          <p className="text-[18px] text-min text-center">
            Our <span className="font-bold text-[18px] text-min">Vision</span>{' '}
            is to not only provide a powerful tool for organizations to operate
            their businesses more efficiently, but to also become a trusted
            advisor and partner in their future development. Our ultimate goal
            is to provide a software platform so easy to use, that there is very
            little training needed for implementation. Being ten steps ahead of
            the curve is where we intend to stay. Your software solution should
            provide you functions and features that you didn’t even know you
            needed or wanted. At Camvio, our vision is to give you intuitive
            products that aid in your everyday life in a productive and positive
            manner.{' '}
          </p>
        </div>
      </div>
    </>
  )
}
