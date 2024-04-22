import { Link } from "react-router-dom";
import { useState } from "react";

function ContactCard() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d5b7da77-005d-4e53-ac3f-d2d2deb981a0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully");
      event.target.reset();
      setTimeout(() => {
        setResult("");
      }, 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="mx-24 xl:mx-96 my-12 xl:my-24">
      <form id="form" onSubmit={onSubmit}>
        <h1 className="text-4xl text-center font-bold mb-8">
          {" "}
          <span className="border-b-4 border-accent">Contact</span>
        </h1>
        <p className="text-base text-center mb-12">
          Feel free to send a <b>message</b> , just fill the form below and i
          <b> will reply you shortly </b>! 👍
        </p>
        <div className="flex flex-col items-start justify-center gap-4 text-slate-950">
          <div className="mb-3 flex flex-col gap-4 w-full ">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control form-control-lg bg-white w-full h-10 pl-2 rounded"
              id="exampleInputPassword1"
              autoComplete="name"
            />
          </div>
          <div className="mb-3 flex flex-col gap-4 w-full ">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control form-control-lg bg-white w-full h-10 pl-2 rounded"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              autoComplete="email"
            />
          </div>
          <div className="mb-3 flex flex-col gap-4 w-full ">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Your Message
            </label>
            <textarea
              name="message"
              rows={4}
              className="form-control form-control-lg bg-white w-full h-32 pl-2 pt-1 rounded"
            ></textarea>
          </div>
          <div className="flex gap-12 ">
            <button
              type="submit"
              className="mt-4 custom-btn form-btn !bg-[#E162A0]"
            >
              Submit
            </button>
            <Link to="/">
              <button
                type="button"
                className="mt-4 custom-btn form-btn !bg-[#B89FB2]"
              >
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </form>
      <p
        className={
          result
            ? "text-accent font-medium mx-auto mt-12 text-2xl bg-white p-3 rounded w-max transition-all duration-300 ease-in-out"
            : "hidden"
        }
      >
        {result}
      </p>
    </div>
  );
}

export default ContactCard;
