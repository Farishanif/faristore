import React from 'react'
import Image1 from '../../assets/game/ML.jpg';
import Image2 from '../../assets/game/HoK.jpg';
import ProductsData from '../Data/ProductsData';

const Button = [
    {
        id: 1,
        name: "Semua",
        link: "*",
    },
    {
        id: 2,
        name: "Top up",
        type: "topup",
    },
    {
        id: 3,
        name: "Joki",
        type: "joki",
    },
    {
        id: 4,
        name: "Pulsa",
        type: "pulsa",
    }
];

const Dummy = [
    {
        id: 1,
        name: "Semua",
        link: "*",
    },
    {
        id: 2,
        name: "Top up",
        type: "topup",
    },
    {
        id: 3,
        name: "Joki",
        type: "joki",
    },
    {
        id: 4,
        name: "Pulsa",
        type: "pulsa",
    }
];

const Products = () => {
    return (
        <div className='pt-2 pb-12 px-2 bg-gray-300
        dark:bg-gray-900 dark:text-white'>
            <div className='container'>
                {/* header section */}
                <div className='flex dark:text-white dark:bg-gray-900 px-1 sm:px-6'>
                    {
                        Button.map((data) => (
                            <React.Fragment key={data.id}>
                                <div
                                    data-aos='fade-up'
                                    data-aos-delay='50'
                                    key={data.id} className='space-y-3'>
                                    <button className=' px-5 pb-2 pt-2.5 
                                        text-xs sm:text-base font-bold mr-4 inline-block 
                                        rounded-md shadow-md bg-primary/40 
                                        hover:text-primary hover:bg-primary/30 
                                        duration-200'>
                                        {data.name}
                                    </button>
                                </div>
                            </React.Fragment>
                        ))
                    }
                </div>
                {/* body section */}
                <ProductsData />
            </div>
        </div>
    )
}

export default Products