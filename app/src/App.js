import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
const Header = ({ title }) => {
  return (
    <header>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    </header>
  );
};
const Navbar = styled.div`
  display: flex;
  margin: auto;
  padding: 2rem;
  background-color: lightgray;
`;
const Navul = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const Navli = styled.li`
  display: inline;
  float: right;
  font-weight: bold;
  font-size: 20px;
  list-style: none;
  text-align: center;
  margin-right: 5rem;
  padding: 0px;
`;
const Nav = () => {
  // const liTag = topics.map((t) => (
  //   <li>
  //     <Link to={t}>{t}</Link>
  //   </li>
  // ));
  return (
    <Navbar>
      <Navul>
        <Navli>
          <Link to="/ona">오!나</Link>
        </Navli>
        <Navli>
          <Link to="/onu">오!너</Link>
        </Navli>
        <Navli>
          <Link to="/omap">오!맵</Link>
        </Navli>
      </Navul>
    </Navbar>
  );
};
const Home = ({ title, body }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};
const Ona = ({ title, body }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};
const Onu = ({ title, body }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};
const Omap = ({ title, body }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

function App() {
  const [topics, setTopics] = useState([
    { id: 1, title: "오!나", body: "오!나 첫 화면입니다." },
    { id: 2, title: "오!너", body: "오!너 첫 화면입니다" },
    { id: 3, title: "오!맵", body: "오!맵 첫 화면입니다" },
  ]);

  return (
    <div className="App">
      <Header title="ONULL" />
      <Nav topics={topics} />
      <Routes>
        <Route
          path="/"
          element={<Home title="메인홈" body="오너서비스 첫 화면입니다" />}
        ></Route>
        <Route
          path="/ona"
          element={<Ona title="오!나" body="오!나 첫 화면입니다." />}
        ></Route>
        <Route
          path="/onu"
          element={<Onu title="오!너" body="오!너 첫 화면입니다." />}
        ></Route>
        <Route
          path="/omap"
          element={<Omap title="오!맵" body="오!맵 첫 화면입니다." />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
