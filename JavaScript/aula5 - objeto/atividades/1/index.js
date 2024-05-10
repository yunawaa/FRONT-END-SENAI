// Crie um objeto chamado "carro" que tenha as seguintes propriedades:
// marca: string
// modelo: string
// ano: número
// cor: string
// velocidadeMaxima: número
// velocidadeAtual: número (inicialmente 0)
// Em
// seguida, crie um método chamado "acelerar" que receba um número como
// argumento e aumente a velocidade atual do carro por esse número.
// Certifique-se de que a velocidade atual não ultrapasse a velocidade
// máxima do carro.




const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "prata",
    velocidadeMaxima: 200,
    velocidadeAtual: 0,
    
    // Método para acelerar o carro
    acelerar: function(velocidade) {
        // Verifica se a velocidade atual mais a velocidade desejada ultrapassa a velocidade máxima
        if (this.velocidadeAtual + velocidade <= this.velocidadeMaxima) {
            // Se não ultrapassar, aumenta a velocidade atual
            this.velocidadeAtual += velocidade;
            console.log(`Velocidade atual: ${this.velocidadeAtual} km/h`);
        } else {
            // Se ultrapassar, define a velocidade atual como a velocidade máxima
            this.velocidadeAtual = this.velocidadeMaxima;
            console.log(`Velocidade máxima atingida: ${this.velocidadeAtual} km/h`);
        }
    }
};

// Exemplo de uso do método acelerar
carro.acelerar(50); // Velocidade atual: 50 km/h
carro.acelerar(180); // Velocidade máxima atingida: 200 km/h
