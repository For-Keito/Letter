// ===============================
// Chapter II - The Enchanted Garden
// ===============================

// Display the name from Chapter I
window.onload = function () {

    const player = localStorage.getItem("herName");

    if(player){

        document.getElementById("playerName").textContent = player;

    }else{

        document.getElementById("playerName").textContent = "Dear Guest";

    }

};

// Wrong flower
function wrongFlower(){

    const message = document.getElementById("message");

    const hints = [

        "🌸 The garden whispers... perhaps another flower.",
        "✨ A soft breeze tells you to keep looking.",
        "🦋 Not this one... the enchanted rose is waiting.",
        "🌼 The magic sparkles, but something feels missing.",
        "🌿 You're getting closer..."

    ];

    message.innerHTML =
    hints[Math.floor(Math.random()*hints.length)];

}

// Correct flower
function correctFlower(){

    const message=document.getElementById("message");

    message.innerHTML="🌹 The Enchanted Rose has awakened!";

    createMagic();

    setTimeout(()=>{

        magicalTransition();

    },2500);

}

// Golden sparkles
function createMagic(){

    for(let i=0;i<80;i++){

        const star=document.createElement("div");

        star.innerHTML=Math.random()>0.5?"✨":"⭐";

        star.style.position="fixed";

        star.style.left=Math.random()*100+"vw";

        star.style.top=Math.random()*100+"vh";

        star.style.fontSize=(10+Math.random()*25)+"px";

        star.style.opacity=Math.random();

        star.style.pointerEvents="none";

        star.style.transition="2s";

        document.body.appendChild(star);

        setTimeout(()=>{

            star.style.transform="translateY(-120px) scale(2)";
            star.style.opacity="0";

        },50);

        setTimeout(()=>{

            star.remove();

        },2200);

    }

}

// Fade to next chapter
function magicalTransition(){

    const overlay=document.createElement("div");

    overlay.innerHTML=`

        <div class="transitionBox">

            <div class="roseSpin">🌹</div>

            <h2>The Garden Blesses Your Journey</h2>

            <p>

            The petals dance through the air...

            A hidden path opens toward another chapter.

            </p>

        </div>

    `;

    overlay.style.position="fixed";

    overlay.style.top="0";

    overlay.style.left="0";

    overlay.style.width="100%";

    overlay.style.height="100%";

    overlay.style.background="linear-gradient(#2f1d14,#000)";

    overlay.style.display="flex";

    overlay.style.justifyContent="center";

    overlay.style.alignItems="center";

    overlay.style.textAlign="center";

    overlay.style.color="white";

    overlay.style.zIndex="9999";

    overlay.style.opacity="0";

    overlay.style.transition="1.5s";

    document.body.appendChild(overlay);

    setTimeout(()=>{

        overlay.style.opacity="1";

    },100);

    setTimeout(()=>{

        window.location.href="games.html";

    },3500);

}
