// import { sql } from "@vercel/postgres";
// import data from "../../data/portfolio.json";

// export default async function handler(request, response) {
//     try {
//       if (!data) throw new Error("Data file missing!");
//       await sql`TRUNCATE portfolio;`; //to clear data in the table
//       await sql`INSERT INTO portfolio (data) VALUES (${data});`;
//     } catch (error) {
//       return response.status(500).json({ error });
//     }

//   const test = await sql`SELECT * FROM portfolio;`;
//   return response.status(200).json({ data });
// }
