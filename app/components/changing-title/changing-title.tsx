"use client"

import { useState, useEffect } from "react"

export default function ChangingTitle() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const listNames = ["frontend", "backend", "devops", "mobile", "UI/UX"]

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let currentText = ""
    let currentChar = 0

    const typeText = () => {
      if (currentChar < listNames[currentIndex].length) {
        currentText += listNames[currentIndex][currentChar]
        setDisplayText(currentText)
        currentChar++
        timeoutId = setTimeout(typeText, 100) // Adjust speed here
      } else {
        timeoutId = setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % listNames.length)
        }, 1000) // Wait before moving to next word
      }
    }

    typeText()

    return () => clearTimeout(timeoutId)
  }, [currentIndex])

  return (
    <div className="">
      <h1 className="text-xl md:text-4xl font-bold text-gray-800 mb-4">
        I am into{" "}
        <span className="relative inline-block text-blue-600">
          <span className="animate-typing border-r-4 border-blue-600 pr-1 animate-blink">{displayText}</span>
        </span>
      </h1>
    </div>
  )
}

