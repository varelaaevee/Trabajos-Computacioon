Algoritmo ej_9
	Definir matriz, producto, sucursales, men Como Entero
	Dimension matriz[3,2]
	men=1000
	Para producto <- 1 Hasta 3 Con Paso 1 Hacer
		Para sucursales <- 1 Hasta 2 Con Paso 1 Hacer
			Escribir "Ingrese la cantidad de stock en la sucursal " sucursales
			leer matriz[producto,sucursales]
			Si matriz[producto,sucursales] < men  Entonces
				men<-matriz[producto,sucursales]
				
			SiNo
			Fin Si
		FinPara
	FinPara
	
	Para producto <- 1 Hasta 3 Con Paso 1 Hacer
		Para sucursales <- 1 Hasta 2 Con Paso 1 Hacer
			
		Fin Para
	Fin Para
	escribir " el stock absoluto mas bajo es " men
FinAlgoritmo
