import React, { useState } from 'react';
import { addStudent, updateStudent } from '../services/studentService';

function StudentForm({ student, onSuccess }) {
  const [formData, setFormData] = useState({
    name: student?.name || '',
    section: student?.section || '',
    marks: student?.marks || '',
    grade: student?.grade || ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (student) {
      await updateStudent(student.id, formData);
    } else {
      await addStudent({ ...formData, id: Date.now() });
    }
    alert('Student saved successfully!');
    onSuccess();
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <h2>{student ? 'Edit' : 'Add'} Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '10px', margin: '10px 0' }}
        />
        <input
          name="section"
          placeholder="Section"
          value={formData.section}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '10px', margin: '10px 0' }}
        />
        <input
          type="number"
          name="marks"
          placeholder="Marks"
          value={formData.marks}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '10px', margin: '10px 0' }}
        />
        <input
          name="grade"
          placeholder="Grade"
          value={formData.grade}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '10px', margin: '10px 0' }}
        />
        <button type="submit" style={{ padding: '12px 30px' }}>
          {student ? 'Update' : 'Add'} Student
        </button>
      </form>
    </div>
  );
}

export default StudentForm;