import { GoogleGenerativeAI } from "@google/generative-ai";
import { GOOGLE_AI_STUDIO_API_KEY } from "../env-value";

const genAI = new GoogleGenerativeAI(GOOGLE_AI_STUDIO_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const answer = async (question: string) => {
  try {
    const result = await model.generateContent(question);
    const response = result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.log(error);
    return "Không biết";
  }
};

export const AIService = { answer };
