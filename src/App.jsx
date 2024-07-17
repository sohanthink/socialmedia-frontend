import './App.css'
import Login from './pages/Login';
import Home from './pages/home/Home';
import Registration from './pages/registration/Registration';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import NotLoggedInUser from './privateRouter/NotLoggedInUser';
import LoggedInUser from './privateRouter/LoggedInUser';
import RootLayout from './components/RootLayout';
import 'swiper/css';
import PostPopup from './pages/home/post/PostPopup';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<NotLoggedInUser />}>
        <Route path="/" element={<Login />} > </Route>
        <Route path="/registration" element={<Registration />} > </Route>
      </Route>
      <Route element={<LoggedInUser />}>
        <Route element={<RootLayout />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Route>
    </Route>
  )
);


function App() {

  return (
    <>
      {/* <PostPopup /> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
