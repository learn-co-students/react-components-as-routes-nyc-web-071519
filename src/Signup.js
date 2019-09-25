import React from "react";

class Signup extends React.Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <form>
          <div>
            <input type="text" name="Name" placeholder="Name" />
            <label htmlFor="Name">Name</label>
          </div>
          <div>
            <input type="text" name="Email" placeholder="Email" />
            <label htmlFor="Email">Email</label>
          </div>
          <div>
            <input type="text" name="username" placeholder="Username" />
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
            <label htmlFor="password">Password</label>
          </div>
          <input type="submit" value="Signup" />
        </form>
      </div>
    );
  }
}

export default Signup;
