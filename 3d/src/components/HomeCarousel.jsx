// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// const HomeCarousel = () => {
//   return (
//     <>
//       <div> {/* Adjusted to move up */}
//         <Carousel 
//           autoPlay 
//           infiniteLoop 
//           showThumbs={false} 
//           showStatus={false}
//           interval={2000} // Adjust interval for autoplay
//           transitionTime={1000} // Smooth transition
//         >
//           <div>
//             <img className="h-[84vh] object-cover" src="https://cdn.bajajauto.com/-/media/images/ktm/home-page/home-banners/ktm-home-banners/click-web.webp" />
//           </div>
//           <div>
//             <img className="h-[84vh] object-cover" src="https://www.royalenfield.com/content/dam/re-ev/flying-flea-ev-desktop.jpg" />
//           </div>
//           <div>
//             <img className="h-[85vh] object-cover" src="https://www.tvsmotor.com/-/media/HomeOptimizedImages/TVS-Home-Page-WebP/Desktop/TVS125_1366x600.webp" />
//           </div>
//         </Carousel>
//       </div>
//     </>
//   );
// }

// export default HomeCarousel;

import React,{useEffect}from 'react'

import '../../src/assets/css/carousel.css'

const HomeCarousel = () => {
  useEffect(() => {
    const nextDom = document.getElementById('next');
    const prevDom = document.getElementById('prev');

    const carouselDom = document.querySelector('.carousel');
    const sliderDom = carouselDom.querySelector('.list');
    const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    const timeDom = document.querySelector('.carousel .time');

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

    let timeRunning = 3000;
    let timeAutoNext = 3500;

    const showSlider = (type) => {
      const sliderItemsDom = sliderDom.querySelectorAll('.carousel .list .item');
      const thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

      if (type === 'next') {
        sliderDom.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
      } else {
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    };

    nextDom.onclick = () => {
      showSlider('next');
    };

    prevDom.onclick = () => {
      showSlider('prev');
    };

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    // Clean up to avoid memory leaks
    return () => {
      nextDom.onclick = null;
      prevDom.onclick = null;
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, []);

  return (
    <>
      <div  className='z-10'>   
        <header>
        </header>
        <div className="carousel">
            {/* <!-- list item --> */}
            <div className="list">
                <div className="item">
                    <img src="../../src/assets/img-1.webp"/>
                    <div className="content">
                        <div className="author">LUNDEV</div>
                        <div className="title">DESIGN SLIDER</div>
                        <div className="topic">meher</div>
                        <div className="des">
                            Lorem ipsum dolor, sit  amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src="../../src/assets/img-2.jpg"/>
                    <div className="content">
                        <div className="author">LUNDEV</div>
                        <div className="title">DESIGN SLIDER</div>
                        <div className="topic">raj</div>
                        <div className="des">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                        </div>

                    </div>
                </div>
                <div className="item">
                    <img src="../../src/assets/img-3.webp"/>
                    <div className="content">
                        <div className="author">LUNDEV</div>
                        <div className="title">DESIGN SLIDER</div>
                        <div className="topic">umesh</div>
                        <div className="des">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- list thumnail --> */}
            <div className="thumbnail">
                <div className="item">
                    <img src="../../src/assets/img-1.webp"/>
                    <div className="content">
                        <div className="title">
                            Name Slider
                        </div>
                        <div className="description">
                            Description
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src="../../src/assets/img-2.jpg"/>
                    <div className="content">
                        <div className="title">
                            Name Slider
                        </div>
                        <div className="description">
                            Description
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src="../../src/assets/img-3.webp"/>
                    <div className="content">
                        <div className="title">
                            Name Slider
                        </div>
                        <div className="description">
                            Description
                        </div>
                    </div>
                </div>

            </div>
            {/* <!-- next prev --> */}

            <div className="arrows">
              <button id="prev">&lt;</button>
              <button id="next">&gt;</button>

            </div>
            {/* <!-- time running --> */}
            <div className="time"></div>
        </div>
      </div>  

    </>
  )
}

export default HomeCarousel
