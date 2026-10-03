Algoritmo matriz_temperaturas
    Definir temperaturas, i, j, mayor Como Real
    Dimension temperaturas[3,3]
	
    Para i <- 1 Hasta 3 Hacer
        Para j <- 1 Hasta 3 Hacer
            Escribir "Ingrese una temperatura:"
            Leer temperaturas[i,j]
			
            Si i = 1 Y j = 1 Entonces
                mayor <- temperaturas[i,j]
            SiNo
                Si temperaturas[i,j] > mayor Entonces
                    mayor <- temperaturas[i,j]
                FinSi
            FinSi
        FinPara
    FinPara
	
    Escribir "La temperatura mas alta es: ", mayor
FinAlgoritmo
