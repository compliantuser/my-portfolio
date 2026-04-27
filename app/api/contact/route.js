function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !email || !message) {
    return Response.json({ error: "Please fill in every field." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  return Response.json({
    message: "Thanks. Your message was received locally.",
    submission: {
      name,
      email,
      message
    }
  });
}
