const express = require("express");
const Role = require("../utils/roles");

let router = express.Router();

let user_controller = require("../controllers/user");

router
	.route("/register")
	.post(user_controller.register_post)
	.get(user_controller.register_get);

router
	.route("/login")
	.post(user_controller.login_post)
	.get(user_controller.login_get);

router
	.route("/admin")
	.get(
		require("../utils/authorize").Authorize(["Admin"]),
		user_controller.admin_get
	);

router.route("/logout").get(user_controller.logout_get);

module.exports = router;