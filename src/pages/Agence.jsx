import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'

const Agence = () => {
    gsap.registerPlugin(ScrollTrigger)
    const imageDivRef = useRef(null)
    const imageRef = useRef(null)
    const imgArray = [
        'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
    ]
    useGSAP(function () {
        gsap.to(imageDivRef.current, {
            scrollTrigger: {
                trigger: imageDivRef.current,
                // markers: true,
                start: 'top 24%',
                end: 'top -150%',
                pin: true,
                pinSpacing: true,
                pinType: 'transform',
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate: (elem) => {
                    let imageIdx;
                    if (elem.progress < 1) {
                        imageIdx = Math.floor(elem.progress * imgArray.length)
                    } else {
                        imageIdx = imgArray.length - 1
                    }
                    imageRef.current.src = imgArray[imageIdx]
                }
            }
        })
    })
    return (
        <>
            <div className='parent text-black'>
                <div className='section1 py-1'>
                    {/* image above the text */}
                    <div
                        ref={imageDivRef}
                        className="absolute lg:h-[20vw] h-[25vw] overflow-hidden lg:rounded-3xl rounded-xl lg:top-96 -top-90  lg:w-[16vw] w-[25vw] lg:left-[30vw] left-[30vw]">
                        <img
                            ref={imageRef}
                            className='object-cover h-full w-full'
                            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
                            alt=""
                        />
                    </div>
                    {/* text */}
                    <div className='relative font-[font2] text-center'>
                        <div className=' lg:mt-[59vh] mt-[30vh]'>
                            <h1 className='uppercase text-[17vw] leading-[17vw]'>
                                Soixan7e<br />Douze
                            </h1>
                        </div>

                        <div className='lg:pl-[40%] lg:mt-20 mt-4 p-3'>
                            <p className='lg:text-6xl text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
                        </div>
                    </div>
                </div>
                <div className="section2 h-screen"></div>
            </div>
        </>
    )
}

export default Agence
