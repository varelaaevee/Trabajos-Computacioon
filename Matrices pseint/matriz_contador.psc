Algoritmo matriz_contador
    Definir matriz, i, j, contador Como Entero
    Dimension matriz[4,2]
    contador <- 0
	
    Para i <- 1 Hasta 4 Hacer
        Para j <- 1 Hasta 2 Hacer
            Escribir "Ingrese un numero:"
            Leer matriz[i,j]
			
            Si matriz[i,j] = 0 Entonces
                contador <- contador + 1
            FinSi
        FinPara
    FinPara
	
    Escribir "La cantidad de ceros es: ", contador
FinAlgoritmo
