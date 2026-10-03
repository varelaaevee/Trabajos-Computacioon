Algoritmo matriz_precio
    Definir precios, i, j Como Real
    Definir aumento Como Real
    Dimension precios[2,4]
	
    Para i <- 1 Hasta 2 Hacer
        Para j <- 1 Hasta 4 Hacer
            Escribir "Ingrese precio:"
            Leer precios[i,j]
        FinPara
    FinPara
	
    Escribir "Ingrese el aumento"
    Leer aumento
	
    Para i <- 1 Hasta 2 Hacer
        Para j <- 1 Hasta 4 Hacer
            precios[i,j] <- precios[i,j] * aumento
        FinPara
    FinPara
	
    Escribir "Precios finales:"
	
    Para i <- 1 Hasta 2 Hacer
        Para j <- 1 Hasta 4 Hacer
            Escribir Sin Saltar precios[i,j], " "
        FinPara
        Escribir ""
    FinPara
FinAlgoritmo
