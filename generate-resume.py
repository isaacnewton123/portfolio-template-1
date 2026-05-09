from weasyprint import HTML

def generate_clean_resume(lang="en"):
    is_id = lang == "id"
    title_text = "Visi & Obsesi AI" if is_id else "AI Vision & Obsession"
    projects_text = "Eksperimen & Proyek AI" if is_id else "AI Experiments & Projects"
    portfolio_text = "Sinergi Kreatif & 3D" if is_id else "Creative Synergy & 3D"
    edu_text = "Pendidikan" if is_id else "Education"
    contact_text = "Kolaborasi" if is_id else "Collaborate"
    skills_text = "Tech Stack" if is_id else "Tech Stack"
    enthusiasm_text = "Future Tech Mindset" if is_id else "Future Tech Mindset"
    
    if is_id:
        about_p1 = "Saya adalah seorang <span class='highlight'>Software Engineer</span> dan <span class='highlight'>Architect</span> yang berdedikasi untuk membangun solusi digital yang efisien dan dapat diskalakan. Saya senang memecahkan tantangan teknis yang kompleks dan mengubah ide menjadi kenyataan."
        about_p2 = "Fokus utama saya adalah menciptakan pengalaman pengguna yang mulus dan arsitektur backend yang tangguh. Dengan memanfaatkan teknologi web modern, saya memastikan setiap produk memiliki performa tinggi."
        enthusiasm_li = [
            "<strong>Design First Mentality:</strong> Selalu memprioritaskan kode yang bersih, antarmuka intuitif, dan desain responsif.",
            "<strong>Continuous Learning:</strong> Terus mengeksplorasi framework dan alat baru untuk tetap unggul di industri teknologi."
        ]
        project_role = "Lead Developer & Architect"
        project_li = ["<strong>Project Alpha:</strong> Platform SaaS modern dengan dashboard canggih dan analitik real-time.",
                      "Implementasi backend menggunakan teknologi terbaru yang dioptimalkan.",
                      "Otomatisasi alur kerja dari ide hingga deployment."]
        project2_name = "Project Beta"
        project2_link = "project-beta.vercel.app"
        project2_url = "https://project-beta.vercel.app"
        project2_role = "Creator & Maintainer"
        project2_li = ["Proyek open-source untuk meningkatkan produktivitas pengembang.",
                       "Fokus pada performa dan kemudahan pemeliharaan.",
                       "Mencegah tech debt melalui tooling yang lebih baik."]
        footer_quote = '"Membangun masa depan melalui kode yang bersih dan solusi inovatif."'
    else:
        about_p1 = "I am a passionate <span class='highlight'>Software Engineer</span> and <span class='highlight'>Architect</span> dedicated to building scalable and efficient digital solutions. I thrive on solving complex technical challenges."
        about_p2 = "My core focus is on creating seamless user experiences and robust backend architectures. By utilizing modern web technologies, I ensure high performance."
        enthusiasm_li = [
            "<strong>Design First Mentality:</strong> Always prioritizing clean code, intuitive interfaces, and responsive design.",
            "<strong>Continuous Learning:</strong> Constantly exploring new frameworks and tools to stay ahead of the curve."
        ]
        project_role = "Lead Developer & Architect"
        project_li = ["<strong>Project Alpha:</strong> A modern SaaS platform with an advanced dashboard and real-time analytics.",
                      "Implemented robust backend architectures for scale.",
                      "Automated workflow from idea to deployment."]
        project2_name = "Project Beta"
        project2_link = "project-beta.vercel.app"
        project2_url = "https://project-beta.vercel.app"
        project2_role = "Creator & Maintainer"
        project2_li = ["An open-source project aimed at improving developer productivity.",
                       "Built with performance and maintainability in mind.",
                       "Prevents tech debt through better developer tooling."]
        footer_quote = '"Building the future through clean code and innovative solutions."'

    html = f"""
    <!DOCTYPE html>
    <html lang="{lang}">
    <head>
        <meta charset="UTF-8">
        <style>
            @page {{ size: 240mm 297mm; margin: 0; }}
            html, body {{ margin: 0; padding: 0; height: 100%; background-color: #ffffff; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1e293b; }}
            .container {{ display: flex; width: 100%; height: 297mm; }}
            .sidebar {{ width: 33%; background-color: #f1f5f9; padding: 50px 25px; color: #1e293b; height: 100%; box-sizing: border-box; border-right: 1px solid #e2e8f0; }}
            .main-content {{ width: 67%; padding: 50px 40px; background-color: #ffffff; height: 100%; box-sizing: border-box; }}
            a {{ text-decoration: none; color: #0284c7; display: block; }}
            .name {{ font-size: 35pt; font-weight: 900; color: #0284c7; text-transform: uppercase; line-height: 1; margin-bottom: 5pt; }}
            .job-title {{ font-size: 11pt; font-weight: 600; color: #64748b; letter-spacing: 2px; margin-bottom: 30pt; text-transform: uppercase; }}
            h2 {{ font-size: 12pt; font-weight: 800; text-transform: uppercase; color: #0284c7; margin-top: 25pt; margin-bottom: 15pt; border-left: 4px solid #0284c7; padding-left: 10pt; }}
            .contact-item {{ font-size: 8.5pt; margin-bottom: 12pt; }}
            .contact-label {{ font-weight: 700; color: #64748b; display: block; font-size: 7.5pt; text-transform: uppercase; margin-bottom: 2pt; }}
            .skill-tag {{ background: #ffffff; border: 1px solid #cbd5e1; padding: 5pt 10pt; border-radius: 4px; display: inline-block; margin: 2pt; font-size: 8pt; font-weight: 600; color: #0369a1; }}
            .summary-box {{ font-size: 10.5pt; color: #334155; text-align: justify; margin-bottom: 20pt; line-height: 1.7; }}
            .highlight {{ color: #0284c7; font-weight: 800; }}
            .enthusiasm-item {{ font-size: 9pt; color: #475569; margin-bottom: 12pt; line-height: 1.4; }}
            .project-name {{ font-size: 14pt; font-weight: 800; color: #0f172a; }}
            .project-link {{ font-size: 9pt; color: #0284c7; text-decoration: underline; display: inline; font-weight: 700; }}
            ul {{ padding-left: 15pt; margin-top: 8pt; }}
            li {{ font-size: 10pt; margin-bottom: 8pt; color: #334155; }}
            .footer {{ margin-top: 40pt; font-size: 10pt; color: #94a3b8; font-style: italic; text-align: center; border-top: 2px solid #f1f5f9; padding-top: 20pt; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="sidebar">
                <div class="name">Isaac Newton</div>
                <div class="job-title">Software Engineer</div>
                
                <h2>{contact_text}</h2>
                <div class="contact-item">
                    <span class="contact-label">Email</span>
                    <a href="mailto:hello@isaacnewton.com">hello@isaacnewton.com</a>
                </div>
                <div class="contact-item">
                    <span class="contact-label">Phone</span>
                    <a href="tel:+1234567890">+1234567890</a>
                </div>
                <div class="contact-item">
                    <span class="contact-label">Digital Presence</span>
                    <a href="https://isaacnewton.com">isaacnewton.com</a>
                </div>
                <div class="contact-item">
                    <span class="contact-label">Source Code</span>
                    <a href="https://github.com/isaacnewton123">github.com/isaacnewton123</a>
                </div>

                <h2>{enthusiasm_text}</h2>
                {"".join(f'<div class="enthusiasm-item">{item}</div>' for item in enthusiasm_li)}

                <h2>{skills_text}</h2>
                <div class="skill-tag">Software Engineering</div>
                <div class="skill-tag">Web Development</div>
                <div class="skill-tag">React / Next.js</div>
                <div class="skill-tag">TypeScript</div>
                <div class="skill-tag">Node.js</div>
                <div class="skill-tag">Architecture</div>
            </div>
            
            <div class="main-content">
                <h2>{title_text}</h2>
                <div class="summary-box"><p>{about_p1}</p><p>{about_p2}</p></div>

                <h2>{projects_text}</h2>
                <div style="margin-bottom: 15pt;">
                    <div style="display: flex; justify-content: space-between; align-items: baseline;">
                        <span class="project-name">MultiPost (Vibe-Coded SaaS)</span>
                        <a href="https://multipost.pro" class="project-link">multipost.pro</a>
                    </div>
                    <div style="font-size: 10pt; font-weight: 700; color: #64748b; margin-top: 2pt;">{project_role}</div>
                    <ul>{"".join(f"<li>{item}</li>" for item in project_li)}</ul>
                </div>
                <div>
                    <div style="display: flex; justify-content: space-between; align-items: baseline;">
                        <span class="project-name">{project2_name}</span>
                        <a href="{project2_url}" class="project-link">{project2_link}</a>
                    </div>
                    <div style="font-size: 10pt; font-weight: 700; color: #64748b; margin-top: 2pt;">{project2_role}</div>
                    <ul>{"".join(f"<li>{item}</li>" for item in project2_li)}</ul>
                </div>

                <h2>{portfolio_text}</h2>
                <div class="summary-box">
                    <p>Synergy between human vision and technical execution in creating smart visual and functional assets.</p>
                    <p style="text-align: center; margin-top: 10pt;">
                        <a href="https://isaacnewton.com/#artwork" class="highlight" style="text-decoration: underline; display: inline;">Explore My Work</a>
                    </p>
                </div>

                <h2>{edu_text}</h2>
                <div style="font-size: 10pt; color: #475569;">
                    <strong>SMK Al-Badar Cipulus</strong> | Lulus 2020-2021
                </div>

                <div class="footer">{footer_quote}</div>
            </div>
        </div>
    </body>
    </html>
    """
    return html

# Exporting clean PDFs
HTML(string=generate_clean_resume("id")).write_pdf("public/assets/Resume_Isaac_Newton_ID.pdf")
HTML(string=generate_clean_resume("en")).write_pdf("public/assets/Resume_Isaac_Newton_EN.pdf")