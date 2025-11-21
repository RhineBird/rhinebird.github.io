# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static marketing website for Rhine Bird, a company building AI-powered mobile applications. The site is hosted on GitHub Pages with a custom domain (rhinebird.com).

## Project Structure

- **index.html** - Main landing page with hero section and about content
- **about.html, gallery.html, roadmap.html** - Additional pages (currently empty placeholders)
- **style.css** - All styling for the website, includes responsive design breakpoints
- **images/** - Logo and divider graphics
- **icons/** - Social media icons (SVG format)
- **avatars/** and **characters/** - Avatar/character images
- **CNAME** - Custom domain configuration for GitHub Pages (rhinebird.com)

## Technology Stack

- Pure HTML5/CSS3 (no JavaScript framework)
- Static site hosted on GitHub Pages
- Responsive design with mobile-first approach
- Custom domain via CNAME

## Architecture

The website follows a simple static site structure:

1. **Navigation** - Shared header with logo and navigation links
2. **Hero Section** - Primary call-to-action and value proposition
3. **About Section** - Company information with divider image and social links
4. **Footer** - Branding, social links, and site navigation

The site uses a dark theme (#1e1e1e background) with yellow accent color (#ffcf77) for CTAs.

## Design System

- **Primary background**: #1e1e1e (dark gray)
- **CTA color**: #ffcf77 (yellow)
- **Text**: White with rgba opacity for hierarchy
- **Max content width**: 1200px
- **Mobile breakpoint**: 768px
- **Font**: Arial, sans-serif

## Deployment

This is a GitHub Pages site. Changes to the main branch automatically deploy to rhinebird.com.

No build process is required - all files are served directly as static assets.

## Important Notes

- The site currently has placeholder pages (about.html, gallery.html, roadmap.html are empty)
- Social media links point to generic domains (Twitter, Discord) - only LinkedIn is properly configured
- The CNAME file must remain to maintain the custom domain
- All navigation uses anchor links (#about, #blog, etc.) except the main pages
