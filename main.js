function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");

  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var gênero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "foto-menino.jpg");
        document.body.style.background = "#b8d4cb";
      } else if (idade < 21) {
        //Jovem
        img.setAttribute("src", "jovem-hom.jpg");
        document.body.style.background = "#6e7d97";
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "foto-adulto-m.jpg");
        document.body.style.background = "#888b94";
      } else {
        //Idoso
        img.setAttribute("src", "foto-idoso-m.jpg");
        document.body.style.background = "#802f33";
      }
    } else if (fsex[1].checked) {
      gênero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "foto-menina.jpg");
        document.body.style.background = "#e58a83bf";
      } else if (idade < 21) {
        //Jovem
        img.setAttribute("src", "jovem-mul.jpg");
        document.body.style.background = "#e55039b0";
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "foto-adulta-f.jpg");
        document.body.style.background = "#974439c7";
      } else {
        //Idoso
        img.setAttribute("src", "foto-idosa-f.jpg");
        document.body.style.background = "#7d999d";
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
