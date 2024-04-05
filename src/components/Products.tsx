import { products } from '~/data/Products'

export const Products = () => {
  return (
    <>
      <div className="mt-[95vh] text-center">
        <div className="flex flex-col flex-wrap items-center">
          <h2 className="text-[39px] text-max">Products</h2>
          <h3 className="text-[19px] text-max text-opacity-75 max-w-[750px] my-6">
            Camvio is designed from best industry practices that support an
            efficient business model for future growth.
          </h3>
        </div>
        <div className="flex flex-wrap justify-center max-w-[1100px]  mx-auto my-6">
          {products.map((item) => (
            <div className="text-center flex flex-wrap justify-center max-w-[293px] flex-col items-center mx-7 my-10">
              <div className="size-12">{item.icon}</div>
              <div className="text-[23px] text-max py-4">{item.name}</div>
              <div className="text-[15px] text-max text-opacity-75">
                {item.about}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
