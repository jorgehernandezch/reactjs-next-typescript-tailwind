# React JS
_Next 15 | Typescript | Tailwind | Google Fonts_

## Getting Started 🚀

_Follow these instructions to clone this repository to your local machine and start working with React JS, Next, Tailwind, and Google Fonts from the beginning._

### Prerequisites 📋

To clone this repository, you need to have Node.js and a package manager like NPM or Yarn installed.

Before you start, check if you have Node.js installed by running any of the following commands in your terminal:

```
node --version
node -v
```

If you don't have it installed, you can follow the official documentation to install it here:  
[https://nodejs.org/en/](https://nodejs.org/en/)

_I always recommend installing the LTS version._

Check the versions of the package managers with:

```
npm --version
yarn -v
```

**Minimum Versions:**
- **Node.js**: 18.0.0
- **NPM**: 9.0.0
- **Yarn**: 3.0.0

---

### Installation 🔧

#### **Without Docker**

_Clone the repository:_

```
git clone https://github.com/jorgehernandezch/reactjs-next-typescript-tailwind.git
```

_Install all the project dependencies:_

```
npm install
```

_Start the project:_

```
npm run dev
```

_If everything is correct, you can access the project at [http://localhost:3000/](http://localhost:3000/)_

---

#### **With Docker** 🐳

**1. Build the Docker image:**

```
docker build -t my-next-app .
```

**2. Run the container:**

```
docker run -p 3000:3000 --name my-next-app my-next-app
```

_This will start the application, and you can access it at [http://localhost:3000/](http://localhost:3000/)_

**3. Access the container's terminal:**

```
docker exec -it my-next-app sh
```

**4. Stop and remove the container:**

To stop the container:
```
docker stop my-next-app
```

To remove the container:
```
docker rm my-next-app
```

**5. Using Docker Compose (optional)**

If you prefer using `docker-compose`, use the following steps to set up and run the app:

- Create a `docker-compose.yml` file with the following content:

```yaml
version: '3'
services:
  next-app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules  # Mount node_modules inside the container
    environment:
      - NODE_ENV=development
    command: npm run dev
    working_dir: /app
```

- Build and start the service:

```
docker-compose up --build
```

_This will start the application, and you can access it at [http://localhost:3000/](http://localhost:3000/)_

---

### Collaboration 🤝

_Fork the project and create a Pull Request to the Dev branch. Pull Requests to the Master branch will be closed._

---

[Jorge Edo. Hernández](https://github.com/jorgehernandezch)  
_Engineer and Web Developer_
