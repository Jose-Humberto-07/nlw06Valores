import express, { request, response } from "express";

//baixar tipagem
// @types/express
const app = express();

/**
 * GET    => Buscar uma informação
 * POST   => Inserir (Criar) uma informação
 * PUT    => ALterar uma informação
 * DELETE => Remover um dado
 * PATH   => Altera uma informação especifica
 */

app.get("/test", (request, response) => {
    //resquest = entrada de dados do cliente
    //response = saída de dados do cliente
    return response.send("Olá NLW");
});

app.post("/test-post", (request, response) => {
    return response.send("Olá nlw-06 método post")
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is running ")); 