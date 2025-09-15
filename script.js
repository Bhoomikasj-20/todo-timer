/* script.js */
let timerInterval;
let startTime = 0;
let elapsedTime = 0;

function newTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="deleteTask(this)">Delete "Hurray!you completed the task🎉🥳"</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

function deleteTask(button) {
    const listItem = button.parentNode;
    listItem.remove();
}

function startTimer() {
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function() {
            elapsedTime = Date.now() - startTime;
            document.getElementById('time').textContent = formatTime(elapsedTime);
        }, 10);
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    document.getElementById('time').textContent = '00:00';
}

function formatTime(time) {
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    return (
        (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds
    );
}
