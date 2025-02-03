document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const message = document.getElementById('message');
    const imageContainer = document.getElementById('imageContainer');

    yesButton.addEventListener('click', function() {
        message.textContent = 'Yay! I’m so happy you said yes! ❤️';
        showImage();
    });

    noButton.addEventListener('click', function() {
        message.textContent = 'That’s okay! Maybe next time! 😊';
        imageContainer.innerHTML = ''; // Clear the image if "No" is pressed
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
});