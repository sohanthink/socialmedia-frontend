import './App.css'
import Registration from './Registration';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Registration />} > </Route>
    </>
  )
);


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
