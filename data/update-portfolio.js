import { createPool } from "@vercel/postgres";

const pool = createPool({
  connectionString:
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_POSTGRES_URL
      : process.env.POSTGRES_URL,
});

export async function updatePortfolio(data) {
  try {
    const result = await pool.sql`UPDATE portfolio SET data = ${JSON.stringify(
      data
    )} WHERE id = 8`;
    return result;
  } catch (error) {
    throw new Error("Failed to update data!");
  }
}
