import React from "react";
import PageHeading from "../components/PageHeading";
import Parent from "../components/PureComponents/Parent";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";

const Services = () => {
  const renderServiceCard = (label, description, image) => (
    <div className="col-md-4 my-1">
      <div className="service_card">
        <h1>{label}</h1>
        <p>{description}</p>
      </div>
    </div>
  );

  return (
    <div className="services">
      <PageHeading heading="Our services" />

      <div className="row mx-2">
        {renderServiceCard(
          "Web Design/ Development",
          "Responsive web development is our core service.",
          pic1
        )}
        {renderServiceCard(
          "Android Development",
          "We are providing Android application development services.",
          pic2
        )}
        {renderServiceCard(
          "iOS Development",
          "We specialize in providing custom iPhone application development services.",
          pic3
        )}
        {renderServiceCard(
          "Software Development",
          "We are providing services to develop Inventory, Accounts, ERP and any other database related software."
        )}
        {renderServiceCard(
          "IT Services",
          "We also provide different IT Services to our customers."
        )}
        {renderServiceCard(
          "AWS Services",
          "We also provide different AWS Services to our customers."
        )}
        {renderServiceCard(
          "Graphic Designing",
          "We are also provide pixel perfect designs for every layout"
        )}
        {renderServiceCard(
          "Deployment",
          "Deploy your application on any server"
        )}
        {renderServiceCard(
          "eCommerce Solution",
          "We are also provide eCommerce Solution"
        )}
      </div>
    </div>
  );
};

export default Services;
