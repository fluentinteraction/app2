window.generateCode = function() {
    const size = document.getElementById('business-size').value;
    if (size) {
        const wordsArray = ["Abandon", "Ability", "Able", "About", "Above", "Absent", "Absolute", "Abstract", "Abuse", "Academic", 
            "Accept", "Access", "Accident", "Accompany", "Account", "Accurate", "Accuse", "Achieve", "Acid", "Acquire",
            "Adore", "Afraid", "Alarm", "Amazed", "Anger", "Angst", "Anxious", "Appear", "Apple", "Argue",
            "Ashamed", "Attack", "Aware", "Baby", "Badger", "Bag", "Ball", "Bat", "Beach", "Beam",
            "Bear", "Beetle", "Begin", "Believe", "Bird", "Black", "Blast", "Blaze", "Bliss", "Blush",
            "Board", "Boat", "Body", "Bold", "Bond", "Book", "Boom", "Bounce", "Box", "Boy",
            "Brace", "Brain", "Brave", "Breeze", "Bright", "Bro", "Brush", "Bug", "Bunny", "Burst",
            "Bus", "Calm", "Camel", "Can", "Candy", "Care", "Cat", "Catch", "Chair", "Charm",
            "Cheer", "Chill", "Chirp", "Clam", "Clap", "Climb", "Clock", "Cloth", "Cloud", "Clown",
            "Coach", "Coast", "Cob", "Coin", "Cold", "Comet", "Compel", "Cool", "Coral", "Cosmos",
            "Couch", "Cow", "Crab", "Crash", "Crawl", "Crew", "Crib", "Crow", "Crush", "Cup",
            "Dare", "Dash", "Date", "Dawn", "Day", "Deer", "Delight", "Desk", "Dove", "Dream",
            "Duck", "Ease", "Eel", "Egg", "Elk", "Ember", "Enjoy", "Enter", "Epic", "Escape",
            "Excite", "Eye", "Fair", "Faith", "Fall", "Fame", "Fan", "Fancy", "Fare", "Farm",
            "Fast", "Fear", "Feast", "Fence", "Fire", "Fish", "Flame", "Flash", "Fly", "Focus",
            "Fold", "Follow", "Fool", "Football", "Forge", "Forget", "Fox", "Frame", "Free", "Fresh",
            "Friend", "Frog", "Fun", "Gale", "Game", "Garden", "Gaze", "Gem", "Giant", "Gift",
            "Giggle", "Glad", "Glow", "Goal", "Gold", "Good", "Goose", "Grab", "Grace", "Grand",
            "Grass", "Grin", "Grip", "Grit", "Grow", "Guide", "Gull", "Gym", "Habit", "Hail",
            "Happy", "Harp", "Hawk", "Hay", "Heart", "Heat", "Hero", "Hill", "Hint", "Hiss",
            "Hobby", "Hold", "Hollow", "Hope", "Horse", "House", "Hug", "Hull", "Hush", "Hut",
            "Idea", "Idle", "Imp", "Inch", "Iron", "Ivy", "Jade", "Jam", "Jazz", "Jewel",
            "Jive", "Joy", "Jump", "Key", "Kid", "King", "Kit", "Lagoon", "Lark", "Laugh",
            "Leaf", "Leisure", "Light", "Lion", "Lively", "Log", "Loop", "Love", "Lucky", "Magic",
            "Magnet", "Master", "Maze", "Meadow", "Mellow", "Melody", "Mint", "Monkey", "Moon", "Mountain",
            "Mug", "Murmur", "Muse", "Nest", "Night", "Nimble", "Noble", "Note", "Oasis", "Ocean",
            "Olive", "Orb", "Pace", "Panda", "Parade", "Peak", "Peppy", "Petal", "Picnic", "Pine",
            "Play", "Plush", "Pond", "Poppy", "Proud", "Puzzle", "Quaint", "Quake", "Quest", "Quick",
            "Quiet", "Rabbit", "Raccoon", "Rain", "Rally", "Raptor", "Ray", "Reed", "Refresh", "Rest",
            "Rhythm", "Rice", "Rise", "River", "Roar", "Robin", "Rock", "Rogue", "Rose", "Rumble",
            "Sage", "Sail", "Sand", "Scenic", "Secret", "Serene", "Shade", "Shine", "Shore", "Silly",
            "Sky", "Sly", "Smile", "Snow", "Soar", "Song", "Sound", "Spark", "Spring", "Star",
            "Stone", "Story", "Stream", "Sun", "Sunny", "Surf", "Swim", "Tale", "Tango", "Thrive",
            "Thunder", "Tiger", "Timber", "Toad", "Trail", "Tree", "Trick", "Trot", "Tulip", "Twilight",
            "Valley", "Vivid", "Wade", "Wander", "Warm", "Wave", "Whale", "Wild", "Wish", "Wonder",
            "Yawn", "Yearn", "Yonder", "Zany", "Zeal", "Zen"];

        let generatedCode = size + "-" + wordsArray[Math.floor(Math.random() * wordsArray.length)] + "-" + wordsArray[Math.floor(Math.random() * wordsArray.length)];
        localStorage.setItem('custom_user_id', generatedCode);
        window.location.href = 'tasks.html';
    } else {
        alert('Please select a business size');
    }
}

window.updateStatus = function(taskId) {
    const dropdown = document.getElementById(`${taskId}-update`);
    const status = dropdown.value;
    if (status) {
        const taskName = taskId.replace('-', ' '); // Assuming taskId is in format task1, task2, etc.
        document.getElementById(`${taskId}-status`).textContent = status;
        updateStatusColor(taskId);
        localStorage.setItem(`${taskId}-status`, status);
        
        // Update dropdown options based on the new status
        updateDropdownOptions(taskId, status);

        // Fire GTM event
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'status_update',
            task_name: taskName,
            status: status
        });
    } else {
        alert('Please select a status.');
    }
}

function updateDropdownOptions(taskId, status) {
    const dropdown = document.getElementById(`${taskId}-update`);
    dropdown.innerHTML = '<option disabled selected>Select...</option>';
    if (status === 'Not complete') {
        dropdown.innerHTML += '<option value="Complete">Complete</option><option value="Skipped">Skipped</option>';
    } else if (status === 'Complete') {
        dropdown.innerHTML += '<option value="Not complete">Not complete</option><option value="Skipped">Skipped</option>';
    } else if (status === 'Skipped') {
        dropdown.innerHTML += '<option value="Not complete">Not complete</option><option value="Complete">Complete</option>';
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
    statusElement.className = '';
    if (status === 'Not complete') {
        statusElement.classList.add('not-complete');
    } else if (status === 'Complete') {
        statusElement.classList.add('complete');
    } else if (status === 'Skipped') {
        statusElement.classList.add('skipped');
    }
}

// Load the code and initialize dropdowns on page load
window.loadCode = function() {
    const code = localStorage.getItem('custom_user_id');
    if (code) {
        document.getElementById('generated-code').textContent = code;
    }
    updateDropdowns();
}

// Function to clear data and restart
window.clearData = function() {
    localStorage.removeItem('custom_user_id');
    window.location.href = 'index.html';
}

// Initializing the dropdown options on page load
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('tasks.html')) {
        loadCode();
    }
});
