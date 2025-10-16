import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Profile from "./pages/Profile";
import CategorieList from "./pages/CategorieList";
import About from "./pages/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/categories" element={<CategorieList />} />
            <Route path="/apropos" element={<About />} />
            <Route path="/auth/signin" element={<SignIn />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
}