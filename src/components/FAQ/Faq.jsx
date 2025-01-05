import React from 'react';

const Faq = () => {
    return (
        <div className='flex flex-col items-center mt-20 mb-20'>

            <div className='w-11/12' data-aos="fade-up" data-aos-duration="1000">
                <h2 className='text-3xl font-bold'>FAQ </h2>
                <div className="join join-vertical mt-5  w-full">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">What should I pack for an eco-adventure trip?</div>
                        <div className="collapse-content">
                            <p>Each adventure has specific requirements, but essentials include comfortable clothing, sturdy footwear, reusable water bottles, and any personal medications. For detailed packing tips, check the special instructions section for each adventure.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">Are these adventures suitable for beginners?</div>
                        <div className="collapse-content">
                            <p>Many of our adventures, like forest expeditions and camping retreats, are beginner-friendly. Each trip includes an adventure level (e.g., easy, moderate, challenging) to help you choose the best fit for your experience and fitness level.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">How do I ensure my trip is eco-friendly?</div>
                        <div className="collapse-content">
                            <p>We emphasize sustainable travel by minimizing waste, using local guides, and offering reusable camping gear. Participants are encouraged to respect nature, follow the “leave no trace” principles, and support local communities.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">How do I book an adventure?</div>
                        <div className="collapse-content">
                            <p>Booking is simple! Click the "Explore Now" button on the adventure page of your choice and complete the booking form. Availability for each adventure is updated regularly. For assistance, you can also talk to our experts.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">What safety measures are in place for these trips?</div>
                        <div className="collapse-content">
                            <p>Safety is a top priority. All trips are led by experienced guides who are trained in first aid. We also ensure necessary permits, follow weather forecasts, and provide safety equipment like helmets, ropes, and life vests, where applicable.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;