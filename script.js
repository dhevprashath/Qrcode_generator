function generateQR() {
    const qrInput = document.getElementById("qrInput").value.trim();
    const qrImage = document.getElementById("qrImage");
    const downloadBtn = document.getElementById("downloadBtn");

    if (qrInput === "") {
        alert("Please enter a link");
        return;
    }

    const qrAPI = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrInput)}&size=200x200`;
    qrImage.src = qrAPI;
    qrImage.alt = "QR Code";

    qrImage.onload = function () {
        downloadBtn.href = qrAPI;
        downloadBtn.style.display = "inline-block";
    };
}
