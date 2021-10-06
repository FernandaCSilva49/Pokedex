const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000; 
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

const pokedex = [];
let msg = "";


app.set("view engine", "ejs");

app.get("/", (req, res) => {  
     setTimeout(() => {
      msg = "";
    }, 1000 );
    res.render("index", {
      pokedex,
      msg,
    });
});

app.get("/detalhes/:id", (req, res) => {
  const id = req.params.id;
  const pokemon = pokedex[id];
  res.render("detalhes", {
    pokemon,
  });
});

app.get("/cadastro", (req, res) => {
    res.render("cadastro"); 
});

app.post("/new", (req, res) => {
  const { numero, nome, tipo, imagem, descricao, altura, peso, categoria, habilidade } = req.body;
  let objeto = { numero: numero, nome: nome, tipo: tipo, imagem: imagem, descricao: descricao, altura: altura, peso: peso, categoria: categoria, habilidade: habilidade};
  pokedex.push(objeto);
  msg = "Pokemon cadastrado!";

  res.redirect("/");
   
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));