// Get all images on the page
const images = document.getElementsByTagName('img');

// Loop through each image
for (let i = 0; i < images.length; i++) {
  const image = images[i];

  // Check if the image has an alt attribute
  if (image.alt) {
    // If it does, copy the alt text to the clipboard when the image is clicked
    image.addEventListener('click', () => {
      var text = image.src + " " + image.alt;
      navigator.clipboard.writeText(text).then(() => {
          alert('Alt text copied to clipboard:' + text);
          chrome.runtime.sendMessage({message: "alt_txt", data: text}, (response) => {
              console.log(response.message);
          });
      }, (error) => {
          console.error('Error copying alt text:', error);
      });
    });
  }
}

