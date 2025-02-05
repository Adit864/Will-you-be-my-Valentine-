const messages = [
    "Will you be my valentine??",
    "Really sure??",
    "Abui?",
    "Pookie please...",
    "Natak Nagart!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "riss nautha haiiii...",
    "Ok fine, I will stop asking...",
    "Abuiiiiiiiiiiii Yes vannnnnnnnn! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
