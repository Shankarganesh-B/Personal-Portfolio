import React, { useState, useEffect } from "react";
import Header from "./Header";
import one from '../assets/TopOne.jpg'
import two from '../assets/TopTwo.jpg'
import download from '../assets/pdffile.png'

function About() {
    const buttons = ["Frontend", "Backend & DB", "Tools", "Soft Skills"];

    const data = [
        {
            "HTML": 90,
            "CSS": 85,
            "Tailwind": 85,
            "JavaScript": 70,
            "React.js": 75
        },
        {
            "Node.js": 65,
            "Express.js": 70,
            "MongoDB": 65,
            "Firebase": 65,
            "RESTful API Integration": 75
        },
        {
            "Visual Studio Code": 85,
            "Git & GitHub": 85,
            "Vercel": 80,
            "Render": 80,
            "Netlify": 80
        },
        {
            "Collaboration": 85,
            "Details": 85,
            "Problem solving": 80,
            "English": 90
        }
    ];

    const [selectedCategory, setSelectedCategory] = useState(0);
    const [progress, setProgress] = useState({});
    const [isAwardBoxVisible, setIsAwardBoxVisible] = useState(false); // Track visibility
    const [buttonText, setButtonText] = useState("Academic Achievements");

    const handleCategoryClick = (index) => {
        setSelectedCategory(index);
    };

    useEffect(() => {
        const initialProgress = {};
        Object.entries(data[selectedCategory]).forEach(([key]) => {
            initialProgress[key] = 0;
        });
        setProgress(initialProgress);

        setTimeout(() => {
            const updatedProgress = {};
            Object.entries(data[selectedCategory]).forEach(([key, value]) => {
                updatedProgress[key] = value;
            });
            setProgress(updatedProgress);
        }, 100);
    }, [selectedCategory]);

    const pic = [one, two];
    const [picTrue, setPicTrue] = useState(one);
    const [picChange, setPicChange] = useState("Next");

    function handlePic() {
        if (picTrue === one) {
            setPicTrue(two);
            setPicChange("Previous");
        } else {
            setPicTrue(one);
            setPicChange("Next");
        }
    }

    const toggleBoxVisibility = () => {
        setIsAwardBoxVisible(!isAwardBoxVisible);
        setButtonText(isAwardBoxVisible ? "Academic Achievements" : "About Me");
    };

    return (
        <>
            <Header />
            <section className="w-full sm:h-screen pt-32 px-4 sm:px-8 flex flex-col-reverse sm:flex-row gap-5">
                <div className="bg-red-300 w-full max-w-screen-md p-5 rounded-lg flex flex-col mx-auto">
                    <h2 className="text-center text-xl font-bold mb-4">My Skills Progress</h2>

                    {/* Category buttons */}
                    <div className="flex flex-wrap gap-2 justify-center space-x-4 mb-6">
                        {buttons.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => handleCategoryClick(index)}
                                className="px-4 m-1 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Display progress bars for the selected category */}
                    <div className="w-full flex flex-col gap-6">
                        {Object.entries(data[selectedCategory]).map(([key, value]) => (
                            <div key={key}>
                                <p className="font-bold">{key}</p>
                                <div className="w-full bg-white border-solid border-y-2 flex items-center h-3 rounded-xl">
                                    <div
                                        className="h-3 bg-green-400 rounded-l-xl"
                                        style={{
                                            width: `${progress[key] || 0}%`,
                                            transition: "width 1s ease-out",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    
                </div>

                <div className="mx-auto bg-red-300 p-4 sm:p-8 rounded-lg flex flex-col gap-4 items-center w-full max-w-screen-md">
                    {/* Award Box */}
                    <div className={`award-box w-full flex flex-col gap-5 items-center justify-around ${isAwardBoxVisible ? 'flex' : 'hidden'}`}>
                        <p className="text-center text-xl font-semibold">
                            I have been awarded twice as the top performer of the week by the <span className="text-blue-400 font-bold text-2xl">EMC</span> academy.
                        </p>
                        <img
                            className="w-full max-w-xs sm:max-w-md h-auto rounded-lg object-contain"
                            src={picTrue}
                            alt="Award Poster"
                        />
                        <button
                            className="bg-sec clr-main p-3 py-1 text-lg rounded-lg font-bold bg-gray-400"
                            onClick={handlePic}
                        >
                            {picChange}
                        </button>
                    </div>

                    {/* Intro Box */}
                    <div className={`intro-box flex flex-col gap-3 ${!isAwardBoxVisible ? 'flex' : 'hidden'}`}>
                        <p className="text-justify font-semibold">
                            I've cultivated a deep passion for MERN stack web development by building over 16 projects,
                            continuously refining my skills through hands-on experience.
                            Here is how proficient I am in various key skills and my academic achievements in web development:
                        </p>
                        <button className="m-3 mx-auto flex gap-3 justify-center items-center font-bold">
                            Resume <img className="w-7 h-auto" src={download} alt="" />
                        </button>
                    </div>

                    {/* Toggle Button */}
                    <button
                        className="bg-green-400 px-4 py-2 rounded-lg text-sm sm:text-base"
                        onClick={toggleBoxVisibility}
                    >
                        {buttonText}
                    </button>
                </div>
            </section>

        </>
    );
}

export default About;
