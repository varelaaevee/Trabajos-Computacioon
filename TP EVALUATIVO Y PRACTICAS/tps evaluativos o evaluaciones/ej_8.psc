Algoritmo ej_8
	Definir matriz, presion, paciente, men Como Entero
	Dimension matriz[2,4]
	men=1000
	Para paciente <- 1 Hasta 2 Con Paso 1 Hacer
		Para presion <- 1 Hasta 4 Con Paso 1 Hacer
			Escribir "Ingrese la presion del paciente " paciente " en el dia " presion
			leer matriz[paciente,presion]
			Si matriz[paciente,presion] < men  Entonces
				men<-matriz[paciente,presion]
				
			SiNo
			Fin Si
		FinPara
	FinPara

	Para paciente <- 1 Hasta 4 Con Paso 1 Hacer
		Para presion <- 1 Hasta 3 Con Paso 1 Hacer
			
		Fin Para
	Fin Para
	escribir " la presion mas baja es de " men
	
FinAlgoritmo
