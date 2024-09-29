import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'
import { FaApple } from "react-icons/fa";


const App = () => {
  return <div className='w-full h-screen '>
    <div className="navbar  flex gap-6 p-4 absolute top-0 left-1/2 items-center -translate-x-1/2">
    <span className='text-white '><FaApple /></span>
    {["iPhone" , "iPad" , "Services" , "About" , "Contact" ,"Products","Store","Watch","AirPods"].map((e)=>(
      <a href="" className='text-white  font-[500] text-sm' >{e}</a>
    ))}
    </div>
    <div className='absolute flex flex-col items-center text-white top-32 left-1/2 -translate-x-1/2'>
    <h3 className='glass-text text-7xl tracking-tighter font-[700] '>MacBook Pro.</h3>
    <h5 className='glass-text'>Oh so pro ! </h5>
    </div>
  <Canvas camera={{fov:12 ,  position:[0,-10 ,180]}}>
    <OrbitControls enableZoom={false} />
    <Environment
    files={[
      "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"
    ]}
    />
    <ScrollControls >
    <MacContainer />
    </ScrollControls>

  </Canvas>
  </div>
}

export default App
