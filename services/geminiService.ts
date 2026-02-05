
import { GoogleGenAI } from "@google/genai";
import { PAGES, SITE_CONFIG } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are a historical and cultural expert on the Iranian Revolution and the "Women, Life, Freedom" movement.
The user is browsing a digital museum/educational site.
Context of the site:
${SITE_CONFIG.description}

Key themes: Human dignity, women's resistance, universal freedom.
Data available on site: ${JSON.stringify(PAGES)}

Guidelines:
1. Provide empathetic, factual, and respectful answers.
2. If asked about specific events, refer to the site data.
3. If asked about broader history, provide well-grounded historical context.
4. Keep responses concise but emotionally resonant.
5. Do not take political sides, but focus on human rights and lived experiences.
`;

export const getAIResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "I am having trouble connecting to the archives. Please try again in a moment.";
  }
};
