import app from "./app";
import { logger } from "./lib/logger";

const port = Number(process.env["PORT"] || 3000);

if (!process.env.VERCEL) {
  app.listen(port, () => {
    logger.info({ port }, "Server listening");
  });
}

export default app;
