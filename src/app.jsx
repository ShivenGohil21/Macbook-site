// import React from 'react'
// import NavBar from './components/NavBar'
// import Hero from './components/Hero'
// import ProductViewer from './components/ProductViewer'
// import gsap from 'gsap'
// import  { ScrollTrigger } from "gsap/all";

// gsap.registerPlugin{ScrollTrigger}
// const App = () => {
//   return (
//     <main>
//         <NavBar/>
//         <Hero />
//         <ProductViewer />
//     </main>
//   )
// }

// export default App

// ...existing code...
import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap'
// changed: import plugin from its module and register it correctly
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const App = () => {
  return (
    <main>
        <NavBar/>
        <Hero />
        <ProductViewer />
    </main>
  )
}

export default App
// ...existing code...