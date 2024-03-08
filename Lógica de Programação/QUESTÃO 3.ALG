
algoritmo "QUESTÃO 3"
var
       conta : inteiro
       saldoAtual : real
       saldo : real
       debito : real
       credito : real
inicio
       escreva ("Por favor, insira o número da sua conta: ")
       leia (conta)
       limpatela ()
       escreval ("Insira o seu saldo atual: ")
       leia (saldoAtual)
       limpatela ()
       escreval ("Insira o seu débito atual: ")
       leia (debito)
       limpatela ()
       escreval ("Insira o seu crédito atual: ")
       leia (credito)
       limpatela ()
       
       saldo <- (saldoAtual - debito + credito)
       
       se (saldo >= 0) entao
       escreval ("Saldo positivo!")
       senao
       se (saldo < 0) entao
       escreval ("Saldo negativo!")
       
       fimSe
       fimSe
fimalgoritmo