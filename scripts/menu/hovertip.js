const descriptions = {
  "menu-play-online": "Play through a co-operative campaign online.",
  "menu-play-solo": "Play a single player offline game with computer-controlled teammates.",
  "menu-play-versus": "Play as the Survivors or the Infected in an online Versus Mode game.",
  "menu-play-survival": "Play survival mode and hold out as long as you can.",
  "menu-achievements": "View your progress and acomplishments.",
  "menu-options": "Adjust game settings and controls.",
  "menu-update-log": "Check out the latest updates and changes.",
  "menu-quit": "Exit the game.",
  "username-option": "Make your in game username here."
};

const descriptionBox = document.getElementById("item-description");
const originalText = descriptionBox.textContent;

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
  item.addEventListener("mouseenter", () => {
    const id = item.id;
    if (descriptions[id]) {
      descriptionBox.textContent = descriptions[id];
    }
  });

  item.addEventListener("mouseleave", () => {
    descriptionBox.textContent = originalText;
  });
});
