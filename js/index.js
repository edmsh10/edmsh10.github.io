var pass = prompt("Введите пароль");
if (pass.toLowerCase() == "pianoforte") {
	alert("Пароль верный"), window.location = "main.html"
} else {
	alert("Неверный пароль!"), top.location.href="";
}