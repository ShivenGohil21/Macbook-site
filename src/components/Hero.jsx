// ...existing code...
import React, { useEffect, useRef } from 'react'


const Hero = () => {
    const videoRef = useRef(null);
    useEffect(()=> {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    }, [])


  return (
    <section id="hero">
        <div>
            <h1>MacBook Pro</h1>
            <img src="/title.png" alt="MacBook Title" />
        </div>
        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline preload="metadata" />
     <button>Buy</button>
     <p>From 2000₹ or 3000₹ for 12 months</p>
    </section>
  )
}

export default Hero
// ...existing code...