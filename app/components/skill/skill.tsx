import React from 'react'
import './skill.css'
export default function Skill() {
    return (
        <>
            <h2 className='text-center text-7xl'>Skills</h2>
            <div className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark flex items-center justify-center mb-64 md:mb-32 rounded-full 
    lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm 
    lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]">


                <div className="cursor-pointer flex rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2">
                    Web
                </div>

                <div
                    className="absolute font-semibold bg-dark text-light py-3 px-6 rounded-full cursor-pointer dark:bg-light dark:text-dark 
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
                    style={{ transform: "translateX(-20vw) translateY(2vw)" }}>
                    HTML
                </div>

                <div
                    className="absolute font-semibold bg-dark text-light py-3 px-6 rounded-full cursor-pointer dark:bg-light dark:text-dark 
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
                    style={{ transform: "translateX(-5vw) translateY(-10vw)" }}
                >
                    CSS
                </div>
                <div
                    className="absolute font-semibold bg-dark text-light py-3 px-6 rounded-full cursor-pointer dark:bg-light dark:text-dark 
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
                    style={{ transform: "translateX(20vw) translateY(6vw)" }}
                >
                    JavaScript
                </div>
                <div
                    className="absolute font-semibold bg-dark text-light py-3 px-6 rounded-full cursor-pointer dark:bg-light dark:text-dark 
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
                    style={{ transform: "translateX(0vw) translateY(12vw)" }}
                >
                    ReactJS
                </div>
                <div
                    className="absolute font-semibold bg-dark text-light py-3 px-6 rounded-full cursor-pointer dark:bg-light dark:text-dark 
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
                    style={{ transform: "translateX(-20vw) translateY(-15vw)" }}
                >
                    NextJS
                </div>
                <div
                    className="absolute font-semibold bg-dark text-light py-3 px-6 rounded-full cursor-pointer dark:bg-light dark:text-dark 
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
                    style={{ transform: "translateX(15vw) translateY(-12vw)" }}>GatsbyJS</div>
                <div
                    className="absolute font-semibold bg-dark text-light py-3 px-6 rounded-full cursor-pointer dark:bg-light dark:text-dark 
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
                    style={{ transform: "translateX(-35vw) translateY(-5vw)" }}>Github</div>
                <div
                    className="absolute font-semibold bg-dark text-light py-3 px-6 rounded-full cursor-pointer dark:bg-light dark:text-dark 
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
                    style={{ transform: "translateX(32vw) translateY(-5vw)" }}>Web Design</div>
                <div
                    className="absolute font-semibold bg-dark text-light py-3 px-6 rounded-full cursor-pointer dark:bg-light dark:text-dark 
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
                    style={{ transform: "translateX(0vw) translateY(-20vw)" }}>Figma</div>
                <div className="absolute font-semibold bg-dark text-light py-3 px-6 rounded-full cursor-pointer dark:bg-light dark:text-dark 
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
                    style={{ transform: "translateX(-25vw) translateY(18vw)" }}>Firebase</div>
                <div
                    className="absolute font-semibold bg-dark text-light py-3 px-6 rounded-full cursor-pointer dark:bg-light dark:text-dark 
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
                    style={{ transform: "translateX(28vw) translateY(18vw)" }}>Tailwind CSS</div>

            </div>

        </>
    )
}
