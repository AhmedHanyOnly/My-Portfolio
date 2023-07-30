import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbSend } from "react-icons/tb";
import { motion } from "framer-motion";
const _contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <motion.div className="container-box"
        >
          <div className="title">
            <h3>contact me</h3>
            <p>Get in touch</p>
          </div>
          <div className="row ">
            <div className="col-12 col-lg-4">
              <div className="box-social">
                <div className="contact-info">
                  <div className="box">
                    <FiPhone className="icon-social" />
                    <div className="text">
                      <span>Call Me</span>
                      <p>+201069441618</p>
                    </div>
                  </div>
                  <div className="box">
                    <MdOutlineMail className="icon-social" />
                    <div className="text">
                      <span>Email</span>
                      <p>ahmedhanyb04@gmail.com</p>
                    </div>
                  </div>
                  <div className="box">
                    <HiOutlineLocationMarker className="icon-social" />
                    <div className="text">
                      <span>Location</span>
                      <p>Egypt - RedSea Hurghada</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="box-inputs row gy-3">
                <div className="col-12 col-md-6">
                  <div className="form">
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form">
                    <input
                      type="text"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form">
                    <input
                      type="text"
                      placeholder="Project"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form">
                    <textarea
                      placeholder="Message"
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <button>
                  <span>Send Message</span>
                  <TbSend className="icon-social" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default _contact;
