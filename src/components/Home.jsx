import { useState } from "react";
import React from "react";
import avatar from '../assets/programmer.png'

import Header from "./Header";

function Home() {

    return (
        <>
            <Header></Header>
            <section className=" w-screen h-screen bg-blue-400 pt-32 px-8 flex flex-col items-center">
                <div className="flex justify-center items-end gap-3">
                    <h1 className="text-2xl font-bold">Hi, I'm Shankarganesh</h1>
                    <img className="w-16" src={avatar} alt="" />
                </div>
                <h1 className="text-xl font-bold">A budding <span className="text-2xl text-white">MERN Fullstack Developer</span></h1>
                <p className="w-11/12 p-5 font-semibold text-xl justify-center text-justify">Hey there! I'm a passionate MERN stack developer, always excited about turning ideas into dynamic, responsive web applications. 
                    With a solid grasp of MongoDB, Express.js, React, and Node.js, I've built everything from sleek user interfaces to powerful, scalable databases. 
                    Through a mix of academic and personal projects, I've honed my skills in creating smooth RESTful APIs and seamless user experiences. 
                    But what really drives me? It's my curiosity and love for problem-solving. I’m always diving into new trends and tools to stay on top of the game, ensuring every project I work on isn’t just functional, but impactful. 
                    If you're looking for a developer who’s enthusiastic, dedicated, and ready to bring your ideas to life, you’ve come to the right place! Let’s build something amazing together.</p>
            </section>
        </>



    )
}

export default Home