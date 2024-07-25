"use server";
import fs from "fs";
import { join } from "path";
import { sql } from "@vercel/postgres";
import { cache } from "react";

export default async function updateLocalFile(data) {
  const portfolioData = join(process.cwd(), "/data/portfolio.json");
  if (process.env.NODE_ENV === "development") {
    const file = await fs.writeFile(
      portfolioData,
      JSON.stringify(data),
      "utf-8",
      (err) => console.log(err)
    );
  }
}

// const pool = createPool({
//   connectionString: process.env.NEXT_PUBLIC_POSTGRES_URL,
// });

export const getPortfolioData = cache(async () => {
  try {
    const data = await sql`SELECT * FROM portfolio`;
    return data.rows[0].data;
  } catch (error) {
    throw new Error("Failed to fetch data.");
  }
});
