import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const reviews = [
  {
    video: 'https://www.youtube.com/embed/8LSt8_11wbQ?si=ZSIZudFdMnoP8I0O', 
    text: 'Great, quality product! Highly recommend it.',
  },
  {
    video: 'https://www.youtube.com/embed/8LSt8_11wbQ?si=ZSIZudFdMnoP8I0O',
    text: 'Assured fast delivery and timely responses to adjutsments..',
  },
  {
    video: 'https://www.youtube.com/embed/8LSt8_11wbQ?si=ZSIZudFdMnoP8I0O',
    text: 'Stress-free process from start to finish!',
  },
];

const Reviews = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      <Carousel showThumbs={true} autoPlay={false} infiniteLoop={false}>
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg">
            {/* the commonly used 16:9 aspect ratio has a padding-bottom of 56.25% (calculated as 9 / 16 * 100). If you want to reduce the height, you can choose a different aspect ratio, like 4:3 or 16:10, or simply adjust the padding-bottom to a lower percentage */}
            <div className="w-full h-0 md:h-1/2 pb-[56.25%] md:pb-[40%] relative max-w-[800px] mx-auto">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={review.video}
                title={`Customer Review ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="my-4 text-center">{review.text}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Reviews;
