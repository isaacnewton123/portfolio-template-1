# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-05-09

### Added
- **Automated Resume Generation**: Introduced seamless integration for Vercel (`vercel.json`) and Netlify (`netlify.toml`) to automatically generate PDF resumes using Python and `weasyprint` during the build process.
- **Template Architecture**: Transitioned the specific personal portfolio into a reusable, professional Next.js portfolio template.
- **Dynamic Content Support**: `generate-resume.py` is now fully decoupled and uses placeholders to easily adapt to new users.

### Changed
- **Personalized Details**: Updated author references, metadata, and OpenGraph tags to align with the active user (e.g., "Isaac Newton").
- **Package Configuration**: Streamlined `package.json` scripts to better support dual local/cloud workflows without hardcoded prebuild conflicts.
- **Documentation**: Substantially updated `README.md` to include detailed instructions on generating resumes and auto-deploying to Vercel/Netlify.

### Removed
- **Sensitive Information**: Stripped hardcoded personal emails, phone numbers, and outdated hard-coded data from components (`Contact.tsx`, `Footer.tsx`) to prevent unintended exposure for template users.
- **Old Assets**: Removed deprecated `Resume_Hanif_Maulana_*.pdf` and `Resume_John_Doe_*.pdf` files in favor of dynamically generated outputs.
