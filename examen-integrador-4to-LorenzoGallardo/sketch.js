let circulos = [];
let fondoColorClaro, fondoColorOscuro;
let colorCirculoClaro1, colorCirculoClaro2;
let colorCirculoOscuro1, colorCirculoOscuro2;

function setup() {
  let canvas = createCanvas(windowWidth, 150);
  canvas.parent('sobre-mi');


  fondoColorClaro = color('#fef7e1'); 
  colorCirculoClaro1 = color('#e2aa87'); 
  colorCirculoClaro2 = color('#a2d3c7'); 


  fondoColorOscuro = color('#300030'); 
  colorCirculoOscuro1 = color('#c04848'); 
  colorCirculoOscuro2 = color('#f07241');

  for (let i = 0; i < 15; i++) {
    circulos.push({
      x: random(width),
      y: random(height),
      r: random(20, 60),
      speed: random(0.01, 0.05),
      col: random([colorCirculoClaro1, colorCirculoClaro2]) 
    });
  }
}

function draw() {
  const isDark = document.body.classList.contains('dark');


  background(isDark ? fondoColorOscuro : fondoColorClaro);

  circulos.forEach(c => {
    if (isDark) {
      if (c.col !== colorCirculoOscuro1 && c.col !== colorCirculoOscuro2) {
        c.col = random([colorCirculoOscuro1, colorCirculoOscuro2]);
      }
    } else {
      if (c.col !== colorCirculoClaro1 && c.col !== colorCirculoClaro2) {
        c.col = random([colorCirculoClaro1, colorCirculoClaro2]);
      }
    }

    c.x += (mouseX - c.x) * c.speed;
    c.y += (mouseY - c.y) * c.speed * 0.5;

    fill(c.col);
    noStroke();
    ellipse(c.x, c.y, c.r);
  });
}

function windowResized() {
  resizeCanvas(windowWidth, 150);
}