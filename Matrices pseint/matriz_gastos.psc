Algoritmo matriz_gastos
	Definir gastos, i, j Como Real
    Definir total Como Real
    Dimension gastos[4,3]
	
    Para i <- 1 Hasta 4 Hacer
        Para j <- 1 Hasta 3 Hacer
            Escribir "Ingrese el gasto de la categoria ", i, " del mes ", j
            Leer gastos[i,j]
        FinPara
    FinPara
	
    Para j <- 1 Hasta 3 Hacer
        total <- 0
        Para i <- 1 Hasta 4 Hacer
            total <- total + gastos[i,j]
        FinPara
        Escribir "Total del mes ", j, ": ", total
    FinPara
FinAlgoritmo
