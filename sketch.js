var tela = 1;
var tempo=60;
var largura = 230;
var altura =50;
var xmenu = 200;
var ymenu = 95;
var ymenu1 = 155;
var ymenu2 = 215;
let imag1, imag2, imag3, imag4, imag5, imag6;
let texto = "Público alvo:";
let texto1 = "Matéria:";
let texto2 = "Habilidades:";
let texto3 = "Programador:";
let texto4 = "Educador:";
var nomeAnimais = ['pato','coelho','peixe','girafa','leão','elefante','macaco','tartaruga','baleia','cachorro'];
var nomeObjetos = ['boné','tênis','sofá','água','árvore','régua','ônibus','mão','coração','ambulância'];
var imagAnimais = [];
var imagObjetos = [];
var nome, cont=0, cont2=0, cont3=0, contPontos=0;
var nível=1, num=0, escolha, name;

function preload(){
  imag1 = loadImage('01.png');
  imag2 = loadImage('tela02.png');
  imag3 = loadImage('quadro.png');
  imag4 = loadImage('voltar.png');
  imag5 = loadImage('balaotexto.png');
  imag6 = loadImage('escrever.png')
  imag7 = loadImage('Educador.png')
  imag8 = loadImage('Programador.png')
  imagAnimais[0] = loadImage('pato.png');
  imagAnimais[1] = loadImage('coelho.png');
  imagAnimais[2] = loadImage('peixe.png');
  imagAnimais[3] = loadImage('girafa.png');
  imagAnimais[4] = loadImage('leão.png');
  imagAnimais[5] = loadImage('elefante.png');
  imagAnimais[6] = loadImage('macaco.png');
  imagAnimais[7] = loadImage('tartaruga.png');
  imagAnimais[8] = loadImage('baleia.png');
  imagAnimais[9] = loadImage('cachorro.png');
  imagObjetos[0] = loadImage('boné.png');
  imagObjetos[1] = loadImage('tênis.png');
  imagObjetos[2] = loadImage('sofá.png');
  imagObjetos[3] = loadImage('água.png');
  imagObjetos[4] = loadImage('árvore.png');
  imagObjetos[5] = loadImage('régua.png');
  imagObjetos[6] = loadImage('ônibus.png');
  imagObjetos[7] = loadImage('mão.png');
  imagObjetos[8] = loadImage('coração.png');
  imagObjetos[9] = loadImage('ambulância.png');
}

function setup() {
  createCanvas(650,430);
  frameRate(60);
}

function draw() {
  textStyle(NORMAL);
  // Tela de Menu
  if(tela == 1){
    background(28,91,49);
    // Menu com 3 opções
    image(imag1, 0,-30,660,493);
    textAlign(CENTER);
    textSize(26);
    
    // Iniciar jogo  
    if(mouseX>xmenu && mouseX<xmenu+largura && mouseY>ymenu && mouseY<ymenu+altura){
      stroke(240);
      fill('#66cdaa');
      rect(xmenu, ymenu, largura, altura, 15);
    
      fill(240);
      if (mouseIsPressed) {
        tela = 2;
      }
    }
    noStroke(); 
    text("Iniciar", 315, 128);

    // Informações do jogo
    if(mouseX>xmenu && mouseX<xmenu+largura && mouseY>ymenu1 && mouseY<ymenu1+altura){
      stroke(240);
      fill('#66cdaa');
      rect(xmenu, ymenu1, largura, altura, 15);
    
      fill(240);
      if (mouseIsPressed) {
        tela = 3;
      }
    }
    noStroke();
    text("Informações", 315, 187);
    
    // Créditos do jogo
    if(mouseX>xmenu && mouseX<xmenu+largura && mouseY>ymenu2 && mouseY<ymenu2+altura){
      stroke(240);
      fill('#66cdaa');
      rect(xmenu, ymenu2, largura, altura, 15);
    
      fill(240);
      if (mouseIsPressed) {
        tela = 4;
      }
    }
    noStroke();
    text("Créditos", 315, 248);
  }
  // Tela de jogo
  else if(tela == 2){
    background('#add8e6');
    textAlign(CENTER);
    image(imag2, 0,0,0,0);
    
    // Jogo   
      image(imag5,10,20,130,100);
      textStyle(NORMAL);
      fill(0);
      stroke(240);
      textSize(18);
      text("Nível: "+nível,52,50);
      text("Pontos: "+contPontos,60,80);
    
      textSize(24);
      textStyle(BOLDITALIC);
      text("Qual o nome da figura que aparece \n no quadro?",410,330);
      text("_ _ _ _ _ _ _ _ _ _ _ _",410,400);
      
      // Botão digitar
      image(imag6, 110,380,40,40);
      if(mouseX>110 && mouseX<150 && mouseY>380 && mouseY<420){
        textStyle(BOLDITALIC);
        stroke(240);
        fill(0);
        textSize(17);
        text("Digitar", 180,405);
      }
            
    // Botão voltar    
    if(mouseX>10 && mouseX<50 && mouseY>380 && mouseY<420){
      tempo = tempo - 9;
      if(tempo<0){
        tempo=0;
      }
      
      stroke(240);
      fill(0);
      textSize(17);
      text("Voltar", 75-tempo,405);
      if (mouseIsPressed) {
        tela = 1;
      }
    }
    else{
      tempo=60;
    }
    fill(183,192,184);
    noStroke();
    rect(0, 380, 20, 40);
    image(imag4, 10,380,40,40);
    
    // Jogabilidade
    if(contPontos==10){
      nível++;
      contPontos = 0;
    }
    
    if(nível == 1){     
      image(imagAnimais[cont],330,80,150,150);
      if(nome == nomeAnimais[cont]){
        contPontos = contPontos + 1;
        cont++;
      }
    }
    if(nível == 2){
      fill(240);
      textSize(16);
      textStyle(NORMAL);
      text("Agora vamos focar também nos acentos.",365,60);
      image(imagObjetos[cont2],330,80,150,150);
      if(nome == nomeObjetos[cont2]){
        contPontos = contPontos + 1;
        cont2++;
      }
    }
    if(nível == 3){
      fill(0);
      noStroke();
      rect(200,340,40,20,10);
  
      fill('#e61b25');
      noStroke();
      rect(200,370,40,20,10);
    
      if(escolha == 1){
        name = nomeAnimais.indexOf(num);
        
        for(cont3=0;cont3<10;cont3++){
          if(cont3==name){
          image(imagAnimais[cont3],330,80,150,150);
          }
        }
      }
        if(escolha == 2){
          name = nomeObjetos.indexOf(num);
          
            for(cont3=0;cont3<10;cont3++){
              if(cont3==name){ 
              image(imagObjetos[cont3],330,80,150,150);
              }
            }
        }
    }
  }
  // Tela de informações
  else if(tela == 3){
    background('#ffff');
    image(imag3, -5,-5,660,440);
    
    // Informações do jogo
    textAlign(LEFT);
    textSize(25);
    fill(224,224,100);
    noStroke();
    text(texto, 60,50,500,30);
    fill(240);
    textSize(20);
    text("2º ano do ensino fundamental.",210,53,450,20);
    fill(224,224,100);
    textSize(25);
    text(texto1, 60,90, 500,30);
    fill(240);
    textSize(20);
    text("língua portuguesa.",160,93,500,30);
    fill(224,224,100);
    textSize(25);
    text(texto2, 260,150, 500,30);
    fill(240);
    textSize(20);
    text("- (EF15LP18) Relacionar texto com ilustrações e outros re-\ncursos gráficos.", 60,180,540,50);
    text("- (EF01LP02) Escrever, espontaneamente ou por ditado, palavras e frases de forma alfabética – usando letras/grafemas que representem fonemas.", 60,240,540,100);
    
    textAlign(RIGHT);
    image(imag4, 35,360,40,40);   
    if(mouseX>35 && mouseX<75 && mouseY>360 && mouseY<400){
      stroke(0);
      textSize(18);
      text("Voltar", 125,385);
      if (mouseIsPressed) {
        tela = 1;
      }
    }
  }
  // Tela de créditos
  else if(tela == 4){
    background('#ffff');
    image(imag3, -5,-5,660,440);
    image(imag8, 100,50,90,90);
    image(imag7, 450,240,90,90);
    
    textAlign(LEFT);
    textSize(20);
    fill(224,224,100);
    noStroke();
    text(texto3, 190,70,500,100);
    fill(240);
    text("Felipe Silva da Rocha",190,90,500,20);
    text("Bacharelando em Ciência e Tecnologia - UFRN",190,110,500,50);
    
    fill(224,224,100);
    text(texto4, 250,250,500,100);
    fill(240);
    text("Sebastião da Costa",250,270,500,20);
    text("Pedagogo",250,290,500,50);
    
    textAlign(RIGHT);
    image(imag4, 35,360,40,40);   
    if(mouseX>35 && mouseX<75 && mouseY>360 && mouseY<400){
      stroke(0);
      textSize(18);
      text("Voltar", 125,385);
      if (mouseIsPressed) {
        tela = 1;
      }
    }
  }
}

function mouseClicked(){
  if(mouseX>110 && mouseX<150 && mouseY>380 && mouseY<420 && nível==1){
    nome = prompt("\nQual o nome da figura que aparece no quadro?");
  }else{
    if(mouseX>110 && mouseX<150 && mouseY>380 && mouseY<420 && nível==2){
    nome = prompt("\nQual o nome da figura que aparece no quadro?");
    }
  }
  
  if(mouseX>200 && mouseX<240 && mouseY>340 && mouseY<360 && nível==3){
    escolha = 1;
  }
  if(mouseX>200 && mouseX<240 && mouseY>370 && mouseY<390 && nível==3){
    escolha = 2;
  }
  if(mouseX>110 && mouseX<150 && mouseY>380 && mouseY<420 && nível==3){
    num = prompt("Qual a figura que você deseja ver?");
  }
}

//Link do vídeo: https://mega.nz/file/MjphlSjK#n3Plc8qIgqVcP2GuAUUlh_EE473wuslHJl3b8YTla2E