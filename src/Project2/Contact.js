import React,{useState} from "react";

const Contact = () => {

    const [data, setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:""       
    });
    const inputEvent = (event) => {
        const {name,value} = event.target;
        setData((prevdata)=>{
            return {
                ...prevdata,
                [name]:value,
            }
        })
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My Name is ${data.fullname}, My Phone Number is ${data.phone} and My email is ${data.email},message ${data.msg}`);
    };

  return (
    <React.Fragment>
      <div className="my-5">
        <h1 className="text-center"> Contact Us </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone No.
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
              </div>
              <div className="col-12 text-center">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Contact;
