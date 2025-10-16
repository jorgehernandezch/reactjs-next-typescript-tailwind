# Next.js + TypeScript + Tailwind CSS Project

A modern web application built with Next.js 15, React 19, TypeScript, and Tailwind CSS. This project includes a complete development setup with ESLint, Prettier, and Docker support.

## 🚀 Tech Stack

- **Next.js 15.5.5** - React framework for production
- **React 19.0.0** - JavaScript library for building user interfaces
- **TypeScript 5.8.2** - Typed superset of JavaScript
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **ESLint** - Code linting with Airbnb and Standard configurations
- **Prettier** - Code formatting

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Docker and Docker Compose (for containerized deployment)

## 🛠️ Installation

### Local Development

1. Clone the repository:
```bash
git clone reactjs-next-typescript-tailwind
cd reactjs-next-typescript-tailwind
```

## 🐳 Docker 

### Using Docker Compose

1. Build and start the container:
```bash
docker-compose up -d
```

2. Stop the container:
```bash
docker-compose down
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Docker Compose Configuration

Create a `docker-compose.yml` file in your project root:

```yaml
version: '3.8'

services:
  nextjs-app:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: nextjs-typescript-app
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
      - /app/.next
    environment:
      - NODE_ENV=development
    command: npm run dev
```

## 📜 Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 🔧 Configuration Files

### ESLint Configuration

The project uses multiple ESLint configurations:
- Airbnb TypeScript style guide
- Standard TypeScript configuration
- Next.js recommended rules
- Prettier integration
- React and React Hooks plugins

### TypeScript Configuration

TypeScript is configured for strict type checking with Next.js support.

### Tailwind CSS

Tailwind CSS is configured with PostCSS for optimal styling workflow.

## 📁 Project Structure

```
.
├── public/              # Static files
├── src/                 # Source files
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   └── styles/         # Global styles
├── .eslintrc.json      # ESLint configuration
├── .prettierrc         # Prettier configuration
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── next.config.js      # Next.js configuration
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker Compose configuration
└── package.json        # Project dependencies
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 📧 Contact

For questions or support, please contact the development team.

---

[Jorge Edo. Hernández](https://github.com/jorgehernandezch)  
_Engineer and Web Developer_

Made with ❤️ using Next.js, TypeScript, and Tailwind CSS
