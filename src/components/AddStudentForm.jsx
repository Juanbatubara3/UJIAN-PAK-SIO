import React, { useState } from "react";

const AddStudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !className) return;
    onAddStudent({ name, className });
    setName("");
    setClassName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-md mb-8 max-w-lg mx-auto border border-blue-100"
    >
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">
        Tambah Mahasiswa
      </h2>
      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        placeholder="Kelas"
        value={className}
        onChange={(e) => setClassName(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all shadow-sm"
      >
        + Tambah
      </button>
    </form>
  );
};

export default AddStudentForm;
