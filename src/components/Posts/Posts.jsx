import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Table, Button, Spin } from "antd";
import { connect } from "react-redux";
import { getPosts, deletePost } from "../../actions/postActions";
import "antd/dist/antd.css";

const Posts = ({ posts, getPosts, deletePost }) => {
  const [postsList, setPostsList] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    setPostsList(posts);
  }, [posts]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body"
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action"
    }
  ];

  const renderPosts = () => {
    const postItems = [];
    postsList.forEach(post =>
      postItems.push({
        id: post.id,
        title: post.title,
        body: post.body,
        action: (
          <Button type="primary" danger onClick={() => deletePost(post.id)}>
            Delete
          </Button>
        )
      })
    );
    return postItems;
  };

  return (
    <Table
      columns={columns}
      dataSource={renderPosts()}
      pagination
      locale={{
        emptyText: <Spin size="large" style={{ width: "100%" }} />
      }}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts()),
  deletePost: id => dispatch(deletePost(id))
});

const mapStateToProps = ({ posts }) => ({
  posts: posts
});

Posts.propTypes = {
  posts: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
