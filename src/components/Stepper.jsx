import React, { useState } from 'react'
import { IoCheckmark } from 'react-icons/io5'

const Stepper = ({ currentStep, numberOfSteps, isFinalStep }) => {
  const activeColor = (index) =>
    currentStep >= index ? 'bg-green-600' : 'bg-gray-300'
  const steps = ['Received at 4.14', 'Processed', 'Shipped at 5.30', 'Delivered']

  const [hoveredStep, setHoveredStep] = useState(null)

  return (
    <div>
      <div className="flex flex-wrap flex-row justify-around items-center py-5 lg:py-20">
        {Array.from({ length: numberOfSteps }).map((_, index) => (
          <div
            key={index}
            className="relative flex items-center"
            onMouseEnter={() => setHoveredStep(index)}
            onMouseLeave={() => setHoveredStep(index)}
          >
            <div className={`w-6 h-6 rounded-full ${activeColor(index)}`}></div>
            {!isFinalStep && index !== numberOfSteps - 1 && (
              <>
                <div className={`w-14 h-1 ${activeColor(index)}`}></div>
                <div>
                  <IoCheckmark />
                </div>
              </>
            )}
            {hoveredStep === index || index === numberOfSteps - 3 && (
              <div className="absolute bg-white rounded-lg shadow-md p-2 text-xs">
                {steps[index]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stepper
