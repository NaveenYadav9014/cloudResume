 ☁️ Cloud Resume Challenge — AWS Full Stack Project

This project is my implementation of the Cloud Resume Challenge, built entirely on AWS Cloud Services using a modern full-stack architecture.  
It demonstrates skills in frontend hosting, backend API integration, database management, and CI/CD automation.

---

🚀 Project Overview

The Cloud Resume Challenge combines frontend and backend development, cloud services, and automation practices.  
My project is a resume web application that allows users to:
- View my professional resume.
- Submit job application forms.
- Store submitted data securely in an AWS RDS MySQL database.

---

 🧠 Architecture Diagram
<img width="1174" height="616" alt="image" src="https://github.com/user-attachments/assets/be93c811-3897-4cff-8820-b51bafbc4b77" />


 <img width="1553" height="898" alt="Screenshot 2025-11-07 085526" src="https://github.com/user-attachments/assets/b5cbc541-da80-4197-9e56-c036ffaf655d" />
                 image using s3 static website hosting
<img width="1544" height="862" alt="Screenshot 2025-11-07 103943" src="https://github.com/user-attachments/assets/928e8a88-8bed-4f14-933c-6113662d706e" />
         image using cludfront
<img width="1401" height="740" alt="Screenshot 2025-11-07 102533" src="https://github.com/user-attachments/assets/227dc4d4-0d71-4161-873a-2d8023830069" />

         
 <img width="1681" height="742" alt="Screenshot 2025-11-07 111547" src="https://github.com/user-attachments/assets/d2f6f482-8935-4269-837e-ee70c617454f" />
        rds mysql
  <img width="1882" height="488" alt="Screenshot 2025-11-07 111258" src="https://github.com/user-attachments/assets/8a77e27d-69e0-40b8-8bdb-75246ceb76d0" />
      

 
        

---

## 🧩 Technologies Used

| Layer | Technology | Purpose |
|-------|-------------|----------|
| Frontend | HTML, CSS, React.js | Dynamic resume UI |
| Storage & CDN | AWS S3 + CloudFront | Static website hosting and global distribution |
| Backend | Node.js + Express | API for form submissions |
| Database | AWS RDS (MySQL) | Stores form submission data |
| Compute | AWS EC2 | Runs backend server |
| Monitoring | PM2 | Process management and logs |
| Version Control | GitHub | Source code and CI/CD integration |

---

⚙️ AWS Services Architecture Flow

1. Frontend is built using React → hosted on AWS S3.
2. CloudFront distributes the static site globally with HTTPS.
3. Form submissions from the website trigger requests to EC2 backend API.
4. The EC2 backend connects securely to RDS MySQL.
5. Data from users is saved in a table (`submissions`).
6. GitHub hosts source code; updates automatically deployed via `git pull`.

---

 🌐 Live Project URL

> Frontend: [http://cloud.resume.nyadav.s3-website.eu-north-1.amazonaws.com/](http://cloud.resume.nyadav.s3-website.eu-north-1.amazonaws.com/)  
> 

---

🧰 Backend Setup

Backend Path: `/backend`

 1️⃣ Environment Variables

`.env` file used by Node.js:

```bash
DB_HOST=resumedb1.cd4ogywu0zqb.eu-north-1.rds.amazonaws.com
DB_USER=admin1
DB_PASS=*****
DB_NAME=companydb
PORT=3000
