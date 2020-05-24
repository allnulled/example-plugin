const rimraf = require("rimraf");

module.exports = async function() {
	try {
		console.log("⚛ [UNINSTALL] Uninstalling org.nodems.example plugin...");
		await new Promise(function(ok, fail) {
			rimraf(process.env.PROJECT_ROOT + "/src/plugin/org.nodems.example", function(error) {
				if(error) {
					console.log("[ERROR] Error removing plugin:", error);
				}
				ok();
			});
		});
		console.log("⚛ [UNINSTALL] Okay.");
	} catch(error) {
		throw error;
	}
};