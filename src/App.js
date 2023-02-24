import { createBrowserRouter,  BrowserRouter, Routes,  Route, Link, NavLink, createRoutesFromElements, RouterProvider}  from "react-router-dom";
import CareersLayout from "./layouts/CareersLayout";
import HelpLayout from "./layouts/HelpLayout";
import RootLayout from "./layouts/RootLayout";
import About from "./pages/About";
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails";
import Careers, { careersLoaders } from "./pages/careers/Careers";
import CareersError from "./pages/careers/CareersError";
import Contact, { contactAction } from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


const router = createBrowserRouter(
  createRoutesFromElements(

       <Route  path="/"  element={  <RootLayout />    } >

          <Route index  element={  <Home />  }   />
         
          <Route path="about"  element={  <About />  }   />
        
          <Route path="help" element={<HelpLayout />} >
              <Route index path="faq" element={ <Faq />  }   />
              <Route path="contact"   element={  <Contact />  } action={ contactAction }  />
          </Route>

          <Route path="careers"   
          element={  <CareersLayout /> }
          errorElement={<CareersError />}
          >
        
          <Route
            index 
            element={ <Careers />  }
            loader={ careersLoaders  }  
            />
 
          <Route
            path=":id" 
            element={ <CareerDetails />  }
            loader={careerDetailsLoader}
            // errorElement={<CareersError />}
            />


          </Route>



          <Route path="*" element={<NotFound />} />


        </Route>

  )
)

function App() {
  return (
      <RouterProvider  router={router} />
  );
}

export default App
