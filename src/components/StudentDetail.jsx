import React from "react";

const StudentDetail = ({ student }) => {
  if (!student) {
    return (
      <p className="text-center text-gray-500">
        Mahasiswa tidak ditemukan.
      </p>
    );
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-2">
        {student.name}
      </h2>
      <p className="text-gray-600 mb-4">Kelas: {student.className}</p>
      <p className="text-gray-500 italic">
        Informasi mahasiswa disimpan secara lokal.
      </p>
    </div>
  );
};

export default StudentDetail;
