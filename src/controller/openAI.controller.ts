import { openai } from "../conf/ChatGPT";


export const AIController = {
  to_ask: async (question: string) => {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: `${question}` }],
      model: "gpt-3.5-turbo",
    });

    console.log(chatCompletion.choices);
  },
};
