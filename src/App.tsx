import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Courses from "./pages/courses";
import CourseDetail from "./pages/courseDetail";
import SignIn from "./pages/Auth/SignIN";
import SignUp from "./pages/Auth/SignUp";
import Profile from "./pages/profile";
import CategorieList from "./pages/CategorieList";

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/courses/:id" element={<CategorieList />} />
            <Route path="/auth/signin" element={<SignIn />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}
