//Made with AI:
(function() {
  const userArea = document.getElementById("userArea");
  const signUpBtn = document.getElementById("signUpBtn");

  signUpBtn.addEventListener("click", () => {
    const userName = prompt("Please enter your name to sign in:");

    if (userName && userName.trim() !== "") {
      // Clear the sign up button
      userArea.innerHTML = "";

      // Create user info container
      const userInfo = document.createElement("div");
      userInfo.className = "user-info";

      // Create name span
      const nameSpan = document.createElement("span");
      nameSpan.textContent = userName;

      // Create profile image
      const profileImg = document.createElement("img");
      profileImg.src = `https://i.pravatar.cc/150?u=${encodeURIComponent(userName)}`; 
      profileImg.alt = `${userName}'s profile picture`;

      // Append name and image to user info container
      userInfo.appendChild(nameSpan);
      userInfo.appendChild(profileImg);

      // Append user info container to user area
      userArea.appendChild(userInfo);
    }
  });
})();
