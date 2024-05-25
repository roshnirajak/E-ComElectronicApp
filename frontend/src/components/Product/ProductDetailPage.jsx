import { useState } from 'react'
import ImageCarousel from './ImageCarousel';
import ItemInfo from './ItemInfo';

const ProductDetailPage = () => {

    const images = [
        'https://online-learning-college.com/wp-content/uploads/2022/06/Circuits.jpg',
        'https://www.hallmarknameplate.com/wp-content/uploads/2021/12/resize-closeup-of-computer-circuit-boards-2021-11-17-17-50-54-utc.png',
        'https://www.hallmarknameplate.com/wp-content/uploads/2018/12/AdobeStock_4381957.jpeg',
    ];
    const [bigImageSrc, setBigImageSrc] = useState("https://www.hallmarknameplate.com/wp-content/uploads/2018/12/AdobeStock_4381957.jpeg");

    const handleImageClick = (newSrc) => {
        setBigImageSrc(newSrc);
    };

    return (
        <div className="bg-slate-300 dark:bg-gray-800 p-5 ">

            <div className="max-w-screen-xl mx-auto p-4">

                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Products</a>
                            </div>
                        </li>

                    </ol>
                </nav>
                {/* BreadCrumb ends */}

                <div className="py-10">

                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">V59 A9PRO/A910F</h1>

                    <div className="sm:flex sm:justify-between sm:gap-10">
                        <div className="lg:flex  gap-3">

                            <div className='hidden sm:block'>
                                <img className="h-auto max-w-sm my-2" src="https://online-learning-college.com/wp-content/uploads/2022/06/Circuits.jpg" width="100px" alt="image description" onClick={() => handleImageClick('https://online-learning-college.com/wp-content/uploads/2022/06/Circuits.jpg')} />
                                <img className="h-auto max-w-sm my-2" src="https://www.hallmarknameplate.com/wp-content/uploads/2021/12/resize-closeup-of-computer-circuit-boards-2021-11-17-17-50-54-utc.png" width="100px" alt="image description" onClick={() => handleImageClick('https://www.hallmarknameplate.com/wp-content/uploads/2021/12/resize-closeup-of-computer-circuit-boards-2021-11-17-17-50-54-utc.png')} />
                                <img className="h-auto max-w-sm my-2" src="https://www.hallmarknameplate.com/wp-content/uploads/2018/12/AdobeStock_4381957.jpeg" width="100px" alt="image description" onClick={() => handleImageClick('https://www.hallmarknameplate.com/wp-content/uploads/2018/12/AdobeStock_4381957.jpeg')} />

                            </div>

                            <img className="h-auto lg:max-w-lg hidden sm:flex sm:max-w-0.5 rounded-lg" src={bigImageSrc} alt="image description" />
                        </div>


                        <div className="sm:hidden block">
                            <ImageCarousel images={images} />
                        </div>


                        <div className=" mb-6 text-lg text-gray-700  dark:text-gray-300">
                            <h2 className='text-4xl font-bold'>₹300</h2>
                            <p>
                                Buy AMERA V59 A9PRO/A910F Charging PCB Complete Flex for Rs. online. AMERA V59 A9PRO/A910F Charging PCB Complete Flex at best prices with FREE shipping
                            </p>

                            <div className="text-left mx-auto p-4 rounded">
                                <ItemInfo heading="Qty" value="3" />
                                <ItemInfo heading="Brand" value="xyz" />
                                <ItemInfo heading="Model no." value="v59" />
                            </div>

                            <a href="#" className="inline-flex px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Learn more
                                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage
