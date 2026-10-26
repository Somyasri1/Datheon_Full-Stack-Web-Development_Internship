import os

def create_resume_pdf(output_path):
    # Construct a valid, beautiful PDF 1.4 document
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    # We will build standard PDF objects:
    # 1 0 obj: Catalog
    # 2 0 obj: Pages
    # 3 0 obj: Page
    # 4 0 obj: Font (Helvetica)
    # 5 0 obj: Font (Helvetica-Bold)
    # 6 0 obj: Font (Helvetica-Oblique)
    # 7 0 obj: Content stream

    # Text stream content:
    # Page dimensions: 595.28 x 841.89 pt (A4)
    # Origin is bottom-left (0, 0)
    lines = []
    
    # Background subtle styling and borders
    # Dark blue header band
    lines.append("0.05 0.08 0.16 rg") # Dark navy #0d1429
    lines.append("0 750 595.28 91.89 re f")
    
    # Header Accent line
    lines.append("0.49 0.51 1.0 rg") # Indigo accent
    lines.append("0 747 595.28 3 re f")
    
    # Header text
    lines.append("BT")
    lines.append("/F2 22 Tf") # Bold
    lines.append("1 1 1 rg") # White
    lines.append("40 795 Td (UPPALAPATI SOMYA SRI) Tj")
    lines.append("ET")
    
    lines.append("BT")
    lines.append("/F2 11 Tf")
    lines.append("0.48 0.82 1.0 rg") # Cyan accent
    lines.append("40 775 Td (Aspiring Software Engineer | B.Tech Computer Science & Engineering) Tj")
    lines.append("ET")
    
    lines.append("BT")
    lines.append("/F1 8.5 Tf")
    lines.append("0.85 0.88 0.95 rg")
    lines.append("40 758 Td (Email: uppalapatisomyasri@gmail.com  |  Phone: +91 9030721396  |  GitHub: github.com/Somyasri1  |  LinkedIn: linkedin.com/in/uppalapati-somyasri-3b797831b) Tj")
    lines.append("ET")

    def draw_section_header(y, title):
        sub = []
        sub.append("0.92 0.94 0.98 rg")
        sub.append(f"40 {y-3} 515.28 18 re f")
        sub.append("0.31 0.33 0.85 rg")
        sub.append(f"40 {y-3} 4 18 re f")
        sub.append("BT")
        sub.append("/F2 10.5 Tf")
        sub.append("0.08 0.12 0.25 rg")
        sub.append(f"52 {y+1} Td ({title}) Tj")
        sub.append("ET")
        return "\n".join(sub)

    # 1. EDUCATION
    lines.append(draw_section_header(715, "EDUCATION"))
    
    lines.append("BT")
    lines.append("/F2 9.5 Tf")
    lines.append("0.1 0.15 0.3 rg")
    lines.append("45 695 Td (Bachelor of Technology in Computer Science and Engineering) Tj")
    lines.append("ET")
    lines.append("BT")
    lines.append("/F1 9 Tf")
    lines.append("0.2 0.25 0.35 rg")
    lines.append("45 683 Td (Vishnu Institute of Technology, Bhimavaram, Andhra Pradesh) Tj")
    lines.append("ET")
    lines.append("BT")
    lines.append("/F2 9 Tf")
    lines.append("0.1 0.5 0.2 rg")
    lines.append("440 695 Td (CGPA: 7.66  |  2023 - 2027) Tj")
    lines.append("ET")
    
    lines.append("BT")
    lines.append("/F2 9.5 Tf")
    lines.append("0.1 0.15 0.3 rg")
    lines.append("45 663 Td (Intermediate - MPC) Tj")
    lines.append("ET")
    lines.append("BT")
    lines.append("/F1 9 Tf")
    lines.append("0.2 0.25 0.35 rg")
    lines.append("45 651 Td (Narayana Junior College, Bhimavaram) Tj")
    lines.append("ET")
    lines.append("BT")
    lines.append("/F2 9 Tf")
    lines.append("0.1 0.5 0.2 rg")
    lines.append("430 663 Td (Percentage: 79.7%  |  2021 - 2023) Tj")
    lines.append("ET")

    # 2. TECHNICAL SKILLS
    lines.append(draw_section_header(625, "TECHNICAL SKILLS"))
    
    skills = [
        ("Programming Languages", "Python, JavaScript, C"),
        ("Frontend Technologies", "HTML5, CSS3, React.js, Responsive Web Design"),
        ("Backend & Auth", "Node.js, Express.js, REST APIs, JWT Authentication"),
        ("Databases", "MongoDB, Mongoose, Firebase Firestore"),
        ("Developer Tools", "Git, GitHub, Postman, VS Code, Firebase")
    ]
    curr_y = 605
    for cat, items in skills:
        lines.append("BT")
        lines.append("/F2 8.5 Tf")
        lines.append("0.15 0.2 0.35 rg")
        lines.append(f"45 {curr_y} Td ({cat}: ) Tj")
        lines.append("/F1 8.5 Tf")
        lines.append("0.25 0.3 0.4 rg")
        lines.append(f"({items}) Tj")
        lines.append("ET")
        curr_y -= 14

    # 3. INTERNSHIP EXPERIENCE
    lines.append(draw_section_header(curr_y - 5, "INTERNSHIP EXPERIENCE"))
    curr_y -= 25
    lines.append("BT")
    lines.append("/F2 9.5 Tf")
    lines.append("0.1 0.15 0.3 rg")
    lines.append(f"45 {curr_y} Td (Full Stack Developer \\(MERN Stack\\) Intern) Tj")
    lines.append("ET")
    lines.append("BT")
    lines.append("/F2 9 Tf")
    lines.append("0.3 0.3 0.6 rg")
    lines.append(f"420 {curr_y} Td (May 2026 - July 2026 | 120 hrs) Tj")
    lines.append("ET")
    curr_y -= 13
    lines.append("BT")
    lines.append("/F3 9 Tf")
    lines.append("0.25 0.3 0.4 rg")
    lines.append(f"45 {curr_y} Td (SmartBridge Educational Services Pvt. Ltd. | In Collaboration with APSCHE) Tj")
    lines.append("ET")
    
    bullets = [
        "Hands-on MERN Stack development experience across MongoDB, Express.js, React.js, and Node.js.",
        "Contributed to a healthcare appointment management application supporting Admin, Doctor, and Patient roles.",
        "Built modular REST API endpoints and integrated MongoDB Mongoose schemas for appointment and schedule workflows."
    ]
    curr_y -= 14
    for b in bullets:
        lines.append("BT")
        lines.append("/F1 8.5 Tf")
        lines.append("0.2 0.25 0.35 rg")
        lines.append(f"55 {curr_y} Td (\\(bull\\)  {b}) Tj")
        lines.append("ET")
        curr_y -= 13

    # 4. PROJECTS
    lines.append(draw_section_header(curr_y - 5, "FEATURED PROJECTS"))
    curr_y -= 25
    
    # Project 1
    lines.append("BT")
    lines.append("/F2 9.5 Tf")
    lines.append("0.1 0.15 0.3 rg")
    lines.append(f"45 {curr_y} Td (Book A Doctor - Healthcare Appointment Platform) Tj")
    lines.append("ET")
    lines.append("BT")
    lines.append("/F1 8.5 Tf")
    lines.append("0.3 0.4 0.7 rg")
    lines.append(f"365 {curr_y} Td (github.com/Somyasri1/Book-A-Doctor) Tj")
    lines.append("ET")
    curr_y -= 12
    lines.append("BT")
    lines.append("/F3 8.5 Tf")
    lines.append("0.3 0.3 0.5 rg")
    lines.append(f"45 {curr_y} Td (Technologies: React.js, Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt) Tj")
    lines.append("ET")
    proj1_bullets = [
        "Architected a healthcare platform supporting distinct Patient, Doctor, and Admin roles.",
        "Implemented secure JWT authentication with bcrypt password encryption for session integrity.",
        "Structured 4 MongoDB models with relational references and modular MVC route controllers."
    ]
    curr_y -= 12
    for b in proj1_bullets:
        lines.append("BT")
        lines.append("/F1 8.5 Tf")
        lines.append("0.2 0.25 0.35 rg")
        lines.append(f"55 {curr_y} Td (\\(bull\\)  {b}) Tj")
        lines.append("ET")
        curr_y -= 12

    # Project 2
    curr_y -= 5
    lines.append("BT")
    lines.append("/F2 9.5 Tf")
    lines.append("0.1 0.15 0.3 rg")
    lines.append(f"45 {curr_y} Td (Sports Scheduler - Event & League Management Platform) Tj")
    lines.append("ET")
    lines.append("BT")
    lines.append("/F1 8.5 Tf")
    lines.append("0.3 0.4 0.7 rg")
    lines.append(f"360 {curr_y} Td (github.com/Somyasri1/sports-scheduler) Tj")
    lines.append("ET")
    curr_y -= 12
    lines.append("BT")
    lines.append("/F3 8.5 Tf")
    lines.append("0.3 0.3 0.5 rg")
    lines.append(f"45 {curr_y} Td (Technologies: Node.js, Express.js, Firebase Firestore, JavaScript, HTML5, CSS3) Tj")
    lines.append("ET")
    proj2_bullets = [
        "Built sports management app for organizing match schedules, team rosters, and tournament brackets.",
        "Integrated Firebase Firestore for low-latency cloud document storage and real-time score updates.",
        "Engineered separate Admin and Player dashboards with conflict-free fixture reservation logic."
    ]
    curr_y -= 12
    for b in proj2_bullets:
        lines.append("BT")
        lines.append("/F1 8.5 Tf")
        lines.append("0.2 0.25 0.35 rg")
        lines.append(f"55 {curr_y} Td (\\(bull\\)  {b}) Tj")
        lines.append("ET")
        curr_y -= 12

    # 5. CERTIFICATIONS & ACTIVITIES
    lines.append(draw_section_header(curr_y - 5, "CERTIFICATIONS & HACKATHONS"))
    curr_y -= 22
    
    certs = [
        "Full Stack Web Application Development with Node.js - Vishnu Institute of Technology",
        "MongoDB Developer's Toolkit - GeeksforGeeks",
        "Cybersecurity Virtual Internship - EduSkills and Palo Alto Networks"
    ]
    for c in certs:
        lines.append("BT")
        lines.append("/F1 8.5 Tf")
        lines.append("0.2 0.25 0.35 rg")
        lines.append(f"45 {curr_y} Td (\\(bull\\)  {c}) Tj")
        lines.append("ET")
        curr_y -= 12
        
    curr_y -= 3
    lines.append("BT")
    lines.append("/F2 8.5 Tf")
    lines.append("0.15 0.2 0.35 rg")
    lines.append(f"45 {curr_y} Td (Competitions & Hackathons: ) Tj")
    lines.append("/F1 8.5 Tf")
    lines.append("0.25 0.3 0.4 rg")
    lines.append("(Flipkart Runway Season 5, GenAI & Agentic Intelligence Hackathon, Women Who Master Hackathon, Nation Building Case Study, Failthon) Tj")
    lines.append("ET")

    content_str = "\n".join(lines)
    content_bytes = content_str.encode("latin1")
    
    # Build objects
    objects = []
    
    # 1: Catalog
    objects.append("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj")
    # 2: Pages
    objects.append("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj")
    # 3: Page
    objects.append("3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents 7 0 R /Resources << /Font << /F1 4 0 R /F2 5 0 R /F3 6 0 R >> >> >>\nendobj")
    # 4: Font Helvetica
    objects.append("4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj")
    # 5: Font Helvetica-Bold
    objects.append("5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj")
    # 6: Font Helvetica-Oblique
    objects.append("6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>\nendobj")
    # 7: Contents
    objects.append(f"7 0 obj\n<< /Length {len(content_bytes)} >>\nstream\n{content_str}\nendstream\nendobj")

    # Assemble PDF
    pdf_out = bytearray(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
    offsets = [0]
    
    for obj in objects:
        offsets.append(len(pdf_out))
        pdf_out.extend(obj.encode("latin1") + b"\n")
        
    startxref = len(pdf_out)
    pdf_out.extend(b"xref\n0 " + str(len(offsets)).encode("latin1") + b"\n")
    pdf_out.extend(b"0000000000 65535 f \n")
    for off in offsets[1:]:
        pdf_out.extend(f"{off:010d} 00000 n \n".encode("latin1"))
        
    pdf_out.extend(b"trailer\n<< /Size " + str(len(offsets)).encode("latin1") + b" /Root 1 0 R >>\n")
    pdf_out.extend(b"startxref\n" + str(startxref).encode("latin1") + b"\n%%EOF\n")
    
    with open(output_path, "wb") as f:
        f.write(pdf_out)
    print(f"Generated valid PDF at {output_path} ({len(pdf_out)} bytes)")

if __name__ == "__main__":
    create_resume_pdf("public/assets/resume.pdf")
    create_resume_pdf("public/resume.pdf")
