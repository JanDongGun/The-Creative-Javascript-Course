class Drumkit{
    constructor() {
        this.pads = document.querySelectorAll(".pad");
        this.kickAudio = document.querySelector(".kick-sound");
        this.playBtn = document.querySelector('.play');
        this.snareAudio = document.querySelector(".snare-sound");
        this.hihatAudio = document.querySelector(".hihat-sound");
        this.index = 0;
        this.bpm = 150;
    }

    activePad() {
        this.classList.toggle('active');
    }
    
    repeat() {
        let step = this.index % 8;
        const activeBars = document.querySelectorAll(`.b${step}`);
        this.index++;
        console.log(activeBars);
    }

    start() {
        const interval = (60 / this.bpm) * 1000;
        setInterval(() => {
            this.repeat();
        }, interval);
    }
}
 
const drumKit = new Drumkit();

drumKit.pads.forEach((pad) => {
    pad.addEventListener('click', drumKit.activePad);
});

drumKit.playBtn.addEventListener('click', () => {
    drumKit.start();
})