import { Elysia } from "elysia";
import { routes } from "./router";
import swagger from "@elysiajs/swagger";

const app = new Elysia()
  .post("/user", () => console.log("oi"))
  .use(routes)
  .use(
    swagger({
      documentation: {
        info: {
          title: "ChatbotGPT",
          description: `API desenvolvida para fins de aprendizado, com o intuido de criar um mini chatBot integrado com o ChatGPT, utilzando a nova runtime "Bun",e um framework compativel com o mesmo que se chama "ElysiaJS", e a API da OpenAI`,
          version: "1.0.0",
          contact: {
            name: "Lucas Gomes",
            email: "lucas.gomes.manaus@gmail.com",
          },
        },
        tags: [{ name: "" }],
      },
    })
  );

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
