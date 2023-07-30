import React from "react";
import { useState } from "react";
// template-pic
import temp1 from "../../temp-pic/horse-temp.png";
import temp2 from "../../temp-pic/menu-temp.png";
import temp3 from "../../temp-pic/movies-temp.png";
import temp4 from "../../temp-pic/add-tasks.png";
import temp5 from "../../temp-pic/temp1.png";
import temp6 from "../../temp-pic/temp2.png";
import temp7 from "../../temp-pic/temp3.png";
import temp8 from "../../temp-pic/speed-type.png";
import temp9 from "../../temp-pic/sha7n.png";
import temp10 from "../../temp-pic/data-reminder.png";
import temp11 from "../../temp-pic/color-slider.png";
import temp12 from "../../temp-pic/card.png";
import temp13 from "../../temp-pic/waja.png";
import temp14 from "../../temp-pic/Clinic-Receipt.png";
// skills-pic
import skill1 from "../../skills/html.png";
import skill2 from "../../skills/css.png";
import skill3 from "../../skills/js.png";
import skill4 from "../../skills/sass.png";
import skill5 from "../../skills/jquery.png";
import skill7 from "../../skills/nextjs.png";
import skill8 from "../../skills/redux.png";
import skill9 from "../../skills/github.png";
import skill11 from "../../skills/react.png";
import skill12 from "../../skills/typescript.png";
const Project = () => {
  const [tougle, setTougle] = useState(1);
  // const tapActive = (id)=>{
  //   setTougle(id)
  // }
  return (
    <div className="project">
      <h3>project</h3>
      <div className="container">
        <div className="menu">
          <ul>
            <li
              className={tougle === 1 ? "item active" : "item"}
              onClick={() => setTougle(1)}
            >
              <span>All</span>
            </li>
            <li
              className={tougle === 2 ? "item active" : "item"}
              onClick={() => setTougle(2)}
            >
              <span>application</span>
            </li>
            <li
              className={tougle === 3 ? "item active" : "item"}
              onClick={() => setTougle(3)}
            >
              <span>app design</span>
            </li>
            <li
              className={tougle === 4 ? "item active" : "item"}
              onClick={() => setTougle(4)}
            >
              <span>web design</span>
            </li>
          </ul>
          <div className={tougle === 1 ? "content show" : "content"}>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="box">
                  <div className="title-box">
                    <h3>horse riders</h3>
                    <div className="skills-projects">
                      <img src={skill1} alt="" />
                      <img src={skill2} alt="" />
                      <img src={skill3} alt="" />
                      <img src={skill4} alt="" />
                      <img src={skill9} alt="" />
                    </div>
                    <div className="text">
                      <a
                        target="_blank"
                        href="https://ahmedhanyonly.github.io/Horse-Tempalte/index.html"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                  <div className="image">
                    <img src={temp1} alt="horse" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="box">
                  <div className="title-box">
                    <h3>FOOD-MENU APP </h3>
                    <div className="skills-projects">
                      <img src={skill11} alt="" />
                      <img src={skill2} alt="" />
                      <img src={skill3} alt="" />
                      <img src={skill4} alt="" />
                      <img src={skill5} alt="" />
                    </div>
                    <div className="text">
                      <a
                        target="_blank"
                        href="https://ahmedhanyonly.github.io/Menu-Food/"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                  <div className="image">
                    <img src={temp2} alt="horse" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="box">
                  <div className="title-box">
                    <h3>MOVIE-DV </h3>
                    <div className="skills-projects">
                      <img src={skill11} alt="" />
                      <img src={skill8} alt="" />
                      <img src={skill7} alt="" />
                      <img src={skill4} alt="" />
                      <img src={skill12} alt="" />
                    </div>
                    <div className="text">
                      <a
                        target="_blank"
                        href="https://ahmedhanyonly.github.io/Movie-DV/"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                  <div className="image">
                    <img src={temp3} alt="horse" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="box">
                  <div className="title-box">
                    <h3>mountain </h3>
                    <div className="skills-projects">
                      <img src={skill1} alt="" />
                      <img src={skill2} alt="" />
                      <img src={skill3} alt="" />
                      <img src={skill9} alt="" />
                    </div>
                    <div className="text">
                      <a
                        target="_blank"
                        href="https://ahmedhanyonly.github.io/Training-Template1/"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                  <div className="image">
                    <img src={temp5} alt="horse" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="box">
                  <div className="title-box">
                    <h3> speed type</h3>
                    <div className="skills-projects">
                      <img src={skill1} alt="" />
                      <img src={skill2} alt="" />
                      <img src={skill3} alt="" />
                      <img src={skill9} alt="" />
                    </div>
                    <div className="text">
                      <a
                        target="_blank"
                        href="https://ahmedhanyonly.github.io/Speed-Typing/"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                  <div className="image">
                    <img src={temp8} alt="horse" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="box">
                  <div className="title-box">
                    <h3>casper </h3>
                    <div className="skills-projects">
                      <img src={skill1} alt="" />
                      <img src={skill2} alt="" />
                      <img src={skill3} alt="" />
                      <img src={skill9} alt="" />
                    </div>
                    <div className="text">
                      <a
                        target="_blank"
                        href="https://ahmedhanyonly.github.io/Training-Template2/"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                  <div className="image">
                    <img src={temp6} alt="horse" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="box">
                  <div className="title-box">
                    <h3>waja hotel </h3>
                    <div className="skills-projects">
                      <img src={skill1} alt="" />
                      <img src={skill2} alt="" />
                      <img src={skill3} alt="" />
                      <img src={skill4} alt="" />
                      <img src={skill9} alt="" />
                    </div>
                    <div className="text">
                      <a
                        target="_blank"
                        href="https://ahmedhanyonly.github.io/Waja-Hotals-Template/"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                  <div className="image">
                    <img src={temp13} alt="horse" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="box">
                  <div className="title-box">
                    <h3>client-data </h3>
                    <div className="skills-projects">
                      <img src={skill1} alt="" />
                      <img src={skill2} alt="" />
                      <img src={skill3} alt="" />
                      <img src={skill9} alt="" />
                    </div>
                    <div className="text">
                      <a
                        target="_blank"
                        href="https://ahmedhanyonly.github.io/sha7n/"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                  <div className="image">
                    <img src={temp9} alt="horse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={tougle === 2 ? "content show" : "content"}>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="box">
                  <div className="title-box">
                    <h3>FOOD-MENU APP </h3>
                    <div className="skills-projects">
                      <img src={skill11} alt="" />
                      <img src={skill2} alt="" />
                      <img src={skill3} alt="" />
                      <img src={skill4} alt="" />
                      <img src={skill5} alt="" />
                    </div>
                    <div className="text">
                      <a
                        target="_blank"
                        href="https://ahmedhanyonly.github.io/Menu-Food/"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                  <div className="image">
                    <img src={temp2} alt="horse" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="box">
                  <div className="title-box">
                    <h3>MOVIE-DV </h3>
                    <div className="skills-projects">
                      <img src={skill11} alt="" />
                      <img src={skill8} alt="" />
                      <img src={skill7} alt="" />
                      <img src={skill4} alt="" />
                      <img src={skill12} alt="" />
                    </div>
                    <div className="text">
                      <a
                        target="_blank"
                        href="https://ahmedhanyonly.github.io/Movie-DV/"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                  <div className="image">
                    <img src={temp3} alt="horse" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="box">
                  <div className="title-box">
                    <h3> speed type</h3>
                    <div className="skills-projects">
                      <img src={skill1} alt="" />
                      <img src={skill2} alt="" />
                      <img src={skill3} alt="" />
                      <img src={skill9} alt="" />
                    </div>
                    <div className="text">
                      <a
                        target="_blank"
                        href="https://ahmedhanyonly.github.io/Speed-Typing/"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                  <div className="image">
                    <img src={temp8} alt="horse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={tougle === 3 ? "content show" : "content"}>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="box">
                  <div className="title-box">
                    <h3>client-data </h3>
                    <div className="skills-projects">
                      <img src={skill1} alt="" />
                      <img src={skill2} alt="" />
                      <img src={skill3} alt="" />
                      <img src={skill4} alt="" />
                      <img src={skill9} alt="" />
                    </div>
                    <div className="text">
                      <a
                        target="_blank"
                        href="https://ahmedhanyonly.github.io/sha7n/"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                  <div className="image">
                    <img src={temp9} alt="horse" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="box">
                  <div className="title-box">
                    <h3>Notes-App </h3>
                    <div className="skills-projects">
                      <img src={skill1} alt="" />
                      <img src={skill2} alt="" />
                      <img src={skill3} alt="" />
                      <img src={skill9} alt="" />
                    </div>
                    <div className="text">
                      <a
                        target="_blank"
                        href="https://ahmedhanyonly.github.io/Notes-App/"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                  <div className="image">
                    <img src={temp4} alt="horse" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="box">
                  <div className="title-box">
                    <h3>Data-Reminder </h3>
                    <div className="skills-projects">
                      <img src={skill11} alt="" />
                      <img src={skill4} alt="" />
                      <img src={skill3} alt="" />
                      <img src={skill9} alt="" />
                      <img src={skill12} alt="" />
                    </div>
                    <div className="text">
                      <a
                        target="_blank"
                        href="https://ahmedhanyonly.github.io/Data-Reminder/"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                  <div className="image">
                    <img src={temp10} alt="horse" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="box">
                  <div className="title-box">
                    <h3>Color-Slider </h3>
                    <div className="skills-projects">
                      <img src={skill1} alt="" />
                      <img src={skill2} alt="" />
                      <img src={skill3} alt="" />
                      <img src={skill9} alt="" />
                    </div>
                    <div className="text">
                      <a
                        target="_blank"
                        href="https://ahmedhanyonly.github.io/Color-Slider/"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                  <div className="image">
                    <img src={temp11} alt="horse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={tougle === 4 ? "content show" : "content"}>
            <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
                <div className="box">
                  <div className="title-box">
                    <h3>waja hotel </h3>
                    <div className="skills-projects">
                      <img src={skill1} alt="" />
                      <img src={skill2} alt="" />
                      <img src={skill3} alt="" />
                      <img src={skill4} alt="" />
                      <img src={skill9} alt="" />
                    </div>
                    <div className="text">
                      <a
                        target="_blank"
                        href="https://ahmedhanyonly.github.io/Waja-Hotals-Template/"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                  <div className="image">
                    <img src={temp13} alt="horse" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="box">
                  <div className="title-box">
                    <h3>horse riders</h3>
                    <div className="skills-projects">
                      <img src={skill1} alt="" />
                      <img src={skill2} alt="" />
                      <img src={skill3} alt="" />
                      <img src={skill4} alt="" />
                      <img src={skill9} alt="" />
                    </div>
                    <div className="text">
                      <a
                        target="_blank"
                        href="https://ahmedhanyonly.github.io/Horse-Tempalte/index.html"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                  <div className="image">
                    <img src={temp1} alt="horse" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="box">
                  <div className="title-box">
                    <h3>Clinic-Receipt </h3>
                    <div className="skills-projects">
                      <img src={skill1} alt="" />
                      <img src={skill2} alt="" />
                      <img src={skill3} alt="" />
                      <img src={skill9} alt="" />
                    </div>
                    <div className="text">
                      <a
                        target="_blank"
                        href="https://ahmedhanyonly.github.io/Clinic-Receipt/"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                  <div className="image">
                    <img src={temp14} alt="horse" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="box">
                  <div className="title-box">
                    <h3>mountain </h3>
                    <div className="skills-projects">
                      <img src={skill1} alt="" />
                      <img src={skill2} alt="" />
                      <img src={skill3} alt="" />
                      <img src={skill9} alt="" />
                    </div>
                    <div className="text">
                      <a
                        target="_blank"
                        href="https://ahmedhanyonly.github.io/Training-Template1/"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                  <div className="image">
                    <img src={temp5} alt="horse" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="box">
                  <div className="title-box">
                    <h3>casper </h3>
                    <div className="skills-projects">
                      <img src={skill1} alt="" />
                      <img src={skill2} alt="" />
                      <img src={skill3} alt="" />
                      <img src={skill9} alt="" />
                    </div>
                    <div className="text">
                      <a
                        target="_blank"
                        href="https://ahmedhanyonly.github.io/Training-Template2/"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                  <div className="image">
                    <img src={temp6} alt="horse" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="box">
                  <div className="title-box">
                    <h3>tech </h3>
                    <div className="skills-projects">
                      <img src={skill1} alt="" />
                      <img src={skill2} alt="" />
                      <img src={skill3} alt="" />
                      <img src={skill9} alt="" />
                    </div>
                    <div className="text">
                      <a
                        target="_blank"
                        href="https://ahmedhanyonly.github.io/Training-Template3/"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                  <div className="image">
                    <img src={temp7} alt="horse" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="box">
                  <div className="title-box">
                    <h3>card </h3>
                    <div className="skills-projects">
                      <img src={skill1} alt="" />
                      <img src={skill2} alt="" />
                      <img src={skill3} alt="" />
                      <img src={skill9} alt="" />
                    </div>
                    <div className="text">
                      <a
                        target="_blank"
                        href="https://ahmedhanyonly.github.io/Card/"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                  <div className="image">
                    <img src={temp12} alt="horse" />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
