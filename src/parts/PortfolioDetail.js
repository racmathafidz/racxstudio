import React from 'react'

import Button from 'elements/Button'

export default function PortfolioDetail({ data }) {
    return (
        <section className="container mx-auto">
            <Button type="link" href="/project" className="flex w-40 h-8 text-lg items-center ml-6 sm:ml-20 mt-8 font-light text-gray-400 hover:underline">
                <svg className="w-5 h-5 text-gray-400 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                See All Project
            </Button>

            {
                data.map( item => {
                    return (
                        <div className="flex flex-col mt-8 justify-center">
                            <h1 className="text-5xl text-theme-blue text-center font-bold">{item.title}</h1>

                            <p className="font-light text-xl text-gray-400 text-center mb-10">
                                {item.type}
                            </p>

                            <div className="flex justify-center xl:mb-6">
                                <img src={`../${item.imageUrl}`} alt="Project" className="flex w-4/5 sm:w-4/6"/>
                            </div>

                            <div className="flex flex-col mt-16 mb-12 mx-8 sm:mx-16 xl:mx-28">
                                <h1 className="text-3xl text-theme-blue font-bold mb-3">
                                    Project Detail
                                </h1>

                                <p className="font-light text-lg text-gray-400 text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>

                            <div className="flex flex-col mx-8 sm:mx-16 xl:mx-28">
                                <h1 className="text-3xl text-theme-blue font-bold mb-5">
                                    Project Responsibilities
                                </h1>

                                <div className="flex flex-row ml-1">
                                    {
                                        item.responsibility.map( responsibility => {
                                            return (
                                                <div className="mr-4 px-6 py-3 text-theme-purple border border-theme-purple rounded-full shadow-lg">
                                                    {responsibility}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            <p className="font-light italic text-gray-400 mt-16 mx-8 sm:mx-16 xl:mx-28">
                                * This project is just example. <br/>
                                Original project : <Button type="link" href={item.credit} target="_blank" className="text-theme-purple" isExternal>{item.credit}</Button>
                            </p>
                        </div>
                    )
                })
            }
        </section>
    )
}
