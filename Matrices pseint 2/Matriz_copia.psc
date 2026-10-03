Algoritmo Matriz_copia
    Definir matriz, copia, i, j Como Entero
    Dimension matriz[3,3]
    Dimension copia[3,3]
	
    Para i <- 1 Hasta 3 Hacer
        Para j <- 1 Hasta 3 Hacer
            Escribir "Ingrese un numero:"
            Leer matriz[i,j]
			
            Si matriz[i,j] < 0 Entonces
                copia[i,j] <- 0
            SiNo
                copia[i,j] <- matriz[i,j]
            FinSi
        FinPara
    FinPara
	
    Escribir "Matriz original:"
	
    Para i <- 1 Hasta 3 Hacer
        Para j <- 1 Hasta 3 Hacer
            Escribir Sin Saltar matriz[i,j], " "
        FinPara
        Escribir ""
    FinPara
	
    Escribir "Matriz modificada:"
	
    Para i <- 1 Hasta 3 Hacer
        Para j <- 1 Hasta 3 Hacer
            Escribir Sin Saltar copia[i,j], " "
        FinPara
        Escribir ""
    FinPara
FinAlgoritmo