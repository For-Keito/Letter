// =====================================
// The Enchanted Story
// Chapter I - Script
// =====================================

// Open the story
function openStory(){

    const name = document.getElementById("name").value.trim();

    if(name===""){

        alert("Please enter your name first. 🌹");
        return;

    }

    // Save her name for the other pages
    localStorage.setItem("herName",name);

    // Create magical loading screen
    createMagicTransition();

}

// Magical transition
function createMagicTransition(){

    const overlay=document.createElement("div");

    overlay.id="magicTransition";

    overlay.innerHTML=`

        <div class="magicContent">

            <div class="magicRose">🌹</div>

            <h2>The Library Awakens...</h2>

            <p>Ancient pages begin to turn...</p>

            <div class="loader"></div>

        </div>

    `;

    document.body.appendChild(overlay);

    // Fade in
    setTimeout(()=>{

        overlay.style.opacity="1";

    },100);

    // Go to next chapter
    setTimeout(()=>{

        window.location.href="flowers.html";

    },4200);

}

// Floating sparkles
function createSparkle(){

    const sparkle=document.createElement("div");

    sparkle.innerHTML="✨";

    sparkle.style.position="fixed";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.top="-30px";

    sparkle.style.fontSize=(15+Math.random()*18)+"px";

    sparkle.style.opacity=Math.random();

    sparkle.style.pointerEvents="none";

    sparkle.style.transition="transform linear";

    document.body.appendChild(sparkle);

    const duration=6000+Math.random()*3000;

    requestAnimationFrame(()=>{

        sparkle.style.transform=
        `translateY(${window.innerHeight+100}px)
         rotate(${Math.random()*720}deg)`;

        sparkle.style.transition=
        `transform ${duration}ms linear`;

    });

    setTimeout(()=>{

        sparkle.remove();

    },duration);

}

// Create sparkles forever
setInterval(createSparkle,700);

// Small glowing effect on title
window.onload=()=>{

    const title=document.querySelector("h1");

    setInterval(()=>{

        title.style.textShadow=
        "0 0 25px gold";

        setTimeout(()=>{

            title.style.textShadow=
            "0 0 10px rgba(255,215,0,.5)";

        },800);

    },3500);

}
