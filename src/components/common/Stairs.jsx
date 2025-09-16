import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {
    const StairsRef = useRef(null)
    const PageRef = useRef(null)
    const currPath = useLocation().pathname
    useGSAP(function () {
        const tl = gsap.timeline();
        tl.to(StairsRef.current, {
            display: 'block'
        })
        tl.from('.stairs', {
            height: 0,
            stagger: {
                amount: -0.22
            }
        })
        tl.to('.stairs', {
            y: '100%',
            stagger: {
                amount: -0.22
            }
        })
        tl.to(StairsRef.current, {
            display: 'none'
        })
        tl.to('.stairs', {
            y: '0%',
        })
        gsap.from(PageRef.current, {
            opacity: 0,
            delay: 1.3,
            scale: 1.2
        })
    }, [currPath])
    return (
        <div>
            <div ref={StairsRef} className='h-screen w-full z-20 fixed top-0'>
                <div className='flex h-full w-full'>
                    <div className='stairs h-full w-1/5 bg-black'></div>
                    <div className='stairs h-full w-1/5 bg-black'></div>
                    <div className='stairs h-full w-1/5 bg-black'></div>
                    <div className='stairs h-full w-1/5 bg-black'></div>
                    <div className='stairs h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={PageRef}>{props.children}
            </div>
        </div>
    )
}

export default Stairs