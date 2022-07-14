import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function QuotesAdd() {
  const [post, setPost] = useState("");

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
              <textarea
                type="text"
                className="form-control"
                onChange={(e) => setPost(e.target.value)}
              />

              <ReactMarkdown children={post} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default QuotesAdd;
