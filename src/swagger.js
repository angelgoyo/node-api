import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "WDITech API",
    description: "API backend",
  },
  host: "localhost:8080",
};

const outputFile = "./swagger-output.json";
const routes = [
  "./routes/routes.js",
  // "./routes/roles/index.js",
  // "./routes/me/index.js",
  // "./routes/auth/index.js",
];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
