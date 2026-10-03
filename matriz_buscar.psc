Algoritmo matriz_buscar
    Definir matriz, i, j, numero Como Entero
    Definir encontrado Como Logico
    Dimension matriz[3,4]
    encontrado <- Falso
	
    Para i <- 1 Hasta 3 Hacer
        Para j <- 1 Hasta 4 Hacer
            Escribir "Ingrese un numero:"
            Leer matriz[i,j]
        FinPara
    FinPara
	
    Escribir "Ingrese el numero que desea buscar:"
    Leer numero
	
    Para i <- 1 Hasta 3 Hacer
        Para j <- 1 Hasta 4 Hacer
            Si matriz[i,j] = numero Entonces
                Escribir "Encontrado en fila ", i, " columna ", j
                encontrado <- Verdadero
            FinSi
        FinPara
    FinPara
	
    Si encontrado = Falso Entonces
        Escribir "El numero no se encontro"
    FinSi
FinAlgoritmo