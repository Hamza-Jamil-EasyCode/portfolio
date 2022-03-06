import React from "react";
import PageHeading from "../components/PageHeading";
import about from "../assets/about.svg";

const About = () => {
  return (
    <div className="about">
      <PageHeading heading="About Us" />

      <div className="row">
        <div className="col-md-6">
          <img src={about} alt="about_img" />
        </div>
        <div className="col-md-6">
          <h1>
            We provide wide range of products/services to businesses and
            consumers across the globe, maintaining an unrelenting focus on
            quality service and customer satisfaction. We’ll listen to what you
            want to accomplish and work next to you to reach your goals. Through
            proven competencies in web development, web designing, eCommerce
            solutions, open source customization, strategy & branding and
            internet marketing, we can help you to increase revenue, reduce
            costs, mitigate risk and drive profitability.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
