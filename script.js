window.generateCode = function() {
    const size = document.getElementById('business-size').value;
    if (size && wordsArray.length > 0) {
        const code = `${wordsArray[Math.floor(Math.random() * wordsArray.length)]}${wordsArray[Math.floor(Math.random() * wordsArray.length)]}${wordsArray[Math.floor(Math.random() * wordsArray.length)]}`;
        localStorage.setItem('businessSize', size);
        localStorage.setItem('custom_user_id', code);
        localStorage.setItem('task1-status', 'Not complete');
        localStorage.setItem('task2-status', 'Not complete');
        localStorage.setItem('task3-status', 'Not complete');
        document.cookie = `custom_user_id=${code}; path=/`; // Set the custom_user_id cookie
        window.location.href = 'tasks.html';
    } else {
        alert('Please select a business size.');
    }
}

window.loadCode = function() {
    const code = localStorage.getItem('custom_user_id');
    if (code) {
        document.getElementById('generated-code').textContent = code;
        document.cookie = `custom_user_id=${code}; path=/`; // Set the custom_user_id cookie
        loadRecordData();
    } else {
        window.location.href = 'index.html';
    }
}

function loadRecordData() {
    document.getElementById('task1-status').textContent = localStorage.getItem('task1-status');
    document.getElementById('task2-status').textContent = localStorage.getItem('task2-status');
    document.getElementById('task3-status').textContent = localStorage.getItem('task3-status');
    updateDropdowns();
    updateStatusColor('task1');
    updateStatusColor('task2');
    updateStatusColor('task3');
}

window.updateStatus = function(taskId) {
    const dropdown = document.getElementById(`${taskId}-update`);
    const status = dropdown.value;
    if (status) {
        document.getElementById(`${taskId}-status`).textContent = status;
        updateStatusColor(taskId);
        localStorage.setItem(`${taskId}-status`, status);
    } else {
        alert('Please select a status.');
    }
}

function updateDropdowns() {
    const tasks = ['task1', 'task2', 'task3'];
    tasks.forEach(task => {
        const status = document.getElementById(`${task}-status`).textContent;
        const dropdown = document.getElementById(`${task}-update`);
        dropdown.innerHTML = '<option disabled selected>Select...</option>';
        if (status === 'Not complete') {
            dropdown.innerHTML += '<option value="Complete">Complete</option><option value="Skipped">Skipped</option>';
        } else if (status === 'Complete') {
            dropdown.innerHTML += '<option value="Not complete">Not complete</option><option value="Skipped">Skipped</option>';
        } else if (status === 'Skipped') {
            dropdown.innerHTML += '<option value="Not complete">Not complete</option><option value="Complete">Complete</option>';
        }
    });
}

function updateStatusColor(taskId) {
    const statusElement = document.getElementById(`${taskId}-status`);
    const status = statusElement.textContent;
    if (status === 'Not complete') {
        statusElement.className = 'not-complete';
    } else if (status === 'Complete') {
        statusElement.className = 'complete';
    } else if (status === 'Skipped') {
        statusElement.className = 'skipped';
    }
}
