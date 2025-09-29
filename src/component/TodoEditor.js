import { useState, useRef } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
  //App에 있는 onCreate 받아오기

  const [content, setContent] = useState("");
  const inputRef = useRef();

  function onChangeContent(e) {
    setContent(e.target.value); //유저가 입력한 할일 텍스트 -> 값 변하니까 useState써준다
  }

  function onSubmit() {
    if (!content) {
      // 참이면 빈칸("")으로 들어옴
      alert("할일 입력은 필수입니다.");
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent(""); // 입력내용 넘겨준 후 ->  할일 입력창 초기화
  }

  function onKeyDown(e) {
    if (e.keyCode === 13) {
      // enter키 코드 = 13 , 참이면 enter키 눌림
      onsubmit();
    }
  }

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✏️</h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          value={content}
          onKeyDown={onKeyDown}
          onChange={onChangeContent}
          placeholder="새로운 Todo..."
        ></input>
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
