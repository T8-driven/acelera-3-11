import express from "express";

const app = express();

const pokedex = [
  {
    id: 1,
    name: "Picachu",
    power: "lightning",
  },
  {
    id: 2,
    name: "Raiochu",
    power: "lightning",
  },
];

app.get("/pokedex", (req, res) => {
  res.send(pokedex);
});

app.get("/pokedex/:id", (req, res) => {
  const id = Number(req.params.id);

  const pokemon = pokedex.find((pokemon) => pokemon.id === id);

  res.send(pokemon);
});

app.listen(5000, () => console.log("Server running in port 5000"));
