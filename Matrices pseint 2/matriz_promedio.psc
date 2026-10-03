Algoritmo matriz_promedio
    Definir matriz, i, j Como Entero
    Definir suma, promedio Como Real
    Dimension matriz[3,4]
	
    Para i <- 1 Hasta 3 Hacer
        Para j <- 1 Hasta 4 Hacer
            Escribir "Ingrese las ventas de la sucursal " j ":" 
            Leer matriz[i,j]
        FinPara
    FinPara
	
    Para j <- 1 Hasta 4 Hacer
        suma <- 0
		
        Para i <- 1 Hasta 3 Hacer
            suma <- suma + matriz[i,j]
        FinPara
		
        promedio <- suma / 3
        Escribir "Promedio de la sucursal ", j, ": ", promedio
    FinPara
FinAlgoritmo
