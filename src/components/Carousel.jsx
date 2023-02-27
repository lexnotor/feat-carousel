import React from 'react'
import { useRef } from 'react'
import pexels from '../assets/pexels.jpg'

const Carousel = () => {
    const cRef = useRef(null);
    const btnPrevRef = useRef(null);
    const btnNextRef = useRef(null);
    const incr = () => {
        const se = cRef.current.querySelector('.a-selected');
        if (se.nextSibling == btnNextRef || se.nextSibling == null) return;
        se.nextSibling.classList.toggle('a-selected');
        se.classList.toggle('a-selected');
    }
    const dincr = () => {
        const se = cRef.current.querySelector('.a-selected');
        se.previousSibling.classList.toggle('a-selected');
        se.classList.toggle('a-selected');
    }
    return (
        <div>
            <div ref={cRef} className='car-wapper'>
                <div></div>
                <div></div>
                <div className='a-selected'><img src={pexels} alt="" /></div>
                <div><img src={pexels} alt="" /></div>
                <div><img src={pexels} alt="" /></div>
                <div><img src={pexels} alt="" /></div>
                <div><img src={pexels} alt="" /></div>
                <div><img src={pexels} alt="" /></div>
                <div><img src={pexels} alt="" /></div>
                <div><img src={pexels} alt="" /></div>
            </div>
            <button ref={btnPrevRef} onClick={dincr} className='p-3 bg-slate-700 text-white m-2 rounded' >&lt;</button>
            <button ref={btnNextRef} onClick={incr} className='p-3 bg-slate-700 text-white m-2 rounded' >&gt;</button>
        </div>
    )
}

export default Carousel