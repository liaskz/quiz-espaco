//menu
let tela = 1;
let largura = 180;
let altura = 40;
let xMenu = 110;
let yMenu = 180;
let yMenu1 = 230;
let yMenu2 = 280;

//voltar
let yVoltar = 25;
let xVoltar = 30;
let largura3 = 30;
let altura3 = 30;

//perguntas
let yResposta1 = 200;
let yResposta12 = 250;
let yResposta13 = 300;

//próximo
let xProx = 340;
let yProx = 340;
let altura2 = 30;
let largura2 = 30;

//imagem sol
let vetorSol = [];
let contAnimacao = 0;

//imagem
let img3;

function setup() {
  createCanvas(400, 400);
}

function preload() {
  for (i = 0; i < 15; i++) {
    vetorSol[i] = loadImage("sun" + i + ".png");
  }
  img3 = loadImage("spacefield_a-000.png");
}

function draw() {
  //código da tela 1
  if (tela == 1) {
    background("black");
    image(img3, 1, 1, 400, 400);
    textAlign(CENTER);
    stroke(200);

    //código do botão "iniciar"
    fill("black");
    rect(xMenu, yMenu, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yMenu &&
      mouseY < yMenu + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yMenu, largura, altura, 10);

      //código referente ao clique do mouse no botão "iniciar"
      if (mouseIsPressed) {
        tela = 2;
      }
    }

    textSize(27);
    fill(250);
    noStroke();
    text("INICIAR", 200, 210);
    textFont("Corier New", 50);
    fill("white");

    //código do botão "instruções"
    stroke(200);
    fill("black");
    rect(xMenu, yMenu1, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yMenu1 &&
      mouseY < yMenu1 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yMenu1, largura, altura, 10);

      //código do clique do mouse no botão "instruções"
      if (mouseIsPressed) {
        tela = 20;
      }
    }

    textSize(25);
    fill(250);
    noStroke();
    text("INSTRUÇÕES", 200, 260);
    textFont("Corier New", 50);
    fill("white");

    //código do nome do jogo
    textSize(32);
    fill("white");
    text("Quiz" + "\n" + "Sistema Solar", 200, 110);

    //código do botão de créditos
    stroke(200);
    fill("black");
    rect(xMenu, yMenu2, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yMenu2 &&
      mouseY < yMenu2 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yMenu2, largura, altura, 10);

      //código do clique do mouse no botão "créditos"
      if (mouseIsPressed) {
        tela = 21;
      }
    }

    textSize(25);
    fill(250);
    noStroke();
    text("CRÉDITOS", 200, 310);
    textFont("Corier New", 50);
    fill("white");
  }

  //código da tela 2 (pergunta 1)
  if (tela == 2) {
    background("purple");
    image(img3, 1, 1, 400, 400);
    textSize(22);
    text("PERGUNTA 1", 200, 30);
    textFont("Corrier New", 50);
    fill("white");

    //pergunta 1
    textSize(20);
    fill(250);
    noStroke();
    text("Por quantos planetas é formado o sistema solar?", 200, 120);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1
    stroke(200);
    fill("black");
    rect(xMenu, yResposta1, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta1 &&
      mouseY < yResposta1 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta1, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("6", 200, 230);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.2
    stroke(200);
    fill("black");
    rect(xMenu, yResposta12, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta12 &&
      mouseY < yResposta12 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta12, largura, altura, 10);

      //código do clique do mouse no botão de resposta correta
      if (mouseIsPressed) {
        tela = 3;
      }
    }

    textSize(27);
    fill(250);
    noStroke();
    text("8", 200, 280);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.3
    stroke(200);
    fill("black");
    rect(xMenu, yResposta13, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta13 &&
      mouseY < yResposta13 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta13, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("10", 200, 330);
    textFont("Corier New", 50);
    fill("white");
  }

  //código da tela 20 (tela de instruções)
  if (tela == 20) {
    background("black");
    image(img3, 1, 1, 400, 400);
    textSize(20);
    text(
      "O quiz consiste em 15 perguntas" +
        "\n" +
        "referentes aos planetas e " +
        "\n" +
        "ao sistema solar, com" +
        "\n" +
        "apenas uma alternativa correta." +
        "\n" +
        "Marque a que achar adequada." +
        "\n" +
        "Bom jogo!",
      195,
      160
    );
    textFont("Corrier New", 50);
    fill("white");

    //código do botão "voltar"
    stroke(200);
    fill("black");
    rect(xVoltar, yVoltar, largura3, altura3, 15);

    if (
      mouseX > xVoltar &&
      mouseX < xVoltar + largura3 &&
      mouseY > yVoltar &&
      mouseY < yVoltar + altura3
    ) {
      stroke(200);
      fill("black");
      rect(xVoltar, yVoltar, largura3, altura3, 10);

      //código do clique do mouse no botão "voltar"
      if (mouseIsPressed) {
        tela = 1;
      }
    }

    textSize(20);
    fill(250);
    noStroke();
    text("⇦", 45, 46);
    textFont("Corier New", 50);
    fill("white");
  }

  //código da tela 21 (tela de créditos)
  if (tela == 21) {
    background("black");
    image(img3, 1, 1, 400, 400);
    textSize(22);
    text(
      "Aluna: Nathália Vieira Cavalcanti" +
        "\n" +
        "Porfessor: Orivaldo Santana" +
        "\n" +
        "Turma: 2A",
      198,
      180
    );
    textFont("Corrier New", 50);
    fill("white");

    //código do botão "voltar"
    stroke(200);
    fill("black");
    rect(xVoltar, yVoltar, largura3, altura3, 15);

    if (
      mouseX > xVoltar &&
      mouseX < xVoltar + largura3 &&
      mouseY > yVoltar &&
      mouseY < yVoltar + altura3
    ) {
      stroke(200);
      fill("black");
      rect(xVoltar, yVoltar, largura3, altura3, 10);

      //código do clique do mouse no botão "voltar"
      if (mouseIsPressed) {
        tela = 1;
      }
    }

    textSize(20);
    fill(250);
    noStroke();
    text("⇦", 45, 46);
    textFont("Corier New", 50);
    fill("white");
  }

  //código da tela 3 (pergunta 2)
  if (tela == 3) {
    background("black");
    image(img3, 1, 1, 400, 400);
    textSize(22);
    text("PERGUNTA 2", 200, 30);
    textFont("Corrier New", 50);
    fill("white");

    //pergunta 2
    textSize(20);
    fill(250);
    noStroke();
    text("Qual o planeta mais quente do sistema solar?", 200, 120);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1
    stroke(200);
    fill("black");
    rect(xMenu, yResposta1, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta1 &&
      mouseY < yResposta1 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta1, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Júpiter", 200, 230);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.2
    stroke(200);
    fill("black");
    rect(xMenu, yResposta12, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta12 &&
      mouseY < yResposta12 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta12, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Terra", 200, 280);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.3
    stroke(200);
    fill("black");
    rect(xMenu, yResposta13, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta13 &&
      mouseY < yResposta13 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta13, largura, altura, 10);

      //código do clique do mouse no botão de resposta correta
      if (mouseIsPressed) {
        tela = 4;
      }
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Vênus", 200, 330);
    textFont("Corier New", 50);
    fill("white");
  }

  //código da tela 4 (pergunta 3)
  if (tela == 4) {
    background("black");
    image(img3, 1, 1, 400, 400);
    textSize(22);
    text("PERGUNTA 3", 200, 30);
    textFont("Corrier New", 50);
    fill("white");

    //pergunta 3
    textSize(20);
    fill(250);
    noStroke();
    text("Qual o maior planeta do sistema solar?", 200, 120);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1
    stroke(200);
    fill("black");
    rect(xMenu, yResposta1, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta1 &&
      mouseY < yResposta1 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta1, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Plutão", 200, 230);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.2
    stroke(200);
    fill("black");
    rect(xMenu, yResposta12, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta12 &&
      mouseY < yResposta12 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta12, largura, altura, 10);

      //código do clique do mouse no botão de resposta correta
      if (mouseIsPressed) {
        tela = 5;
      }
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Júpiter", 200, 280);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.3
    stroke(200);
    fill("black");
    rect(xMenu, yResposta13, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta13 &&
      mouseY < yResposta13 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta13, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Mercúrio", 200, 330);
    textFont("Corier New", 50);
    fill("white");
  }

  //código da tela 5 (pergunta 4)
  if (tela == 5) {
    background("purple");
    image(img3, 1, 1, 400, 400);
    textSize(22);
    text("PERGUNTA 4", 200, 30);
    textFont("Corrier New", 50);
    fill("white");

    //pergunta 4
    textSize(20);
    fill(250);
    noStroke();
    text("Qual o planeta conhecido por seu tom azulado?", 200, 120);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1
    stroke(200);
    fill("black");
    rect(xMenu, yResposta1, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta1 &&
      mouseY < yResposta1 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta1, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Saturno", 200, 230);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.2
    stroke(200);
    fill("black");
    rect(xMenu, yResposta12, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta12 &&
      mouseY < yResposta12 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta12, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Netuno", 200, 280);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.3
    stroke(200);
    fill("black");
    rect(xMenu, yResposta13, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta13 &&
      mouseY < yResposta13 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta13, largura, altura, 10);

      //código do clique do mouse no botão de resposta correta
      if (mouseIsPressed) {
        tela = 6;
      }
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Urano", 200, 330);
    textFont("Corier New", 50);
    fill("white");
  }

  //código da tela 6 (pergunta 5)
  if (tela == 6) {
    background("purple");
    image(img3, 1, 1, 400, 400);
    textSize(22);
    text("PERGUNTA 5", 200, 30);
    textFont("Corrier New", 50);
    fill("white");

    //pergunta 5
    textSize(20);
    fill(250);
    noStroke();
    text(
      "Qual o planeta conhecido como" + "\n" + '"Planeta Vermelho?"',
      200,
      120
    );
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1
    stroke(200);
    fill("black");
    rect(xMenu, yResposta1, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta1 &&
      mouseY < yResposta1 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta1, largura, altura, 10);

      //código do clique do mouse no botão de resposta correta
      if (mouseIsPressed) {
        tela = 7;
      }
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Marte", 200, 230);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.2
    stroke(200);
    fill("black");
    rect(xMenu, yResposta12, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta12 &&
      mouseY < yResposta12 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta12, largura, altura, 1);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Plutão", 200, 280);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.3
    stroke(200);
    fill("black");
    rect(xMenu, yResposta13, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta13 &&
      mouseY < yResposta13 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta13, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Terra", 200, 330);
    textFont("Corier New", 50);
    fill("white");
  }

  //código da tela 7 (pergunta 6)
  if (tela == 7) {
    background("purple");
    image(img3, 1, 1, 400, 400);
    textSize(22);
    text("PERGUNTA 6", 200, 30);
    textFont("Corrier New", 50);
    fill("white");

    //pergunta 6
    textSize(20);
    fill(250);
    noStroke();
    text("Qual o planeta mais distante do sol?", 200, 120);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1
    stroke(200);
    fill("black");
    rect(xMenu, yResposta1, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta1 &&
      mouseY < yResposta1 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta1, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Mercúrio", 200, 230);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.2
    stroke(200);
    fill("black");
    rect(xMenu, yResposta12, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta12 &&
      mouseY < yResposta12 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta12, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Júpiter", 200, 280);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.3
    stroke(200);
    fill("black");
    rect(xMenu, yResposta13, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta13 &&
      mouseY < yResposta13 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta13, largura, altura, 10);

      //código do clique do mouse no botão de resposta correta
      if (mouseIsPressed) {
        tela = 8;
      }
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Netuno", 200, 330);
    textFont("Corier New", 50);
    fill("white");
  }

  //código da tela 8 (pergunta 7)
  if (tela == 8) {
    background("purple");
    image(img3, 1, 1, 400, 400);
    textSize(22);
    text("PERGUNTA 7", 200, 30);
    textFont("Corrier New", 50);
    fill("white");

    //pergunta 7
    textSize(20);
    fill(250);
    noStroke();
    text("Qual o planeta conhecido por seus anéis?", 200, 120);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1
    stroke(200);
    fill("black");
    rect(xMenu, yResposta1, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta1 &&
      mouseY < yResposta1 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta1, largura, altura, 10);

      //código do clique do mouse no botão de resposta correta
      if (mouseIsPressed) {
        tela = 9;
      }
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Saturno", 200, 230);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.2
    stroke(200);
    fill("black");
    rect(xMenu, yResposta12, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta12 &&
      mouseY < yResposta12 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta12, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Plutão", 200, 280);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.3
    stroke(200);
    fill("black");
    rect(xMenu, yResposta13, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta13 &&
      mouseY < yResposta13 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta13, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Marte", 200, 330);
    textFont("Corier New", 50);
    fill("white");
  }

  //código da tela 9 (pergunta 8)
  if (tela == 9) {
    background("purple");
    image(img3, 1, 1, 400, 400);
    textSize(22);
    text("PERGUNTA 8", 200, 30);
    textFont("Corrier New", 50);
    fill("white");

    //pergunta 8
    textSize(20);
    fill(250);
    noStroke();
    text(
      "Qual o único planeta do sistema solar em que" +
        "\n" +
        "há presença confirmada de formas de vidas?",
      200,
      120
    );
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1
    stroke(200);
    fill("black");
    rect(xMenu, yResposta1, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta1 &&
      mouseY < yResposta1 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta1, largura, altura, 15);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Urano", 200, 230);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.2
    stroke(200);
    fill("black");
    rect(xMenu, yResposta12, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta12 &&
      mouseY < yResposta12 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta12, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Netuno", 200, 280);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.3
    stroke(200);
    fill("black");
    rect(xMenu, yResposta13, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta13 &&
      mouseY < yResposta13 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta13, largura, altura, 10);

      //código do clique do mouse no botão de resposta correta
      if (mouseIsPressed) {
        tela = 10;
      }
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Terra", 200, 330);
    textFont("Corier New", 50);
    fill("white");
  }

  //código da tela 10 (pergunta 9)
  if (tela == 10) {
    background("purple");
    image(img3, 1, 1, 400, 400);
    textSize(22);
    text("PERGUNTA 9", 200, 30);
    textFont("Corrier New", 50);
    fill("white");

    //pergunta 9
    textSize(20);
    fill(250);
    noStroke();
    text(
      "Qual planeta não apresenta satélites naturais e" +
        "\n" +
        "possui uma superfície marcada" +
        "\n" +
        "por grandes crateras?",
      200,
      110
    );
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1
    stroke(200);
    fill("black");
    rect(xMenu, yResposta1, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta1 &&
      mouseY < yResposta1 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta1, largura, altura, 10);

      //código do clique do mouse no botão de resposta correta
      if (mouseIsPressed) {
        tela = 11;
      }
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Mercúrio", 200, 230);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.2
    stroke(200);
    fill("black");
    rect(xMenu, yResposta12, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta12 &&
      mouseY < yResposta12 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta12, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Saturno", 200, 280);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.3
    stroke(200);
    fill("black");
    rect(xMenu, yResposta13, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta13 &&
      mouseY < yResposta13 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta13, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Júpiter", 200, 330);
    textFont("Corier New", 50);
    fill("white");
  }

  //código da tela 11 (pergunta 10)
  if (tela == 11) {
    background("purple");
    image(img3, 1, 1, 400, 400);
    textSize(22);
    text("PERGUNTA 10", 200, 30);
    textFont("Corrier New", 50);
    fill("white");

    //pergunta 10
    textSize(20);
    fill(250);
    noStroke();
    text("Qual destes é um planeta anão?", 200, 120);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1
    stroke(200);
    fill("black");
    rect(xMenu, yResposta1, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta1 &&
      mouseY < yResposta1 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta1, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Urano", 200, 230);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.2
    stroke(200);
    fill("black");
    rect(xMenu, yResposta12, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta12 &&
      mouseY < yResposta12 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta12, largura, altura, 10);

      //código do clique do mouse no botão de resposta correta
      if (mouseIsPressed) {
        tela = 12;
      }
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Plutão", 200, 280);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.3
    stroke(200);
    fill("black");
    rect(xMenu, yResposta13, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta13 &&
      mouseY < yResposta13 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta13, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Marte", 200, 330);
    textFont("Corier New", 50);
    fill("white");
  }

  //código da tela 12 (pergunta 11)
  if (tela == 12) {
    background("purple");
    image(img3, 1, 1, 400, 400);
    textSize(22);
    text("PERGUNTA 11", 200, 30);
    textFont("Corrier New", 50);
    fill("white");

    //pergunta 11
    textSize(20);
    fill(250);
    noStroke();
    text("Qual o elemento mais abundante do Universo?", 200, 120);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1
    stroke(200);
    fill("black");
    rect(xMenu, yResposta1, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta1 &&
      mouseY < yResposta1 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta1, largura, altura, 10);

      //código do clique do mouse no botão de resposta correta
      if (mouseIsPressed) {
        tela = 13;
      }
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Hidrogênio", 200, 230);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.2
    stroke(200);
    fill("black");
    rect(xMenu, yResposta12, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta12 &&
      mouseY < yResposta12 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta12, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Oxigênio", 200, 280);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.3
    stroke(200);
    fill("black");
    rect(xMenu, yResposta13, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta13 &&
      mouseY < yResposta13 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta13, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Hélio", 200, 330);
    textFont("Corier New", 50);
    fill("white");
  }

  //código da tela 13 (pergunta 12)
  if (tela == 13) {
    background("purple");
    image(img3, 1, 1, 400, 400);
    textSize(22);
    text("PERGUNTA 12", 200, 30);
    textFont("Corrier New", 50);
    fill("white");

    //pergunta 13
    textSize(20);
    fill(250);
    noStroke();
    text(
      "Qual o nome do fenômeno quando" +
        "\n" +
        "a lua se posiciona entre a terra e o sol?",
      200,
      120
    );
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1
    stroke(200);
    fill("black");
    rect(xMenu, yResposta1, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta1 &&
      mouseY < yResposta1 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta1, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Eclipse lunar", 200, 230);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.2
    stroke(200);
    fill("black");
    rect(xMenu, yResposta12, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta12 &&
      mouseY < yResposta12 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta12, largura, altura, 10);

      //código do clique do mouse no botão de resposta correta
      if (mouseIsPressed) {
        tela = 14;
      }
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Eclipse solar", 200, 280);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.3
    stroke(200);
    fill("black");
    rect(xMenu, yResposta13, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta13 &&
      mouseY < yResposta13 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta13, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Lua de sangue", 200, 330);
    textFont("Corier New", 50);
    fill("white");
  }

  //código da tela 14 (pergunta 13)
  if (tela == 14) {
    background("purple");
    image(img3, 1, 1, 400, 400);
    textSize(22);
    text("PERGUNTA 13", 200, 30);
    textFont("Corrier New", 50);
    fill("white");

    //pergunta 13
    textSize(20);
    fill(250);
    noStroke();
    text("Qual planeta tem os ventos mais velozes?", 200, 120);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1
    stroke(200);
    fill("black");
    rect(xMenu, yResposta1, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta1 &&
      mouseY < yResposta1 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta1, largura, altura, 10);

      //código do clique do mouse no botão de resposta correta
      if (mouseIsPressed) {
        tela = 15;
      }
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Netuno", 200, 230);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.2
    stroke(200);
    fill("black");
    rect(xMenu, yResposta12, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta12 &&
      mouseY < yResposta12 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta12, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Marte", 200, 280);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.3
    stroke(200);
    fill("black");
    rect(xMenu, yResposta13, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta13 &&
      mouseY < yResposta13 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta13, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Terra", 200, 330);
    textFont("Corier New", 50);
    fill("white");
  }

  //código da tela 15 (pergunta 14)
  if (tela == 15) {
    background("purple");
    image(img3, 1, 1, 400, 400);
    textSize(22);
    text("PERGUNTA 14", 200, 30);
    textFont("Corrier New", 50);
    fill("white");

    //pergunta 13
    textSize(20);
    fill(250);
    noStroke();
    text("Qual o olaneta mais antigo do sistema solar?", 200, 120);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1
    stroke(200);
    fill("black");
    rect(xMenu, yResposta1, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta1 &&
      mouseY < yResposta1 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta1, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Urano", 200, 230);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.2
    stroke(200);
    fill("black");
    rect(xMenu, yResposta12, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta12 &&
      mouseY < yResposta12 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta12, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Vênus", 200, 280);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.3
    stroke(200);
    fill("black");
    rect(xMenu, yResposta13, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta13 &&
      mouseY < yResposta13 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta13, largura, altura, 10);

      //código do clique do mouse no botão de resposta correta
      if (mouseIsPressed) {
        tela = 16;
      }
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Júpiter", 200, 330);
    textFont("Corier New", 50);
    fill("white");
  }

  //código da tela 16 (pergunta 15)
  if (tela == 16) {
    background("purple");
    image(img3, 1, 1, 400, 400);
    textSize(22);
    text("PERGUNTA 15", 200, 30);
    textFont("Corrier New", 50);
    fill("white");

    //pergunta 13
    textSize(20);
    fill(250);
    noStroke();
    text("Qual o planeta mais frio?", 200, 120);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1
    stroke(200);
    fill("black");
    rect(xMenu, yResposta1, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta1 &&
      mouseY < yResposta1 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta1, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Terra", 200, 230);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.2
    stroke(200);
    fill("black");
    rect(xMenu, yResposta12, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta12 &&
      mouseY < yResposta12 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta12, largura, altura, 10);

      //código do clique do mouse no botão de resposta correta
      if (mouseIsPressed) {
        tela = 17;
      }
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Urano", 200, 280);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.3
    stroke(200);
    fill("black");
    rect(xMenu, yResposta13, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta13 &&
      mouseY < yResposta13 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta13, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Saturno", 200, 330);
    textFont("Corier New", 50);
    fill("white");
  }

  //código da pergunta bônus
  if (tela == 17) {
    background("black");
    image(vetorSol[contAnimacao], 37, 70);
    contAnimacao++;
    if (contAnimacao > 14) {
      contAnimacao = 0;
    }
    textSize(22);
    text("PERGUNTA BÔNUS", 200, 30);
    text("Obeserve o astro abaixo:", 200, 80);
    textFont("Corrier New", 50);
    fill("white");

    //código do botão "próximo"
    stroke(200);
    fill("black");
    rect(xProx, yProx, largura2, altura2, 15);

    if (
      mouseX > xProx &&
      mouseX < xProx + largura2 &&
      mouseY > yProx &&
      mouseY < yProx + altura2
    ) {
      stroke(200);
      fill("black");
      rect(xProx, yProx, largura2, altura2, 10);

      //código do clique do mouse no botão "próximo"
      if (mouseIsPressed) {
        tela = 18;
      }
    }

    textSize(20);
    fill(250);
    noStroke();
    text("⇨", 355, 362);
    textFont("Corier New", 50);
    fill("white");
  }

  //código da pergunta bônus (tela 18)
  if (tela == 18) {
    background("purple");
    image(img3, 1, 1, 400, 400);
    textSize(22);
    text("PERGUNTA BÔNUS", 200, 30);
    textFont("Corrier New", 50);
    fill("white");

    //pergunta bônus
    textSize(20);
    fill(250);
    noStroke();
    text("Como ele se chama?", 200, 120);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1
    stroke(200);
    fill("black");
    rect(xMenu, yResposta1, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta1 &&
      mouseY < yResposta1 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta1, largura, altura, 10);

      //código do clique do mouse no botão de resposta correta
      if (mouseIsPressed) {
        tela = 19;
      }
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Sol", 200, 230);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.2
    stroke(200);
    fill("black");
    rect(xMenu, yResposta12, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta12 &&
      mouseY < yResposta12 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta12, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Lua", 200, 280);
    textFont("Corier New", 50);
    fill("white");

    //botão de resposta 1.3
    stroke(200);
    fill("black");
    rect(xMenu, yResposta13, largura, altura, 15);

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yResposta13 &&
      mouseY < yResposta13 + altura
    ) {
      stroke(200);
      fill("black");
      rect(xMenu, yResposta13, largura, altura, 10);
    }

    textSize(27);
    fill(250);
    noStroke();
    text("Marte", 200, 330);
    textFont("Corier New", 50);
    fill("white");
  }

  //código da tela final (tela 19) {
  if (tela == 19) {
    background("black");
    image(img3, 1, 1, 400, 400);
    textSize(20);
    text(
      "Parabéns, você chegou ao fim!" + "\n" + "Obrigado por jogar!",
      200,
      200
    );
    textFont("Corrier New", 50);
    fill("white");

    //código do botão "voltar"
    stroke(200);
    fill("black");
    rect(xVoltar, yVoltar, largura3, altura3, 15);

    if (
      mouseX > xVoltar &&
      mouseX < xVoltar + largura3 &&
      mouseY > yVoltar &&
      mouseY < yVoltar + altura3
    ) {
      stroke(200);
      fill("black");
      rect(xVoltar, yVoltar, largura3, altura3, 10);

      //código do clique do mouse no botão "voltar"
      if (mouseIsPressed) {
        tela = 1;
      }
    }

    textSize(20);
    fill(250);
    noStroke();
    text("⇦", 45, 46);
    textFont("Corier New", 50);
    fill("white");
  }
}
