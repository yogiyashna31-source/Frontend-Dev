const daySelect = document.getElementById('daySelect');
const tableBody = document.querySelector('#timetableTable tbody');
const noClassesMsg = document.getElementById('noClassesMsg');

const API_URL = 'http://localhost:3007/timetable';

// Fetch timetable for selected day
function fetchTimetable(day) {
    tableBody.innerHTML = '';
    noClassesMsg.textContent = '';

    fetch(`${API_URL}?day=${day}`)
    .then(res => res.json())
    .then(data => {
        if(data.length === 0) {
            noClassesMsg.textContent = 'No classes today.';
            return;
        }

        data.forEach(cls => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${cls.subject}</td>
                <td>${cls.faculty}</td>
                <td>${cls.time}</td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(err => {
        noClassesMsg.textContent = 'Failed to load timetable.';
    });
}

// Event listener
daySelect.addEventListener('change', () => {
    fetchTimetable(daySelect.value);
});

// Initial fetch
fetchTimetable(daySelect.value);
