import { sql } from "@vercel/postgres";

export async function getPortfolioData() {
  try {
    const data = await sql`SELECT * FROM portfolio`;
    console.log("test", data.rows[0].data);
    return data.rows[0].data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
}
