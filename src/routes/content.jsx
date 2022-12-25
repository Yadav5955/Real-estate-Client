import Signin from "../sign-in/signin"
import Signup from "../sign-up/sign-up"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PropertyView from "../getList/PropertyView";
import Logout from "../logout/logout";
import Proctected from "../routes/protected";
import AddProperty from "../addProperty/main";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route element={<Proctected />}>
            <Route path="/listproperty" element={<PropertyView />}></Route>
            <Route path="/addproperty" element={<AddProperty />}></Route>
          </Route>
          <Route path="/logout" element={<Logout />}></Route>
        <Route path="*" element={<div><h1>404</h1>Page not Found</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;