import React, { Component } from "react";

export class FooterContainer extends Component {
  render() {
    return (
      <div>
        <p>Copyright &copy; {new Date().getFullYear()} Boston-Lights</p>
      </div>
    );
  }
}

export default FooterContainer;
