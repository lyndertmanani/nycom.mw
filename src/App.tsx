import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import BaseLayout from "@/layout/layout";
import Home from "@/pages/home";
import News from "@/pages/news";
import Events from '@/pages/events';
import About from '@/pages/About'
 
// import Landing from "@/pages/landing"
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<Home/>} />
      <Route path="home" element={<Home />} />
      <Route path="News" element={<News />} />
      <Route path="events" element={<Events />} />
      <Route path="about" element={<About />} />
      {/* <Route path='*' element={<Render errorType="notFoundError"/>}/> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;