import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const askScholarAI = async (question: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment variable.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `User Question: ${question}`,
      config: {
        systemInstruction: `You are a helpful, polite, and knowledgeable assistant for an Islamic Academy website. 
        Your goal is to provide general information based on well-known Islamic sources (Quran and Sunnah) for educational purposes.
        
        Guidelines:
        1. Start with a polite greeting (Assalamu Alaikum).
        2. Provide a concise, clear answer.
        3. If the question involves complex Fiqh (jurisprudence) issues, explicitly advise the user to consult a local scholar or Mufti for a specific ruling.
        4. Maintain a respectful and academic tone.
        5. Format your response with clean Markdown (use bullet points, bold text for emphasis).
        6. Do not give personal opinions; stick to generally accepted views.`,
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster response on simple queries, or enable if needed for complex reasoning.
      },
    });

    return response.text || "I apologize, but I could not generate a response at this time.";
  } catch (error) {
    console.error("Error querying Gemini:", error);
    return "An error occurred while connecting to the Scholar AI. Please try again later.";
  }
};