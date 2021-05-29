import React from "react";
import Card from "./Card";

const Service = () => {
  const img = "https://source.unsplash.com/300x200?webdevelopment";
  const img2 = "https://source.unsplash.com/301x200?app development";
  const img3 = "https://source.unsplash.com/300x201?softwaredevelopment";
  const img4 = "https://source.unsplash.com/302x200?digitalmarketing";
  const img5 = "https://source.unsplash.com/301x201?android development";
  const img6 = "https://source.unsplash.com/302x201?marketing";
  return (
    <React.Fragment>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card img={img} title="Web Development" />
              <Card img={img2} title="App Development" />
              <Card img={img3} title="Software Development" />
              <Card img={img4} title="Digital Marketing" />
              <Card img={img5} title="Android Development" />
              <Card img={img6} title="Marketing"/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Service;
