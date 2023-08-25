import Login_page from "./pages/Login_page";
import Signup_page from"./pages/Signup_page";
import Main_pages from "./pages/Main_pages";
import { Route, Routes } from 'react-router-dom';
import Course_more_page from './pages/Course_all';
import About_page from './pages/About_page';
import Agreement_pages from "./pages/Agreement_pages";
import Online_course from "./pages/Online_course";

function App() {
  return (
    <> 
      <Routes>
        <Route path='/' element={<Main_pages />} />
        <Route path='/login' element={<Login_page />} />
        <Route path='/signup' element={<Signup_page />} />
        <Route path='/main' element={<Main_pages />} />
        <Route path='/about' element={<About_page />} />
        <Route path='/course' element={<Course_more_page />} />
        <Route path="/agreements" element={<Agreement_pages />}/>
        <Route path="/onlinecourse" element={<Online_course />}/>
      </Routes> 
      

    </>
  
  );
}

export default App;
