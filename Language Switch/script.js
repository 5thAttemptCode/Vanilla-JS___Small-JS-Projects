
const langEl = document.querySelector('.lang-container');
const link = document.querySelectorAll('a');
const titleEl = document.querySelector('.title');
const descrEl = document.querySelector('.description');

link.forEach(el => {
    el.addEventListener('click', ()  => {
        langEl.querySelector('.active').classList.remove('active')
        el.classList.add('active');

        const attr = el.getAttribute('language');

        titleEl.textContent = data[attr].title;
        descrEl.textContent = data[attr].description;
    });
});

var data = {

            "english":
            {
                "title": "This is a short text about me",
                "description":
                    `
                    My name is Henry. I am a self-taught Frontend Developer working towards 
                    becoming a Full Stack Developer. I am fluent in three languages, written 
                    and orally, which I try to showcase by this little Javascript project. 
                    My tech-journey began in early 2021 when I started to learn Python. 
                    At one point however, I was more attracted by frontend development which 
                    is why I started to learn HTML/SCSS and Javascript. Later I added libraries
                    like Bootstrap and GSAP to my skills. Currently Im working with NodeJS and 
                    VueJS. In my freetime I like to combine many pull-ups with good coffee, 
                    and up my sourdough game
                    `
            },

            "german":
            {
                "title": "Das ist ein kurzer Text über mich",
                "description":
                    `
                    Mein Name ist Henry. Ich habe mir selber Frontend Developing beigebracht und 
                    mit dem Ziel ein Fullstack Developer zu werden. Ich bin fließend in drei Sprachen, 
                    schriftlich und mündlich, weshalb ich dieses kleine Javascript Projekt gebaut 
                    habe. Anfang 2021 habe ich mit Python angefangen. Allerdings fühlte ich mich 
                    später eher zu frontend developing hingezogen und fing deshalb an mich mit 
                    HTML/SCSS und Javascript zu beschäftigen. Später kamen dann Libraries wie 
                    Bootleg und GSAP dazu. Aktuell beschäftige ich mich mit NodeJS und VueJS. 
                    In meiner Freizeit kombiniere ich eine Menge Klimbzüge mit gutem Kaffee, 
                    und arbeite an meinem Sauerteigbrot.
                    `
            },

            "danish":
            {
                "title": "Det er en kort text om mig",
                "description":
                    `
                    Mit navn er Henry. Jeg har selv lært mig Frontend Developing 
                    og håber på et tidspunkt at være en Fullstack Developer. Jeg er 
                    flydende i tre sprog, skriftligt og mundligt, som også er grunden til at 
                    jeg bygget det her lille Javascript program. I begyndelsen af 2021 startede 
                    jeg med at lære Python, men var på et tidspunkt mere interesseret i 
                    frontend developing. Derfor startede jeg så med at lære HTML/SCSS og 
                    Javascript, og lidt senere kom så Bootleg og GSAP med i programmet. Lige for 
                    tiden beskæftiger jeg mig med NodeJS og VueJS. I min fritid kombinerer 
                    jeg gerne mange pull-ups med en god kop kafe, og laver surdejs brød.
                    `
            }
};