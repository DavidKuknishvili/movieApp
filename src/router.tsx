import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,

} from "react-router-dom";
import Home from "./pages/Home";
import Open from "./pages/Open";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Saved from "./pages/Saved";
import Contact from "./pages/Contact";




export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index={true} element={<Home />}></Route>
        <Route path="movie/:id" element={<Open />} />
        <Route path="movie" element={<Movies/>}/>
        <Route path="tv" element={<Series />} />
        <Route path="tv/:id" element={<Open />} />
        <Route path="saved" element={<Saved />} />
        <Route path="contact-us" element={<Contact />} />
      </Route>

    </>
  )
);