import React from "react";
import { Link } from "react-router-dom";

const StudentItem = ({ student }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md border border-blue-100 hover:shadow-lg hover:scale-[1.02] transition-all">
      <h3 className="text-lg font-bold text-blue-700">{student.name}</h3>
      <p className="text-gray-600">Kelas: {student.className}</p>
      <Link
        to={`/detail/${student.id}`}
        className="mt-3 inline-block text-blue-600 hover:text-blue-800 hover:underline"
      >
        Lihat Detail →
      </Link>
    </div>
  );
};

export default StudentItem;
