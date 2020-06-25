function makeOneTab(orig_tokens, i, relations){

  tokens = orig_tokens.slice(0);

  rel = relations[i];

  if (rel[0] > rel[2]){
    positions = [rel[2], rel[3], rel[0], rel[1]];
    ns = false;
  } else {
    positions = [rel[0], rel[1], rel[2], rel[3]];
    ns = true;
  }

  tokens.splice(positions[3], 0, "</span>");
  if (ns) {
    tokens.splice(positions[2], 0, `<span class="sat">`);
  } else {
    tokens.splice(positions[2], 0, `<span class="nuc">`);
  }
  tokens.splice(positions[1], 0, "</span>");
  if (ns) {
    tokens.splice(positions[0], 0, `<span class="nuc">`);
  } else {
    tokens.splice(positions[0], 0, `<span class="sat">`);
  }

  return `<div class="tab" style="display:none"> <br />

  Relation type: <span id="relType"> ` + rel[4] + ` </span> <br />

  Relation number: <span id="relNum"> ` + (i + 1) + "/" + relations.length + ` </span> <br />

  ` + tokens.join(" ") + "</div>"

}

function makeDisplay(comment_data){
  b = JSON.parse(comment_data);
  k = document.getElementById("commentSpace");
  newTokens = b["tokens"];

  commentIdSpan = document.getElementById("commentId");
  commentIdSpan.innerHTML = b["comment_id"];

  for (var i=0;i<b["rels"].length; i++){
    newTab = makeOneTab(b["tokens"], i, b["rels"])
    k.innerHTML += newTab;
  }
  showTab(0);

}

currentTab = 0;

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").disabled = "true";
  } else {
    document.getElementById("prevBtn").removeAttribute("disabled");
  }
  // ... and run a function that displays the correct step indicator:
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = (currentTab + n) % x.length;
  showTab(currentTab);
}
