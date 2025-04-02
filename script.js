document.getElementById("confirmar").addEventListener("click", function() {
    const phone = "+5538999930505"; // Replace with actual WhatsApp number
    const message = encodeURIComponent("Olá! Confirmo minha presença no evento.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
});
