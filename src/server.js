import http from "node:http";

const server = http.createServer((req, res) => {
  const { method, url } = req;
  const users = [];

  console.log(method, url);

  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "John Doe",
      email: "john_doe@email.com",
    });
  }

  return res.writeHead(404).end("Not found");
});

server.listen(3333);
