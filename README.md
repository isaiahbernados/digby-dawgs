# 🐕 Digby Dawgs Event Calendar

A vibrant, comic-style event calendar for the Digby Dawgs neighborhood community in Noe Valley, San Francisco. Built with React, Vite, and TailwindCSS.

## 🌟 Features

- **Comic-Style Grid Layout**: Eye-catching visual design inspired by comic book panels
- **Responsive Design**: Optimized for desktop, tablet, and mobile viewing
- **Event Management**: Dynamic event loading from JSON data
- **Image Gallery**: Beautiful event images with hover effects
- **Ongoing Events**: Special handling for recurring events
- **Modern Tech Stack**: Built with React 18, Vite, and TailwindCSS v4

## 🚀 Live Demo

Visit the live site: **[https://isaiahbernados.github.io/digby-dawgs/](https://isaiahbernados.github.io/digby-dawgs/)**

## 🛠️ Tech Stack

- **Frontend**: React 18 with JSX
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: TailwindCSS v4 with PostCSS
- **Icons**: Lucide React
- **Package Manager**: pnpm
- **Deployment**: GitHub Pages with GitHub Actions

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18 or higher
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/isaiahbernados/digby-dawgs.git
   cd digby-dawgs
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start development server |
| `pnpm run build` | Build for production |
| `pnpm run preview` | Preview production build locally |
| `pnpm run lint` | Run ESLint for code quality |

## 📁 Project Structure

```
digby-dawgs/
├── public/
│   ├── assets/           # Event images and static assets
│   └── events.json       # Event data
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Custom styles and CSS variables
│   └── main.jsx         # Application entry point
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Pages deployment
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Event Management

### Adding New Events

1. **Add event image** to `public/assets/`
2. **Update events data** in `public/events.json`:

```json
{
  "id": "unique_event_id",
  "title": "Event Title",
  "date": "Date String",
  "description": "Event description",
  "image": "image-filename.webp"
}
```

### Event Types

- **Regular Events**: Standard community events with specific dates
- **Ongoing Events**: Recurring events with "ONGOING" in the date field

## 🎯 Design Philosophy

The Digby Dawgs calendar embraces a **comic book aesthetic** with:

- **Bold borders** and high contrast design
- **Vibrant color schemes** with gradient hover effects
- **Playful typography** with uppercase headings
- **Interactive elements** with smooth transitions
- **Mobile-first approach** ensuring accessibility across devices

## 🚢 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch.

### Automatic Deployment
- **Trigger**: Push to `main` branch
- **Platform**: GitHub Pages
- **Workflow**: `.github/workflows/deploy.yml`

### Manual Deployment
```bash
pnpm run deploy
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

## 📸 Screenshots

### Desktop View
The main calendar displays events in a dynamic grid layout with comic-style borders and vibrant imagery.

### Mobile View
Responsive design stacks events vertically for optimal mobile viewing experience.

## 🏘️ About Digby Dawgs

The Digby Dawgs are a vibrant neighborhood community group in Noe Valley, San Francisco. We organize regular social events, outdoor activities, and community gatherings to bring neighbors together and foster lasting friendships.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with ❤️ for the Digby Dawgs community
- Powered by React, Vite, and TailwindCSS
- Comic book design inspiration
- Neighborhood spirit of Noe Valley, SF

---

**Made with 🤖 [Claude Code](https://claude.ai/code)**