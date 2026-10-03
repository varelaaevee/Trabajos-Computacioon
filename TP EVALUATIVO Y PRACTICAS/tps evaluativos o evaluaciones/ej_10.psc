Algoritmo ej_10
	Definir matriz, frigorifico, temperatura, men Como Entero
	Dimension matriz[3,3]
	men=1000
	Para frigorifico <- 1 Hasta 3 Con Paso 1 Hacer
		Para temperatura <- 1 Hasta 3 Con Paso 1 Hacer
			Escribir "Ingrese la temperatura del frigorifico en el punto " temperatura
			leer matriz[frigorifico,temperatura]
			Si matriz[frigorifico,temperatura] < men  Entonces
				men<-matriz[frigorifico,temperatura]
				
			SiNo
			Fin Si
		FinPara
	FinPara
	
	Para frigorifico <- 1 Hasta 3 Con Paso 1 Hacer
		Para temperatura <- 1 Hasta 3 Con Paso 1 Hacer
			
		Fin Para
	Fin Para
	escribir " la temperatura mas baja registrada es " men
FinAlgoritmo
