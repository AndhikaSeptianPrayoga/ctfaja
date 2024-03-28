//! Active Navbar Item

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem, i) => {
  navItem.addEventListener("click", () => {
    navItems.forEach((item, j) => {
      item.className = "nav-item";
    });
    navItem.className = "nav-item active";
  });
});

//! Light/Dark Mode

const moonIcon = document.querySelector(".moon");
const sunIcon = document.querySelector(".sun");
const nightImage = document.querySelector(".night-img");
const morningImage = document.querySelector(".morning-img");
const toggle = document.querySelector(".toggle");

function switchTheme() {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
    morningImage.classList.add("hidden");
    nightImage.classList.remove("hidden");
    localStorage.setItem("theme", "dark");
  } else {
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
    morningImage.classList.remove("hidden");
    nightImage.classList.add("hidden");
    localStorage.setItem("theme", "light");
  }
}

function updateTheme(themeMode) {
  sunIcon.classList.add("hidden");
  moonIcon.classList.add("hidden");
  morningImage.classList.add("hidden");
  nightImage.classList.add("hidden");

  if (themeMode === "dark") {
    sunIcon.classList.remove("hidden");
    nightImage.classList.remove("hidden");
    return document.body.classList.add("darkmode");
  } else {
    moonIcon.classList.remove("hidden");
    morningImage.classList.remove("hidden");
    document.body.classList.remove("darkmode");
  }
}

function initialTheme() {
  const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "dark") {
    return updateTheme("dark");
  }

  if (storedTheme === "light") {
    return updateTheme("light");
  }

  if (prefersDarkTheme.matches) {
    return updateTheme("dark");
  }
}

document.addEventListener("DOMContentLoaded", initialTheme);



//! Like Buttons

const likeBtns = document.querySelectorAll(".like-btn");

likeBtns.forEach((likeBtn) => {
  likeBtn.addEventListener("click", () => {
    if (likeBtn.classList.contains("bxs-heart")) {
      likeBtn.classList.remove("bxs-heart");
      likeBtn.classList.add("bx-heart");
      likeBtn.classList.remove("bounce-in");
    } else {
      likeBtn.classList.add("bxs-heart");
      likeBtn.classList.remove("bx-heart");
      likeBtn.classList.add("bounce-in");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var dropdown = document.getElementById("userDropdown");
  var userNavItem = document.getElementById("userNavItem");

  // Function to toggle dropdown display
  function toggleDropdown() {
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }

  // Toggle dropdown display when userNavItem is clicked
  userNavItem.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click event from bubbling up to the document
    toggleDropdown();
  });

  // Close dropdown if user clicks outside of it
  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target) && event.target !== userNavItem) {
      dropdown.style.display = "none";
    }
  });
});

function showHide() {
  var inputan = document.getElementById("passwordKu");
  if (inputan.type === "password") {
    inputan.type = "text";
  } else {
    inputan.type = "password";
  }
} 

function showPW() {
  var inputan = document.getElementById("passwordMu");
  if (inputan.type === "password") {
    inputan.type = "text";
  } else {
    inputan.type = "password";
  }
} 
