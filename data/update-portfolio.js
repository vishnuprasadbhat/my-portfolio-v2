import { sql } from "@vercel/postgres";

export async function updatePortfolio(data) {
  try {
    const result = await sql`UPDATE portfolio SET data = ${data} WHERE id = 8`;
    console.log("test", result);
    return result;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
}
