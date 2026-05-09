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
        about_p1 = "Saya adalah seorang <span class='highlight'>AI Enthusiast</span> dan <span class='highlight'>AI Architect</span> yang percaya bahwa kecerdasan buatan adalah katalisator utama bagi kreativitas manusia tak terbatas. Saya membangun solusi masa depan melalui metode <span class='highlight'>Vibe Coding</span>, memandu AI untuk mewujudkan arsitektur yang presisi dan efisien secara radikal."
        about_p2 = "Fokus utama saya adalah efisiensi ekstrem. Dengan menguasai orkestrasi LLM, saya memastikan bahwa setiap produk yang saya bangun—seperti MultiPost—memiliki pondasi AI yang kuat sejak hari pertama untuk mencapai hasil maksimal."
        enthusiasm_li = [
            "<strong>AI First Mentality:</strong> Selalu memprioritaskan automasi cerdas dan alur kerja berbasis agen dalam setiap tantangan teknis.",
            "<strong>Continuous Evolution:</strong> Terus mengeksplorasi batas-batas kemampuan LLM untuk mengubah cara kita berinteraksi dengan dunia digital."
        ]
        project_role = "Vibe Coder & AI Architect"
        project_li = ["<strong>MultiPost:</strong> Dibangun sepenuhnya dengan metode vibe-coding, mengandalkan AI untuk distribusi konten lintas platform secara otomatis.",
                      "Implementasi backend menggunakan Bun dan Elysia yang dioptimalkan melalui instruksi AI real-time.",
                      "Otomatisasi alur kerja dari ide hingga deployment hanya dengan orkestrasi model bahasa."]
        project2_name = "eslint-plugin-ai-guardrails"
        project2_link = "eslint-ai-guardrails.vercel.app"
        project2_url = "https://eslint-ai-guardrails.vercel.app"
        project2_role = "Vibe Coder & Creator"
        project2_li = ["Dibangun sepenuhnya menggunakan full vibe coding (coding dengan AI).",
                       "Aturan linting khusus untuk mendeteksi kode AI yang rentan tech debt.",
                       "Mencegah file monolitik dan komentar reduksan yang sering dihasilkan AI."]
        footer_quote = '"Membangun masa depan melalui vibrasi kode dan kecerdasan buatan."'
    else:
        about_p1 = "I am an <span class='highlight'>AI Enthusiast</span> and <span class='highlight'>AI Architect</span> building solutions through <span class='highlight'>Vibe Coding</span>. I orchestrate AI to execute technical visions with high speed and precision, believing that AI is the ultimate tool for innovation."
        about_p2 = "My core focus is extreme efficiency. By relying on AI as my primary coding partner, I design complex architectures and Agentic Workflows that are production-ready in record time."
        enthusiasm_li = [
            "<strong>AI First Mentality:</strong> Always prioritizing intelligent automation and agentic workflows in every technical challenge.",
            "<strong>Continuous Learning:</strong> Constantly pushing the boundaries of LLM capabilities to redefine how we interact with code."
        ]
        project_role = "Vibe Coder & AI Architect"
        project_li = ["<strong>MultiPost:</strong> Built entirely using vibe-coding methods, relying on AI for automated cross-platform content distribution.",
                      "Implemented backend using Bun and Elysia, optimized through real-time AI prompting.",
                      "Automated the workflow from idea to deployment solely through language model orchestration."]
        project2_name = "eslint-plugin-ai-guardrails"
        project2_link = "eslint-ai-guardrails.vercel.app"
        project2_url = "https://eslint-ai-guardrails.vercel.app"
        project2_role = "Vibe Coder & Creator"
        project2_li = ["Built entirely using full vibe coding (coding with AI).",
                       "Custom linting rules to detect AI-generated code prone to tech debt.",
                       "Prevents monolithic files and redundant comments typically produced by AI coding tools."]
        footer_quote = '"Building the future through code vibrations and artificial intelligence."'

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
                <div class="name">Hanif Maulana</div>
                <div class="job-title">AI Enthusiast & Architect</div>
                
                <h2>{contact_text}</h2>
                <div class="contact-item">
                    <span class="contact-label">Email</span>
                    <a href="mailto:hanifmaulana1997@gmail.com">hanifmaulana1997@gmail.com</a>
                </div>
                <div class="contact-item">
                    <span class="contact-label">Phone</span>
                    <a href="tel:+6283117772744">+6283117772744</a>
                </div>
                <div class="contact-item">
                    <span class="contact-label">Digital Presence</span>
                    <a href="https://hanifmaulana-portfolio.vercel.app">hanifmaulana-portfolio.vercel.app</a>
                </div>
                <div class="contact-item">
                    <span class="contact-label">Source Code</span>
                    <a href="https://github.com/isaacnewton123">github.com/isaacnewton123</a>
                </div>

                <h2>{enthusiasm_text}</h2>
                {"".join(f'<div class="enthusiasm-item">{item}</div>' for item in enthusiasm_li)}

                <h2>{skills_text}</h2>
                <div class="skill-tag">AI Enthusiast</div>
                <div class="skill-tag">Vibe Coding</div>
                <div class="skill-tag">LLM Orchestration</div>
                <div class="skill-tag">Bun / Elysia</div>
                <div class="skill-tag">Next.js</div>
                <div class="skill-tag">Prompt Engineering</div>
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
                    <p>Sinergi antara visi manusia dan eksekusi AI dalam menciptakan aset visual dan fungsional cerdas.</p>
                    <p style="text-align: center; margin-top: 10pt;">
                        <a href="https://hanifmaulana-portfolio.vercel.app/#artwork" class="highlight" style="text-decoration: underline; display: inline;">Explore AI-Enhanced Art</a>
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
HTML(string=generate_clean_resume("id")).write_pdf("public/assets/Resume_Hanif_Maulana_ID_v1.0.1.pdf")
HTML(string=generate_clean_resume("en")).write_pdf("public/assets/Resume_Hanif_Maulana_EN_v1.0.1.pdf")