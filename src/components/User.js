import React from "react";

const User = props => {
  return (
    <div>
      <div>
        <strong>ID: </strong>
        {props.user.id}
      </div>
      <div>
        <strong>E-mail: </strong>
        {props.user.email}
      </div>
      <div>
        <strong>First Name: </strong>
        {props.user.firstName}
      </div>
      <div>
        <strong>Last Name: </strong>
        {props.user.lastName}
      </div>
    </div>
  );
};

export default User;
