window.onload=function(){
	
	document.getElementById("btncalcular").onclick=calcular;
	document.getElementById("sltncompuestos").onchange=aumentar;
	document.getElementById("divcompuesto3").style.display="none";
	
}
//Esta funcion aumenta el numero de compuestos de 2 a 3
function aumentar(){
	numerocompuestos=document.getElementById("sltncompuestos").value;
	if(numerocompuestos==2){
		document.getElementById("divx3").style.display="none";
		document.getElementById("divcompuesto3").style.display="none";
	}
	
	if(numerocompuestos==3){
		document.getElementById("divx3").style.display="inline-block";		
		document.getElementById("divx3").innerHTML="x<sub>3</sub>: <input type=\"text\" id=\"txtx3\" onKeyPress=\"return permite(event, \'num\')\">";
		document.getElementById("divcompuesto3").style.display="inline-block";
		document.getElementById("divcompuesto3").innerHTML="<center>Compuesto 3<table><tr><td align=\"center\">Grupo Principal</td><td align=\"center\">Subgrupo</td><td align=\"center\">vk</td></tr><tr><td rowspan=\"4\">1 \"CH<sub>2</sub>\"</td><td>CH<sub>3</sub></td><td><input type=\"text\" id=\"txtc3s1\" onKeyPress=\"return permite(event, \'num\')\"></td></tr><tr><td>CH<sub>2</sub></td><td><input type=\"text\" id=\"txtc3s2\" onKeyPress=\"return permite(event, \'num\')\"></td></tr><tr><td>CH</td><td><input type=\"text\" id=\"txtc3s3\" onKeyPress=\"return permite(event, \'num\')\"></td></tr><tr><td>C</td><td><input type=\"text\" id=\"txtc3s4\" onKeyPress=\"return permite(event, \'num\')\"></td></tr><tr><td rowspan=\"\"><p>3 &quot;ACH&quot;</p><p>(AC = carbono aromático)</p></td><td>ACH</td><td><input type=\"text\" id=\"txtc3s5\" onKeyPress=\"return permite(event, \'num\')\"></td></tr><tr><td rowspan=\"2\">4 &quot;ACCH<sub>2</sub>&quot;</td><td>ACCH<sub>3</sub></td><td><input type=\"text\" id=\"txtc3s6\" onKeyPress=\"return permite(event, \'num\')\"></td></tr><tr><td>ACCH<sub>2</sub></td><td><input type=\"text\" id=\"txtc3s7\" onKeyPress=\"return permite(event, \'num\')\"></td></tr><tr><td>5 &quot;OH&quot;</td><td>OH</td><td><input type=\"text\" id=\"txtc3s8\" onKeyPress=\"return permite(event, \'num\')\"></td></tr><tr><td>7 &quot;H<sub>2</sub>O&quot;</td><td>H<sub>2</sub>O</td><td><input type=\"text\" id=\"txtc3s9\" onKeyPress=\"return permite(event, \'num\')\"></td></tr><tr><td rowspan=\"2\">9 &quot;CH<sub>2</sub>CO&quot;</td><td>CH<sub>3</sub>CO</td><td><input type=\"text\" id=\"txtc3s10\" onKeyPress=\"return permite(event, \'num\')\"></td></tr><tr><td>CH<sub>2</sub>CO</td><td><input type=\"text\" id=\"txtc3s11\" onKeyPress=\"return permite(event, \'num\')\"></td></tr><tr><td rowspan=\"3\">13 &quot;CH<sub>2</sub>O&quot;</td><td>CH<sub>3</sub>O</td><td><input type=\"text\" id=\"txtc3s12\" onKeyPress=\"return permite(event, \'num\')\"></td></tr><tr><td>CH<sub>2</sub>O</td><td><input type=\"text\" id=\"txtc3s13\" onKeyPress=\"return permite(event, \'num\')\"></td></tr><tr><td>CH-O</td><td><input type=\"text\" id=\"txtc3s14\" onKeyPress=\"return permite(event, \'num\')\"></td></tr><tr><td rowspan=\"3\">15 &quot;CNH&quot;</td><td>CH<sub>3</sub>NH</td><td><input type=\"text\" id=\"txtc3s15\" onKeyPress=\"return permite(event, \'num\')\"></td></tr><tr><td>CH<sub>2</sub>NH</td><td><input type=\"text\" id=\"txtc3s16\" onKeyPress=\"return permite(event, \'num\')\"></td></tr><tr><td>CHNH</td><td><input type=\"text\" id=\"txtc3s17\" onKeyPress=\"return permite(event, \'num\')\"></td></tr><tr><td rowspan=\"2\">19 &quot;CCN&quot;</td><td>CH<sub>3</sub>CN</td><td><input type=\"text\" id=\"txtc3s18\" onKeyPress=\"return permite(event, \'num\')\"></td></tr><tr><td>CH<sub>2</sub>CN</td><td><input type=\"text\" id=\"txtc3s19\" onKeyPress=\"return permite(event, \'num\')\"></td></tr></table></center>";
	}
}








//Esta función solo deja que se escriban números en los campos
function permite(elEvento, permitidos) {
  // Variables que definen los caracteres permitidos
  var numeros = "0123456789";
  var caracteres = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  var numeros_caracteres = numeros + caracteres;
  var teclas_especiales = [8, 37, 39, 46];
  // 8 = BackSpace, 46 = Supr, 37 = flecha izquierda, 39 = flecha derecha
 
 
  // Seleccionar los caracteres a partir del parámetro de la función
  switch(permitidos) {
    case 'num':
      permitidos = numeros;
      break;
    case 'car':
      permitidos = caracteres;
      break;
    case 'num_car':
      permitidos = numeros_caracteres;
      break;
  }
 
  // Obtener la tecla pulsada 
  var evento = elEvento || window.event;
  var codigoCaracter = evento.charCode || evento.keyCode;
  var caracter = String.fromCharCode(codigoCaracter);
 
  // Comprobar si la tecla pulsada es alguna de las teclas especiales
  // (teclas de borrado y flechas horizontales)
  var tecla_especial = false;
  for(var i in teclas_especiales) {
    if(codigoCaracter == teclas_especiales[i]) {
      tecla_especial = true;
      break;
    }
  }
 
  // Comprobar si la tecla pulsada se encuentra en los caracteres permitidos
  // o si es una tecla especial
  return permitidos.indexOf(caracter) != -1 || tecla_especial;
}










//Esta funcion calcula los coeficientes de actividad
function calcular(){
	numerocompuestos=document.getElementById("sltncompuestos").value;
if(numerocompuestos==2){
	//vk1 es un vector con todos los valores de vk para el compuesto 1
	//vk2 es un vector con todos los valores de vk para el compuesto 2
	//Se escribe hasta 19 porque son 19 subgrupos (18 si se cuenta desde 0)
	vk1=[];
	vk2=[];
	for(var i=0; i<19; i++){
		vk1[i]=eval('document.getElementById("txtc1s'+(i+1)+'").value');
		vk2[i]=eval('document.getElementById("txtc2s'+(i+1)+'").value');
	}
	
//parametros es una matriz que contiene los parámetros
//de los subgrupos.
//El 1er elemento contiene el valor de k
//El 2do elemento contiene el valor de Rk
//El 3er elemento contiene el valor de Qk
//El 4to elemento contiene el valor del grupo
	parametros=[
		[1, 0.9011, 0.848, 1],
		[2, 0.6744, 0.540, 1],
		[3, 0.4469, 0.228, 1],
		[4, 0.2195, 0.000, 1],
		[10, 0.5313, 0.400, 3],
		[12, 1.2663, 0.968, 4],
		[13, 1.0396, 0.660, 4],
		[15, 1.0000, 1.200, 5],
		[17, 0.9200, 1.400, 7],
		[19, 1.6724, 1.488, 9],
		[20, 1.4457, 1.180, 9],
		[25, 1.1450, 1.088, 13],
		[26, 0.9183, 0.780, 13],
		[27, 0.6908, 0.468, 13],
		[32, 1.4337, 1.244, 15],
		[33, 1.2070, 0.936, 15],
		[34, 0.9795, 0.624, 15],
		[41, 1.8701, 1.724, 19],
		[42, 1.6434, 1.416, 19],
	]
	//r1 es la suma del producto vk1*rk
	r1=0;
	for(var i=0; i<vk1.length; i++){
		r1=vk1[i]*parametros[i][1] + r1;
	}
	//r2 es la suma del producto vk2*rk
	r2=0;
	for(var i=0; i<vk2.length; i++){
		r2=vk2[i]*parametros[i][1] + r2;	
	}
	
	//q1 es la suma del producto vk1*qk
	q1=0;
	for(var i=0; i<vk1.length; i++){
		q1=vk1[i]*parametros[i][2] + q1;	
	}
	//q2 es la suma del producto vk2*qk
	q2=0;
	for(var i=0; i<vk2.length; i++){
		q2=vk2[i]*parametros[i][2] + q2;	
	}
	
	//eki1=vk1*qk/q1 eki2=vk2*qk/q2  eki1 esta en la 1er columna y eki2 en la 2da
	//j=2 porque hay 2 compuestos	
	eki=[
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	]; //Se inicializa la matriz OJO este es el mejor método	
	for(var j=0; j<2; j++){
		for(var i=0; i<vk1.length; i++){
			eki[i][j]=eval("vk"+(j+1)+"["+i+"]")*parametros[i][2]/eval("q"+(j+1));
			
		}
	}
	
	
	//Parámetros de interacción en función de los subgrupos
	amk=[
	[0, 0, 0, 0, 61.13, 76.50, 76.50, 986.50, 1318.00, 476.40, 476.40, 251.50, 251.50, 251.50, 255.70, 255.70, 255.70, 597.00, 597.00],//0
	[0, 0, 0, 0, 61.13, 76.50, 76.50, 986.50, 1318.00, 476.40, 476.40, 251.50, 251.50, 251.50, 255.70, 255.70, 255.70, 597.00, 597.00],//1
	[0, 0, 0, 0, 61.13, 76.50, 76.50, 986.50, 1318.00, 476.40, 476.40, 251.50, 251.50, 251.50, 255.70, 255.70, 255.70, 597.00, 597.00],//2
	[0, 0, 0, 0, 61.13, 76.50, 76.50, 986.50, 1318.00, 476.40, 476.40, 251.50, 251.50, 251.50, 255.70, 255.70, 255.70, 597.00, 597.00],//3
	[-11.12, -11.12, -11.12, -11.12, 0, 167.00, 167.00, 636.10, 903.80, 25.77, 25.77, 32.14, 32.14, 32.14, 122.80, 122.80, 122.80, 212.50, 212.50],//4
	[-69.70, -69.70, -69.70, -69.70, -146.80, 0, 0, 803.20, 5695.00, -52.10, -52.10, 213.10, 213.10, 213.10, -49.29, -49.29, -49.29, 6096.00, 6096.00],//5
	[-69.70, -69.70, -69.70, -69.70, -146.80, 0, 0, 803.20, 5695.00, -52.10, -52.10, 213.10, 213.10, 213.10, -49.29, -49.29, -49.29, 6096.00, 6096.00],//6
	[156.40, 156.40, 156.40, 156.40, 89.60, 25.82, 25.82, 0, 353.50, 84.00, 84.00, 28.06, 28.06, 28.06, 42.70, 42.70, 42.70, 6.712, 6.712],//7
	[300.00, 300.00, 300.00, 300.00, 362.30, 377.60, 377.60, -229.10, 0, -195.40, -195.40, 540.50, 540.50, 540.50, 168.00, 168.00, 168.00, 112.60, 112.60],//8
	[26.70, 26.70, 26.70, 26.70, 140.10, 365.80, 365.80, 164.50, 472.50, 0, 0, -103.60, -103.60, -103.60, -174.20, -174.20, -174.20, 481.70, 481.70],//9
	[26.70, 26.70, 26.70, 26.70, 140.10, 365.80, 365.80, 164.50, 472.50, 0, 0, -103.60, -103.60, -103.60, -174.20, -174.20, -174.20, 481.70, 481.70],//10
	[83.36, 83.36, 83.36, 83.36, 52.13, 65.69, 65.69, 237.70, -314.70, 191.10, 191.10, 0, 0, 0, 251.50, 251.50, 251.50, -18.51, -18.51],//11
	[83.36, 83.36, 83.36, 83.36, 52.13, 65.69, 65.69, 237.70, -314.70, 191.10, 191.10, 0, 0, 0, 251.50, 251.50, 251.50, -18.51, -18.51],//12
	[83.36, 83.36, 83.36, 83.36, 52.13, 65.69, 65.69, 237.70, -314.70, 191.10, 191.10, 0, 0, 0, 251.50, 251.50, 251.50, -18.51, -18.51],//13
	[65.33, 65.33, 65.33, 65.33, -22.31, 223.00, 223.00, -150.00, -448.20, 394.60, 394.60, -56.08, -56.08, -56.08, 0, 0, 0, 147.10, 147.10],//14
	[65.33, 65.33, 65.33, 65.33, -22.31, 223.00, 223.00, -150.00, -448.20, 394.60, 394.60, -56.08, -56.08, -56.08, 0, 0, 0, 147.10, 147.10],//15
	[65.33, 65.33, 65.33, 65.33, -22.31, 223.00, 223.00, -150.00, -448.20, 394.60, 394.60, -56.08, -56.08, -56.08, 0, 0, 0, 147.10, 147.10],//16
	[24.82, 24.82, 24.82, 24.82, -22.97, -138.40, -138.40, 185.40, 242.80, -287.50, -287.50, 38.81, 38.81, 38.81, -108.50, -108.50, -108.50, 0, 0],//17
	[24.82, 24.82, 24.82, 24.82, -22.97, -138.40, -138.40, 185.40, 242.80, -287.50, -287.50, 38.81, 38.81, 38.81, -108.50, -108.50, -108.50, 0, 0],//18
	]
	
	//Parametros de interacción a usarse
	//Primero se define un vector para el componente 1, si hay un subgrupo, se vuelve 1, si no, es 0
	comp1=[];
	for(var i=0; i<vk1.length; i++){
		if(vk1[i]!=""){
			comp1[i]=1;
		}
		else{
			comp1[i]=0;
		}
	}
	//Lo mismo que el anterior, para el componente 2
	comp2=[];
	for(var i=0; i<vk2.length; i++){
		if(vk2[i]!=""){
			comp2[i]=1;
		}
		else{
			comp2[i]=0;
		}
	}
	//Se crea una matriz en base a los vectores comp1 y comp2, la matriz es la que contendra los parametros a usarse,
	//en forma de ceros y unos (1=ese parametro va a usarse, 0=ese parametro no va a usarse)
	paraus=[
	[],//0
	[],//1
	[],//2
	[],//3
	[],//4
	[],//5
	[],//6
	[],//7
	[],//8
	[],//9
	[],//10
	[],//11
	[],//12
	[],//13
	[],//14
	[],//15
	[],//16
	[],//17
	[],//18
	];
	for(var i=0; i<comp1.length; i++){
		for(var j=0; j<comp2.length; j++){
			if(comp1[i]==1 && comp2[j]==1){
				paraus[i][j]=1;
			}
			else{
				paraus[i][j]=0;
			}
		}
	}
	
//Se multiplica la matriz paraus * amk, de esa forma se obtiene la matriz amkparaus	
	amkparaus=[
	[],//0
	[],//1
	[],//2
	[],//3
	[],//4
	[],//5
	[],//6
	[],//7
	[],//8
	[],//9
	[],//10
	[],//11
	[],//12
	[],//13
	[],//14
	[],//15
	[],//16
	[],//17
	[],//18
	];
	for(var i=0; i<comp1.length; i++){
		for(var j=0; j<comp2.length; j++){
			amkparaus[i][j]=amk[i][j]*paraus[i][j];
		}
	}
//En base a la matriz amkparaus se calcula la matriz tmk, T es la temperatura en Kelvin
	T=document.getElementById("txtt").value;
	tmk=[
	[],//0
	[],//1
	[],//2
	[],//3
	[],//4
	[],//5
	[],//6
	[],//7
	[],//8
	[],//9
	[],//10
	[],//11
	[],//12
	[],//13
	[],//14
	[],//15
	[],//16
	[],//17
	[],//18
	];
	for(var i=0; i<comp1.length; i++){
		for(var j=0; j<comp2.length; j++){
			tmk[i][j]=Math.exp(-(amkparaus[i][j]/T));
		}
	}
	
	//Creaacion de la matriz Bik
	Bik=[
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	];
	for(var i=0; i<comp1.length; i++){
		for(var j=0; j<comp1.length; j++){
			Bik[0][i]=eki[j][0]*tmk[j][i]+Bik[0][i];
		}
		
	}
	for(var i=0; i<comp1.length; i++){
		for(var j=0; j<comp1.length; j++){
			Bik[1][i]=eki[j][1]*tmk[j][i]+Bik[1][i];
		}
		
	}
	
	//Creacion del vector Ok
	x1=document.getElementById("txtx1").value;
	x2=document.getElementById("txtx2").value;
	Ok=[];
	for(var i=0; i<comp1.length; i++){
		Ok[i]=(x1*q1*eki[i][0]+x2*q2*eki[i][1])/(x1*q1+x2*q2);
	}
	
	//Creacion del vector sk
	sk=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(var j=0; j<comp1.length; j++){
		for(var i=0; i<comp1.length; i++){
			sk[j]=Ok[i]*tmk[i][j]+sk[j];
		}
	}
	
	//Calculo de J1 y J2
	J1=r1/(r1*x1+r2*x2);
	J2=r2/(r1*x1+r2*x2);	
	//Calculo de L1 y L2
	L1=q1/(q1*x1+q2*x2);
	L2=q2/(q1*x1+q2*x2);
	
	//Calculo de lnG1c y lnG2c
	lnG1C=1-J1+Math.log(J1)-5*q1*(1-(J1/L1)+Math.log(J1/L1));
	lnG2C=1-J2+Math.log(J2)-5*q2*(1-(J2/L2)+Math.log(J2/L2));
	
	
	//Calculo de lnG1R y lnG2R; se calcula primero p1 y p2
	p1=0;
	for(var i=0; i<comp1.length; i++){
		p1=(Ok[i]*(Bik[0][i]/sk[i]))-(eki[i][0]*(Math.log(Bik[0][i]/sk[i])))+p1;
	}
	lnG1R=q1*(1-p1);
		
	p2=0;
	for(var i=0; i<comp1.length; i++){
		p2=(Ok[i]*(Bik[1][i]/sk[i]))-(eki[i][1]*(Math.log(Bik[1][i]/sk[i])))+p2;
	}
	lnG2R=q2*(1-p2);
	
	//Finalizando el programa y calculando G1 y G2
	G1=Math.exp(lnG1C+lnG1R);
	G2=Math.exp(lnG2C+lnG2R);
	
	document.getElementById("divresultado").innerHTML="γ<sub>1</sub>="+ G1 +"   "+"γ<sub>2</sub>="+G2;
	

}



//---------------------------------------------------------------------------------------------------------


if(numerocompuestos==3){
	//vk1 es un vector con todos los valores de vk para el compuesto 1
	//vk2 es un vector con todos los valores de vk para el compuesto 2
	//vk3 es un vector con todos los valores de vk para el compuesto 2
	//Se escribe hasta 19 porque son 19 subgrupos (18 si se cuenta desde 0)
	vk1=[];
	vk2=[];
	vk3=[];
	for(var i=0; i<19; i++){
		vk1[i]=eval('document.getElementById("txtc1s'+(i+1)+'").value');
		vk2[i]=eval('document.getElementById("txtc2s'+(i+1)+'").value');
		vk3[i]=eval('document.getElementById("txtc3s'+(i+1)+'").value');
	}
	
//parametros es una matriz que contiene los parámetros
//de los subgrupos.
//El 1er elemento contiene el valor de k
//El 2do elemento contiene el valor de Rk
//El 3er elemento contiene el valor de Qk
//El 4to elemento contiene el valor del grupo
	parametros=[
		[1, 0.9011, 0.848, 1],
		[2, 0.6744, 0.540, 1],
		[3, 0.4469, 0.228, 1],
		[4, 0.2195, 0.000, 1],
		[10, 0.5313, 0.400, 3],
		[12, 1.2663, 0.968, 4],
		[13, 1.0396, 0.660, 4],
		[15, 1.0000, 1.200, 5],
		[17, 0.9200, 1.400, 7],
		[19, 1.6724, 1.488, 9],
		[20, 1.4457, 1.180, 9],
		[25, 1.1450, 1.088, 13],
		[26, 0.9183, 0.780, 13],
		[27, 0.6908, 0.468, 13],
		[32, 1.4337, 1.244, 15],
		[33, 1.2070, 0.936, 15],
		[34, 0.9795, 0.624, 15],
		[41, 1.8701, 1.724, 19],
		[42, 1.6434, 1.416, 19],
	]
	//r1 es la suma del producto vk1*rk
	r1=0;
	for(var i=0; i<vk1.length; i++){
		r1=vk1[i]*parametros[i][1] + r1;
	}
	//r2 es la suma del producto vk2*rk
	r2=0;
	for(var i=0; i<vk2.length; i++){
		r2=vk2[i]*parametros[i][1] + r2;	
	}
	//r3 es la suma del producto vk2*rk
	r3=0;
	for(var i=0; i<vk3.length; i++){
		r3=vk3[i]*parametros[i][1] + r3;	
	}
		
	//q1 es la suma del producto vk1*qk
	q1=0;
	for(var i=0; i<vk1.length; i++){
		q1=vk1[i]*parametros[i][2] + q1;	
	}
	//q2 es la suma del producto vk2*qk
	q2=0;
	for(var i=0; i<vk2.length; i++){
		q2=vk2[i]*parametros[i][2] + q2;	
	}
	//q3 es la suma del producto vk3*qk
	q3=0;
	for(var i=0; i<vk3.length; i++){
		q3=vk3[i]*parametros[i][2] + q3;	
	}
	
	
	//eki1=vk1*qk/q1 eki2=vk2*qk/q2  eki1 esta en la 1er columna y eki2 en la 2da y eki3 en la 3ra
	//j<numerocompuestos porque hay 3 compuestos	
	eki=[
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
	]; //Se inicializa la matriz OJO este es el mejor método	
	for(var j=0; j<numerocompuestos; j++){
		for(var i=0; i<vk1.length; i++){
			eki[i][j]=eval("vk"+(j+1)+"["+i+"]")*parametros[i][2]/eval("q"+(j+1));
			
		}
	}
	
	
	//Parámetros de interacción en función de los subgrupos
	amk=[
	[0, 0, 0, 0, 61.13, 76.50, 76.50, 986.50, 1318.00, 476.40, 476.40, 251.50, 251.50, 251.50, 255.70, 255.70, 255.70, 597.00, 597.00],//0
	[0, 0, 0, 0, 61.13, 76.50, 76.50, 986.50, 1318.00, 476.40, 476.40, 251.50, 251.50, 251.50, 255.70, 255.70, 255.70, 597.00, 597.00],//1
	[0, 0, 0, 0, 61.13, 76.50, 76.50, 986.50, 1318.00, 476.40, 476.40, 251.50, 251.50, 251.50, 255.70, 255.70, 255.70, 597.00, 597.00],//2
	[0, 0, 0, 0, 61.13, 76.50, 76.50, 986.50, 1318.00, 476.40, 476.40, 251.50, 251.50, 251.50, 255.70, 255.70, 255.70, 597.00, 597.00],//3
	[-11.12, -11.12, -11.12, -11.12, 0, 167.00, 167.00, 636.10, 903.80, 25.77, 25.77, 32.14, 32.14, 32.14, 122.80, 122.80, 122.80, 212.50, 212.50],//4
	[-69.70, -69.70, -69.70, -69.70, -146.80, 0, 0, 803.20, 5695.00, -52.10, -52.10, 213.10, 213.10, 213.10, -49.29, -49.29, -49.29, 6096.00, 6096.00],//5
	[-69.70, -69.70, -69.70, -69.70, -146.80, 0, 0, 803.20, 5695.00, -52.10, -52.10, 213.10, 213.10, 213.10, -49.29, -49.29, -49.29, 6096.00, 6096.00],//6
	[156.40, 156.40, 156.40, 156.40, 89.60, 25.82, 25.82, 0, 353.50, 84.00, 84.00, 28.06, 28.06, 28.06, 42.70, 42.70, 42.70, 6.712, 6.712],//7
	[300.00, 300.00, 300.00, 300.00, 362.30, 377.60, 377.60, -229.10, 0, -195.40, -195.40, 540.50, 540.50, 540.50, 168.00, 168.00, 168.00, 112.60, 112.60],//8
	[26.70, 26.70, 26.70, 26.70, 140.10, 365.80, 365.80, 164.50, 472.50, 0, 0, -103.60, -103.60, -103.60, -174.20, -174.20, -174.20, 481.70, 481.70],//9
	[26.70, 26.70, 26.70, 26.70, 140.10, 365.80, 365.80, 164.50, 472.50, 0, 0, -103.60, -103.60, -103.60, -174.20, -174.20, -174.20, 481.70, 481.70],//10
	[83.36, 83.36, 83.36, 83.36, 52.13, 65.69, 65.69, 237.70, -314.70, 191.10, 191.10, 0, 0, 0, 251.50, 251.50, 251.50, -18.51, -18.51],//11
	[83.36, 83.36, 83.36, 83.36, 52.13, 65.69, 65.69, 237.70, -314.70, 191.10, 191.10, 0, 0, 0, 251.50, 251.50, 251.50, -18.51, -18.51],//12
	[83.36, 83.36, 83.36, 83.36, 52.13, 65.69, 65.69, 237.70, -314.70, 191.10, 191.10, 0, 0, 0, 251.50, 251.50, 251.50, -18.51, -18.51],//13
	[65.33, 65.33, 65.33, 65.33, -22.31, 223.00, 223.00, -150.00, -448.20, 394.60, 394.60, -56.08, -56.08, -56.08, 0, 0, 0, 147.10, 147.10],//14
	[65.33, 65.33, 65.33, 65.33, -22.31, 223.00, 223.00, -150.00, -448.20, 394.60, 394.60, -56.08, -56.08, -56.08, 0, 0, 0, 147.10, 147.10],//15
	[65.33, 65.33, 65.33, 65.33, -22.31, 223.00, 223.00, -150.00, -448.20, 394.60, 394.60, -56.08, -56.08, -56.08, 0, 0, 0, 147.10, 147.10],//16
	[24.82, 24.82, 24.82, 24.82, -22.97, -138.40, -138.40, 185.40, 242.80, -287.50, -287.50, 38.81, 38.81, 38.81, -108.50, -108.50, -108.50, 0, 0],//17
	[24.82, 24.82, 24.82, 24.82, -22.97, -138.40, -138.40, 185.40, 242.80, -287.50, -287.50, 38.81, 38.81, 38.81, -108.50, -108.50, -108.50, 0, 0],//18
	]
	
	//Parametros de interacción a usarse
	//Primero se define un vector para el componente 1, si hay un subgrupo, se vuelve 1, si no, es 0
	comp1=[];
	for(var i=0; i<vk1.length; i++){
		if(vk1[i]!=""){
			comp1[i]=1;
		}
		else{
			comp1[i]=0;
		}
	}
	//Lo mismo que el anterior, para el componente 2
	comp2=[];
	for(var i=0; i<vk2.length; i++){
		if(vk2[i]!=""){
			comp2[i]=1;
		}
		else{
			comp2[i]=0;
		}
	}
	//Lo mismo que el anterior, para el componente 3
	comp3=[];
	for(var i=0; i<vk3.length; i++){
		if(vk3[i]!=""){
			comp3[i]=1;
		}
		else{
			comp3[i]=0;
		}
	}
	
	//Se crea una matriz en base a los vectores comp1, comp2 y comp3, la matriz es la que contendra los parametros a usarse,
	//en forma de ceros y unos (1=ese parametro va a usarse, 0=ese parametro no va a usarse)
	paraus=[
	[],//0
	[],//1
	[],//2
	[],//3
	[],//4
	[],//5
	[],//6
	[],//7
	[],//8
	[],//9
	[],//10
	[],//11
	[],//12
	[],//13
	[],//14
	[],//15
	[],//16
	[],//17
	[],//18
	];
	for(var i=0; i<comp1.length; i++){
		for(var j=0; j<comp2.length; j++){
			if(comp1[i]==1 && comp2[j]==1){
				paraus[i][j]=1;
			}
			else{
				paraus[i][j]=0;
			}
		}
	}
	
//Se multiplica la matriz paraus * amk, de esa forma se obtiene la matriz amkparaus	
	amkparaus=[
	[],//0
	[],//1
	[],//2
	[],//3
	[],//4
	[],//5
	[],//6
	[],//7
	[],//8
	[],//9
	[],//10
	[],//11
	[],//12
	[],//13
	[],//14
	[],//15
	[],//16
	[],//17
	[],//18
	];
	for(var i=0; i<comp1.length; i++){
		for(var j=0; j<comp2.length; j++){
			amkparaus[i][j]=amk[i][j]*paraus[i][j];
		}
	}
//En base a la matriz amkparaus se calcula la matriz tmk, T es la temperatura en Kelvin
	T=document.getElementById("txtt").value;
	tmk=[
	[],//0
	[],//1
	[],//2
	[],//3
	[],//4
	[],//5
	[],//6
	[],//7
	[],//8
	[],//9
	[],//10
	[],//11
	[],//12
	[],//13
	[],//14
	[],//15
	[],//16
	[],//17
	[],//18
	];
	for(var i=0; i<comp1.length; i++){
		for(var j=0; j<comp2.length; j++){
			tmk[i][j]=Math.exp(-(amkparaus[i][j]/T));
		}
	}
	
	//Creaacion de la matriz Bik
	Bik=[
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	];
	for(var i=0; i<comp1.length; i++){
		for(var j=0; j<comp1.length; j++){
			Bik[0][i]=eki[j][0]*tmk[j][i]+Bik[0][i];
		}
		
	}
	for(var i=0; i<comp1.length; i++){
		for(var j=0; j<comp1.length; j++){
			Bik[1][i]=eki[j][1]*tmk[j][i]+Bik[1][i];
		}
		
	}
	for(var i=0; i<comp1.length; i++){
		for(var j=0; j<comp1.length; j++){
			Bik[2][i]=eki[j][2]*tmk[j][i]+Bik[2][i];
		}
		
	}
	
	
	//Creacion del vector Ok
	x1=document.getElementById("txtx1").value;
	x2=document.getElementById("txtx2").value;
	x3=document.getElementById("txtx3").value;
	Ok=[];
	for(var i=0; i<comp1.length; i++){
		Ok[i]=(x1*q1*eki[i][0]+x2*q2*eki[i][1]+x3*q3*eki[i][2])/(x1*q1+x2*q2+x3*q3);
	}
	
	//Creacion del vector sk
	sk=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(var j=0; j<comp1.length; j++){
		for(var i=0; i<comp1.length; i++){
			sk[j]=Ok[i]*tmk[i][j]+sk[j];
		}
	}
	
	//Calculo de J1 y J2 y J3
	J1=r1/(r1*x1+r2*x2+r3*x3);
	J2=r2/(r1*x1+r2*x2+r3*x3);
	J3=r3/(r1*x1+r2*x2+r3*x3);	
	//Calculo de L1 y L2 y L3
	L1=q1/(q1*x1+q2*x2+q3*x3);
	L2=q2/(q1*x1+q2*x2+q3*x3);
	L3=q3/(q1*x1+q2*x2+q3*x3);
	
	//Calculo de lnG1c y lnG2c y lnG3c
	lnG1C=1-J1+Math.log(J1)-5*q1*(1-(J1/L1)+Math.log(J1/L1));
	lnG2C=1-J2+Math.log(J2)-5*q2*(1-(J2/L2)+Math.log(J2/L2));
	lnG3C=1-J3+Math.log(J3)-5*q3*(1-(J3/L3)+Math.log(J3/L3));
	
	//Calculo de lnG1R y lnG2R y lnG3R; se calcula primero p1 y p2 y p3
	p1=0;
	for(var i=0; i<comp1.length; i++){
		p1=(Ok[i]*(Bik[0][i]/sk[i]))-(eki[i][0]*(Math.log(Bik[0][i]/sk[i])))+p1;
	}
	lnG1R=q1*(1-p1);
		
	p2=0;
	for(var i=0; i<comp1.length; i++){
		p2=(Ok[i]*(Bik[1][i]/sk[i]))-(eki[i][1]*(Math.log(Bik[1][i]/sk[i])))+p2;
	}
	lnG2R=q2*(1-p2);
	
	p3=0;
	for(var i=0; i<comp1.length; i++){
		p3=(Ok[i]*(Bik[2][i]/sk[i]))-(eki[i][2]*(Math.log(Bik[2][i]/sk[i])))+p3;
	}
	lnG3R=q3*(1-p3);
	
	//Finalizando el programa y calculando G1 y G2 y G3
	G1=Math.exp(lnG1C+lnG1R);
	G2=Math.exp(lnG2C+lnG2R);
	G3=Math.exp(lnG3C+lnG3R);
	
	document.getElementById("divresultado").innerHTML="γ<sub>1</sub>="+ G1 +"  "+"γ<sub>2</sub>="+G2+"  "+"γ<sub>3</sub>="+G3;
	

}



}


