import React from 'react'
import { IoMdSearch } from 'react-icons/io';

const DummyData = [
    {
        id: 1,
        date: "8/20/2024 15:23:15",
        invoiceNumb: "INV-802565518302",
        phoneNumb: 628129764323,
        price: 100000,
        stats: "done",
    },
    {
        id: 2,
        date: "8/20/2024 17:15:22",
        invoiceNumb: "INV-801529454062",
        phoneNumb: 6285775756203,
        price: 50000,
        stats: "done",
    },
    {
        id: 3,
        date: "8/20/2024 19:56:12",
        invoiceNumb: "INV-802719487287",
        phoneNumb: 628127876234,
        price: 120000,
        stats: "pending",
    },
]

const Invoices = () => {
    return (
        <div className='bg-gray-300 dark:bg-gray-900 h-screen'>
            <div className='pt-6 pb-10 dark:text-white'>
                <div className='container'>
                    {/* header section */}

                    <div className='mb-10 max-w-[600px] mx-12'>
                        <div className='mb-5'>
                            <h1 className='text-3xl font-bold'>
                                Cek Pesanan Saat Ini!
                            </h1>
                            <p className='text-lg text-gray-500 font-bold dark:text-white'>
                                Lacak transaksi dan statusnya dengan Nomor Invoice dibawah ini:
                            </p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-xs pb-2 text-gray-500 font-bold'>
                                Nomor Invoice Kamu
                            </p>
                            <input type='text'
                                placeholder='INV-XXXXXXXXXXXX'
                                className='w-[300px] sm:w-[300px] font-bold
                                border border-gray-300 rounded-lg px-5 py-1
                                dark:border-gray-500 dark:bg-gray-800'/>
                            <div className='pt-6'>
                                <button
                                    className='w-[200px] sm:w-[200px] py-1 px-4 
                                    flex items-center border rounded-xl
                                    group gap-2 text-base font-bold 
                                    bg-primary/60 hover:bg-primary 
                                    dark:hover:bg-primary/40
                                    border-gray-300 dark:border-gray-500'>
                                    <IoMdSearch
                                        className='drop-shadow-sm cursor-pointer'
                                    />
                                    <span>
                                        Cari Transaksi
                                    </span>

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             {/* body section */}
            <div className='pt-6 pb-10 bg-gray-200
                dark:bg-gray-800 dark:text-white'>
                <div className='container'>
                    {/* header section */}
                    <div className='text-center mb-10 max-w-[600px]
                    mx-auto'>
                        <h1 className='text-3xl font-bold'>
                            Transaksi Real-Time
                        </h1>
                        <p className='text-xs text-gray-400 font-bold'>
                            Berikut ini Real-time data pesanan masuk terbaru FARISTORE.
                        </p>
                    </div>
                    {/* table section */}
                    <div className='border rounded-md text-xs sm:text-base
                    border-black dark:border-white mx-4'>
                        <table className='w-full border-separate border-spacing-2'>
                            <thead>
                                <tr>
                                    <th className='border border-slate-600 rounded-md'>Tanggal</th>
                                    <th className='border border-slate-600 rounded-md'>Nomor Invoice</th>
                                    <th className='border border-slate-600 rounded-md'>No. Handphone</th>
                                    <th className='border border-slate-600 rounded-md'>Harga</th>
                                    <th className='border border-slate-600 rounded-md'>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    DummyData.map((data) => (
                                        <tr key={data.id} className='h-8'>
                                            <td className='border border-slate-700 rounded-md text-center'>
                                                {data.date}
                                            </td>
                                            <td className='border border-slate-700 rounded-md text-center'>
                                                {data.invoiceNumb}
                                            </td>
                                            <td className='border border-slate-700 rounded-md text-center'>
                                                {data.phoneNumb}
                                            </td>
                                            <td className='border border-slate-700 rounded-md text-center'>
                                                {data.price}
                                            </td>
                                            <td className='border border-slate-700 rounded-md text-center'>
                                                {data.stats}
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invoices