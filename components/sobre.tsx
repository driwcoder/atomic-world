'use client'
import React, { useState, useEffect } from 'react'

const TypingEffect = () => {
  const text =
    'Tenho um ano de experiência como desenvolvedor, durante o qual absorvi conhecimento suficiente para agora estar me especializando no framework NextJS 14, o qual admiro bastante por todas as suas vantagens que demonstra sobre a maioria dos frameworks atuais do mercado.'
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIndex((prevIndex) => prevIndex + 1)
    }, 7.5) // Ajuste a velocidade de digitação aqui

    return () => clearTimeout(timeoutId)
  }, [index])

  return <div>{text.slice(0, index)}</div>
}

export default TypingEffect
