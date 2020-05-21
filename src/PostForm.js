import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);
    let res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      this.state
    );
    console.log(res);
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={(e) => {
                this.setState({
                  userId: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => {
                this.setState({
                  title: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={(e) => {
                this.setState({
                  body: e.target.value,
                });
              }}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
