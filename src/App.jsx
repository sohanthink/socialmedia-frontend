import './App.css'
import Login from './pages/Login';
import Registration from './pages/registration/Registration';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} > </Route>
      <Route path="/registration" element={<Registration />} > </Route>
    </>
  )
);


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
