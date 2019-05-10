import React from "react";
import "./styles.css";
import { Provider, connect } from "react-redux";
import TodoItems from "./TodoItems";
import { addTodo, changeStatus, changeVisibility } from "./actions";
import FilterLink from "./FilterLink";
const inputRef = React.createRef();

class TodoApp extends React.Component {
  componentDidMount() {
    const arr = ["Apple", "banana", "carrot", "mango", "pineapple", "fish"];
    arr.map(item => this.props.addNewTodo(item));
  }

  _add = () => {
    const inputValue = inputRef.current.value;
    if (inputValue === "") return;
    this.props.addNewTodo(inputValue);
    inputRef.current.value = "";
  };

  changeStatus = id => {
    console.log("Change Status of " + id);
    this.props.statusChange(id);
  };

  render() {
    const { allTodos, setVisibility } = this.props;
    return (
      <Provider store={this.props.store}>
        <div>
          <h1 className="center">Todo</h1>
          <hr />
          <input className="myInput" placeholder="Add Todo" ref={inputRef} />
          <button onClick={this._add}>Add</button>
          <TodoItems todos={allTodos} changeStatus={this.changeStatus} />
          <FilterLink setVisibility={setVisibility} />
        </div>
      </Provider>
    );
  }
}

const getTodosBasedOnVisibility = state => {
  switch (state.filterBy.filter) {
    case "SHOW_COMPLETED":
      return state.allTodos.filter(todo => todo.completed);
    case "SHOW_INCOMPLETED":
      return state.allTodos.filter(todo => !todo.completed);
    default:
      return state.allTodos;
  }
};

const mapStateToProps = state => ({
  allTodos: getTodosBasedOnVisibility(state)
});

const mapDispatchToProps = dispatch => ({
  addNewTodo: text => dispatch(addTodo(text)),
  statusChange: id => dispatch(changeStatus(id)),
  setVisibility: value => dispatch(changeVisibility(value))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
