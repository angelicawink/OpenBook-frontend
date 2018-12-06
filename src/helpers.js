export default URL =
  process.env["NODE_ENV"] === "development"
    ? "http://localhost:3000/api/v1"
    : "https://open-book-backend.herokuapp.com/api/v1";
