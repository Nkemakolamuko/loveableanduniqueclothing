import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const reviews = [
  {
    image: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljdHVyZSUyMG9mJTIwYmxhY2slMjBsYWRpZXN8ZW58MHx8MHx8fDA%3D', 
    text: 'Great, quality product! Highly recommend it.',
  },
  {
    image: 'https://images.unsplash.com/photo-1509679708047-e0e562d21e44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYWNrJTIwbGFkaWVzfGVufDB8fDB8fHww',
    text: 'Assured fast delivery and timely responses to adjustments.',
  },
  {
    image: 'https://images.unsplash.com/photo-1634727898501-a76b30bc2c9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwbWVufGVufDB8fDB8fHww',
    text: 'Stress-free process from start to finish!',
  },
];

const Reviews = () => {
  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Customer Reviews</h2>
      <Carousel showThumbs={true} autoPlay={false} infiniteLoop={false}>
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center max-w-5xl mx-auto">
            <div className="flex justify-center">
              <img 
                src={review.image}
                alt={`Customer ${index + 1}`}
                className="w-40 h-40 md:w-64 md:h-64 rounded-md md:rounded-md mb-4 object-cover"
              />
            </div>
            <p className="text-center px-4 mb-4">{review.text}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Reviews;
