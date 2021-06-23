/**
 * GET    => Buscar uma informação
 * POST   => Inserir (Criar) uma informação
 * PUT    => ALterar uma informação
 * DELETE => Remover um dado
 * PATH   => Altera uma informação especifica
 */

/**
 * Tipos de parâmetros
 * Router params => http://localhost:3000/produtos/83749587394875
 * Query params => http://localhost:3000/produtos?name=teclado&description=tecladobom
 * 
 * Body params => {
 * "name": "teclado",
 * "description": "teclado bom",
 * "value": "1999.00"},
 * "color": "black"
 */

 //baixar tipagem
// @types/express

//métodos API
app.get("/test", (request, response) => {
    //resquest = entrada de dados do cliente
    //response = saída de dados do cliente
    return response.send("Olá NLW");
});

app.post("/test-post", (request, response) => {
    return response.send("Olá nlw-06 método post")
})