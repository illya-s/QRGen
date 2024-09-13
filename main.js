$(document).ready(function() {
	$('#qrcode').empty();
	$('#download').hide();


	$('#generate').on('click', function() {
		var text = $('#url_inp').val();
		if (text.trim() === '') {
			alert('Please enter some text or URL.');
			return;
		}

		$('#qrcode').empty();

		var qrcode = new QRCode(document.getElementById('qrcode'), {
			text: text,
			width: 256,
			height: 256,
			colorDark: "#000000",
			colorLight: "#ffffff",
			correctLevel: QRCode.CorrectLevel.H
		});

		$("#download").show()
	});
	$('#download').on('click', function() {
		var src = $('#qrcode img').attr("src");
		var fn = "qrcode.png";

		var a = $('<a>')
			.attr('href', src)
			.attr('download', fn)
			.appendTo('body');
		a[0].click();
		a.remove();
	});
});