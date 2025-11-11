import { Router } from "express";
import {
  deleteUser,
  fetchUser,
  getItems,
  postUser,
} from "../Controllers/UserController";

const router = Router();

router.get("/users", fetchUser);

router.get("/userlist", getItems);

router.post("/user", postUser);

router.delete("/user", deleteUser);

export default router;
