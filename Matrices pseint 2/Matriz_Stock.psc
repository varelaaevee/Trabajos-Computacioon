Algoritmo Matriz_Stock
    Definir matriz, i, j, limite Como Entero
    Dimension matriz[4,2]
	
    Para i <- 1 Hasta 4 Hacer
        Para j <- 1 Hasta 2 Hacer
            Escribir "Ingrese el stock del producto:"
            Leer matriz[i,j]
        FinPara
    FinPara
	
    Escribir "Ingrese el limite minimo de stock:"
    Leer limite
	
    Para i <- 1 Hasta 4 Hacer
        Para j <- 1 Hasta 2 Hacer
            Si matriz[i,j] < limite Entonces
                Escribir "Fila: ", i, " Columna: ", j
                Escribir "Stock: ", matriz[i,j]
            FinSi
        FinPara
    FinPara
FinAlgoritmo