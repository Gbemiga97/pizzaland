import { images } from "../utils"


const Banner = () => {
  return (
    <section className="bg-primary bg-pattern lg:min-[768px] pt-16 lg:pt-16">
      <div className="container mx-auto min-h-[768px] flex items-center justify-center">
          {/* text */}
            <div className="flex flex-col xl:flex-row">
              <div className="flex-1">
                <h3 className="text-[2rem] uppercase tracking-[0.03rem]">
                  Best pizza in town</h3>
                <h1 className="text-6xl lg:text-8xl drop-shadow-md">
                  Pizza perfection <br /> in every bite
                </h1>
              </div>

          {/* images */}
          <div>
            <img src={images.PizzaBanner} alt="pizza" />
          </div>
            </div>
      </div>
    </section>
  )
}

export default Banner