const n = document.querySelector("#null");
const c = n.getContext("2d");
const s = Math.sin(Math.PI / 3);
const d = window.innerWidth > 500 ? 400 : 200;
const b = d * 0.05;
const w = d * 0.0075;
const r = d * 0.375;

n.setAttribute("height", d);
n.setAttribute("width", d);

c.strokeStyle = "#00f";
c.shadowColor = "#00f";
c.shadowBlur = b;
c.shadowOffsetX = 0;
c.shadowOffsetY = 0;
c.lineCap = "round";
c.lineJoin = "round";
c.lineWidth = w;

c.translate(d / 2, d / 2);

c.beginPath();
c.moveTo(0, -r);
c.lineTo(0, r);
c.lineTo(-r * s, r / 2);
c.lineTo(-r * s, -r / 2);
c.closePath();
c.stroke();

c.beginPath();
c.moveTo(0, -r / 2);
c.lineTo((r * s) / 2, -r / 4);
c.lineTo((r * s) / 2, r / 4);
c.lineTo(0, r / 2);
c.stroke();

c.beginPath();
c.moveTo(-r * s, r / 2);
c.lineTo(r * s, -r / 2);
c.stroke();

c.beginPath();
c.moveTo(-r * s, -r / 2);
c.lineTo(r * s, r / 2);
c.stroke();
