import { createBrowserRouter } from "react-router"
import MainLayout from "../Layout/MainLayout"
import Home from "../components/Home"
import FriendDetails from "../components/FriendDetails"
import TimeLine from "../components/TimeLine"
import StatisPage from "../components/StatisPage"
import ErrorPage from "../components/ErrorPage"
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
         },
         {
            path:'/timeline',
            Component:TimeLine
         },
         {
           path:'/analysis',
           Component:StatisPage

         }
       ]
     },
     {
        path:"*",
        Component:ErrorPage
     }
])
export {router}