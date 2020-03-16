import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Button } from "antd";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { createPost } from "../../actions/postActions";

const PostForm = ({ createPost }) => {
  const layout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 8
    }
  };
  const validateMessages = {
    required: "This field is required!"
  };

  const handleOnSubmit = values => {
    const post = {
      title: values.title,
      body: values.body
    };
    createPost(post);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Add Post</h1>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={handleOnSubmit}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="body"
          label="Body"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
          style={{ textAlign: "center" }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  createPost: data => dispatch(createPost(data))
});

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(PostForm);
