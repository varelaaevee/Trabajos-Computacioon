Algoritmo matriz_sumas
    Definir matriz, i, j, suma Como Entero
    Dimension matriz[4,4]
    suma <- 0
	
    Para i <- 1 Hasta 4 Hacer
        Para j <- 1 Hasta 4 Hacer
            Escribir "Ingrese un numero:"
            Leer matriz[i,j]
			
            Si i = j Entonces
                suma <- suma + matriz[i,j]
            FinSi
        FinPara
    FinPara
	
    Escribir "La suma es: ", suma
FinAlgoritmo