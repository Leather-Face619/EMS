import { useEffect } from 'react';
import { gsap } from 'gsap';

const AllTask = () => {
  useEffect(() => {
    gsap.registerPlugin();

    const cards = gsap.utils.toArray('.bg-red-500, .bg-blue-500, .bg-green-500, .bg-yellow-500, .bg-purple-500');
    cards.forEach(card => {
      card.addEventListener('mouseover', () => gsap.to(card, { paddingLeft: '50px', duration: .7, ease: 'power1.out' }));
      card.addEventListener('mouseleave', () => gsap.to(card, { paddingLeft: '-50px', duration: .7, ease: 'power1.out' }));
    });
  }, []);

  return (
    <div className='mt-5 h-48 overflow-auto '>
<div className="bg-red-500 rounded py-2 my-2 cursor-pointer  px-4 flex justify-between">
        <h2>Leather-Face</h2>
        <h3>Make a UI design</h3>
        <h5>Status</h5>
    </div>
<div className="bg-blue-500 rounded py-2 my-2 cursor-pointer px-4 flex justify-between">
        <h2>Iron-Man</h2>
        <h3>Develop a new feature</h3>
        <h5>Status</h5>
    </div>
<div className="bg-green-500 rounded py-2 my-2 cursor-pointer px-4 flex justify-between">
        <h2>Spider-Man</h2>
        <h3>Fix bugs</h3>
        <h5>Status</h5>
    </div>
<div className="bg-yellow-500 rounded py-2 my-2 cursor-pointer px-4 flex justify-between">
        <h2>Thor</h2>
        <h3>Optimize performance</h3>
        <h5>Status</h5>
    </div>
<div className="bg-purple-500 rounded py-2 my-2 cursor-pointer px-4 flex justify-between">
        <h2>Captain America</h2>
        <h3>Implement new technology</h3>
        <h5>Status</h5>
    </div>
    </div>
  )
}

export default AllTask