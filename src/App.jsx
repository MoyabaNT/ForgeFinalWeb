import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, Route
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Resources from "./Components/Resources";
import Contacts from "./Components/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index='/Home' element={< Home/>} />
      <Route path='/About' element={<About />} />
      <Route path='/Services' element={<Services />} />
      <Route path='/Resources' element={<Resources />} />
      <Route path='/Contacts' element={<Contacts />} />
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