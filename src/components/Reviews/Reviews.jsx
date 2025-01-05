import React, { useEffect, useState } from 'react';
import ReactStars from 'react-stars';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("/reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div className='flex flex-col items-center mt-7'>
            <div className='w-11/12'>
                <div className='w-full'>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Customer Reviews
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {reviews.map((review) => (
                            <div
                                data-aos="fade-up" data-aos-duration="1000"
                                key={review.ReviewID}
                                className="p-4 border rounded-lg shadow-md bg-white"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xl font-semibold text-gray-700">
                                        {review.CustomerName}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {new Date(review.ReviewDate).toLocaleDateString()}
                                    </p>
                                </div>
                                <div className="flex items-center mb-4">
                                    <ReactStars count={5} value={review.Rating} size={24} isHalf={true} edit={false} />
                                </div>
                                <p className="text-gray-600">{review.ReviewText}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;