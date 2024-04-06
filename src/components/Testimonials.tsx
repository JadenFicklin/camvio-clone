import { testimonials } from '~/data/testimonialsData'
export const Testimonials = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap items-center mt-32 text-center">
        <h2 className="text-[39px]">Testimonials</h2>
        <h3 className="text-[19px] text-opacity-75 max-w-[750px] my-6">
          A few words from clients we served in past
        </h3>
      </div>
      <div className="flex flex-wrap justify-center my-12">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="w-[283px] xl:w-[360px] rounded-lg h-max min-h-[380px] p-6 m-5"
            style={{ backgroundColor: testimonial.color }}
          >
            <div
              className="w-16 h-6 my-6 overflow-hidden"
              style={{ borderRadius: '50%', width: '64px', height: '24px' }}
            >
              {testimonial.name === 'Joe Lightsey' && (
                <div className="h-[6px]"></div>
              )}
              <img
                alt={testimonial.imageSrc}
                src={testimonial.imageSrc}
                className="object-cover bg-no-repeat"
              />
            </div>
            <p className="text-[18px] text-min font-bold my-3">
              {testimonial.name}
            </p>
            <p className="text-[12px] text-min my-4">{testimonial.title}</p>
            <p className="text-[14px] text-min my-3">{testimonial.quote}</p>
          </div>
        ))}
      </div>
    </>
  )
}
