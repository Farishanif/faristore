import React from 'react';
import Slider from 'react-slick';
import Image1 from '../../assets/Logo.png';
import { FaStar } from 'react-icons/fa'

const TestimonialsData = [
    {
        id: 1,
        phone: "0871-XXXX-X888",
        testimony: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, at!
        Consequatur ullam tempore, atque ut suscipit quo necessitatibus culpa recusandae?`,
        image: Image1,
        product: "Mobile Legend - 1,500 dia",
        rating: 5,
    },
    {
        id: 2,
        phone: "0857-XXXX-XX203",
        testimony: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, at!
        Consequatur ullam tempore, atque ut suscipit quo necessitatibus culpa recusandae?`,
        image: Image1,
        product: "Honor of King - 2,500 + 500 dia",
        rating: 4.5,
    },
    {
        id: 3,
        phone: "0874-XXXX-X231",
        testimony: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, at!
        Consequatur ullam tempore, atque ut suscipit quo necessitatibus culpa recusandae?`,
        image: Image1,
        product: "Player Uknown Battle Ground - 1,500 dia",
        rating: 4.8,
    },
    {
        id: 4,
        phone: "0815-XXXX-X772",
        testimony: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, at!
        Consequatur ullam tempore, atque ut suscipit quo necessitatibus culpa recusandae?`,
        image: Image1,
        product: "Mobile Legend - 4,500 dia",
        rating: 4.5,
    },
]

const Testimonials = () => {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }

    return (
        <div className='py-10 pb-10 bg-gray-200
        dark:bg-gray-800 dark:text-white'>
            <div className='container'>
                {/* header section */}
                <div className='text-center mb-10 max-w-[600px]
            mx-auto'>
                    <p data-aos='fade-up' className='text-sm text-primary'>
                        Kesan Pembeli
                    </p>
                    <h1 data-aos='fade-up' className='text-3xl font-bold'>
                        Testimoni
                    </h1>
                    <p data-aos='fade-up' className='text-xs text-gray-400'>
                        Berikut adalah beberapa produk yang paling populer saat ini
                    </p>
                </div>
                {/* testimonials card */}
                <div data-aos='zoom-in'>
                    <Slider {...settings}>
                        {
                            TestimonialsData.map((data) => (
                                <React.Fragment key={data.id}>
                                    <div className='my-6'>
                                        <div
                                            key={data.id}
                                            className='flex flex-col shadow-lg
                                    py-8 px-6 mx-4 rounded-xl dark:bg-gray-600
                                    bg-primary/10 relative'>
                                                {/* <div className='mb-4'>
                                                    <img src={data.image} alt=""
                                                        className='rounded-full w-20 h-20' />
                                                </div> */}
                                            <div className='flex flex-col item-center gap-4'>
                                                <div className='space-y-0'>
                                                    <p className='text-base text-gray-400 font-bold'>
                                                        {data.phone}</p>
                                                    <h1 className='text-base font-bold
                                                    text-black/80 dark:text-white'>
                                                        {data.testimony}</h1>
                                                    <p className='text-xs font-bold pt-5
                                                    text-black/80 dark:text-white'>
                                                        {data.product}</p>
                                                    <div className='flex items-center gap-1 pb-6'>
                                                        <FaStar className='text-yellow-400' />
                                                        <span>{data.rating}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className='text-black/20 text-9xl 
                                        font-serif absolute top-0 right-0'>
                                                ,,
                                            </p>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials