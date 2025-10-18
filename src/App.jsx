import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudentForm from "./components/AddStudentForm.jsx";
import StudentList from "./components/StudentList.jsx";
import StudentDetailPage from "./components/StudentDetailPage.jsx";

const App = () => {
  const [students, setStudents] = useState([]);

  const handleAddStudent = (student) => {
    const newStudent = { id: students.length + 1, ...student };
    setStudents([...students, newStudent]);
  };

  return (
    <Router>
      <div className="min-h-screen p-6">
        <header className="bg-blue-700 text-white py-4 rounded-xl shadow-lg mb-8">
          <h1 className="text-3xl font-bold text-center tracking-wide">
            🎓 Sistem Manajemen Mahasiswa
          </h1>
        </header>

        <main className="container mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <AddStudentForm onAddStudent={handleAddStudent} />
                  <StudentList students={students} />
                </div>
              }
            />
            <Route
              path="/detail/:id"
              element={<StudentDetailPage students={students} />}
            />
          </Routes>
        </main>

        <footer className="mt-10 text-center text-gray-500 text-sm">
          © 2025 KampusKitaMikroz — Sistem Akademik
        </footer>
      </div>
    </Router>
  );
};

export default App;
