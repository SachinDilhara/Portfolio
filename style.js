document.addEventListener('DOMContentLoaded', function() {
    const words = ['Create', 'Develop', 'Design'];
    let wordIndex = 0;
    let index = 0;
    let textElement = document.getElementById('text4');
    let currentWord = words[wordIndex];

    function type() {
        textElement.textContent = currentWord.slice(0, index++);
        if (index <= currentWord.length) {
            setTimeout(type, 100); // Adjust typing speed (milliseconds)
        } else {
            setTimeout(erase, 1000); // Wait for 1 second before erasing
        }
    }

    function erase() {
        textElement.textContent = currentWord.slice(0, index--);
        if (index >= 0) {
            setTimeout(erase, 50); // Adjust erasing speed (milliseconds)
        } else {
            wordIndex = (wordIndex + 1) % words.length; // Move to the next word
            currentWord = words[wordIndex];
            setTimeout(type, 500); // Wait for 0.5 seconds before typing the next word
        }
    }

    type();
});