import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todo }) => {
  return (
    <div className="TodoList">
      <h4>Todo List ♥️</h4>
      <input className="searchbar" placeholder="검색어를 입력하세요"></input>
      <div className="list_wrapper">
        {/* todoItem을 반복해서 출력 - 3번(기본적으로 3개 지정해놨으니까) */}
        {/*  {id, isdone, content, createDate} */}
        {todo.map((it) => (
          <TodoItem key={it.id} {...it} /> //map으로 찍는 list에게 key값 부여해준다
        ))}
      </div>
    </div>
  );
};

export default TodoList;
