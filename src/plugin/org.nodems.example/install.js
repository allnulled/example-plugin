module.exports = async function() {
	try {
		console.log("⚛ [INSTALL] Installing org.nodems.example plugin...");
		await new Promise(function(ok, fail) {
			setTimeout(ok, 1000);
		});
		console.log("⚛ [INSTALL] Okay.");
	} catch(error) {
		throw error;
	}
};