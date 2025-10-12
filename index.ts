import { connectDB } from "./src/database";

async function startApp() {
  await connectDB();
}

startApp();
