import { app } from "./app";
import { prisma } from "./lib/prisma";

async function main() {
  try {
    prisma.$connect();
    console.log("DB connected successfully ..");
    const port = process.env.PORT;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error: any) {
    console.log(error.message);
    prisma.$disconnect();
    console.log("DB could not connect");
    process.exit();
  }
}
main();
