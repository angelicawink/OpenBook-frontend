import React from "react";

const EnvelopeClosed = props => {
  return (
    <div className="envelope-stamp">
      <div id="envelope" onClick={props.handleClick}>
        <img
          id="postage"
          src="https://www.postagehq.com/wp-content/uploads/2018/08/postage-stamps-icon-150x150.png"
          alt="stamp"
        />

        <div id="address">7200 Oblivion Boulevard</div>
      </div>
    </div>
  );
};

export default EnvelopeClosed;
