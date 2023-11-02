import Elysia, { t } from "elysia";
import { AIController } from "../controller/openAI.controller";

export const routes = (route: Elysia) =>
  route.post("/send", ({ body }) => AIController.to_ask(body.content), {
    body: t.Object({
      role: t.String(),
      content: t.String(),
    }),
  });
