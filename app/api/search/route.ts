import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("verse_query");
  // query is "hello" for /api/search?query=hello

  const url = process.env.API_URL + "/api/bible/?verse_query=" + query;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 3600 }, // Revalidate every 60 seconds
  });
  const data = await res.json();

  return Response.json(data);
}
