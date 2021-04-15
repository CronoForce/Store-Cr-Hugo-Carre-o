import React, { Fragment } from "react";

const Item = ({username, name, email}) => {
  return (
    <Fragment>
        <div>
          <p>{username}</p>
          <p>{name}</p>
          <p>{email}</p>
        </div>
    </Fragment>
  );
};

export default Item;
