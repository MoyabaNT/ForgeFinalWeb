import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, Route
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Servicessub/Services";
import Resources from "./Components/Resources";
import Contacts from "./Components/Contact";
import BlogPage from "./Components/Blog/BlogPage";
import UnderstandingWSP from "./Components/Blog/UnderstandingWSP";
import LeverageBlog from "./Components/Blog/LeverageBlog";
import AnnualTransforationReports from "./Components/Blog/AnnualTransforationReports";
import BBBEE from "./Components/Servicessub/BBBEE";
import HumanRsc from "./Components/Servicessub/HumanRsc";
import SkillsDev from "./Components/Servicessub/SkillsDev";
import FAQChatbot from "./Bot/FAQChatbot";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index='/Home' element={< Home/>} />
      <Route path='/Home' element={<Home />} />  
      <Route path='/About' element={<About />} />
      <Route path='/Services' element={<Services />} />
      <Route path='/Resources' element={<Resources />} />
      <Route path='/Contacts' element={<Contacts />} />
      <Route path='/BlogPage' element={<BlogPage />} />
      <Route path='/UnderstandingWSP' element={<UnderstandingWSP/>} />
      <Route path='/AnnualTransforationReports' element={<AnnualTransforationReports/>} />
      <Route path='/LeverageBlog' element={<LeverageBlog />} />
      <Route path='/BBBEE' element={<BBBEE />} />
      <Route path='/HumanRsc' element={<HumanRsc />} />
      <Route path='/SkillsDev' element={<SkillsDev />} />
    </>
  )
)

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <FAQChatbot />
    </div>
  )
}

export default App