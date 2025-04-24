import React, { useEffect, useState } from 'react'
import Image1 from '../../assets/game/ML.jpg';
import Image2 from '../../assets/game/HoK.jpg';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner';
import { Link } from 'react-router-dom';

const Dummy = [
  {
    _id: 1,
    gameName: "Mobile Legend",
    gameType: "Moba",
    img: Image1,
    product: "",
    rate: 5,
  },
  {
    _id: 2,
    gameName: "PUBG",
    gameType: "Battleroyal",
    img: Image2,
    product: "",
    rate: 5,
  }
];

const ProductsData = () => {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(false);
  const { gameName } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://127.0.0.1:5555/product/${gameName? gameName : ""}`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
        console.log(response);
        console.log(response.data);
        console.log(products);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
    {loading ? (
        <Spinner />
    ) : (
    <div className='bg-gray-300
        dark:bg-gray-900 dark:text-white'>
      <div className='pt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5
          lg:grid-cols-6 place-items-center gap-5'>
        {/* card section for DB chage dummy to products*/}
        {Array.isArray(Dummy) ?
          Dummy?.map((data) => (
            <React.Fragment key={data._id}>
              <Link to={`/order/${data.product}`}>
                <div
                  data-aos='fade-up'
                  data-aos-delay= '100'
                  key={data.id} className='space-y-3'>
                  <h3 className='font-bold 
                      text-sm text-primary/80'>
                    {data.product}
                  </h3>
                  <img src={data.img} alt=""
                    className='h-[200px] w-[180px]
                    object-cover rounded-md border-2
                    hover:border-primary'/>
                </div>
              </Link>
            </React.Fragment>
          ))
        : console.log("object is not array")}
      </div>
      {/* view more button */}
      <div className='flex justify-center'>
        <button
          data-aos='zoom-in'
          className='text-center mt-10 cursor-pointer
          bg-primary/60 py-1 px-5 rounded-md hover:bg-primary 
          dark:hover:bg-primary/40 duration-200'>
          Lihat lainnya
        </button>
      </div>
    </div>
  )}
  </div>
  )
}

export default ProductsData