import { useContext } from "react";
import UsersContext from "../context/UsersContext";

export default function ContextUseList() {
  // useContext 훅을 사용하여 UsersContext 값에 접근합니다.
  const { users, setUsers } = useContext(UsersContext);

  return (
    <div className="ContextUseList">
      <h5>ContextUseList</h5>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.uid}, {user.name}, {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
