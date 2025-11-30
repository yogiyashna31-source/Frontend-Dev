import React from 'react';
import { getAllStudents, deleteStudent } from '../services/studentService';

function StudentList({ students, setStudents, onAdd, onEdit, onView }) {
  const loadStudents = async () => {
    const data = await getAllStudents();
    setStudents(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this student?')) {
      await deleteStudent(id);
      alert('Deleted! Click Load Students again.');
    }
  };

  return (
    <div>
      <button onClick={loadStudents} style={{ margin: '10px', padding: '10px 20px' }}>
        Load Students
      </button>
      <button onClick={onAdd} style={{ margin: '10px', padding: '10px 20px' }}>
        Add Student
      </button>

      {students.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>
          Click "Load Students" to see data
        </p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ background: '#007bff', color: 'white' }}>
              <th style={{ padding: '10px' }}>Name</th>
              <th style={{ padding: '10px' }}>Section</th>
              <th style={{ padding: '10px' }}>Marks</th>
              <th style={{ padding: '10px' }}>Grade</th>
              <th style={{ padding: '10px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px' }}>{student.name}</td>
                <td style={{ padding: '10px' }}>{student.section}</td>
                <td style={{ padding: '10px' }}>{student.marks}</td>
                <td style={{ padding: '10px' }}>{student.grade}</td>
                <td style={{ padding: '10px' }}>
                  <button onClick={() => onView(student)} style={{ margin: '0 5px' }}>View</button>
                  <button onClick={() => onEdit(student)} style={{ margin: '0 5px' }}>Edit</button>
                  <button onClick={() => handleDelete(student.id)} style={{ margin: '0 5px', background: '#dc3545' }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentList;