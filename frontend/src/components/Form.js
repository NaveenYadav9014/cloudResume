import React, { useState } from "react";

const API_BASE = process.env.REACT_APP_API_BASE || "http://<EC2_PUBLIC_DNS>:3000/api";

function Form() {
  const [form, setForm] = useState({ name: "", email: "", resume: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("Submitting...");
    try {
      const res = await fetch(`${API_BASE}/apply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setMsg(data.message || "Submitted successfully!");
      setForm({ name: "", email: "", resume: "" });
    } catch (err) {
      console.error(err);
      setMsg("Submit failed — check console.");
    }
  };

  return (
    <div className="card">
      <h2>Submit Your Application</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Email address" type="email" value={form.email} onChange={handleChange} required />
        <input name="resume" placeholder="Resume link (GitHub/Drive)" value={form.resume} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      {msg && <p className="success">{msg}</p>}
    </div>
  );
}

export default Form;
