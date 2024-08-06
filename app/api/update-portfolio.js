import { sql } from "@vercel/postgres";

export async function handler(req, res) {
  if (req.method === "PUT") {
    const data = await sql`UPDATE portfolio SET data = ${JSON.stringify(
      req.body
    )} WHERE id = 8`;
    console.log(data);
    return res.json(data);
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
