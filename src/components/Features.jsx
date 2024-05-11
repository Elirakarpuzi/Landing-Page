import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="col-xs-12">
                    <div className="feature">
                      <div className="feature-img">
                        <img src={d.img} alt={d.title} width="100" height="100" />
                      </div>
                      <div className="feature-content">
                        <h3>{d.title}</h3>
                          <div className="text">
                              {d.text.split('\n').map((line, index) => (
                                  <p key={index}>{line}</p>
                              ))}
                          </div>
                      </div>
                    </div>
                  </div>
              ))
              : "Loading..."}
        </div>
      </div>
    </div>
  );
};
