
NOVO — Architectural Design & Build

A high-fidelity, premium landing page recreation based on the NOVO Architecture Figma design. This project showcases a minimalist, editorial aesthetic characterized by bold typography, architectural grid layouts, and a sophisticated "Slate & Gold" color palette.


🎨 Design Philosophy

The UI follows an architectural "blueprint" aesthetic:


🚀 Key Features

Section 01: Hero Section — High-impact typography with a multi-colored title and "Watch Video" circular widget.

Section 02: Culture & Philosophy — A dark-themed section focusing on brand identity with complex framed imagery.

Section 03: Three-Stage Workflow — Modular layout detailing the Design, Pricing, and Implementation phases.

Section 04: Success Statistics — Clean, high-contrast stats (12+ Branches, 10K+ Projects) using display typography.

Section 05: Brand Collage — Asymmetrical overlapping image gallery with structural gold crown accents.

Section 06: Contact/Registration — Architectural form with unique under-line labels and a custom blueprint watermark.

🛠️ Tech Stack

Framework: React.js

Styling: Tailwind CSS


Icons/Assets: Custom SVGs and IMG Architectural Photography.

📦 Installation & Setup

Clone the repository:

code
Bash
download
content_copy
expand_less
git clone https://github.com/UttamYadav-DGI/figmaDesign.git
cd novo-architecture

Install dependencies:

code
Bash
download
content_copy
expand_less
npm install




Add the Google Font:
Ensure the following link is in your public/index.html <head>:

code
Html
download
content_copy
expand_less
<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet">

Start the development server:

code
Bash
download
content_copy
expand_less
npm start


📂 Project Structure
code
Text
download
content_copy
expand_less
src/
├── components/
│   ├── Hero.jsx            # Page 01: Hero & Nav
│   ├── Culture.jsx         # Page 02: Brand Culture
│   ├── Workflow.jsx        # Page 03: Stages 01-03
│   ├── Philosophy.jsx      # Page 04: Stats & Collage
│   └── Contact.jsx         # Page 05: Registration Form
├── App.js                  # Main entry point combining all sections
├── index.css               # Tailwind & Global Styles
└── public/                 # Local images and icons
⚙️ Customization



📄 License

This project is for portfolio purposes. Original design concepts belong to the respective Figma owner.

Crafted with precision by Uttam Yadav — Full Stack Developer