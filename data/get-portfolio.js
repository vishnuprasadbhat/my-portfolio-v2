import { createPool } from "@vercel/postgres";

const pool = createPool({
  connectionString: process.env.NEXT_PUBLIC_POSTGRES_URL,
});

export async function getPortfolioData() {
  try {
    const data = await pool.sql`SELECT * FROM portfolio`;
    return data.rows[0].data;
  } catch (error) {
    throw new Error("Failed to fetch data.");
  }
}
