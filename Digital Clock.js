function clock(){
	var monthNames = [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho","Julho","Agosto", "Setembro", "Outobro", "Novembro", "Dezembro" ];
	var dayNames= ["Domingo","segunda-Ferira","Terça-Ferira","Quarta-Ferira","Quinta-Ferira","Sexta-Ferira","Sábado"]

	var today = new Date();

	document.getElementById('Date').innerHTML = (dayNames[today.getDay()] +" "+ today.getDate() +' '+ monthNames[today.getMonth()] +' ' +today.getFullYear());


	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	var day = h<11 ? 'AM' : 'PM';//para colocar no formato 24 horas apague essa linha

	h = h<10? '0'+h: h;
	m = m<10? '0'+m: m;
	s = s<10? '0'+s: s;

	document.getElementById('hours').innerHTML = h;
	document.getElementById('min').innerHTML = m;
	document.getElementById('sec').innerHTML = s;
}var inter = setInterval(clock,400);

/*function clock(){
    var monthNames = [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho","Julho","Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ];
    var dayNames= ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"];

    var today = new Date();


    document.getElementById('Date').innerHTML = (dayNames[today.getDay()] +" "+ today.getDate() +' '+ monthNames[today.getMonth()] +' ' +today.getFullYear());


    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    h = h<10? '0'+h: h;
    m = m<10? '0'+m: m;
    s = s<10? '0'+s: s;

    document.getElementById('hours').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
}
var inter = setInterval(clock,400);*/