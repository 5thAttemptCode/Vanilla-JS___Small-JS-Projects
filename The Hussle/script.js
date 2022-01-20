let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quote = [
            "Hustle beats talent when talent doesn't hustle.",

            "Greatness only comes before hustle in the dictionary.",

            "Don't stay in bed unless you can make money in bed.",

            "I'd rather hustle 24/7 than slave 9 to 5.",

            "Those at the top of the mountain didn't fall there.",

            "A-game or don't play at all.",

            "Hustle until your haters ask if you are hiring.",

            "Today I will do something others won't, so tomorrow I can do something others can't.",

            "That setback gonna hurt, but that comeback gonna be a beast.",

            "Built, not bought. Hustled, not handed. Earned, not given.",

            "Hustle. Grind. Execute.",

            "Hustlers don't sleep, we nap.",

            "I'd rather hustle 24/7 than slave 9 to 5.",

            "Those who wait, get what Hustlers leave behind.",

            "Hustle until you no longer need to introduce yourself.",

            "Sometimes you have to take two steps back to take ten forwards.",

            "Hustle is a marathon and I'm out here running laps.",

            "Hustle in silence and let that Double-R do the noise."
        ];

btn.addEventListener('click', function(){
    const randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;
})