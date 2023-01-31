const wt = document.getElementById("wt").value;
const wt2 = document.getElementById("wt2").value;
const sr = document.getElementById("sr").value;
const sr2 = document.getElementById("sr2").value;
const czw = document.getElementById("czw").value;
const czw2 = document.getElementById("czw2").value;
const pt = document.getElementById("pt").value;
const pt2 = document.getElementById("pt2").value;
const sb = document.getElementById("sb").value;
const sb2 = document.getElementById("sb2").value;
const nd = document.getElementById("nd").value;
const nd2 = document.getElementById("nd2").value;
const pon = document.getElementById("pon").value;
const pon2 = document.getElementById("pon2").value;
let btn = document.getElementById("btn");

ListaZup = [];
ListaDan = [];

const DodajZupy = () => {
  ListaZup = [wt, sr, czw, pt, sb, nd, pon];
  ListaDan.push = [wt2, sr2, czw2, pt2, sb2, nd2, pon2];
  console.log(ListaZup);
  console.log(ListaDan);
  window.print();
};
btn.addEventListener("click", DodajZupy);
