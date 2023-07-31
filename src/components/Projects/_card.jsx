import React from "react";
import temp1 from "../../temp-pic/horse-temp.png";
import temp2 from "../../temp-pic/movies-temp.png";
import temp3 from "../../temp-pic/menu-temp.png";
// import temp2 from '../../temp-pic/horse-temp.png';
const Card = () => {
  return (
    <div className="card-temp">
      <div className="container">
        <div className="head-text">
          <span>01.</span>
          <h3>some things that i've built</h3>
          <hr />
        </div>
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <div className="image">
              <img src={temp1} alt="horse riders" />
              <div>
                <span>
                  <a
                    href="https://ahmedhanyonly.github.io/Horse-Tempalte/index.html"
                    target="_blank"
                  >
                    visit
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="text-content">
              <div className="title">
                <p>featured project</p>
                <h3>horse riders</h3>
              </div>
              <div className="description">
                <div className="main ">
                  A horse rider template that can be used to create a flyer,
                  poster, or other marketing material for a horse riding
                  business. These templates typically include images of horses
                  and riders, as well as text and graphics that can be
                  customized to promote the business.
                </div>
              </div>
              <div className="skills-card">
                <span>html</span>
                <span>css</span>
                <span>javascript</span>
                <span>sass</span>
                <span>bootstrap</span>
                <span>sass</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3 md-temp">
          <div className="col-12 col-md-6">
            <div className="text-content">
              <div className="title">
                <p>featured project</p>
                <h3>movie-dv</h3>
              </div>
              <div className="description">
                <div className=" md">
                  A movie app template built with React This template typically
                  includes all of the necessary files and code to get your app
                  up and running Using a movie app template can save you a lot
                  of time, You can simply customize the template to fit your own
                  needs and preferences.
                </div>
              </div>
              <div className="skills-card">
                <span>react</span>
                <span>redux</span>
                <span>rest-api</span>
                <span>redux toolkit</span>
                <span>bootstrap</span>
                <span>sass</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="image">
              <img src={temp2} alt="horse riders" />
              <div>
                <span>
                  <a
                    target="_blank"
                    href="https://ahmedhanyonly.github.io/Movie-DV/"
                  >
                    visit
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3 ">
          <div className="col-12 col-md-6">
            <div className="image">
              <img src={temp3} alt="horse riders" />
              <div>
                <span>
                  <a
                    target="_blank"
                    href="https://ahmedhanyonly.github.io/Menu-Food/"
                  >
                    visit
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="text-content">
              <div className="title">
                <p>featured project</p>
                <h3>food-menu</h3>
              </div>
              <div className="description">
                <div className="main ">
                  A food menu app template built with React is a great way to
                  get started with creating your own food delivery or restaurant
                  app. These templates typically include all of the necessary
                  code and UI components to create a fully functional app, so
                  you can focus on adding your own content and branding.
                </div>
              </div>
              <div className="skills-card">
                <span>react</span>
                <span>react hooks</span>
                <span>javascript</span>
                <span>css</span>
                <span>sass</span>
                <span>bootstrap</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
