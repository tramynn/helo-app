import React, { Component } from "react";
import { connect } from "react-redux";
import { getPost, clearPost } from "../../redux/reducers/postsReducer";

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.post_id);
  }

  componentWillUnmount() {
    this.props.clearPost();
  }

  render() {
    const { post } = this.props;

    return (
      <div>
        <h1>{this.props.match.params.post_id}</h1>
        <h2>{post.title}</h2>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    post: reduxState.postsReducer.post
  };
};

export default connect(
  mapStateToProps,
  {
    getPost,
    clearPost
  }
)(Post);
