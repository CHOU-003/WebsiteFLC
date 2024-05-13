import './App.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Findjob from './pages/JOB/Findjob';
import Single from './pages/Single';
import Write from './pages/Post/Write';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Addjob from './pages/JOB/Addjob';
import "./style.scss"
import "./main.scss"
import RegisterBN from './pages/RegisterBN';
import ManagerJob from './pages/JOB/Managerjob';
import Editjob from './pages/JOB/Editjob';
import Allcreator from './pages/Creator/Allcreator';
import LivePage from './pages/Livestream/live';
import RoomPage from './pages/Livestream/room';
import Logindn from './pages/Logindn';
import Deletejob from './pages/JOB/Deletejob';
import Mypost from './pages/Post/Mypost';
import Deletepost from './pages/Post/Deletepost';
import Job from './pages/JOB/Job';
import Creator from './pages/Creator/Creator';
import Payment from './pages/Creator/Buycreator';
import Quiz from './components/Quiz';
import Allauth from './pages/Allauth';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/post/:id",
        element: <Single />
      },
      {
        path: "/write",
        element: <Write />
      },
      {
        path: "/addjob",
        element: <Addjob />
      },
      {
        path: "/findjob",
        element: <Findjob />
      },
      {
        path: "/allcreator",
        element: <Allcreator />
      },
      {
        path: "/room",
        element: <RoomPage />
      },
      {
        path: "/livestream",
        element: <LivePage />
      },

      {
        path: "/ungtuyen/:id",
        element: <Job />
      },
      {
        path: "/quiz",
        element: <Quiz />
      },
      {
        path: "/mypost",
        element: <Mypost />
      },
    ]
  },
  {
    path: "/creator/:id",
    element: <Creator />
  },
  {
    path: "/payment/:id",
    element: <Payment />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/registerbn",
    element: <RegisterBN />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/logindn",
    element: <Logindn />
  },
  {
    path: "/allauth",
    element: <Allauth />
  },
  {
    path: "/write",
    element: <Write />
  },
  {
    path: "/addjob",
    element: <Addjob />
  },
  {
    path: "/post/:_id",
    element: <Single />
  },
  {
    path: "/managerjob",
    element: <ManagerJob />
  },
  {
    path: "/editjob/:id",
    element: <Editjob />
  },
  {
    path: "/deletejob/:id",
    element: <Deletejob />
  },
  {
    path: "/deletepost/:id",
    element: <Deletepost />
  }
]);

function App() {
  return (
    <div className='app'>
      <div className='container'>
          <RouterProvider router={router} />
      </div>
    </div>
  );
}



export default App;
