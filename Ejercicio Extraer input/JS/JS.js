function escribirAlerta()
{
	var textoescrito=document.getElementsByTagName("input")[0].value;
	var textolongitud=document.getElementsByTagName("input")[0].value.length;
	alert(textoescrito+" | "+textolongitud);

}