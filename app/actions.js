"use server";
import fs from "fs";
import { join } from "path";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { cache } from "react";

export const updateLocalFile = async (data) => {
  const portfolioData = join(process.cwd(), "/data/portfolio.json");
  if (process.env.NODE_ENV === "development") {
    const file = await fs.writeFile(
      portfolioData,
      JSON.stringify(data),
      "utf-8",
      (err) => console.log(err)
    );
  }
};

export const getPortfolioData = cache(async (isId = false) => {
  try {
    const data = await sql`SELECT * FROM portfolio`;
    if (isId) {
      return { id: data.rows[0].id, data: data.rows[0].data };
    } else {
      return data.rows[0].data;
    }
  } catch (error) {
    throw new Error("Failed to fetch data.");
  }
});

export const updatePortfolio = async (prevData, formData) => {
  const data = formData.get("myData");
  const id = formData.get("id");
  try {
    const result =
      await sql`UPDATE portfolio SET data = ${data} WHERE id = ${id}`;
    console.log("test", result);
    revalidatePath("/");
    if (result?.rowCount > 0) {
      return { msg: "Updated Successfully!", status: "success" };
    } else {
      return { msg: "Failed to update data!", status: "error" };
    }
  } catch (error) {
    return { msg: error.message, status: "error" };
    // throw new Error("Failed to update data.");
  }
};
