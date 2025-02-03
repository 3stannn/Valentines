document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const message = document.getElementById('message');
    const imageContainer = document.getElementById('imageContainer');
    const yaudio = new Audio('audio/yesmusic.mp3'); // Replace with the path to your music file
    const naudio = new Audio('audio/music.mp3'); // Replace with the path to your music file

    yesButton.addEventListener('click', function() {
        message.textContent = 'Yay! I’m so happy you said yes! ❤️ I love you, Sey';
        showImage();
        playMusic();
    });

    noButton.addEventListener('click', function() {
        message.textContent = 'That’s okay! Maybe next time! 😊 I love you, Sey';
        imageContainer.innerHTML = ''; // Clear the image if "No" is pressed
        playMusicNo();
    });

    function showImage() {
        const img = document.createElement('img');
        img.src = 'img/IMG_6711.JPG'; // Replace with the path to your image
        img.alt = 'Happy Image';
        img.style.width = '300px'; // Set the width of the image
        img.style.height = 'auto'; // Maintain the aspect ratio
        img.style.marginTop = '20px'; // Add space between the text and the image
        imageContainer.innerHTML = ''; // Clear any existing image
        imageContainer.appendChild(img);
    }

    function playMusic() {
        yaudio.play();
    }

    function playMusicNo() {
        naudio.play();
    }
});