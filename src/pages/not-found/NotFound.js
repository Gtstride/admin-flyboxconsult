
import React from 'react';
// import { Link } from 'react-router-dom';
// import lost from "../assets/images/404.jpg";

import NotFoundPageStyle from './NotFoundPageStyle';

const Unauthorized = () => {
  return (
    <div className='container'>
      <NotFoundPageStyle>
        <section className="page_404">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 ">
                <div className="col-sm-10 col-sm-offset-1  text-center">
                  <div className="four_zero_four_bg">
                    <h1 className="text-center ">404</h1>
                  </div>

                  <div className="contant_box_404">
                    <h3 className="h2">
                      Look like you're lost
                    </h3>
                    <p>The page you are looking for is not avaliable, check your link and try again!</p>
                    <a href="/" className="link_404">Go Back Home</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </NotFoundPageStyle>
    </div>
  )
}

export default Unauthorized;