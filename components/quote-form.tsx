"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export function QuoteForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await response.json()) as { message?: string };
      if (!response.ok) {
        setStatus("error");
        setMessage(body.message || "We could not send your request. Please try again.");
        return;
      }
      setStatus("success");
      setMessage(body.message || "Thanks. Your quote request has been received.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage("We could not send your request. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <span aria-hidden="true">✓</span>
        <h2>Request received</h2>
        <p>{message}</p>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={submitForm}>
      <div className="form-heading">
        <h2>Get your free window quote</h2>
        <span>Takes about 60 seconds</span>
      </div>

      <div className="field-grid">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone number</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required />
        </div>
      </div>

      <div className="field-grid">
        <div className="field">
          <label htmlFor="postcode">Manchester postcode</label>
          <input id="postcode" name="postcode" type="text" autoComplete="postal-code" required />
        </div>
        <div className="field">
          <label htmlFor="windowCount">How many windows?</label>
          <select id="windowCount" name="windowCount" defaultValue="" required>
            <option value="" disabled>Select one</option>
            <option value="1-2">1–2</option>
            <option value="3-5">3–5</option>
            <option value="6-9">6–9</option>
            <option value="10+">10 or more</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="timeframe">When would you like the work done?</label>
        <select id="timeframe" name="timeframe" defaultValue="" required>
          <option value="" disabled>Choose a timeframe</option>
          <option value="asap">As soon as possible</option>
          <option value="1-3-months">Within 1–3 months</option>
          <option value="3-6-months">Within 3–6 months</option>
          <option value="researching">I am researching costs</option>
        </select>
      </div>

      <input className="honey" aria-hidden="true" name="company" type="text" tabIndex={-1} autoComplete="off" />

      <label className="consent">
        <input name="consent" type="checkbox" value="yes" required />
        <span>I agree that my details can be used to contact me about this quote and shared with an installation partner where needed. See the <a href="/privacy">privacy notice</a>.</span>
      </label>

      <button className="button button-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Get my free quote"}
        {status !== "sending" && <span aria-hidden="true">→</span>}
      </button>

      <p className="form-reassurance"><span aria-hidden="true">✓</span> Free to use <i /> <span aria-hidden="true">✓</span> No obligation</p>
      {status === "error" && <p className="form-error" role="alert">{message}</p>}
    </form>
  );
}
