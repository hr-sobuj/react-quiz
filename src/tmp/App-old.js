import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
// import { useAuth } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import "./styles/App.css";

function App() {
  // const { currentUser } = useAuth();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* {currentUser ?
          (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/result" element={<Result />} />
            </>
          ) :
          (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          )} */}
        {/* <Route path="*" element={<Navigate replace to={currentUser ? "/" : "signin"} />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
