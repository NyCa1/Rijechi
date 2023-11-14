const words = ["Potpala", "Svijet", "Stranica", "Božo Vrećo", "Predator", "Pedala", "GenZ"];
let wordIndex = 0;
let timerValue = 60;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateWord() {
    if (timerValue > 0) {
        document.getElementById("word-container").innerText = words[wordIndex];
        wordIndex = (wordIndex + 1) % words.length;
    }
}

function updateTimer() {
    document.getElementById("countdown").innerText = timerValue;
    if (timerValue === 0) {
        document.getElementById("word-container").innerText = "Time's up!";
        clearInterval(timerInterval);
    } else {
        timerValue--;
        setTimeout(updateTimer, 1000);
    }
}

function startApp() {
    shuffleArray(words);
    updateWord();
    updateTimer();
    setTimeout(() => {
        setInterval(() => {
            updateWord();
        }, 10000); // Update word every 10 seconds
    }, 1000); // Delay the word updates by 1 second

}

startApp();