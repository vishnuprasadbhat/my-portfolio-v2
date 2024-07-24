import { createPool } from "@vercel/postgres";

const pool = createPool({
  connectionString:
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_POSTGRES_URL
      : process.env.POSTGRES_URL,
});

export async function getPortfolioData() {
  try {
    const data = await pool.sql`SELECT * FROM portfolio`;
    return data.rows[0].data;
  } catch (error) {
    throw new Error("Failed to fetch data.");
  }
}
