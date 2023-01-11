$("#addContact").click(function () {
  var nameVal = $("#name").val();
  var phoneVal = $("#number").val();
  var temp =
    '<div class="contact"><p>' +
    nameVal +
    "</p><p>" +
    phoneVal +
    '</p><span class="material-symbols-rounded">cancel</span></div>';
  if (nameVal == "") {
    alert("你確定不買東西？真的？");
  } else if (phoneVal == "") {
    alert("買太少了888==...");
  } else {
    $(".appendArea").append(temp);
  }
});
