Algoritmo matriz_ventas
    Definir ventas, i, j Como Entero
    Dimension ventas[3,3]
	
    Para i <- 1 Hasta 3 Hacer
        Para j <- 1 Hasta 3 Hacer
            Escribir "Ingrese la venta del negocio ", i, " del dia ", j
            Leer ventas[i,j]
        FinPara
    FinPara
	
    Escribir "Matriz de ventas:"
	
    Para i <- 1 Hasta 3 Hacer
        Para j <- 1 Hasta 3 Hacer
            Escribir Sin Saltar ventas[i,j], " "
        FinPara
        Escribir ""
    FinPara
FinAlgoritmo
