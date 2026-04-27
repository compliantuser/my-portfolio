"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  message: ""
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [notice, setNotice] = useState("");

  function updateField(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value
    }));
  }

  async function submitForm(event) {
    event.preventDefault();
    setStatus("loading");
    setNotice("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "Unable to send message");
      }

      setForm(initialForm);
      setStatus("success");
      setNotice(payload.message);
    } catch (error) {
      setStatus("error");
      setNotice(error.message);
    }
  }

  return (
    <form className="contact-form" onSubmit={submitForm}>
      <label>
        <span>Name</span>
        <input
          name="name"
          value={form.name}
          onChange={updateField}
          placeholder="Your name"
          required
        />
      </label>

      <label>
        <span>Email</span>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={updateField}
          placeholder="you@example.com"
          required
        />
      </label>

      <label>
        <span>Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={updateField}
          placeholder="Tell me what you want to build"
          rows="4"
          required
        />
      </label>

      <button className="button primary" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {notice ? <p className={`form-notice ${status}`}>{notice}</p> : null}
    </form>
  );
}
