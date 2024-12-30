
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/login';
import Blog from './pages/blogs';
import CreateBlog from './pages/addBlog';
import UserProfile from './pages/userProfile';
import LandingBar from './pages/landingbar';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Blogs" element={<Blog />} />
        <Route path="/addBlog" element={<CreateBlog />} />
        <Route path='/userProfile' element={<UserProfile/>}/>
        <Route path='/landingbar' element={<LandingBar/>}/>
      </Routes>
    </BrowserRouter>
  );
}