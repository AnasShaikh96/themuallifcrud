import React from "react";

function Quotes() {
  return <>
    <div className="container">
      <div className="d-flex justify-content-between">
        <h3>Quotes</h3>
        <a className="btn btn-dark " href="/quotes/add" >
          Create Quote
        </a>
      </div>
    </div>
  </>;
}

export default Quotes;
