Algoritmo ej_7
	Definir matriz, tiempo, atleta, men Como Entero
	Dimension matriz[4,3]
	men=1000
	Para atleta <- 1 Hasta 4 Con Paso 1 Hacer
		Para tiempo <- 1 Hasta 3 Con Paso 1 Hacer
			Escribir "Ingrese el tiempo de carrera del atleta " atleta  
			leer matriz[atleta,tiempo]
			Si matriz[atleta,tiempo]<men Entonces
				men<-matriz[atleta,tiempo]
				
			SiNo
			Fin Si
		FinPara
	FinPara

	Para atleta <- 1 Hasta 4 Con Paso 1 Hacer
		Para tiempo <- 1 Hasta 3 Con Paso 1 Hacer
			
		Fin Para
	Fin Para
	escribir "El menor tiempo fue ", men " seg "
FinAlgoritmo
