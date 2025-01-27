// Disable Right-Click
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Disable Inspect Element (F12, Ctrl+Shift+I, etc.)
document.addEventListener('keydown', (e) => {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "PrintScreen") {
        alert("Screenshots are not allowed on this page!");
        e.preventDefault();
    }
});

