document.addEventListener("DOMContentLoaded", function () {
  // Show the pop-up after 5 seconds
  console.log("success");
  setTimeout(function () {
    document.querySelector(".cookiePopup").classList.add("show");
  }, 3000);

    // Handle the accept and reject buttons
  document.getElementById("accept-btn").addEventListener("click", function () {
    // Set your logic to handle cookie acceptance here
    console.log("All cookies accepted.");
    closePopup();
  });

  document.getElementById("reject-btn").addEventListener("click", function () {
    // Set your logic to handle cookie rejection here
    console.log("All cookies rejected.");
    closePopup();
  });

  function closePopup() {
    document.querySelector('.cookiePopup').style.display = "none";
  }

});


var selectedTheme = localStorage.getItem('selectedTheme');

// Set background image based on the chosen theme
if (selectedTheme === 'dark') {
  document.body.style.backgroundImage = 'url("dark.avif")';
} else if (selectedTheme === 'retro') {
  document.body.style.backgroundImage = 'url("retro.avif")';
} else if (selectedTheme === 'country') {
  document.body.style.backgroundImage = 'url("country.jpg")';
} else if (selectedTheme === 'light') {
  document.body.style.backgroundImage = 'url("light.webp")';
}