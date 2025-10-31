// ...existing code...
import React from 'react'
import '../index.css'
import clsx from 'clsx'
import useMackBookStore from '../store'
import { Canvas } from '@react-three/fiber'
import { Box, OrbitControls } from '@react-three/drei'

const ProductViewer = () => {
    // return logic at store/useMacBookStore
    const {color, scale, setColor, setScale} = useMackBookStore();  
  return (
    <section id="product-viewer">
        <h2>Take a Closer look</h2>
        <div className='controls'>
            <p className='info'>MacBookPro {scale} in {color}</p>

            <div className='flex-center gap-5 mt-5'>
                <div className='color-control'>
                    {/* button styling */}
                    <div onClick={()=> setColor('#abd5db')}
                     className={clsx('bg-neutral-300', color === '#abd5db' && 'active')}
                      />

                    <div onClick={()=> setColor('#2e2c2e')}
                     className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')}
                      />
                </div>

                <div className="size-control">
                    <div onClick={()=> setScale(0.06)}
                     className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}
                      > 
                        <p>14&quot;</p>
                      </div>

                    <div onClick={()=> setScale(0.08)}
                     className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}
                      > 
                        <p>16&quot;</p>
                      </div>
                </div>
            </div>
        </div>

        <Canvas id='canvas' camera={{ position:[0, 2, 5], fov: 50, near: 0.1, far: 100}}>
            <Box position={[-1, 1, 0]} scale={10 * scale} material-color={color} />

            <OrbitControls enableZoom={false} />

        </Canvas>
      
      <p className='text-white text-4xl'>Render Canvas</p>
    </section>
  )
}

export default ProductViewer
// ...existing code...