import portfolio from "../../../lib/portfolio";

export function GET() {
  return Response.json(portfolio);
}
