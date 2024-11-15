import "./App.css";
import ContextParent from "./components/ContextParent";
import ContextUseList from "./components/ContextUserList";
import ContextUserRegister from "./components/ContextUserRegister";
import ReduxParent from "./components/ReduxParent";
/*
  날짜 : 2024/11/14
  이름 : 박준우
  내용 : ch06.리액트 상태 관리 실습
*/
function App() {
  return (
    <div>
      <h3>ch06.리액트 상태 관리</h3>
      <h4>Context API 실습</h4>
      <ContextParent />
      <ContextUserRegister />
      <ContextUseList />

      <h4>Redux 실습</h4>
      <ReduxParent />
    </div>
  );
}

export default App;
