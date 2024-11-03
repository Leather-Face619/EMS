import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const TaskListNum = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card,index) => {
        const tl = gsap.timeline({ paused: true }); 
        tl.to(card, {
          scale: 1.1,
          duration: 0.3,
          ease: "power1.inOut"
        });

      card.addEventListener('mouseenter', () => {
        tl.play(); 
      });

      card.addEventListener('mouseleave', () => {
        tl.reverse(); 
      });
    });
  }, []); 

  return (
    <div className='flex mt-12 justify-between gap-5 screen '>
      <div 
        ref={(el) => cardRefs.current[0] = el} 
        className='card rounded-xl w-[45%] bg-blue-400 py-5 px-9'>
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-semibold">New task</h3>
      </div>
      <div 
        ref={(el) => cardRefs.current[1] = el} 
        className='card rounded-xl w-[45%] bg-blue-500 py-5 px-9'>
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-semibold">New task</h3>
      </div>
      <div 
        ref={(el) => cardRefs.current[2] = el} 
        className='card rounded-xl w-[45%] bg-blue-600 py-5 px-9'>
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-semibold">New task</h3>
      </div>
      <div 
        ref={(el) => cardRefs.current[3] = el} 
        className='card rounded-xl w-[45%] bg-blue-700 py-5 px-9'>
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-semibold">New task</h3>
      </div>
    </div>
  );
}

export default TaskListNum;