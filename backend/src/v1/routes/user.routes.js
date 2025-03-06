import { Router } from "express"
import {
	createUser,
	deleteUser,
	editUser,
	getAllUsers,
	getUser
} from "../../controllers/user.controller.js"

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.put("/:id", editUser);

export default router;
