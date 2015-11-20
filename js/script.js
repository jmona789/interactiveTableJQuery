$(document).ready(function() {
  $(document).on("click", ".removeRowBtn", function(){
    $(this).parent().parent().remove();
  });
  $(document).on("click", "#addRowBtn", function(){
    var newContactFirstName = $("#newRowFirstName").val();
    var newContactLastName = $("#newRowLastName").val();
    var newEmail = $("#newRowEmail").val();
    var deleteBtn = $("<button>").addClass("btn btn-danger removeRowBtn").append("X");
    var newRow = $("<tr>");
    var firstNameTd = $("<td>").append(newContactFirstName);
    var lastNameTd = $("<td>").append(newContactLastName);
    var emailTd = $("<td>").append(newEmail);
    var deleteBtnTd = $("<td>").append(deleteBtn);
    newRow.append(firstNameTd).append(lastNameTd).append(emailTd).append(deleteBtnTd);
    $("#contactsTable").append(newRow);
  });
});