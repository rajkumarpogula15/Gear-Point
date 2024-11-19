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
                        <div className="author">Yamaha</div>
                        <div className="title">YZ250F</div>
                        <div className="topic">Rs 7,59,000</div>
                        <div className="des">
                        Lighter, sharper handling, with an all-new frame, more compact body and improved smartphone tuneability, the new generation YZ250F is ready to continue a legacy of dominance in the 250 class.
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src="../../src/assets/img-2.jpg"/>
                    <div className="content">
                        <div className="author">Royal Enfield</div>
                        <div className="title">Hunter 350</div>
                        <div className="topic">Rs 1,49,900</div>
                        <div className="des">
                        This is the new Royal Enfield Hunter 350. It is accessible, affordable, and also customisable. Now the whole point of bringing a motorcycle like this to the Indian market is obviously to make a lot of money, but while doing so, also allows many Indians – college kids, working professionals, even senior citizens for that matter – to ride a motorcycle that is aspirational, stylish, and has a 350cc engine.   
                        </div>

                    </div>
                </div>
                <div className="item">
                    <img src="../../src/assets/img-3.webp"/>
                    <div className="content">
                        <div className="author">TVS</div>
                        <div className="title">Jupiter</div>
                        <div className="topic">Rs 73,700</div>
                        <div className="des">
                          For over a decade, the TVS Jupiter has been more than just a scooter; it's been a trusted companion to over 6.5 million Indians, embodying progress, personal growth, and a spirit of 'MORE'. We're thrilled to introduce the all-new TVS Jupiter 110 and usher in a new decade of ‘MORE’: with more style, more mileage, more performance, more comfort, more convenience, and more safety. Designed with your family in mind, every element of this new Jupiter is crafted to enhance your riding experience.
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- list thumnail --> */}
            <div className="thumbnail h-[15vh]">
                <div className="item ">
                    <img src="../../src/assets/img-1.webp"className='h-[23vh]'/>
                    <div className="content">
                        <div className="title">
                          Yamaha
                        </div>
                        <div className="description">
                          YZ250F
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src="../../src/assets/img-2.jpg"/>
                    <div className="content">
                        <div className="title">
                          Royal Enfield
                        </div>
                        <div className="description">
                          Hunter 350
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src="../../src/assets/img-3.webp"/>
                    <div className="content">
                        <div className="title">
                          TVS
                        </div>
                        <div className="description">
                          Jupiter
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
