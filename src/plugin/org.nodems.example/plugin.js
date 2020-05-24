module.exports = async function() {
	try {
		console.log("⚛ [LOADING] Loading org.nodems.example plugin...");
		await new Promise(function(ok, fail) {
			console.log("⚛ ...here you should add your hooks...");
			setTimeout(ok, 1000);
		});
		console.log("⚛ [LOADED] Okay.");
	} catch(error) {
		throw error;
	}
};