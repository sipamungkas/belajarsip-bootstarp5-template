if (document.readyState === "complete") {
  // toggle menu mobile
}

const showMenu = document.getElementById("humberger-icon");
showMenu.addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");

  if (sidebar.style.display === "flex") {
    sidebar.style.display = "none";
    if (document.getElementById("main-content")) {
      document.getElementById("main-content").style = "flex";
    }
    if (document.getElementById("main-dashboard")) {
      document.getElementById("main-dashboard").style = "flex";
    }
  } else {
    sidebar.style.display = "flex";
    if (document.getElementById("main-content")) {
      document.getElementById("main-content").style = "none";
    }
    if (document.getElementById("main-dashboard")) {
      document.getElementById("main-dashboard").style = "none";
    }
  }
  if (document.getElementById("message-container")) {
    document.getElementById("message-container").style = "none";
  }
});

if (document.getElementById("chat-icon")) {
  document.getElementById("chat-icon").addEventListener("click", function () {
    const messageContainer = document.getElementById("message-container");
    if (messageContainer.style.display === "flex") {
      messageContainer.style.display = "none";
      if (document.getElementById("main-dashboard")) {
        document.getElementById("main-dashboard").style.display = "flex";
      }
    } else {
      messageContainer.style.display = "flex";
      if (document.getElementById("main-dashboard")) {
        document.getElementById("main-dashboard").style.display = "none";
      }
    }
    document.getElementById("sidebar").style.display = "none";
  });
}
