Algoritmo matriz_intercambios
    Definir matriz, i, j, x Como Entero
    Dimension matriz[4,3]
	
    Para i <- 1 Hasta 4 Hacer
        Para j <- 1 Hasta 3 Hacer
            Escribir "Ingrese un numero:"
            Leer matriz[i,j]
        FinPara
    FinPara
	
    Para j <- 1 Hasta 3 Hacer
        x <- matriz[1,j]
        matriz[1,j] <- matriz[4,j]
        matriz[4,j] <- x
    FinPara
	
    Escribir "resultado d la matriz:"
	
    Para i <- 1 Hasta 4 Hacer
        Para j <- 1 Hasta 3 Hacer
            Escribir Sin Saltar matriz[i,j], " "
        FinPara
        Escribir ""
    FinPara
FinAlgoritmo