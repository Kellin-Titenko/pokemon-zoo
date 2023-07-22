/*--------------Login form password visibility toggle-------------------*/
$(function () {
    $("#togglePassword").click(function () {
      $(this).toggleClass("fa-eye fa-eye-slash");
      var type = $(this).hasClass("fa-eye-slash") ? "text" : "password";
      $("#txtpassword").attr("type", type);
    });
  });
  /*----------------Salutation color change if value empty-----------------*/
  $("#salutation").change(function () {
    if ($(this).val() == "0") $(this).addClass("empty");
    else $(this).removeClass("empty");
  });
  $("#salutation").change();
  
  /*------Auto add country code to phone number field on click-------------*/
  $("#phone").focus(function () {
    if ($(this).val().substring(0, 3) !== "+91") {
      $(this).val("+91" + $(this).val());
    }
  });
  
  /*----------------Valid Password Requirement Conditions------------------*/
  $(document).ready(function () {
    $("input[type=password]").keyup(function () {
      var pswd = $(this).val();
      if (pswd.match(/\d/)) {
        $("#number").removeClass("invalid").addClass("valid");
      } else {
        $("#number").removeClass("valid").addClass("invalid");
      }
      if (pswd.match(/[a-z]/)) {
        $("#small").removeClass("invalid").addClass("valid");
      } else {
        $("#small").removeClass("valid").addClass("invalid");
      }
      if (pswd.match(/[A-Z]/)) {
        $("#capital").removeClass("invalid").addClass("valid");
      } else {
        $("#capital").removeClass("valid").addClass("invalid");
      }
      if (pswd.length < 8) {
        $("#length").removeClass("valid").addClass("invalid");
      } else {
        $("#length").removeClass("invalid").addClass("valid");
      }
    });
    $("#newpassword").focus(function () {
      $("#password_info").show();
    });
    $("#newpassword").blur(function () {
      $("#password_info").hide();
    });
  });
  /*-------------Create form password visibility toggle----------------*/
  $(function () {
    $("#toggleP").click(function () {
      $(this).toggleClass("fa-eye fa-eye-slash");
      var type = $(this).hasClass("fa-eye-slash") ? "text" : "password";
      $("#newpassword").attr("type", type);
    });
  });
  $("#newpassword").focus(function () {
    $("#toggleP").show();
  });
  $("#newpassword").dblclick(function () {
    $("#toggleP").hide();
  });
  /*----------Check if create password and confirm password match------*/
  function checkPasswordMatch() {
    var npassword = $("#newpassword").val();
    var cpassword = $("#confirm_password").val();
    if (npassword != cpassword)
      $("#CheckPasswordMatch").text("Passwords do not match!");
    else $("#CheckPasswordMatch").text("Passwords match!");
  }
  $(document).ready(function () {
    $("#confirm_password").keyup(checkPasswordMatch);
  });
  $("#confirm_password").focus(function () {
    $("#CheckPasswordMatch").show();
  });
  $("#confirm_password").blur(function () {
    $("#CheckPasswordMatch").hide();
  });
  /*-----------------Confirm password visibility toggle-----------------*/
  $(function () {
    $("#togglePass").click(function () {
      $(this).toggleClass("fa-eye fa-eye-slash");
      var type = $(this).hasClass("fa-eye-slash") ? "text" : "password";
      $("#confirm_password").attr("type", type);
    });
  });
  $("#confirm_password").focus(function () {
    $("#togglePass").show();
  });
  $("#confirm_password").dblclick(function () {
    $("#togglePass").hide();
  });
  /*-----If date of birth field clicked change font color to black------*/
  var dob = document.getElementById("datepicker");
  dob.onclick = function (e) {
    this.focus();
    this.style.color = "Black";
  };
  
  /*-----------toggling between login and registration forms-----------*/
  $(".toggleform a").click(function () {
    $("form1").animate({ height: "toggle", opacity: "toggle" }, "slow");
  });
  
  /*-------------------------Client Side Validation (Login Page)--------------------*/
  function login_validation() {
    var user = document.getElementById("username").value;
    var pas = document.getElementById("txtpassword").value;
    if ((user = "")) {
      document.getElementById("username").innerText =
        "**Please Enter the Username";
      return false;
    }
  
    if ((pas = "")) {
      document.getElementById("txtpassword").innerText =
        "**Please Enter the Password";
      return false;
    }
  }
  /*-------------------------Client Side Validation (Registration Page)--------------------*/
  function register_validation() {
    var fname = document.getElementById("firstnam").value;
    var lname = document.getElementById("lastnam").value;
    var phn = document.getElementById("phone").value;
    var mailid = document.getElementById("email").value;
    var npas = document.getElementById("newpassword").value;
    var cpas = document.getElementById("confirm_password").value;
    if ((fname = "")) {
      document.getElementById("firstnam").innerText =
        "**Please Enter the First Name";
      return false;
    }
    if (!isNaN(fname)) {
      document.getElementById("firstnam").innerText = "**Invalid Name";
      return false;
    }
    if ((lname = "")) {
      document.getElementById("lastnam").innerText =
        "**Please Enter the Last Name";
      return false;
    }
  
    if (!isNaN(lname)) {
      document.getElementById("lastnam").innerText = "**Invalid Name";
      return false;
    }
    if ((phn = "")) {
      document.getElementById("phone").innerText =
        "**Please Enter the Phone Number";
      return false;
    }
    if (isNaN(phn)) {
      document.getElementById("phone").innerText =
        "**Phone Number must be a Digit";
      return false;
    }
    if ((mailid = "")) {
      document.getElementById("email").innerText =
        "**Please Enter the Email Address";
      return false;
    }
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mailid.value.match(validRegex)) {
      return false;
    } else {
      document.getElementById("email").innerText =
        "**Please Enter a Valid Email Address";
      return true;
    }
    if ((npas = "")) {
      document.getElementById("newpassword").innerText =
        "**This field cannot be empty";
      return false;
    }
    if ((cpas = "")) {
      document.getElementById("confirm_password").innerText =
        "**Please confirm the password";
      return false;
    }
    if (document.getElementById("cb1").checked) {
      return false;
    } else {
      document.getElementById("cb1").innerText =
        "**Please complete the declaration to continue";
      return true;
    }
  }
  /*------------------Forgot Password Popup Box Toggle---------------------*/
  function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
  }
  /*--------------------Reset Password Email Validation--------------------*/
  function resetpassword_validation() {
    var rstmailid = document.getElementById("rstmail").value;
    if ((rstmail = "")) {
      document.getElementById("email").innerText =
        "**Please Enter the Email Address";
      return false;
    }
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (rstmail.value.match(validRegex)) {
      return false;
    } else {
      document.getElementById("email").innerText =
        "**Please Enter a Valid Email Address";
      return true;
    }
  }
  
  /*-----------------------------------------------------------------------*/
  /*---For selecting multiple departments/semesters/subjects-----------*/
  $(".chosen-select").chosen({
    no_results_text: "Please enter a valid name!"
  });
  
  /*------------------------------------------------------------------------*/
  