import React from 'react'
import Header from './Header'


import hand from "../assets/hands.png"
import logo1 from '../assets/linkedin.png'
import logo2 from '../assets/gmail.png'
import logo3 from '../assets/resume.png'


function Contact() {
    return (
        <>
            <Header></Header>
            <section className='mt-16 p-3 flex flex-col h-screen w-screen gap-8'>
                <p className='text-black text-justify p-1 text-lg h-1/5'>I sincerely appreciate the opportunity to explore potential roles.
                    Please feel free to connect with me on LinkedIn or reach out via email to discuss further.</p>


                <div className="w-full h-2/5 flex justify-center items-center">
                    <div
                        className="relative w-48 h-48 rounded-full bg-blue-500 flex justify-center items-center"
                        style={{
                            backgroundImage: `url(${hand})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        {/* Smaller Circles */}
                        <div
                            className="absolute w-16 h-16 rounded-full bg-red-500"
                            style={{
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%) rotate(180deg) translate(0, -130px) ', // Top of the circle 
                                backgroundImage: `url(${logo1})`,
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        ></div>
                        <div
                            className="absolute w-16 h-16 rounded-full bg-green-500"
                            style={{
                                top: '50%',
                                left: '50%',
                                transform:
                                    'translate(-50%, -50%) rotate(120deg) translate(0, -130px) rotate(-120deg)', // Bottom-left
                                    backgroundImage: `url(${logo2})`,
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        ></div>
                        <a
                            className="absolute w-16 h-16 rounded-full bg-green-600"
                            style={{
                                top: '50%',
                                left: '50%',
                                transform:
                                    'translate(-50%, -50%) rotate(240deg) translate(0, -130px) rotate(-240deg)', // Bottom-right
                                    backgroundImage: `url(${logo3})`,
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        ></a>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Contact