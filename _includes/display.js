function makeDisplay(comment_data){
  b = JSON.parse(comment_data);
  console.log(b);
  k = document.getElementsByClassName("commentSpace");
  newTokens = b["tokens"];

  rel = b["rels"][1];

  commentIdSpan = document.getElementById("commentId");
  commentIdSpan.innerHTML = b["comment_id"];

  relTypeSpan = document.getElementById("relType");
  relTypeSpan.innerHTML = rel[4];

  relNumSpan = document.getElementById("relNum");
  relNumSpan.innerHTML = 1+"/"+b["rels"].length;

  if (rel[0] > rel[2]){
    positions = [rel[2], rel[3], rel[0], rel[1]];
    ns = false;
  } else {
    positions = [rel[0], rel[1], rel[2], rel[3]];
    ns = true;
  }

  tokens = b["tokens"]

  tokens.splice(positions[3], 0, "</span>");
  if (ns) {
    tokens.splice(positions[2], 0, `<span class="sat">`);
  }else{
    tokens.splice(positions[2], 0, `<span class="nuc">`);
  }
  tokens.splice(positions[1], 0, "</span>");
  if (ns) {
    tokens.splice(positions[0], 0, `<span class="nuc">`);
  }else{
    tokens.splice(positions[0], 0, `<span class="sat">`);
  }


  k.item(0).innerHTML = tokens.join(" ");

}

