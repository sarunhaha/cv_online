# Claude Project Notes

## Project Overview
Portfolio website for Sarun Saengsomboon - UX/UI Lead & Product-minded Engineer

## Important Instructions
1. **DO NOT run `npm run dev`** - User prefers not to auto-run the development server
2. **Always use comprehensive thinking mode** throughout the conversation
3. **Record important notes in this CLAUDE.md file**

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- React Three Fiber + Three.js (3D elements)
- @react-three/drei (3D helpers)

## Profile Information
- **Job Title**: UX/UI Lead
- **Experience**: 20 years in information technology
- **Current Company**: Devio Co., Ltd (Co-Founder & UX/UI Lead)
- **LinkedIn**: https://www.linkedin.com/in/saruns/
- **Email**: sarunhaha@gmail.com
- **Phone**: +66 81-825-6617

## Education
- Kasetsart University (2009-2011)
- Previous Institution (2002-2005)

## Key Certifications
- React Native Course (Codecademy, 2025)
- React Course (Codecademy, 2025)
- Money Laundering Law Certificate
- TechJam 2019 Deep Design Finalist
- Data Mining Certificate
- Project Management Certificate
- Web Report Management (PHP)

## File Structure
```
portfolio/
├── app/
│   └── page.tsx         # Main portfolio page with all content
├── public/
│   └── Profile_Sarun2025.pdf  # CV PDF (needs to be added)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── CLAUDE.md           # This file
```

## Latest Major Updates (Dec 2024)

### Profile & Content Updates
1. Updated experience from "10+ years" to "20 years" to match LinkedIn profile
2. Changed headline to "UX/UI Lead" (current position at devio co., ltd)
3. Added Education section (Kasetsart University 2009-2011)
4. Added 7 certifications from LinkedIn profile
5. Extended skills list with PHP, ASP.NET, Data Mining, Project Management
6. Added GitHub contact (@sarunhaha)
7. Removed Devio and KULAP links from contact (kept Email, Phone, LinkedIn, GitHub)
8. Set "Current" badge to devio co., ltd (index 1) instead of CRYPTOPLAT
9. CV download now opens in new tab instead of direct download

### Visual Design - Three.js Style Implementation
1. **3D Background System**
   - Full-screen Canvas with dark gradient (black to dark blue)
   - ParticleField component: 2,000 animated particles
   - WireframeSphere component: rotating wireframe with pulse effect
   - Uses @react-three/fiber and @react-three/drei

2. **Glass Morphism Design**
   - All cards use bg-white/90 or /95 with backdrop-blur
   - Added translucent borders (border-white/50)
   - Enhanced shadow effects for depth

3. **Color Scheme Updates**
   - Hero title: gradient text (blue-600 to purple-600)
   - Primary button: gradient background
   - Profile image: glass effect container
   - Skill tags: hover effects with purple accents

4. **3D CSS Effects**
   - Custom utilities in globals.css:
     - perspective-500, perspective-1000
     - 3D transforms (rotateX, rotateY)
     - Float animations with 3D rotation
     - Glass morphism classes
   - Cards with hover 3D rotation
   - Button press effects (btn-3d)
   - Custom gradient scrollbar

5. **Layout Architecture**
   - All sections have z-10 to float above 3D background
   - Experience & Education: bg-white/80 with rounded-3xl
   - Header: enhanced backdrop-blur-lg
   - Overlay gradient for text readability

### Typography & UX
1. Font sizes optimized for readability
2. Line-height: relaxed for better reading
3. Responsive sizing (sm, md, lg breakpoints)
4. Smooth scroll behavior
5. Stagger animations on scroll

### File Structure Updates
- Profile image: `/public/image_profile.png` (implemented)
- CV PDF: `/public/Profile_Sarun2025.pdf` (ready)
- Enhanced `globals.css` with 3D utilities

## Three.js Implementation Details
Based on Three.js documentation (https://github.com/mrdoob/three.js):
- **Core Concepts**: Scene, Camera, Geometry, Material, Mesh, Renderer
- **Current Implementation**:
  - ParticleField: BufferGeometry with 2,000 points
  - WireframeSphere: IcosahedronGeometry with wireframe material
  - Canvas setup with ambient and point lights
  - Environment preset for realistic lighting
  - Animation loop using useFrame hook

## Performance Considerations
- Particle count optimized at 2,000 for smooth performance
- Using backdrop-blur sparingly to avoid performance issues
- Z-index layering to separate 3D background from content
- Responsive breakpoints for mobile optimization

## Browser Compatibility
- Three.js works across all modern browsers
- WebGL support required for 3D effects
- Fallback to gradient backgrounds for older browsers
- Glass morphism effects may vary by browser

## Commands
- Install dependencies: `npm install`
- Run development: `npm run dev` (but don't auto-run per user preference)
- Build production: `npm run build`
- Start production: `npm start`