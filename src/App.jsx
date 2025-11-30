import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';

function App() {
  const [students, setStudents] = useState([]);
  const [currentView, setCurrentView] = useState('list'); // list, form, details
  const [editingStudent, setEditingStudent] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const showList = () => {
    setCurrentView('list');
    setEditingStudent(null);
    setSelectedStudent(null);
  };

  const showForm = (student = null) => {
    setEditingStudent(student);
    setCurrentView('form');
  };

  const showDetails = (student) => {
    setSelectedStudent(student);
    setCurrentView('details');
  };

  const updateStudents = (newStudents) => {
    setStudents(newStudents);
    alert('Operation successful! Click "Load Students" to see updated list.');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Student Result Management</h1>

      {currentView === 'list' && (
        <StudentList
          students={students}
          setStudents={updateStudents}
          onAdd={() => showForm()}
          onEdit={showForm}
          onView={showDetails}
        />
      )}

      {currentView === 'form' && (
        <>
          <button onClick={showList} style={{ marginBottom: '20px' }}>← Back to List</button>
          <StudentForm
            student={editingStudent}
            onSuccess={() => {
              showList();
            }}
          />
        </>
      )}

      {currentView === 'details' && selectedStudent && (
        <>
          <button onClick={showList} style={{ marginBottom: '20px' }}>← Back to List</button>
          <StudentDetails student={selectedStudent} />
        </>
      )}
    </div>
  );
}

export default App;