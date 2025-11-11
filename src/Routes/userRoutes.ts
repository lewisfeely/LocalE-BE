import { Router } from "express";
import { fetchUser, getItems, postUser } from "../Controllers/UserController";

const router = Router();

router.get("/users", fetchUser);

router.get("/userlist", getItems);

router.post("/user", postUser);

export default router;
