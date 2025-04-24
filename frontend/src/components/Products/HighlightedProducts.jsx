import React from 'react'
import Image1 from '../../assets/game/ML.jpg';
import Image2 from '../../assets/game/HoK.jpg';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa'

const ProductsData = [
    {
        id: 1,
        img: Image1,
        title: "Mobile Legend",
        rating: 4.5,
        aosDelay: 0,
    },
    {
        id: 2,
        img: Image2,
        title: "Honor of King",
        rating: 5.0,
        aosDelay: 100,
    },
    {
        id: 3,
        img: Image1,
        title: "Mobile Legend",
        rating: 4.5,
        aosDelay: 200,
    },
    {
        id: 4,
        img: Image2,
        title: "Honor of King",
        rating: 5.0,
        aosDelay: 300,
    },
    {
        id: 5,
        img: Image1,
        title: "Mobile Legend",
        rating: 4.5,
        aosDelay: 400,
    },
]

const HighlightedProducts = () => {
    return (
        <div className='pt-6 pb-10 bg-gray-200
        dark:bg-gray-800 dark:text-white'>
            <div className='container'>
                {/* header section */}
                <div className='text-center mb-10 max-w-[600px]
                mx-auto'>
                    <p data-aos='fade-up' className='text-sm text-primary'>
                        Top Product
                    </p>
                    <h1 data-aos='fade-up' className='text-3xl font-bold'>
                        Populer Sekarang
                    </h1>
                    <p data-aos='fade-up' className='text-xs text-gray-400'>
                        Berikut adalah beberapa produk yang paling populer saat ini
                    </p>
                </div>
                {/* body section */}
                <div>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3
                lg:grid-cols-4 place-items-center px-2 gap-5'>
                        {/* card section */}
                        {
                            ProductsData.map((data) => (
                                <React.Fragment key={data.id}>
                                    <Link to={`/game/${data.title}`}>
                                    <div
                                        data-aos='fade-right'
                                        data-aos-delay={data.aosDelay}
                                        key={data.id} className='space-y-3'>
                                        <img src={data.img} alt=""
                                            className='h-[160px] w-[280px]
                                        object-cover rounded-md border-2
                                        hover:border-primary'/>
                                        <h3 className='font-semi-bold'>
                                            {data.title}
                                        </h3>
                                        <div className='flex items-center gap-1 pb-6'>
                                            <FaStar className='text-yellow-400' />
                                            <span>{data.rating}</span>
                                        </div>
                                    </div>
                                    </Link>
                                </React.Fragment>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HighlightedProducts