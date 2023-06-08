var turn = 0;
var sd = 0;

var label = document.getElementById("label");
label.innerHTML = "White's Turn";

var start = "";
var desti = "";

function getId(div) {

  var id = div.id;

  if (sd==0) {
    var st = document.getElementById(id);
    if(st.innerHTML!="" && label.innerHTML[0]==st.firstChild.id.slice(-1)) {
      start = id;
      st.style.background = "#fefae0";
      sd = 1;
    }
  } else {
    desti = id;
    var st = document.getElementById(start);
    var des = document.getElementById(desti);
    if (document.getElementById(desti).innerHTML=="" || st.firstChild.id.slice(-1)!=des.firstChild.id.slice(-1)) {
      if (turn==0) {
        if(playW(start,desti)) {
          turn = 1
          label.innerHTML = "Brown's Turn";
        }
      } else {
        if(playB(start,desti)) {
          turn = 0
          label.innerHTML = "White's Turn";
        }
      }
      sd = 0;
    } else {
      if (start==desti) {
        sd = 0;
      }
      start = desti;
      if (label.innerHTML[0]==document.getElementById(start).firstChild.id.slice(-1)) {
        document.getElementById(start).style.background = "#fefae0";
      }
    }
    st.style.background = "";
  }
}

function playW(start,desti) {
  var st = document.getElementById(start);
  var des = document.getElementById(desti);
  var surety = false;
  if (st.innerHTML=="") {
    surety = false;
  } else if (st.firstChild.id=="pawnW") {
    surety = playPawnW(start, desti);
  } else if (st.firstChild.id=="knightW") {
    surety = playKnight(start, desti);
  } else if (st.firstChild.id=="bishopW") {
    surety = playBishop(start, desti);
  } else if (st.firstChild.id=="rookW") {
    surety = playRook(start, desti);
  } else if (st.firstChild.id=="queenW") {
    surety = playQueen(start, desti);
  } else if (st.firstChild.id=="kingW") {
    surety = playKing(start, desti);
  }
  if (surety) {
    des.innerHTML = st.innerHTML;
    st.innerHTML = "";
  }
  return surety;
}

function playB(start,desti) {
  var st = document.getElementById(start);
  var des = document.getElementById(desti);
  var surety = false;
  if (st.innerHTML=="") {
    surety = false;
  } else if (st.firstChild.id=="pawnB") {
    surety = playPawnB(start, desti);
  } else if (st.firstChild.id=="knightB") {
    surety = playKnight(start, desti);
  } else if (st.firstChild.id=="bishopB") {
    surety = playBishop(start, desti);
  } else if (st.firstChild.id=="rookB") {
    surety = playRook(start, desti);
  } else if (st.firstChild.id=="queenB") {
    surety = playQueen(start, desti);
  } else if (st.firstChild.id=="kingB") {
    surety = playKing(start, desti);
  }
  if (surety) {
    des.innerHTML = st.innerHTML;
    st.innerHTML = "";
  }
  return surety;
}

function playPawnW(start,desti) {
  var id1 = parseInt(start)+1;
  var id2 = id1+1;
  var id3 = id1+10;
  var id4 = id1-10;
  var row = parseInt(start[1]);
  var des = document.getElementById(desti)
  if (id1==desti && des.innerHTML=="") {
    return true;
  }
  if (row==2 && id2==desti && des.innerHTML=="") {
    if(document.getElementById(id1).innerHTML!="") {
      return false;
    }
    return true;
  }
  if (id3==desti && des.innerHTML!="") {
    return true;
  }
  if (id4==desti && des.innerHTML!="") {
    return true;
  }
  return false;
}

function playPawnB(start,desti) {
  var id1 = parseInt(start)-1;
  var id2 = id1-1;
  var id3 = id1+10;
  var id4 = id1-10;
  var row = parseInt(start[1]);
  var des = document.getElementById(desti)
  if (id1==desti && des.innerHTML=="") {
    return true;
  }
  if (row==7 && id2==desti && des.innerHTML=="") {
    if(document.getElementById(id1).innerHTML!="") {
      return false;
    }
    return true;
  }
  if (id3==desti && des.innerHTML!="") {
    return true;
  }
  if (id4==desti && des.innerHTML!="") {
    return true;
  }
  return false;
}

function playKnight(start, desti) {
  var id1 = parseInt(start)+12;
  var id2 = parseInt(start)-8;
  var id3 = parseInt(start)+21;
  var id4 = parseInt(start)+19;
  var id5 = parseInt(start)-19;
  var id6 = parseInt(start)-21;
  var id7 = parseInt(start)+8;
  var id8 = parseInt(start)-12;
  if (id1==desti || id2==desti || id3==desti || id4==desti || id5==desti || id6==desti || id7==desti || id8==desti) {
    return true;
  }
  return false;
}

function playBishop(start, desti) {
  let arr  = [];
  var row = parseInt(start[1]);
  var col = parseInt(start[0]);
  var st = document.getElementById(start);
  var r = row;
  var c = col;
  while(r<8 && c<8) {
    r += 1;
    c += 1;
    var id = c.toString() + r.toString();
    var elem = document.getElementById(id);
    if (elem.innerHTML=="") {
      arr.push(id);
    } else if (st.firstChild.id.slice(-1)!=elem.firstChild.id.slice(-1)) {
      arr.push(id);
      break;
    } else {
      break;
    }
  }
  r = row;
  c = col;
  while(r<8 && c>1) {
    r += 1;
    c -= 1;
    var id = c.toString() + r.toString();
    var elem = document.getElementById(id);
    if (elem.innerHTML=="") {
      arr.push(id);
    } else if (st.firstChild.id.slice(-1)!=elem.firstChild.id.slice(-1)) {
      arr.push(id);
      break;
    } else {
      break;
    }
  }
  r = row;
  c = col;
  while(r>1 && c<8) {
    r -= 1;
    c += 1;
    var id = c.toString() + r.toString();
    var elem = document.getElementById(id);
    if (elem.innerHTML=="") {
      arr.push(id);
    } else if (st.firstChild.id.slice(-1)!=elem.firstChild.id.slice(-1)) {
      arr.push(id);
      break;
    } else {
      break;
    }
  }
  r = row;
  c = col;
  while(r>1 && c>1) {
    r -= 1;
    c -= 1;
    var id = c.toString() + r.toString();
    var elem = document.getElementById(id);
    if (elem.innerHTML=="") {
      arr.push(id);
    } else if (st.firstChild.id.slice(-1)!=elem.firstChild.id.slice(-1)) {
      arr.push(id);
      break;
    } else {
      break;
    }
  }
  for (var i=0; i<arr.length; i++) {
    if (arr[i]==desti) {
      return true;
    }
  }
  return false;
}

function playRook(start, desti) {
  let arr  = [];
  var row = parseInt(start[1]);
  var col = parseInt(start[0]);
  var st = document.getElementById(start);
  var r = row;
  var c = col;
  while(r<8) {
    r += 1;
    var id = c.toString() + r.toString();
    var elem = document.getElementById(id);
    if (elem.innerHTML=="") {
      arr.push(id);
    } else if (st.firstChild.id.slice(-1)!=elem.firstChild.id.slice(-1)) {
      arr.push(id);
      break;
    } else {
      break;
    }
  }
  r = row;
  while(r>1) {
    r -= 1;
    var id = c.toString() + r.toString();
    var elem = document.getElementById(id);
    if (elem.innerHTML=="") {
      arr.push(id);
    } else if (st.firstChild.id.slice(-1)!=elem.firstChild.id.slice(-1)) {
      arr.push(id);
      break;
    } else {
      break;
    }
  }
  r = row;
  while(c<8) {
    c += 1;
    var id = c.toString() + r.toString();
    var elem = document.getElementById(id);
    if (elem.innerHTML=="") {
      arr.push(id);
    } else if (st.firstChild.id.slice(-1)!=elem.firstChild.id.slice(-1)) {
      arr.push(id);
      break;
    } else {
      break;
    }
  }
  c = col;
  while(c>1) {
    c -= 1;
    var id = c.toString() + r.toString();
    var elem = document.getElementById(id);
    if (elem.innerHTML=="") {
      arr.push(id);
    } else if (st.firstChild.id.slice(-1)!=elem.firstChild.id.slice(-1)) {
      arr.push(id);
      break;
    } else {
      break;
    }
  }
  for (var i=0; i<arr.length; i++) {
    if (arr[i]==desti) {
      return true;
    }
  }
  return false;
}

function playQueen(start, desti) {
  var surety1 = playBishop(start,desti);
  var surety2 = playRook(start,desti);
  return (surety1 || surety2);
}

function playKing(start, desti) {
  var id1 = parseInt(start)+1;
  var id2 = parseInt(start)-1;
  var id3 = parseInt(start)+10;
  var id4 = parseInt(start)-10;
  var id5 = parseInt(start)+11;
  var id6 = parseInt(start)-9;
  var id7 = parseInt(start)-11;
  var id8 = parseInt(start)+9;
  if (id1==desti || id2==desti || id3==desti || id4==desti || id5==desti || id6==desti || id7==desti || id8==desti) {
    return true;
  }
  return false;
}