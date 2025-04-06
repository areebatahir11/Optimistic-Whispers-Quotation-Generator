const messages = {
    islamic: [
        "Allah is with the person who has patience.",
        "Thanks Allah for being Muslim :)",
        "Have faith in Allah, He has better plans for you.",
        "If you remember Allah, it means that Allah remembered you first."
    ],
    motivation: [
        "Keep Going, You're doing great!",
        "Success is on the way!",
        "Hard work always pays off!"
    ],
    selfLove: [
        "Love and respect yourself",
        "You are enough just the way you are!",
        "Your happiness matters!",
        "Be different, Be bright, Be you!"
    ],
    Gratitude: [
        "Gratitude turns what we have into enough.",
        "Thank Allah for every little blessing in your life.",
        "Gratitude is the best attitude.",
        "When you focus on the good, the good gets better."
    ]
};

function showMessage() {
    const category = document.getElementById("category").value;
    const messageDiv = document.getElementById("message");

    const randomIndex = Math.floor(Math.random() * messages[category].length);

    messageDiv.style.opacity = 0;
    setTimeout(() => {
        messageDiv.innerText = messages[category][randomIndex];
        messageDiv.style.opacity = 1;
    }, 300);
}

document.getElementById('messagebtn').addEventListener("click", showMessage);

const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.getElementById("theme-label");

function setThemeMode(isDark) {
    if (isDark) {
        document.body.classList.add("dark-mode");
        themeToggle.checked = true;
        themeLabel.innerText = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark-mode");
        themeToggle.checked = false;
        themeLabel.innerText = "Dark Mode";
        localStorage.setItem("theme", "light");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    setThemeMode(savedTheme === "dark");
});

themeToggle.addEventListener("change", function () {
    setThemeMode(this.checked);
});
