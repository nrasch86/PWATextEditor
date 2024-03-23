let deferredPrompt; // Define for event handlers below
const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); 
    deferredPrompt = event; 
    butInstall.style.display = 'block'; // Display the install button
});

// Click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    deferredPrompt.prompt(); // Show the install button
    const { outcome } = await deferredPrompt.userChoice; // Wait for user response
    deferredPrompt = null; 
    butInstall.style.display = 'none'; // Hide the install button
});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    butInstall.style.display = 'none'; //Hide install button
});
