Algoritmo "QUESTÃO 4"

Var
salario, somaSalarios, maiorSalario, percentualMenor150 : real
numFilhos, somaFilhos, totalPessoas, totalMenor150 : inteiro


Inicio
          somaSalarios <- 0
          somaFilhos <- 0
          totalPessoas <- 0
          maiorSalario <- 0
          totalMenor150 <- 0

          repita
          escreval("Informe o salário do habitante (ou negativo para encerrar): ")
          leia(salario)
          se salario >= 0 entao
          escreval("Informe o número de filhos: ")
          leia(numFilhos)
          somaSalarios <- somaSalarios + salario
          somaFilhos <- somaFilhos + numFilhos
          totalPessoas <- totalPessoas + 1
          se salario > maiorSalario entao
          maiorSalario <- salario
          fimse
          se salario < 150 entao
          totalMenor150 <- totalMenor150 + 1
        fimse
    fimse
ate salario < 0
        se totalPessoas > 0 entao
        escreval("Média de salário da população: R$ ", somaSalarios / totalPessoas)
        escreval("Média do número de filhos: ", somaFilhos / totalPessoas)
        escreval("Maior salário: R$ ", maiorSalario)
        percentualMenor150 <- (totalMenor150 / totalPessoas) * 100
        escreval("Percentual de pessoas com salário menor que R$ 150,00: ", percentualMenor150)
         senao
        escreval("Nenhum dado foi inserido.")
    fimse



Fimalgoritmo