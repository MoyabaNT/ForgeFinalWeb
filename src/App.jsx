import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, Route
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index='/Home' element={< Home/>} />
      <Route path='/About' element={<About />} />
      <Route path='/Services' element={<Services />} />
    </>
  )
)

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App