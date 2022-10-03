import fetch from "node-fetch";

export default async function handler(request, response) {
  const res = await fetch(process.env.BASE_URL);
  const data = await res.json();
  return response.status(200).json({ data });
}
