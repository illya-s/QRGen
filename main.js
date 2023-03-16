function generateQRCode() {
	let website = document.getElementById("website").value;
	if (website) {
		let qrcodeConteiner = document.getElementById("qrcode");
		qrcodeConteiner.innerHTML = "";
		new QRCode(qrcodeConteiner, website);

		document.getElementById("qrcode-container").style.display = "block";
	} else {
		alert("Please enter a valid URL")
	}
}