// import React from 'react'
import { Link } from "react-router-dom"

const ProductsPage = () => {
    return (
        <div className="bg-slate-300 dark:bg-gray-800 ">

            <div className="bg-slate-300 p-10 dark:bg-gray-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">

                <Link to='/product/1'>
                    <div className="bg-slate-200 border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 flex flex-col items-start transition-transform duration-300 transform hover:scale-105">
                        <a href="#">
                            <img className="rounded-t-lg p-5" src="https://www.hallmarknameplate.com/wp-content/uploads/2018/12/AdobeStock_4381957.jpeg" alt="" />
                        </a>

                        <div className="p-5 text-left">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">₹300</h5>
                            </a>
                            <p className="mb-3 text-lg text-gray-800 dark:text-gray-400">CX09-FLTUX IC </p>
                        </div>
                    </div>
                </Link>


                <div className="bg-slate-200 border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 flex flex-col items-start transition-transform duration-300 transform hover:scale-105">
                    <a href="#">
                        <img className="rounded-t-lg p-5" src="https://www.ablcircuits.co.uk/wp-content/uploads/2022/03/shutterstock_1373350454.jpg" alt="" />
                    </a>

                    <div className="p-5 text-left">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">₹300</h5>
                        </a>
                        <p className="mb-3 text-lg text-gray-800 dark:text-gray-400">CX09-FLTUX IC </p>
                    </div>
                </div>


                <div className="bg-slate-200 border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 flex flex-col items-start transition-transform duration-300 transform hover:scale-105">
                    <a href="#">
                        <img className="rounded-t-lg p-5" src="https://i.all3dp.com/wp-content/uploads/2022/09/27125019/Votera-3D-printed-circuit-board-hero.jpg" alt="" />
                    </a>

                    <div className="p-5 text-left">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">₹300</h5>
                        </a>
                        <p className="mb-3 text-lg text-gray-800 dark:text-gray-400">CX09-FLTUX IC </p>
                    </div>
                </div>


                <div className="bg-slate-200 border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 flex flex-col items-start transition-transform duration-300 transform hover:scale-105">
                    <a href="#">
                        <img className="rounded-t-lg p-5" src="https://www.protoexpress.com/wp-content/uploads/2020/02/how-to-achieve-perfect-pcb-soldering-1024x576.jpeg" alt="" />
                    </a>

                    <div className="p-5 text-left">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">₹300</h5>
                        </a>
                        <p className="mb-3 text-lg text-gray-800 dark:text-gray-400">CX09-FLTUX IC </p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default ProductsPage
