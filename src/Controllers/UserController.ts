import type { Request, Response } from "express";

export const listUsers = (req: Request, res: Response) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);
};
