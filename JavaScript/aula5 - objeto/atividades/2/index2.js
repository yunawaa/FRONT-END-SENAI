// Array inicial de usuários
var usuarios = [
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 25 },
    { nome: "Pedro", idade: 35 }
  ];  
  // Função para adicionar um novo usuário ao array
  function adicionarUsuario(nome, idade) {
    var novoUsuario = { nome: nome, idade: idade };
    usuarios.push(novoUsuario);
  }
   adicionarUsuario("Ana", 28); 
  adicionarUsuario("Carlos", 40);
  adicionarUsuario("Laura", 22); 
  console.log(usuarios);
  