import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HomeCarousel = () => {
  return (
    <>
      <div className="mt-[-30px]"> {/* Adjusted to move up */}
        <Carousel 
          autoPlay 
          infiniteLoop 
          showThumbs={false} 
          showStatus={false}
          interval={2000} // Adjust interval for autoplay
          transitionTime={1000} // Smooth transition
        >
          <div>
            <img className="h-[85vh] object-cover" src="https://cdn.bajajauto.com/-/media/images/ktm/home-page/home-banners/ktm-home-banners/click-web.webp" />
          </div>
          <div>
            <img className="h-[85vh] object-cover" src="https://www.royalenfield.com/content/dam/re-ev/flying-flea-ev-desktop.jpg" />
          </div>
          <div>
            <img className="h-[85vh] object-cover" src="https://www.tvsmotor.com/-/media/HomeOptimizedImages/TVS-Home-Page-WebP/Desktop/TVS125_1366x600.webp" />
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default HomeCarousel;
