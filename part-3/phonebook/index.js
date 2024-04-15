const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(
  morgan((tokens, req, res) => {
    const logData = [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
    ];

    if (req.method === "POST") {
      logData.push(JSON.stringify(req.body));
    }

    return logData.join(" ");
  })
);

const data = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.use(express.json());

app.get("/api/persons", (req, res) => {
  res.json(data);
});

app.get("/api/persons/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    const person = data.find((person) => person.id === id);
    if (person) {
      res.json(person);
    } else {
      res.send("Person not found");
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});
app.get("/info", (req, res) => {
  // res.send(`Phonebook has info for ${data.length} people \n ${new Date()}`);
  // res.setHeader("Content-Type", "text/html");
  res.send(
    `<p>Phonebook has info for ${data.length} people <br> ${new Date()}</p>`
  );
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = data.findIndex((person) => person.id === id);
  if (index !== -1) {
    data.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).send("person not found");
  }

  // const originalLength = data.length;
  // data = data.filter((person) => person.id !== id);
  // if (data.length === originalLength) {
  //   res.status(404).send("Person not found");
  // } else {
  //   res.status(204).end();
  // }
});

app.post("/api/persons", (req, res) => {
  const body = req.body;
  if (!body.name || !body.number) {
    return res.status(400).jsom({ error: "name or number is missing" });
  }

  const isThere = data.some((person) => person.name === body.name);

  if (isThere) {
    return res.status(400).json({ error: "name must be unique" });
  }

  const newPerson = {
    id: Math.floor(Math.random() * 100000000),
    name: body.name,
    number: body.number,
  };

  data.push(newPerson);
  res.status(201).json(newPerson);

  // const generateId = () => {
  //   const maxId = data.length > 0 ? Math.max(...data.map((person) => person.id)) : 0;
  //   return maxId + 1;
  // };
});
const port = 3001;
app.listen(port, (req, res) => {
  console.log(`server is listening at port ${port}`);
});
