import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">

      <div className="container">
        <div className="section-title text-center">
          <h2>Reviews</h2>
        </div>
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-xs-12 col-md-6">
                      <div className="about-text">
                          <p>I wanted to share what a fantastic experience I had with your BotCamps. As someone relatively new to DevOps, I was initially hesitant, but your team quickly made me feel welcome and supported. The content was thorough yet easy to understand, and the hands-on exercises were incredibly valuable. Your instructors were both knowledgeable and passionate, making the learning experience truly enjoyable. Thanks to your BotCamps, I now feel confident and equipped to tackle real-world DevOps challenges. Looking forward to future engagements with your company!</p>
                      </div>
                  </div>
                  <div className="col-xs-12 col-md-6">
                      <div style={{height: '100%'}}> {/* Set a fixed height for the container */}
                          <img src="img/review.jpg" className="img-responsive" alt="" style={{height: '100%', width: 'auto'}} /> {/* Set image height to 100% and width auto */}
                      </div>
                      <div className="testimonial-meta"> - Yasin.A </div>
                  </div>
              </div>
          </div>
          <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
