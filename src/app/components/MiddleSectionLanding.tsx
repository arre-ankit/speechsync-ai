import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

type Props = {}

const MiddleSectionLanding = (props: Props) => {
  const benefits = [
    {
      text: '"It is free and easy to use"',
      highlight: 'free and easy'
    },
    {
      text: '"The possibility to record speech and get feedback without the need to arrange appointments is the main benefit"',
      highlight: 'without the need to arrange appointments'
    },
    {
      text: '"It can evaluate pronunciation and reveal my grammar mistakes and sometimes pronunciation mistakes for my speaking"',
      highlight: 'evaluate'
    },
    {
      text: '"You can practice and learn anywhere by smartphone"',
      highlight: 'anywhere'
    },
    {
      text: '"Practice anytime, anywhere using our responsive web app, fitting seamlessly into your busy schedule."',
      highlight: 'Practice anytime, anywhere'
    },
    {
      text: '"Enhance your prospects for remote work opportunities with international companies by refining your English communication skills."',
      highlight: 'refining your English'
    }
  ]
  return (
    <section className="w-full py-12 md:py-24 lg:py-60">
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-2">
        Benefits Our Users Receive from <span className="text-primary">SpeechSync</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
        {benefits.map((benefit, index) => (
          <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <p className="text-gray-800 text-sm">
                {benefit.text.split(benefit.highlight).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="font-semibold text-primary">{benefit.highlight}</span>
                    )}
                  </span>
                ))}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
  )
}
export default MiddleSectionLanding