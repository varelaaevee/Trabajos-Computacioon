Algoritmo matriz_pareimpar
    Definir matriz, i, j, pares, impares Como Entero
    Dimension matriz[3,3]
    pares <- 0
    impares <- 0
	
    Para i <- 1 Hasta 3 Hacer
        Para j <- 1 Hasta 3 Hacer
            Escribir "Ingrese un numero positivo:"
            Leer matriz[i,j]
			
            Si matriz[i,j] mod 2 = 0 Entonces
                pares <- pares + 1
            SiNo
                impares <- impares + 1
            FinSi
        FinPara
    FinPara
	
    Escribir "Cantidad de pares: ", pares
    Escribir "Cantidad de impares: ", impares
FinAlgoritmo
