const OPENAI_API_KEY = "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";

const SYSTEM_PROMPT = `
Obiettivo del GPT:
Fornire risposte tecniche chiare, basate esclusivamente sui documenti caricati dall’utente. Deve sempre includere PDF o immagini estratte se rilevanti. Ideale per manuali tecnici, istruzioni operative o documentazione d'uso.

Comportamento obbligatorio:

1. Risposte solo da fonti allegate.
   Non inventare mai informazioni. Se i documenti non contengono la risposta, segnalarlo chiaramente.

2. Gestione documenti PDF (quando richiesto o rilevante):
   - Identifica le pagine pertinenti all’interno del documento.
   - Estrai solo quelle pagine in un nuovo file PDF.
   - Fornisci un link scaricabile al PDF estratto.
   - Se possibile, genera anche immagini JPG delle singole pagine.
   - Non rispondere mai solo con testo se ci sono immagini o schemi richiesti o presenti nei PDF.

3. Toni e stile della risposta:
   - Tecnico ma chiaro.
   - Evitare espressioni generiche o vaghe.
   - Preferire elenchi puntati e passaggi numerati.

4. Lingua:
   Tutto in italiano, a meno che l’utente non richieda diversamente.

[INIZIO DOCUMENTO]



 






 	
	








	




 
	




 







 







·
 
 	



	
·
 
	  


·
 
 	

˘








·
 
 	



	
	˘˘ˇˇˆ˙˝˝˝˛˝˚˜

 !"""ˆˇ˛˙˝˝˜		

#	ˇ˚˛˝$"$%&'(
·
 
)	
*
	
+

·
 
#,	 *	
*
	+
,-
(*)	
*
	.
	
·
 
& ')#/0˘˛
& ')#/0˘˚
1


·
 


,1
	

.
*+
2(
·
 
 


(



˘	


ˇ
ˆ










 







˘3
 
4.
*	
+
+ 
2+

1*5	
1
	-6
	

.

	

6	

-*53'
	-˜

,*

6		


3536	-

,1
(
		,
.
6		
1
	3



˚3
 
71
	-

*--	
6	,
.	-



"3
 
&

	
	
 
-
	
*	
-

6	

1

3
 
-
	-+

 3

3
 
#-	
 
*	
	
-
	*		-*.-*	
.

3

˙
˝˛˛˚
˜ 





 






˛3
 
 


1
	
 ˜.-	

5

6	

*38

*

-
˜	

.
.-

	
6	

1

3







-
	
5
	

*


--6*


--˜	

+
+
	


*65

*	
*
	-
	.

.	
*-3
˘3
 



	

	
˜	
*-


	

 
9
ˇˆ˙  
3













!
˚
˚
	






 



˚3
 



	
˝˛ 
˜
"3
 


-

ˇˆ	 
˛	 ˚ 


3
 

	

˚˛	 		˜ 





 
 



˛3
 
:
+


-


		

˝˛ 
*
	,

;


**

	
	
3

	
 



	
   
! "#$˚ % &"'

*	
)	
*
	#
.
	
-.5
*
-


	
 ˜
3





 




$3
 
)*	
	

 	
*-+*
	--6

,-3

%3
 


()
*

-
)	
*
	#
-.
	
-3
</		-.
*	˜=4>8 &&!4 ?)/?&) 4/) 4 
@) ! )7!) 
353

˙˜*
*	
*
	+
,
-*5˜

	
3,*
	,
(3
ˇ3
 
>*.5	
*
	,
)	
*
	
+
*.5**)	

*
	
+
+
	,

*	



*#3

˘˝3
 
#5	


-


**

	
	
	
& ')#/0˘˚A˘
˛
1

	
5
	.
,
	
	3

˘˘3
 
#
,

*	
& ')#/0
1

3

˘˚3
 

*65
	


-
		*5-+6-	
*	
*5	

-
		*5*	
6

,*5
*+

*
+ 
,-


		.BAA˘ˇ˚3˘ˆ%3˚3˘A
5˙+*A,5,C˝˝˝˝ˆ3
5





	
 



)*	
,
+-
1
*


*	-6-
3

-
*
D*E. --,
D,

--"5

˘"3
 
)*	
	



 ˇ
-51
*+


. 
1
3


)*	
	

,	
ˇ-
-51
*+


.
1
3 --
	
.
+

<ˇˇ<<<˘	

-		-+
	,

*	
ˇˇ*˘(3


)*	

*
*
 	
.
1
+	


6*


	--!4 	


& ')!) 
5-		
*-
A.--,
(3


˘3
 
@	
˜˜
˘
+		
*	
-1

*5
-3


 

--5

$˛ .-	 ˛	 	&
,..
3

˘˛3
 
7
5-	

*

+
*	
*5	
6

,*5
*+
*
+ 
,-
B

		.BAA˘ˇ˚3˘ˆ%3˚3˘

 6.
.	
5*˜
*	
	
..
	
*-
*

*.--,
3
-
*
D*E.--,
D,

--"5





 



˘ˆ3
 
=
,


	
	



5-		
*.5
3

*


*	

6	
	

+3



˘$3
 
)*	
.
	
--*5



5-		
**6
	
*-	
	

6

,*5B







 



˙
 
+˝ˇ˝$
&*+
B*˜
)
.
3
˙
 
*ˇ	
B)*	

& ')!) 


*	-
*
3 



,+


5-	

	

*


*	3
˙
 
 	/
)*	

& ')!) 


*	-
.--,
3
˙
 
 ˛ ˇ-/
)*	
	


#
*
!+
3 --	
.
*

*+

--5*
+	




3
˙
 
,˜ /
)*	
	

-
.	
*
6	


		-
**
56	
	
-
3
˙
 



B&
1
	


-

:#
˙
 

	
ˇ-/
)*	
	


-
*+
3 -
*+
6
*

*	

		


-
--
+*	
		

*	
+
23
˙
 
˚

-
	˚	/
)*	
	


3 6

**
	6*	



6
	


.˙
,*-	˜
*	
4	
*
*	
	


*


353F
6
*
(3

˘%3
 

	


+		
*3 


-
	
*+

5-	

	
& 
')!) 3=

,-


--5

$˛		˘˛	 -.-

˘
3


<
 6	

-*

˜
-

& ')!) .

	
-




	*	
/#!A:˙!+
-



	
6

	
.
1
-:
		*5-#5
3 6
-	
**

	
5-	
˜

*	
	& ')!) -..
	3.

.

--
*-+

*


	

5-	
	


3







˘3
 
4*

	


-
5-	

˜



*--
+
	


3 *-		
1
	-*	


+
+
2-+
6

3=

*
.

	
1
	-,	
*
,
*
-	

-
+
*
,
1
	-*

*	
.
5
(3

˚3
 
>*.5	
)	
*
	
+
6
	
#*	*
66
	
& ')#/03


"
˝˛
#
$˛%





 



"3
 
 *4*	
& ')#/05**.
6
 
-	 *-
--
*,	˚˝˙"˝-

36
	



	
+

	˙.(3

3
 
 6	*---
*--


--6˜*-		
	.
.


6+
34	
,-
˜
-


+
-**	
**
-


˜
**

	
**


5-		
*A:!+

.
	
-




	3

˛3
 
/		-.
*	˜	


-
	
-.	

*

-	

3=
,*

	

1

	


	
	

-	




*	
*


5-	


*	
-		*---
*


.
	
3
ˆ3
 
'

,

	
*-"˙˛	
.	
	
*

-3
 6



.
	
,	.	*5

-˜
	*


.	
+
	


*
	*5
,	
*
)	
*
	

**

	
*+
.55*5

)	
*
	
+

*
#	
	

*
	,
3
	
	
 #A #.5
6


	
*"3$+

	*-


	
(	 	  	
	-		

˘
3 --

,


--+ 
	
	
*
	,
*
 *	
*
	A *	*
	
+
,-*53



Gateway 4G MultiTech
®
 
Scheda tecnica
Connette il dispositivo 
LIFEPAK 15
®
 al 
sistema LIFENET
®
 alla 
velocità 4G.
 
Il gateway 4G MultiTech fornisce una 
connettività cellulare sicura per la trasmissione 
dei dati del monitor/defibrillatore LIFEPAK 15 al 
sistema LIFENET.
Invio di dati essenziali, che includono:
Ł
 
ECG a 12 derivazioni
Ł
 
Parametri vitali
Ł
 
Registro eventi
Ł
 
Forme d'onda
Ł
 
Tendenze
Ł
 
Stato di disponibilità del dispositivo e della batteria
Condivisione flessibile dei dati
Ł
 
Trasmissione consentita ovunque sia disponibile un segnale cellulare
Ł
 
Invio dei dati al software di analisi dei dati CODE-STAT per l'analisi post-evento
Ł
 
Aggiornamenti automatici giornalieri relativi allo stato di disponibilità di LIFEPAK per semplificare la 
gestione delle apparecchiature
Semplicità di utilizzo
Ł
 
Progettato e ottimizzato per il suo utilizzo
Ł
 
Sempre attivo e disponibile quando il LIFEPAK è acceso
Ł
 
Comunica con il LIFEPAK per la trasmissione dei dati. Esegue, secondo necessità, più tentativi senza 
l™intervento dell™operatore
Design robusto
Ł
 
Involucro esterno in plastica per una maggiore protezione
Ł
 
Progettato per essere riposto in sicurezza, nella borsa da trasporto del monitor/defibrillatore LIFEPAK 15
Opzioni di piano dati e gestore telefonico flessibili
Ł
 
Disponibile per l™uso con fornitori europei

Caratteristiche  tecniche
Reti
Europa
Banda, frequenza
4G (LTE): B1(2100 MHz), B3(1800 MHz), B7(2600 MHz), 
 
B8(900 MHz), B20(800 MHz), B28A(700 MHz) 
3G (WCDMA): B1(2100 MHz), B8(900 MHz) 
2G: DCS1800, GSM900
Dati pacchetto
LTE Cat 4: 
Fino a 150 Mbps in download 
Fino a 50 Mbps in upload
Peso 
0,521
 
kg
Dimensioni
A: 18,870 cm, L: 13,360 cm, P: 3,696 cm
Ubicazione

Certifi cazioni
Conformità relativa alla compatibilità 
elettromagnetica (EMC) 
EN 55024, EN 55032, EN 301 489-1, EN 301 489-52
Conformità in materia di dispositivi radio
EN 301 511, EN 301 908-1, EN 301 908-2, EN 301 908-3
Sicurezza 
EN 62368-1, EN 62311
Rete 
Categoria LTE 3 GPP Rel. 11 - 4
Apparecchiat ura
Gateway 4G: (11996-000502)
Per ulteriori informazioni, contattare il rappresentante Stryker o visitare il sito Web all™indirizzo strykeremergencycare.com
 
di servizio: LIFEPAK, LIFENET. Tutti gli altri marchi commerciali sono proprietà dei rispettivi proprietari o titolari. 
L'assenza di un pr
[FINE DOCUMENTO]
`;
