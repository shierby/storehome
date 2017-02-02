import React from 'react';

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="container">
          <div className="subscribe_content">
            <p>subscibe</p>
            <h1>Stay updated on news</h1>
            <div className="inner-addon right-addon">
            <i className="glyphicon glyphicon-chevron-right"></i>
            <input className="email_input form-control" type="email" placeholder="YOUR EMAIL ADDRESS"/>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Subscribe;