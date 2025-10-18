import React from "react";
import StudentItem from "./StudentItem";

const StudentList = ({ students }) => {
  if (students.length === 0) {
    return (
      <p className="text-center text-gray-600">
        Belum ada data mahasiswa.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {students.map((student) => (
        <StudentItem key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentList;
