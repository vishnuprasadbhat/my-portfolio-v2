"use server";
import fs from "fs";
import { join } from "path";

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
