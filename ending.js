// ======================================
// Chapter V - The Final Page
// ======================================

const paragraphs = [

`Every page you've visited...
Every flower you chose...
Every little game you played...
Every line of code I wrote...
was made with one person in mind.

You.`,

`I wanted this to be different from an ordinary confession.

So I made something that tells a story—

because meeting you felt like the beginning of one.`,

`Thank you for giving this little project your time.

It truly means a lot to me. 🌹`,

`Maybe this isn't the most perfect confession.

Maybe I'm not the best at expressing my feelings.

But I wanted to create something that you could always come back to and remember.

Something that was made only for you.`,

`Whether your answer comes tomorrow,
next week,
or months from now...

please don't ever feel pressured.

Take all the time you need.

I'll respect whatever your heart decides.`,

`Until then...

I'll continue showing my sincerity,

not just through words,

but through my actions.

Because I truly believe that's how love should be.`

];

const story = document.getElementById("story");

let paragraph = 0;

function typeParagraph(){

    if(paragraph >= paragraphs.length){

        setTimeout(()=>{

            const finalMessage = document.getElementById("finalMessage");
            finalMessage.style.display = "block";
            finalMessage.classList.add("fadeIn");

            createCelebration();

        },1800);

        return;

    }

    const p = document.createElement("p");

    story.appendChild(p);

    let text = paragraphs[paragraph];

    let i = 0;

    function type(){

        if(i < text.length){

            p.textContent += text.charAt(i);

            i++;

            setTimeout(type,42);

        }else{

            paragraph++;

            setTimeout(typeParagraph,2200);

        }

    }

    type();

}

window.onload = () => {

    setTimeout(typeParagraph,1200);

};

// ======================================
// Magical Celebration
// ======================================

function createCelebration(){

    const icons = ["✨","🌹","⭐","💗","💖","🌸"];

    for(let i = 0; i < 180; i++){

        const icon = document.createElement("div");

        icon.innerHTML = icons[Math.floor(Math.random()*icons.length)];

        icon.style.position = "fixed";
        icon.style.left = Math.random()*100 + "vw";
        icon.style.top = "-40px";
        icon.style.fontSize = (15 + Math.random()*25) + "px";
        icon.style.pointerEvents = "none";
        icon.style.opacity = Math.random();

        document.body.appendChild(icon);

        const duration = 5000 + Math.random()*4000;

        icon.animate(
        [
            {
                transform:"translateY(0) rotate(0deg)"
            },
            {
                transform:`translateY(${window.innerHeight+100}px) rotate(${Math.random()*720}deg)`
            }
        ],
        {
            duration:duration
        });

        setTimeout(()=>{

            icon.remove();

        },duration);

    }

}

// ======================================
// Floating Sparkles
// ======================================

function sparkle(){

    const star = document.createElement("div");

    star.innerHTML = "✨";

    star.style.position = "fixed";
    star.style.left = Math.random()*100 + "vw";
    star.style.top = "-20px";
    star.style.fontSize = (10 + Math.random()*18) + "px";
    star.style.opacity = Math.random();
    star.style.pointerEvents = "none";

    document.body.appendChild(star);

    const duration = 7000;

    star.animate(
    [
        {transform:"translateY(0)"},
        {transform:`translateY(${window.innerHeight+60}px)`}
    ],
    {
        duration:duration
    });

    setTimeout(()=>{

        star.remove();

    },duration);

}

setInterval(sparkle,900);
