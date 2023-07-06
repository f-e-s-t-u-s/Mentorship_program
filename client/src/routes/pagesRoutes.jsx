import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Mentor from "../pages/Dashboard/Mentor";

import Admin from "../Admin/Admin";
import Student from "../pages/Dashboard/Student";
import ChatPage from "../pages/chats/ChatPage";
import MentorSignup from "../pages/MentorSignup";

export const routes = [
  { element: <Signup></Signup>, path: "/signup" },
  {
    element: <Home></Home>,
    path: "/",
  },
  
  {
    path:'/admin',
    element:<Admin></Admin>
  },
 {
  path : '/dash',
  element: <Mentor></Mentor>
 },
 {
  path: '/student',
  element: <Student></Student>
 },
 {
  path : '/chat',
  element: <ChatPage></ChatPage>
 },
 {
  path: '/mentor-signup',
  element: <MentorSignup></MentorSignup>
 }

  
];
