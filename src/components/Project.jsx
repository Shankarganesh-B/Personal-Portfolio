import React, { useState } from "react";
import Header from "./Header";


function Project() {

    const plist = [ "Udemy Clone", "Trip Advisor Clone",
        "GreenDen", "Trip Advisor -2", "User Registration", "Character Count", "Nostra Vogue",
        "Perfumey", "Responsive Gallery", "Counter App", "Random Number Generator", "Student Management System",
        "Weather App", "Grocery List", "Bulk Mail", "Joke Teller", "E-commerce Website", "Expense Tracker"];

    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];

    const links = [
        "https://udemy-react-black.vercel.app/",
        "https://shankarganesh-b.github.io/tripadvisor/",
        "https://shankarganesh-b.github.io/Greenden-Tailwind/",
        "https://shankarganesh-b.github.io/Tailwind-Tripadvisor/",
        "https://shankarganesh-b.github.io/User-register/",
        "https://shankarganesh-b.github.io/Char-count/",
        "https://shankarganesh-b.github.io/Nostra-Vogue/",
        "https://perfumy-react-one-zeta.vercel.app/",
        "https://gallery-react-zeta.vercel.app/",
        "https://counter-app-reactjs-pi.vercel.app/",
        "https://random-num-generator-react.vercel.app/",
        "https://student-management-react-psi.vercel.app/",
        "https://weather-app-react-lilac-one.vercel.app/",
        "https://grocery-mernfrontend.onrender.com",
        "https://bulkmail-frontend-sapp.onrender.com",
        "Joke Teller",
        "E-COMMERCE",
        "expense tracker"
    ];

    return (
        <>
        <Header />
        <section className="w-screen pt-32 px-4 overflow-x-hidden flex flex-wrap justify-center gap-5">
            {plist.map((item, index) => (
                <div
                    key={index}
                    className="text-white bg-red-700 w-64 h-36 rounded-lg flex items-center justify-center text-center m-1"
                >
                    <a className="w-full h-3/5 bg-blue-500 flex justify-center items-center" key={index} target="_blank" rel="noopener noreferrer" href={links[index]}><p className="font-bold text-xl bg-violet-100 flex justify-center items-center hover:invisible">{item}</p></a>
                </div>
            ))}
        </section>
    </>
    )
}

export default Project