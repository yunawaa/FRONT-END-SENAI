Algoritmo "QUEST�O 2"

Var
horasTrabalhadas : real
salarioHora  : real
salarioTotal : real
horasExtras  : real
horasNormais : real



Inicio
escreval ("Quantas horas de trabalho foram exercidas no m�s? ")
leia (horasTrabalhadas)
escreval ("Quantos R$ foram recebidos por hora? ")
leia (salarioHora)

horasNormais := 40 * 4
se horasTrabalhadas > horasNormais entao
   horasExtras := horasTrabalhadas - horasNormais
senao
   horasExtras := 0
fimse

salarioTotal := (horasNormais * salarioHora) + (horasExtras * salarioHora * 1.5)
escreval("O sal�rio total do funcion�rio � de: R$ ", salarioTotal:8:2)


Fimalgoritmo