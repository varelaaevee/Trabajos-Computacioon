Algoritmo ej_6
	Definir matriz, precio, producto, men Como Entero
	Dimension matriz[3,3]
	men = 100000000
	Para precio <- 1 Hasta 3 Con Paso 1 Hacer
		Para producto <- 1 Hasta 3 Con Paso 1 Hacer
			Escribir "Ingrese el precio del producto del supermercado " precio  " del mes " producto
			leer matriz[precio,producto]
			Si matriz[precio,producto] <= men  Entonces
				men = matriz[precio,producto]
			SiNo
			Fin Si
		FinPara
	FinPara
	Para precio <- 1 Hasta 3 Con Paso 1 Hacer
		Para producto <- 1 Hasta 3 Con Paso 1 Hacer
			
		Fin Para
	Fin Para
	escribir "El precio mas bajo en todos los super es ",men
FinAlgoritmo
