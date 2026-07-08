// =====================================
// Chapter III - The Hidden Library
// =====================================

let booksDone = false;
let candlesDone = false;
let roseDone = false;

document.addEventListener("DOMContentLoaded", () => {

    const name = localStorage.getItem("playerName") || "Dear Reader";

    document.getElementById("welcome").textContent =
        `Welcome, ${name}!`;

    updateProgress();

});

// ==========================
// Progress
// ==========================

function updateProgress(){

    let count = 0;

    if(booksDone) count++;
    if(candlesDone) count++;
    if(roseDone) count++;

    document.getElementById("progress").innerHTML =
        `${count}/3 Challenges Completed`;

}

// ==========================
// Unlock
// ==========================

function checkComplete(){

    updateProgress();

    if(booksDone && candlesDone && roseDone){

        document.getElementById("message").innerHTML =
        "✨ Congratulations! You completed every magical task.";

        document.getElementById("unlock").style.display = "block";

        document.getElementById("unlock").classList.add("fadeIn");

    }

}

// ==========================
// Task I
// ==========================

function finishTask(task,button){

    button.disabled = true;

    button.innerHTML = "✨";

    button.style.opacity = ".5";

    const remaining =
        button.parentElement.querySelectorAll("button:not(:disabled)");

    if(remaining.length===0){

        booksDone = true;

        document.getElementById("message").innerHTML =
        "📚 Every enchanted book has returned to its shelf.";

        checkComplete();

    }

}

// ==========================
// Task II
// ==========================

function lightCandle(button){

    if(button.dataset.lit) return;

    button.dataset.lit = true;

    button.innerHTML = "🔥";

    button.disabled = true;

    const candles =
        document.querySelectorAll("[onclick^='lightCandle']");

    let lit = 0;

    candles.forEach(c=>{

        if(c.dataset.lit){

            lit++;

        }

    });

    if(lit===candles.length){

        candlesDone = true;

        document.getElementById("message").innerHTML =
        "🕯️ Every candle now glows with magical light.";

        checkComplete();

    }

}

// ==========================
// Task III
// ==========================

function wrongObject(){

    const hints=[

        "❌ That's only an old artifact.",

        "✨ The enchanted rose is still hidden.",

        "🕰️ Not this one...",

        "🔑 Keep searching."

    ];

    document.getElementById("message").innerHTML =
        hints[Math.floor(Math.random()*hints.length)];

}

function findRose(){

    if(roseDone) return;

    roseDone = true;

    document.getElementById("message").innerHTML =
        "🌹 You discovered the Enchanted Rose!";

    createMagic();

    checkComplete();

}

// ==========================
// Magic Effect
// ==========================

function createMagic(){

    for(let i=0;i<50;i++){

        const star=document.createElement("div");

        star.innerHTML=Math.random()>0.5?"✨":"⭐";

        star.style.position="fixed";

        star.style.left=Math.random()*100+"vw";

        star.style.top=Math.random()*100+"vh";

        star.style.fontSize=(12+Math.random()*25)+"px";

        star.style.pointerEvents="none";

        star.style.transition="2s";

        document.body.appendChild(star);

        setTimeout(()=>{

            star.style.transform="translateY(-150px) scale(2)";

            star.style.opacity="0";

        },100);

        setTimeout(()=>{

            star.remove();

        },2200);

    }

}
