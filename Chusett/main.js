var id = "";
let click = 0;
let piece = "";
let backCol = "";

function getId(div) {

    id = div.id;
    let loc = document.getElementById(id);

    if (backCol!="") {
      backCol.style.background = "";
    }
    if (click==0) {
      if (loc.innerHTML!="") {
        piece = loc;
        click = 1;
      }
    } else if (click==1) {
      if (loc.innerHTML=="" || loc.firstChild.id != piece.firstChild.id) {
        loc.innerHTML = piece.innerHTML;
        piece.innerHTML = "";
        piece = "";
        click = 0;
      }else if (loc.firstChild.id == piece.firstChild.id) {
        piece = loc;
      }
    }
    if (piece!="") {
      piece.style.background = "#cbf3f0";
      backCol = piece;
    }
 }