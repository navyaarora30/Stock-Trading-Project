import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h2 className="fs-1">Support Portal</h2>
        <button type="button" class="btn btn-primary ticket-button" >
          <i class="fa-solid fa-spinner"></i> My tickets
        </button>
      </div>
      <div className="row formHero">
        <i className="fa-solid fa-magnifying-glass position-absolute mt-4 fs-5"></i>
        <input type="text" placeholder="Eg: how do I activate F&O" className="ps-5 py-3 fs-5" />
      </div>
    </section>
  );
}

export default Hero;


{/* <input
            type="text"
            placeholder="Eg: how do I activate F&O"
            className="form-control ps-5 py-3 fs-5"
            style={{
              opacity: "0.6",
              borderRadius: "0.5rem",
              boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
              ,
            }}
          /> */}