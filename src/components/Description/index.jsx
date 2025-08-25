import {useLayoutEffect, useRef} from 'react'
import styles from './styles.module.css'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

function Index() {

  const phrases = [
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatum.',
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,',
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatum.',
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,',
  ]

  return (
    <div className={styles.description}>
      {phrases.map((phrases, Index) => {
        return <AnimatedText key={Index}>{phrases}</AnimatedText>
      })}
    </div>
  )
}

function AnimatedText({ children }) {

  const text = useRef(null)

  useLayoutEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(text.current,{
      scrollTrigger: {
        trigger: text.current,
        start: 'top bottom',
        end: 'bottom+=400px bottom',
        scrub: true,
        markers: true,
      },
      right:'-200px',
      opacity:0
    })
  },[])

  return <p ref={text}>{children}</p>
}

export default Index
