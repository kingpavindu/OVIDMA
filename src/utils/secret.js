let clickCount = 0;

function trackClicks() {
  clickCount++;
  console.log("Click count: " + clickCount);

  if (clickCount >= 10) {
    // Show the secret image when the count reaches 10
    document.getElementById("secret_image").style.display = "block";
  }
}


