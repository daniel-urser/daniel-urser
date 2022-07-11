var erros=[];
var sorteado= Math.floor(Math.random()*100)+1;
const CHANCES= 6;
function apostarNumero(){

	var inNumero= document.getElementById("inNumero")
	var numero= Number(inNumero.value);

	if(numero<=0||numero>100||isNaN(numero)){
		alert("informe um numero válido...");
		numero.focus();
		return;
	}
	var outDica= document.getElementById("outDica");
	var outErros= document.getElementById("outErros");
	var outChances=document.getElementById("outChances");

	if(numero==sorteado){
		alert("parabens!! voce acertou!!!");
		btApostar.disabled=true;
		btJogar.className="exibe";
		outDica.textContent="parabens!! numero sorteado:" + sorteado;}
			else 
			{if(erros.indexOf(numero)>=0){alert("voce ja apostou o numero"+ numero+"tente outro..")}
			else{
				erros.push(numero);
				var numErros=erros.length;
				var numChances=CHANCES-numErros;
				outErros.textContent=numErros+"("+erros.join(",")+")";
				outChances.textContent=numChances;
				if(numChances==0){alert("suas chances acabaram...");
				btApostar.disabled=true;
				btJogar.className="exibe";
				outDica.textContent="game over!! numero sorteado:"+ sorteado;}
				else{
					var dica=numero<sorteado ? "maior": "menor";
					outDica.textContent="dica: tente um numero "+dica+" que "+numero;
				}				
				}
			}
			inNumero.value="";
			inNumero.focus();
		}
		var btApostar=document.getElementById("btApostar");
		btApostar.addEventListener("click",apostarNumero);