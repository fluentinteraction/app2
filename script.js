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
    "Hobby", "Hold", "Hollow", "Hope", "Horse", "Hug", "Hunt", "Hurry", "Hush", "Ice",
    "Idea", "Idle", "Igloo", "Impact", "Impel", "Inch", "Index", "Indigo", "Iris", "Iron",
    "Island", "Issue", "Item", "Jade", "Jam", "Jelly", "Jewel", "Jive", "Job", "Join",
    "Joke", "Joy", "Judge", "Jump", "Jungle", "Jury", "Keen", "Keep", "Key", "Kick",
    "Kid", "Kind", "Kite", "Kitten", "Koala", "Lab", "Lace", "Lady", "Lamp", "Lark",
    "Laugh", "Lava", "Lawn", "Lead", "Leaf", "Leap", "Learn", "Lemon", "Lend", "Light",
    "Like", "Lily", "Lime", "Lion", "List", "Live", "Lively", "Lizard", "Load", "Loaf",
    "Loan", "Lodge", "Logic", "Long", "Look", "Loop", "Love", "Loyal", "Luck", "Lunch",
    "Lush", "Magic", "Mail", "Mango", "Man", "Mare", "Marry", "Mask", "Mass", "Maze",
    "Meadow", "Mellow", "Melt", "Memory", "Men", "Mend", "Mentor", "Menu", "Merry", "Mesh",
    "Mess", "Metal", "Mild", "Milk", "Mint", "Mist", "Mix", "Moat", "Model", "Mole",
    "Moment", "Mood", "Moon", "Moral", "More", "Moss", "Moth", "Move", "Muffin", "Mule",
    "Muse", "Music", "Must", "Nest", "Net", "Night", "Noble", "Noise", "North", "Note",
    "Novel", "Nudge", "Nurse", "Nut", "Oak", "Oasis", "Oath", "Ocean", "Odd", "Ogre",
    "Oil", "Olive", "Onion", "Orange", "Orbit", "Order", "Organ", "Otter", "Owl", "Ox",
    "Pack", "Pad", "Page", "Paint", "Palm", "Panda", "Panic", "Paper", "Park", "Part",
    "Party", "Pass", "Path", "Peace", "Peach", "Peanut", "Peek", "Peel", "Pen", "Perch",
    "Pet", "Phone", "Photo", "Piano", "Pick", "Picnic", "Pig", "Pillow", "Pine", "Pink",
    "Play", "Plot", "Pluck", "Plum", "Poem", "Point", "Polar", "Pond", "Pool", "Pop",
    "Pouch", "Pound", "Praise", "Pray", "Press", "Pride", "Prince", "Prize", "Prompt", "Proud",
    "Puppy", "Push", "Puzzle", "Quack", "Quest", "Quiet", "Quill", "Quilt", "Race", "Rage",
    "Rain", "Raise", "Rally", "Ramp", "Rapid", "Rare", "Raven", "Reach", "Ready", "Rebel",
    "Recall", "Reel", "Relax", "Relief", "Remind", "Rely", "Rescue", "Respect", "Rest", "Rhyme",
    "Rich", "Ride", "Ridge", "Ring", "Rise", "River", "Roam", "Roar", "Robin", "Rock",
    "Rope", "Rose", "Rug", "Rush", "Sad", "Safe", "Sail", "Sand", "Save", "Scale",
    "Scare", "Scarf", "Scenic", "Scold", "Score", "Scout", "Scrub", "Sea", "Search", "Seat",
    "Secure", "See", "Seek", "Select", "Sense", "Set", "Shade", "Shake", "Share", "Sharp",
    "Sheep", "Shell", "Shine", "Ship", "Shock", "Shoes", "Shout", "Show", "Shy", "Sick",
    "Side", "Sight", "Sign", "Silk", "Sing", "Sip", "Sit", "Six", "Sketch", "Ski",
    "Skill", "Skip", "Sky", "Slap", "Slay", "Sleep", "Slide", "Sling", "Slip", "Slogan",
    "Slope", "Slow", "Small", "Smile", "Snack", "Snake", "Snap", "Snow", "Soar", "Soft",
    "Solve", "Song", "Sort", "Soul", "Sound", "Soup", "Space", "Spade", "Spark", "Speak",
    "Speed", "Spell", "Spice", "Spider", "Spike", "Spill", "Spin", "Spirit", "Spit", "Split",
    "Spoil", "Sport", "Spot", "Spray", "Spread", "Spring", "Spy", "Square", "Squid", "Stack",
    "Stage", "Stair", "Stale", "Star", "Start", "State", "Stay", "Steam", "Steel", "Stem",
    "Step", "Stick", "Still", "Sting", "Stir", "Stock", "Stone", "Store", "Storm", "Story",
    "Stove", "Strap", "Stray", "Stream", "Street", "Stress", "Strike", "String", "Strip", "Strong",
    "Struck", "Study", "Stuff", "Style", "Suede", "Sugar", "Suit", "Sunny", "Sure", "Swag",
    "Swamp", "Swan", "Swap", "Swarm", "Swear", "Sweet", "Swift", "Swim", "Swing", "Switch",
    "Sword", "Symbol", "Table", "Tackle", "Tale", "Talk", "Tame", "Tank", "Tape", "Target",
    "Task", "Taste", "Teach", "Team", "Tear", "Teddy", "Teeth", "Tend", "Tennis", "Tent",
    "Term", "Test", "Text", "Thank", "Thaw", "Theme", "There", "Thick", "Thief", "Thigh",
    "Thing", "Think", "Thorn", "Thrill", "Thrive", "Throat", "Throw", "Thumb", "Thunder", "Tick",
    "Tiger", "Tilt", "Timid", "Tin", "Tinge", "Tiny", "Tip", "Tire", "Toast", "Today",
    "Toe", "Tog", "Tomb", "Tone", "Tool", "Tooth", "Top", "Topic", "Torch", "Tornado",
    "Touch", "Tough", "Tour", "Tow", "Tower", "Town", "Toy", "Track", "Trade", "Trail",
    "Train", "Trap", "Travel", "Treat", "Tree", "Trend", "Trick", "Trip", "Trophy", "Truck",
    "True", "Trump", "Trust", "Truth", "Try", "Tune", "Turn", "Turtle", "Twist", "Two",
    "Type", "Ugly", "Ulcer", "Unite", "Unit", "Upon", "Upper", "Upset", "Usual", "Vacuum",
    "Vague", "Value", "Vapor", "Vase", "Vault", "Veil", "Vein", "Velvet", "Venom", "Verb",
    "Verify", "Verse", "Very", "Vest", "Vibe", "Video", "View", "Vigor", "Violet", "Violin",
    "Virus", "Vision", "Visit", "Vital", "Vivid", "Vocal", "Voice", "Void", "Volcano", "Volume",
    "Vote", "Wade", "Waist", "Walk", "Wall", "Wander", "Want", "Warm", "Warn", "Warp",
    "Wash", "Waste", "Watch", "Water", "Wave", "Way", "Weak", "Wealth", "Wear", "Weave",
    "Web", "Wedding", "Weed", "Week", "Weird", "Welcome", "Well", "West", "Wet", "Whale",
    "What", "Wheel", "When", "Where", "Which", "While", "Whip", "Whisk", "White", "Who",
    "Whole", "Why", "Wide", "Wield"]; // Add your words from words.js here
        const code = `${wordsArray[Math.floor(Math.random() * wordsArray.length)]}${wordsArray[Math.floor(Math.random() * wordsArray.length)]}${wordsArray[Math.floor(Math.random() * wordsArray.length)]}`;
        localStorage.setItem('custom_user_id', code);
        localStorage.setItem('businessSize', size);
        localStorage.setItem('task1-status', 'Not complete');
        localStorage.setItem('task2-status', 'Not complete');
        localStorage.setItem('task3-status', 'Not complete');
        window.location.href = 'tasks.html';
    } else {
        alert('Please select a business size.');
    }
}

window.loadCode = function() {
    const code = localStorage.getItem('custom_user_id');
    if (code) {
        document.getElementById('generated-code').textContent = code;
        loadRecordData(code);
    } else {
        window.location.href = 'index.html';
    }
}

window.clearData = function() {
    localStorage.clear();
    window.location.href = 'index.html';
}

function loadRecordData(code) {
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
        const taskName = taskId.replace('-', ' '); // Assuming taskId is in format task1, task2, etc.
        document.getElementById(`${taskId}-status`).textContent = status;
        updateStatusColor(taskId);
        localStorage.setItem(`${taskId}-status`, status);
        
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
