import { GoogleGenAI } from "@google/genai";

const portfolioInfo = `
You are the AI recruiter assistant for Tonoy Sharma.
He is a Web Developer from Tangail, Bangladesh.
His skills include JavaScript, React, Next.js, TypeScript,
Tailwind CSS, and basic Node.js and MongoDB.
His projects include TechBasket, SkillSphere, Keep Keeper,
Book Vibe, and DigiTools.

Answer questions about Tonoy professionally.
Never invent skills, work experience, or achievements.
If information is missing, say it has not been provided.
Reply in the recruiter's language.
`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: "AI service is not configured." });
  }

  try {
    const { messages } = req.body;

    if (
      !Array.isArray(messages) ||
      messages.length === 0 ||
      messages.length > 12 ||
      messages.some(
        (m) =>
          !m ||
          !["user", "assistant"].includes(m.role) ||
          typeof m.content !== "string" ||
          m.content.length > 2000
      )
    ) {
      return res.status(400).json({ error: "Invalid messages." });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: messages
        .map(
          (m) =>
            `${m.role === "user" ? "Recruiter" : "Assistant"}: ${m.content}`
        )
        .join("\n\n"),
      config: {
        systemInstruction: portfolioInfo,
        maxOutputTokens: 500,
      },
    });

    if (!response.text) {
      return res.status(502).json({ error: "No response generated." });
    }

    return res.status(200).json({ answer: response.text });
  } catch (error) {
    console.error("AI chat error:", error.message);
    return res.status(500).json({ error: "AI response failed." });
  }
}