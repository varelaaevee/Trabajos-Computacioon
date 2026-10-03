Algoritmo Matriz_Transpuesta
    Definir matriz, transpuesta, i, j Como Entero
    Dimension matriz[2,3]
    Dimension transpuesta[3,2]
	
    Para i <- 1 Hasta 2 Hacer
        Para j <- 1 Hasta 3 Hacer
            Escribir "Ingrese un numero:"
            Leer matriz[i,j]
        FinPara
    FinPara
	
    Para i <- 1 Hasta 2 Hacer
        Para j <- 1 Hasta 3 Hacer
            transpuesta[j,i] <- matriz[i,j]
        FinPara
    FinPara
	
    Escribir "Matriz transpuesta:"
	
    Para i <- 1 Hasta 3 Hacer
        Para j <- 1 Hasta 2 Hacer
            Escribir Sin Saltar transpuesta[i,j], " "
        FinPara
        Escribir ""
    FinPara
FinAlgoritmo