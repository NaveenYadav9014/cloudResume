import React, { useEffect, useState } from "react";

const API_BASE = process.env.REACT_APP_API_BASE || "http://<EC2_PUBLIC_DNS>:3000/api";

function ApplicantList() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/applicants`)
      .then((r) => r.json())
      .then((data) => setList(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="card">
      <h2>Applications</h2>
      {loading ? <p>Loading…</p> : (
        <table>
          <thead><tr><th>Name</th><th>Email</th><th>Resume</th><th>Submitted</th></tr></thead>
          <tbody>
            {list.map((a) => (
              <tr key={a.id}>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td><a href={a.resume} target="_blank" rel="noreferrer">View</a></td>
                <td>{new Date(a.submitted_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ApplicantList;
