firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    window.location.href = "index.html";
  } else {
  }
});

// User menu dropdown
const userMenuButton = document.getElementById("user-menu-button");
const userMenu = document.getElementById("user-menu");
const userMenuButton2 = document.getElementById("user-menu-button-2");
const userMenu2 = document.getElementById("user-menu-2");
const userMenuButton3 = document.getElementById("user-menu-button-3");
const userMenu3 = document.getElementById("user-menu-3");

if (userMenuButton && userMenu) {
  userMenuButton.addEventListener("click", function () {
    userMenu.classList.toggle("hidden");
  });
}

if (userMenuButton2 && userMenu2) {
  userMenuButton2.addEventListener("click", function () {
    userMenu2.classList.toggle("hidden");
  });
}

if (userMenuButton3 && userMenu3) {
  userMenuButton3.addEventListener("click", function () {
    userMenu3.classList.toggle("hidden");
  });
}

// Device selector dropdown
const deviceSelector = document.getElementById("device-selector");
const deviceMenu = document.getElementById("device-menu");
if (deviceSelector && deviceMenu) {
  deviceSelector.addEventListener("click", function () {
    deviceMenu.classList.toggle("hidden");
  });
}

// Close dropdowns when clicking outside
document.addEventListener("click", function (e) {
  if (
    userMenuButton &&
    userMenu &&
    !userMenuButton.contains(e.target) &&
    !userMenu.contains(e.target)
  ) {
    userMenu.classList.add("hidden");
  }
  if (
    userMenuButton2 &&
    userMenu2 &&
    !userMenuButton2.contains(e.target) &&
    !userMenu2.contains(e.target)
  ) {
    userMenu2.classList.add("hidden");
  }
  if (
    userMenuButton3 &&
    userMenu3 &&
    !userMenuButton3.contains(e.target) &&
    !userMenu3.contains(e.target)
  ) {
    userMenu3.classList.add("hidden");
  }
  if (
    deviceSelector &&
    deviceMenu &&
    !deviceSelector.contains(e.target) &&
    !deviceMenu.contains(e.target)
  ) {
    deviceMenu.classList.add("hidden");
  }
});


// Logout button
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", function (e) {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("Logout berhasil!");
        window.location.href = "#";
      })
      .catch((error) => {
        // An error happened.
      });
  });
}
