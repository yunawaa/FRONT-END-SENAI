algoritmo "brasileiras"
var
        valor : real

        opcao_escolhida : caractere
inicio
        escreval ("****Brasileiras****")
        escreval ("A - Pendrive")
        escreval ("B - Açaí")
        escreval ("C - Kit-Kat")
        escreval ("D - Celular")

        
        leia (opcao_escolhida)
        se (opcao_escolhida = "A") entao
        escreval ("O pendrive foi adicionado com sucesso!")
        valor <- 50.00
        senao
        se (opcao_escolhida = "B") entao
        escreval ("O açaí foi adicionado com sucesso!")
        valor <- 20.00
        senao
        se (opcao_escolhida = "C") entao
        escreval ("O Kit-Kat foi adicionado com sucesso!")
        valor <- 1.99
        senao
        se (opcao_escolhida = "D") entao
        escreval ("O celular foi adicionado com sucesso!")
        valor <- 2.00
        senao
        escreval ("Opção inválida! Tente novamente.")
        
          fimSe
          fimSe
          fimSe
          fimSe
fimalgoritmo