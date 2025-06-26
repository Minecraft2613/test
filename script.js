
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const contactInput = document.getElementById("contact-id");
  const profileInput = document.getElementById("profile-pic-url");
  const profilePreview = document.getElementById("profile-preview");

  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("main-menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  loginBtn.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      document.getElementById("login-status").innerText = "⚠ Please enter username and password.";
      return;
    }

    localStorage.setItem("account_username", username);
    localStorage.setItem("account_password", password);
    document.getElementById("login-status").innerText = "✅ Logged in as " + username;
  });

  document.getElementById("save-settings").addEventListener("click", () => {
    const contact = contactInput.value.trim();
    const picURL = profileInput.value.trim();
    localStorage.setItem("account_contact", contact);
    localStorage.setItem("account_profile_pic", picURL);

    alert("✅ Settings Saved!");
  });

  // Load profile on startup
  if (localStorage.getItem("account_profile_pic")) {
    profilePreview.src = localStorage.getItem("account_profile_pic");
    profilePreview.style.display = "block";
  }
  if (localStorage.getItem("account_contact")) {
    contactInput.value = localStorage.getItem("account_contact");
  }
});
