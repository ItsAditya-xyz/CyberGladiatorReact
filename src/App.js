import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";

function App() {
  // const [loginResponse, setLoginResponse] = useState();
  // useEffect(async () => {}, []);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
       
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}
export default App;
