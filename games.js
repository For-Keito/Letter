let booksDone = false;
let candlesDone = false;
let roseDone = false;

document.addEventListener("DOMContentLoaded", () => {
    const name = localStorage.getItem("playerName") || "Dear Reader";
    document.getElementById("welcome").textContent = `Welcome, ${name}!`;
});

function checkComplete() {
    if (booksDone && candlesDone && roseDone) {
        document.getElementById("unlock").style.display = "block";
        document.getElementById("message").textContent =
            "✨ All magical tasks completed! ✨";
    }
}

function finishTask(task, button) {
    button.disabled = true;
    button.style.opacity = "0.5";

    const parent = button.parentElement;
    const remaining = parent.querySelectorAll("button:not(:disabled)");

    if (remaining.length === 0) {
        booksDone = true;
        document.getElementById("message").textContent =
            "📚 The enchanted books have returned!";
        checkComplete();
    }
}

function lightCandle(button) {
    if (button.dataset.lit) return;

    button.dataset.lit = "true";
    button.textContent = "🕯️✨";
    button.disabled = true;

    const parent = button.parentElement;
    const remaining = parent.querySelectorAll("button:not([data-lit])");

    if (remaining.length === 0) {
        candlesDone = true;
        document.getElementById("message").textContent =
            "🕯️ The candles are glowing!";
        checkComplete();
    }
}

function wrongObject() {
    document.getElementById("message").textContent =
        "❌ That isn't the enchanted rose. Try again!";
}

function findRose() {
    if (roseDone) return;

    roseDone = true;
    document.getElementById("message").textContent =
        "🌹 You found the enchanted rose!";
    checkComplete();
}
