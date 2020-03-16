import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Table, Spin } from "antd";
import { connect } from "react-redux";
import { getTodos } from "../../actions/todoActions";
import "antd/dist/antd.css";

const Todo = ({ todos, getTodos }) => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    console.log("todos", todos);
    setTodoList(todos);
  }, [todos]);

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
    }
  ];

  const onSelectChange = selectedRowKeys => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
  };

  const rowSelection = {
    onChange: onSelectChange
  };

  const renderTodos = () => {
    const todoItems = [];
    todoList.forEach(todo =>
      todoItems.push({
        id: todo.id,
        title: todo.title
      })
    );
    return todoItems;
  };
  return (
    <Table
      columns={columns}
      dataSource={todoList?.length > 0 ? renderTodos() : []}
      pagination
      locale={{
        emptyText: <Spin size="large" style={{ width: "100%" }} />
      }}
      rowSelection={rowSelection}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  getTodos: () => dispatch(getTodos())
});

const mapStateToProps = ({ todos }) => ({
  todos: todos
});

Todo.propTypes = {
  todos: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
