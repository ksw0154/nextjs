// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.body;
  }
  res.status(200).json({ name: "store index!!" });
}
