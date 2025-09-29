import "./App.css";
import Header from "./component/Header";
import TodoList from "./component/TodoList";
import TodoEditor from "./component/TodoEditor";
import { useState, useRef } from "react";

function App() {
  const mockTodo = [
    {
      id: 0,
      isDone: false,
      content: "공부하기",
      createDate: new Date().getTime(),
    },
    {
      id: 1,
      isDone: false,
      content: "청소하기",
      createDate: new Date().getTime(),
    },
    {
      id: 2,
      isDone: false,
      content: "책 읽기",
      createDate: new Date().getTime(),
    },
  ];

  const [todo, setTodo] = useState(mockTodo);

  const idRef = useRef(3); // 초기값이 3인 ref객체 생성하여  idRef에 저장

  const onCreate = (content) => {
    // 추가 버튼이 클릭되면 실행될 이벤트 핸들러
    const newItem = {
      id: idRef.current, //idRef의 현재저장하고 있는 값을 불러온다.
      isDone: false,
      content,
      createDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]); //[...todo, newItem] ->[{id0,id1,id2}]순서, 반대로하면 최근쓴게 제일먼저

    //newItem -> 할일 객체를 생성 후 idRef값을 1 증가
    idRef.current += 1;
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} /> {/* props 받는 방법  */}
      <TodoList todo={todo} />
    </div>
  );
}

export default App;
