import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottom from '../components/home/HomeBottom'

const Home = () => {
    return ( 
        <>
            <div className='text-white'>
                <div className='h-screen w-full fixed'><Video /></div>
                <div className='h-screen w-screen overflow-hidden relative justify-between pb-5 flex flex-col'>
                    <HomeHeroText />
                    <HomeBottom />
                </div>
            </div>
        </>
    )
}

export default Home