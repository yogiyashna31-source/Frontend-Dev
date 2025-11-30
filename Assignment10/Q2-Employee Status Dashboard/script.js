const tableBody = document.getElementById('employeeTable');
const errorDiv = document.getElementById('error');
const API_URL = 'http://localhost:3002/employees';

// Fetch all employees
function fetchEmployees() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', API_URL, true);
    xhr.onload = function() {
        if(xhr.status === 200) {
            const employees = JSON.parse(xhr.responseText);
            renderEmployees(employees);
        } else {
            errorDiv.textContent = 'Error fetching employees';
        }
    };
    xhr.send();
}

// Render employees in table
function renderEmployees(employees) {
    tableBody.innerHTML = '';
    employees.forEach(emp => {
        const row = document.createElement('tr');

        const statusClass = emp.status === 'active' ? 'active' : 'inactive';
        const toggleText = emp.status === 'active' ? 'Set Inactive' : 'Set Active';

        row.innerHTML = `
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td class="${statusClass}" id="status-${emp.id}">${emp.status}</td>
            <td>
                <button class="toggle-btn ${statusClass}" id="toggle-${emp.id}">
                    ${toggleText}
                </button>
            </td>
        `;

        tableBody.appendChild(row);

        // Add toggle event
        document.getElementById(`toggle-${emp.id}`).addEventListener('click', () => toggleStatus(emp));
    });
}

// Toggle employee status
function toggleStatus(emp) {
    const newStatus = emp.status === 'active' ? 'inactive' : 'active';
    const statusCell = document.getElementById(`status-${emp.id}`);
    const toggleBtn = document.getElementById(`toggle-${emp.id}`);

    // Optimistically update UI
    statusCell.textContent = newStatus;
    statusCell.className = newStatus;
    toggleBtn.textContent = newStatus === 'active' ? 'Set Inactive' : 'Set Active';
    toggleBtn.className = `toggle-btn ${newStatus}`;

    // Send PATCH request
    const xhr = new XMLHttpRequest();
    xhr.open('PATCH', `${API_URL}/${emp.id}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    xhr.onload = function() {
        if(xhr.status >= 200 && xhr.status < 300) {
            emp.status = newStatus; // Update local status
        } else {
            // Revert UI on failure
            statusCell.textContent = emp.status;
            statusCell.className = emp.status;
            toggleBtn.textContent = emp.status === 'active' ? 'Set Inactive' : 'Set Active';
            toggleBtn.className = `toggle-btn ${emp.status}`;
            errorDiv.textContent = 'Failed to update status. Please try again.';
            setTimeout(() => { errorDiv.textContent = ''; }, 3000);
        }
    };

    xhr.onerror = function() {
        // Revert UI on error
        statusCell.textContent = emp.status;
        statusCell.className = emp.status;
        toggleBtn.textContent = emp.status === 'active' ? 'Set Inactive' : 'Set Active';
        toggleBtn.className = `toggle-btn ${emp.status}`;
        errorDiv.textContent = 'Network error. Please try again.';
        setTimeout(() => { errorDiv.textContent = ''; }, 3000);
    };

    xhr.send(JSON.stringify({ status: newStatus }));
}

// Initialize
fetchEmployees();
