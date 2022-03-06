import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import PageHeading from "../components/PageHeading";
import fiver from "../assets/fiver.png";
import upWork from "../assets/upwork.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (setState) => (e) => {
    setState(e.target.value);
  };

  const _submit = async (e) => {
    e.preventDefault();

    const user_id = "qnC4xChryyDcAcPWY";
    const service_id = "service_1obo5an";
    const template_id = "template_fetmw3l";

    const emailData = {
      name: name,
      email: email,
      message: message,
    };

    setLoading(true);
    await emailjs.send(service_id, template_id, emailData, user_id).then(
      (result) => {
        // console.log(result.text);
        toast.success("Message send to EasyCode team");
      },
      (error) => {
        // console.log(error.text);
        toast.error("Message not send successfully");
      }
    );

    setName("");
    setEmail("");
    setMessage("");
    e.target.reset();
    setLoading(false);
  };

  const renderContactForm = () => (
    <form onSubmit={_submit} className="contact-form">
      <div className="input-field">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          name="name"
          className="form-control"
          required
          onChange={onChangeHandler(setName)}
        />
      </div>
      <div className="input-field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          name="email"
          className="form-control"
          required
          onChange={onChangeHandler(setEmail)}
        />
      </div>
      <div className="input-field">
        <label htmlFor="message">Message</label>
        <textarea
          name=""
          id=""
          cols="10"
          rows="5"
          className="form-control"
          required
          onChange={onChangeHandler(setMessage)}
          placeholder="Enter message"
        />
      </div>
      <button
        type="submit"
        className={`send-btn ${loading ? "submit_loader" : ""}`}
        disabled={loading}
      >
        {loading ? "" : "Send Message"}
      </button>
    </form>
  );

  const renderContent = () => (
    <div className="content">
      <h1>The Perfect Freelancer For Your Projects! It's Easy & Affordable.</h1>

      <div>
        <i className="fa-solid fa-phone"></i>
        <h1>03335157948</h1>
      </div>

      <div>
        <i className="fa-solid fa-envelope"></i>
        <h1>hamzajamil.easycode@gmail.com</h1>
      </div>

      <button
        className="hire_btn"
        onClick={() =>
          window.open("https://www.fiverr.com/hamzahasnain7?up_rollout=true")
        }
      >
        Hire me on
        <img src={fiver} alt="fiver_logo" />
      </button>

      <button
        className="hire_btn"
        onClick={() =>
          window.open(
            "https://www.upwork.com/freelancers/~01405a2a2bc83e53ef?s=1110580755057594368"
          )
        }
      >
        Hire me on
        <img src={upWork} alt="fiver_logo" />
      </button>
    </div>
  );

  return (
    <div className="contact">
      <PageHeading heading="Contacts Us" />

      <div className="row">
        <div className="col-md-6">{renderContactForm()}</div>
        <div className="col-md-6 mb-5">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Contact;
