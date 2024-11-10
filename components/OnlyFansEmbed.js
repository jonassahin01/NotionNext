import React, { useEffect } from 'react'

const OnlyFansEmbed = () => {
  useEffect(() => {
    setTimeout(() => {
      const notionTextElements = document.querySelectorAll('div.notion-text')

      notionTextElements?.forEach(element => {
        if (element.innerHTML.trim() === '&lt;onlyfans/&gt;') {
          // Create the OnlyFans button with Tailwind classes
          const onlyFansButton = document.createElement('a')
          onlyFansButton.className = `
            relative inline-flex items-center justify-center w-full
            bg-white text-gray-800 font-bold rounded-lg px-4 py-3
            text-lg overflow-hidden border-2 border-transparent
            transition duration-200 hover:text-gray-900 hover:border-gray-500
          `
          onlyFansButton.href = 'https://onlyfans.com/sofiaavallone' // Replace with your OnlyFans profile URL
          onlyFansButton.target = '_blank'
          onlyFansButton.rel = 'noopener noreferrer'

          // Add glowing background animation with Tailwind classes
          onlyFansButton.style.backgroundImage = `
            linear-gradient(90deg,
              rgba(255, 0, 102, 0.6), rgba(255, 153, 0, 0.6),
              rgba(51, 204, 255, 0.6), rgba(255, 0, 102, 0.6))
          `
          onlyFansButton.style.backgroundSize = '300% 300%'
          onlyFansButton.style.animation = 'glowing-border 3s linear infinite'

          // Create SVG icon
          const svgIcon = document.createElement('span')
          svgIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor" class="mr-2">
              <path d="M24 4.003h-4.015c-3.45 0-5.3.197-6.748 1.957a7.996 7.996 0 1 0 2.103 9.211c3.182-.231 5.39-2.134 6.085-5.173c0 0-2.399.585-4.43 0c4.018-.777 6.333-3.037 7.005-5.995M5.61 11.999A2.391 2.391 0 0 1 9.28 9.97a2.966 2.966 0 0 1 2.998-2.528h.008c-.92 1.778-1.407 3.352-1.998 5.263A2.392 2.392 0 0 1 5.61 12Zm2.386-7.996a7.996 7.996 0 1 0 7.996 7.996a7.996 7.996 0 0 0-7.996-7.996m0 10.394A2.399 2.399 0 1 1 10.395 12a2.396 2.396 0 0 1-2.399 2.398Z"/>
            </svg>
          `

          // Create text span
          const text = document.createElement('span')
          text.innerText = 'Follow me on OnlyFans'
          text.className = 'relative z-10' // Ensure text is above animation layer

          // Append icon and text to button
          onlyFansButton.appendChild(svgIcon)
          onlyFansButton.appendChild(text)

          // Place a pseudo-element using Tailwind for background glow effect
          const glowEffect = document.createElement('div')
          glowEffect.className = `absolute inset-0 rounded-lg bg-transparent z-0`
          glowEffect.style.borderRadius = 'inherit'
          onlyFansButton.appendChild(glowEffect)

          // Replace original div with the OnlyFans button
          element?.parentNode?.replaceChild(onlyFansButton, element)
        }
      })
    }, 1000)
  }, [])

  return (
    <>
      <style>
        {`
          @keyframes glowing-border {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </>
  )
}

export default OnlyFansEmbed
