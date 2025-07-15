document.addEventListener('DOMContentLoaded', () => {
    // Get references to the main menu item that will trigger the sub-menu
    const playCampaignLink = document.getElementById('play-campaign-link');
    // Get reference to the sub-menu itself
    const playCampaignSubmenu = document.getElementById('play-campaign-submenu');

    // Check if both elements exist before adding event listeners
    if (playCampaignLink && playCampaignSubmenu) {
        // Add a click event listener to the 'PLAY CAMPAIGN' link
        playCampaignLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior (e.g., navigating to '#')

            // Toggle the 'active' class on the main menu item.
            // This class will apply the white glow and red underline via CSS.
            playCampaignLink.classList.toggle('active');

            // Toggle the 'show' class on the sub-menu.
            // This class will change its display property from 'none' to 'block' via CSS, making it visible.
            playCampaignSubmenu.classList.toggle('show');
        });
    }
});
