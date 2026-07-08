// ===============================
// Chapter II - The Enchanted Garden
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const player = localStorage.getItem("playerName") || "Dear Guest";

    document.getElementById("playerName").textContent = player;

});

// ------------------------------
// Wrong Flower
// ------------------------------

function wrongFlower(){

    const hints = [

        "🌸 The garden whispers... perhaps another flower.",

        "✨ A soft breeze tells you to keep looking.",

        "🦋 That isn't the enchanted rose.",

        "🌼 The magic tells you to try again.",

        "🌿 Follow your heart."

    ];

    const message = document.getElementById("message");

    message.innerHTML = hints[Math.floor(Math.random()*hints.length)];

}

// ------------------------------
// Correct Flower
// ------------------------------

function correctFlower(){

    const message = document.getElementById("message");

    message.innerHTML =
    "🌹 You found the Enchanted Rose!";

    createMagic();

    setTimeout(() => {

        window.location.href = "games.html";

    },2500);

}

// ------------------------------
// Magic Effect
// ------------------------------

function createMagic(){

    for(let i=0;i<60;i++){

        const sparkle=document.createElement("div");

        sparkle.innerHTML=Math.random()>0.5?"✨":"⭐";

        sparkle.style.position="fixed";

        sparkle.style.left=Math.random()*100+"vw";

        sparkle.style.top=Math.random()*100+"vh";

        sparkle.style.fontSize=(12+Math.random()*25)+"px";

        sparkle.style.pointerEvents="none";

        sparkle.style.transition="2s";

        document.body.appendChild(sparkle);

        setTimeout(()=>{

            sparkle.style.transform="translateY(-150px) scale(2)";

            sparkle.style.opacity="0";

        },100);

        setTimeout(()=>{

            sparkle.remove();

        },2200);

    }

}
