import { createBrowserRouter } from "react-router"
import MainLayout from "../Layout/MainLayout"
import Home from "../components/Home"
import FriendDetails from "../components/FriendDetails"
const router = createBrowserRouter([
     {
       path:'/',
       Component: MainLayout,
       children:[
         {
            path:'/',
            loader:()=>fetch('/data.json'),
            Component:Home
         },
         {
             path:'/friend/:userId',
             loader:()=>fetch('/data.json'),
             Component:FriendDetails
         }
       ]
      
     }
])
export {router}