import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import StudentDetail from "./StudentDetail.jsx";

const StudentDetailPage = ({ students }) => {
  const { id } = useParams();
  const student = useMemo(
    () => students.find((s) => s.id === parseInt(id)),
    [students, id]
  );

  return (
    <div>
      <StudentDetail student={student} />
      <div className="text-center mt-4">
        <Link to="/" className="text-blue-600 hover:underline">
          ← Kembali ke daftar
        </Link>
      </div>
    </div>
  );
};

export default StudentDetailPage;
