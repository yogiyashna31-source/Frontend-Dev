import React from 'react';

function StudentDetails({ student }) {
  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '30px', border: '1px solid #ddd', borderRadius: '10px' }}>
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Section:</strong> {student.section}</p>
      <p><strong>Marks:</strong> {student.marks}</p>
      <p><strong>Grade:</strong> {student.grade}</p>
      <div style={{ marginTop: '20px', padding: '15px', background: '#e7f3ff', borderRadius: '8px' }}>
        <strong>Result:</strong> {student.marks >= 90 ? 'Excellent!' : student.marks >= 70 ? 'Good!' : 'Needs Improvement'}
      </div>
    </div>
  );
}

export default StudentDetails;