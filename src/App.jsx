import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, Route
} from "react-router-dom";
import Home from "./Components/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index='/Home' element={< Home/>} />
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