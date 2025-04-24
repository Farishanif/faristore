import React from 'react';
import BG from '../../assets/Background.png';
import Image1 from '../../assets/game/HoK-banner.png';
import Image2 from '../../assets/game/Mobile-Legends-Banner.png';
import Image3 from '../../assets/game/pubg-banner.png';
import Slider from 'react-slick';

const ImageLists = [
  {
    id: 1,
    img: Image1,
    title: "Honor of King",
    description: "lorem ipsum1",
  },
  {
    id: 2,
    img: Image2,
    title: "Mobile Legend",
    description: "lorem ipsum2",
  },
  {
    id: 3,
    img: Image3,
    title: "Player Uknown Battleground",
    description: "lorem ipsum3",
  },
]

const Banner = () => {

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  }

  return (
    <div className='relative overflow-hidden min-h-[500px]
    sm:min-h-[500px] bg-gray-100 justify-center item-center 
    dark:bg-gray-950 dark:text-white duration-200'>
      {/* Background Image */}
      <div className='background-image' style={{ backgroundImage: "url(" + BG + ")" }}>
        {/* background pattern */}
        <div className='h-[800px] w-[800px] bg-primary/40 absolute 
        rounded-3xl  -z-9 rotate-45 m-auto 
        left-0 top-0 bottom-0 right-0'>
        </div>
        {/* banner section */}
        <div className='container pb-0 sm:pb-0'>
          <Slider {...settings}>
            {ImageLists.map((data) => (
              <React.Fragment key={data.id}>
                <div className='grid grid-cols-1 sm:grid-cols-1'>
                  {/* text context section */}
                  {/* <div
                  cl  assName='flex flex-col justify-center gap-4 pt-0 sm:pt-0 
                  text-center sm:text-left order-2 sm:order-2 relative z-9'>
                  <h1 className='text-4xl sm:tex-5xl lg:text-6xl font-bold'>
                    {data.title}
                  </h1>
                  <p className='px-1 text-sm'>
                    {data.description}
                  </p>
                  <div>
                    <button className='bg-gradient-to-r from-primary to-secondary
                  hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
                      Order Now
                    </button>
                  </div>
                </div> */}
                  {/* image section */}
                  <div className='order-1 sm:order-1'>
                    <div
                      data-aos='zoom-out'
                      data-aos-once='true'
                      className='relative z-10'>
                      <img src={data.img} alt=''
                        className='w-[500px] h-[500px] sm:h-[500px] sm:w-[500px]
                  sm:scale-150 object-contain mx-auto'/>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner