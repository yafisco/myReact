import { useEffect, useState } from "react";
import type { Course } from "../types";
import api from "../services/api";

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await api.get("/courses");
      setCourses(res.data);
    };
    fetchCourses();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">
        Liste des cours
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((c) => (
          <div key={c.id} className="bg-white p-4 rounded-xl shadow">
            {c.image && <img src={c.image} alt={c.title} className="rounded-lg mb-3" />}
            <h2 className="text-lg font-semibold">{c.title}</h2>
            <p className="text-gray-600">{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
