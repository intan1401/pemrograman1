document.addEventListener("DOMContentLoaded", function () {
  const loginToggle = document.getElementById("loginToggle");
  const registerToggle = document.getElementById("registerToggle");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  let attemptCount = 0;
  const maxAttempts = 3;

  loginToggle.addEventListener("click", function () {
    loginForm.classList.add("form-active");
    loginForm.classList.remove("form-hidden");
    registerForm.classList.add("form-hidden");
    registerForm.classList.remove("form-active");
    loginToggle.classList.add("active");
    registerToggle.classList.remove("active");
  });

  registerToggle.addEventListener("click", function () {
    registerForm.classList.add("form-active");
    registerForm.classList.remove("form-hidden");
    loginForm.classList.add("form-hidden");
    loginForm.classList.remove("form-active");
    registerToggle.classList.add("active");
    loginToggle.classList.remove("active");
  });

  // Handle login form submission
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Simulasi autentikasi, di sini biasanya akan ada pengecekan dengan server atau database
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      // Jika login sukses, redirect ke halaman lain atau lakukan tindakan lain
      alert("Login successful!");
      window.location.href = "menu.html"; // Ganti dengan halaman tujuan setelah login
    } else {
      attemptCount++;
      if (attemptCount === maxAttempts) {
        alert("Too many incorrect attempts. Logging you out.");
        window.location.href = "https://www.example.com"; // Ganti dengan URL halaman lain atau logout URL
      } else {
        alert(
          `Incorrect username or password. Attempt ${attemptCount} of ${maxAttempts}.`
        );
      }
    }

    // Reset form setelah submit
    loginForm.reset();
  });

  // Handle register form submission
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    if (name && email && username && password) {
      // Store user details in local storage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      alert("Registration successful. You can now log in.");
      // Switch to login form
      loginForm.classList.add("form-active");
      loginForm.classList.remove("form-hidden");
      registerForm.classList.add("form-hidden");
      registerForm.classList.remove("form-active");
      loginToggle.classList.add("active");
      registerToggle.classList.remove("active");
    } else {
      document.getElementById("register-error-message").textContent =
        "All fields are required.";
    }
  });
});
