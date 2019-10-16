import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllPosts, searchPosts } from "../../redux/reducers/postsReducer";
import { getSession } from "../../redux/reducers/authReducer";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import search from "../../images/search_logo.png";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      searchTitle: ""
    };
  }
  componentDidMount() {
    this.props.getSession();
    this.props.getAllPosts();
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSearchTitle = e => {
    e.preventDefault();
    const { searchTitle } = this.state;
    this.props.searchPosts(searchTitle);
  };

  clearSearchTitle = e => {
    e.preventDefault();
    this.props.getAllPosts();
    this.setState({ searchTitle: "" });
  };

  render() {
    const { posts } = this.props;

    let allPosts = posts.map((post, i) => {
      return (
        <Link to={`/post/${post.post_id}`} style={{ textDecoration: "none" }}>
          <div key={i}>
            <h1>{post.title}</h1>
            <img src={post.img} alt="post" width="300" />
            <h3>{post.username}</h3>
            <p>{post.content}</p>
          </div>
        </Link>
      );
    });

    return (
      <div>
        <Header />
        <div className="Dashboard-container">
          <div className="Search-container">
            <form className="Search-form">
              <input
                placeholder="Search by title.."
                className="Search-input"
                name="searchTitle"
                value={this.state.searchTitle}
                onChange={this.handleInput}
              />
              <button className="Search-btn" onClick={this.handleSearchTitle}>
                <img src={search} alt="Post-search" />
              </button>
              <button className="btn" onClick={this.clearSearchTitle}>
                Reset
              </button>
            </form>
          </div>
          <div className="Posts-container">
            <div className="Posts">{allPosts}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    posts: reduxState.postsReducer.posts,
    username: reduxState.authReducer.username
  };
};
export default connect(
  mapStateToProps,
  {
    getSession,
    getAllPosts,
    searchPosts
  }
)(Dashboard);
