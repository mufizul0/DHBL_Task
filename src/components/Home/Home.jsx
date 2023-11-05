import React from 'react';
import heroImag from '../../assets/Homepage_gif.webp'
import { BackgroundBlogCard } from '../Card/Card';
import { BackgroundBlogCard2 } from '../Card2/Card2';
import { BackgroundBlogCard3 } from '../Card3/Card3';
import Contact from '../Contact/Contact';
import HoverCard from '../HoverCard/HoverCard';
import StataAward from '../StatsAward/StataAward';
import BlogSection from '../BlogSection/BlogSection';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
        <div className='mt-6'>
            <div className=' text-start h-full overflow-hidden bg-cover bg-no-repeat ' style={{ backgroundImage: `url(${heroImag})` }}>
                <h1 className=' text-6xl mt-3 ms-4 me-3'>Fabric Sourcing  </h1> <br/> <span className=' text-6xl mt-3 ms-4 me-3'>Simplified  </span>
                <ul className='mt-14 mb-14 '>
                    <li className='text-2xl text-bold ms-3 ' >✦ Tech-enabled design to production</li>
                    <li className='text-2xl text-bold ms-3 '>✦ AI-enabled Design Management</li>
                    <li className='text-2xl text-bold ms-3 '>✦ Trusted by 250+ Private Labels</li>
                </ul>
                <button type="button" className="text-white ms-6 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-5 dark:focus:ring-yellow-900">Explore Our Potential</button>
            </div>
        <h1 className='text-5xl mt-12 text-center mb-10' >We deliver fully customised fabric at low <br/> MOQ to independent fashion businesses <br/> globally.</h1>
     <div className='me-auto gap-7 flex '>
     <BackgroundBlogCard/>
    <BackgroundBlogCard3/>
    <BackgroundBlogCard2/>
    

     </div>
    <h1 className='text-9xl text-[#eab308]  mt-12'>Sourcing Redefined</h1>

  <p className='text-center mt-9 text-3xl'>We Take Complete Ownership of Creating Fabrics.<br/>
 Concept to Delivery.</p>

 <Contact/>
 <div  className='flex gap-14 '>
 <HoverCard />
 <HoverCard />
 <HoverCard />
 </div>
 <StataAward/>
 <BlogSection/>

 <marquee  direction="left"  className="text-7xl font-bold mt-9 mb-5 text-orange-400">
 we support #sustainablefashion
</marquee>
<Footer/>
</div>
        </div>
    );
};

export default Home;