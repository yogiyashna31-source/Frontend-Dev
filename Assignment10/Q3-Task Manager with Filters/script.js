const API_URL = 'http://localhost:3003/tasks';
const $taskList = $('#taskList');
const $filter = $('#filter');

// Fetch tasks with optional filter
function fetchTasks(filter = '') {
    let url = API_URL;

    if(filter === 'completed') {
        url += '?completed=true';
    } else if(filter) {
        url += `?priority=${filter}`;
    }

    $.ajax({
        url: url,
        method: 'GET',
        success: function(data) {
            renderTasks(data);
        },
        error: function() {
            $taskList.html('<li>Error fetching tasks</li>');
        }
    });
}

// Render tasks in list
function renderTasks(tasks) {
    $taskList.empty();
    if(tasks.length === 0) {
        $taskList.html('<li>No tasks found</li>');
        return;
    }

    tasks.forEach(task => {
        const completedClass = task.completed ? 'completed' : '';
        const checkedAttr = task.completed ? 'checked' : '';

        const $li = $(`
            <li>
                <span class="${completedClass}">${task.title} (${task.priority})</span>
                <input type="checkbox" ${checkedAttr} />
            </li>
        `);

        // Handle checkbox toggle
        $li.find('input').on('change', function() {
            const newCompleted = this.checked;

            // Optimistic UI
            $li.find('span').toggleClass('completed', newCompleted);

            $.ajax({
                url: `${API_URL}/${task.id}`,
                method: 'PATCH',
                contentType: 'application/json',
                data: JSON.stringify({ completed: newCompleted }),
                success: function() {
                    task.completed = newCompleted; // update local
                },
                error: function() {
                    // Revert UI on error
                    $li.find('input').prop('checked', !newCompleted);
                    $li.find('span').toggleClass('completed', !newCompleted);
                    alert('Failed to update task. Please try again.');
                }
            });
        });

        $taskList.append($li);
    });
}

// Handle filter change
$filter.on('change', function() {
    const filterValue = $(this).val();
    fetchTasks(filterValue);
});

// Initial fetch
fetchTasks();
