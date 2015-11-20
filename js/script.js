$(document).ready(function() {
  $(document).on("click", ".removeRowBtn", function(){
    $(this).parent().parent().remove();
  });
  $(document).on("click", "#addRowBtn", function(e){
    e.preventDefault();
    var newContactFirstName = $("#newRowFirstName").val();
    var newContactLastName = $("#newRowLastName").val();
    var newEmail = $("#newRowEmail").val();
    var deleteBtn = $("<button>").addClass("btn btn-danger removeRowBtn").append("X");
    var newRow = $("<tr>");
    var firstNameTd = $("<td>").append(newContactFirstName).attr("class", "firstName");
    var lastNameTd = $("<td>").append(newContactLastName).attr("class", "lastName");
    var emailTd = $("<td>").append(newEmail).attr("class", "email");
    var deleteBtnTd = $("<td>").append(deleteBtn);
    var inputRow = $("#inputRow");
      if (newContactFirstName.trim() === $(".firstName") && newContactLastName.trim() === $(".lastName") && newEmail.trim() === $(".newEmail")) {
        alert("You already have that contact added")
      }
      else{
      newRow.append(firstNameTd).append(lastNameTd).append(emailTd).append(deleteBtnTd);
      $("#contactsTable").append(newRow);
      $(inputRow).before(newRow);
      $("#newRowFirstName").val("").focus();
      $("#newRowLastName").val("");
      $("#newRowEmail").val("");

    }
  });
});