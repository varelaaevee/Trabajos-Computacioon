Algoritmo matriz_suma
    Definir matriz, i, j, suma Como Entero
    Dimension matriz[3,4]
    suma <- 0
	
    Para i <- 1 Hasta 3 Hacer
        Para j <- 1 Hasta 4 Hacer
            Escribir "Ingrese un numero:"
            Leer matriz[i,j]
            suma <- suma + matriz[i,j]
        FinPara
    FinPara
	
    Escribir "La suma es: ", suma
FinAlgoritmo
