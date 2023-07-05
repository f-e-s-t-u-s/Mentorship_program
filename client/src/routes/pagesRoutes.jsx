import Home from "../pages/Home";
import Signup from "../pages/Signup";
import ChatPage from "../pages/chats/ChatPage";

export const routes = [
  { element: <Signup></Signup>, path: "/signup" },
  {
    element: <Home></Home>,
    path: "/",
  },
  {
    path: "/chat",
    element: <ChatPage></ChatPage>,
  },
  
];
