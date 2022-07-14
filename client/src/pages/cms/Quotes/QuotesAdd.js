import React from "react";

function QuotesAdd() {
  return (
    <>
      <div className="container">
        <h3>Quotes Add</h3>

        <form className="card">
          <div className="card-title">
            <div className="form-group">
              <label htmlFor="auth">Title</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="quote">Post</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default QuotesAdd;
