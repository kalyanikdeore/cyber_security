import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./page/home/Home";
import Gallery from "./page/gallery/Gallery";
import Eventgallery from "./page/eventgallery/Eventgallery";
import Contact from "./page/contact/Contact";
import About from "./page/about/About";
import Recentevent from "./page/recentevent/Recentevent";
import Futureevent from "./page/futureevent/Futureevent";
import CloudSecurity from "./page/CloudSecurity/CloudSecurity";
import EndpointProtection from "./page/EndpointProtection/EndpointProtection";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="photo-gallery" element={<Gallery />} />
        <Route path="event-gallery" element={<Eventgallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="recent-event" element={<Recentevent />} />
        <Route path="future-event" element={<Futureevent />} />
        <Route path="cloud-security" element={<CloudSecurity />} />
        <Route path="Endpoint-Protection" element={<EndpointProtection />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
