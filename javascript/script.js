$(document).ready(function () {
  $(".nav-tabs a").click(function () {
    $(this).tab("show");
  });

  $(".fa-bars").click(function () {
    $(".modal_content").show();
  });

  $(".fa-times").click(function () {
    $(".modal_content").slideUp();
  });

  $(".thetoggleTabs input[type='date']").change(function(e) {
    if(e.value !== "") {
      e.target.style.color = "inherit";
    }
  })

  $("#calculate").click(function () {
    var M; //monthly mortgage payment
    var P = $(".show #loan_amount").val(); //principle / initial amount borrowed
    var x = parseInt($(".show #interest").val().replace("%", "")); //Variable Interest Rate depending on loan type used
    var I = x / 100 / 12; //monthly interest rate
    var N = $(".show #term").val() * 12; //number of payments months
    //monthly mortgage payment
    M = monthlyPayment(P, N, I);

    var T = M * N;

    $("#monthly_amount").html(M.toFixed(2));
    $("#total_amount").html(T.toFixed(2));
  });

  function monthlyPayment(p, n, i) {
    return (p * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
  }

  //Reset button handler
  $("#reset").click(function () {
    $(".show #loan_amount").val("");
    $(".show #term").val("");
    $("#monthly_amount").html("0");
    $("#total_amount").html("0");
  });

  //Jump to
  $("#news").click(function () {
    var $element = $(".news").offset().top;
    //alert($element);
    $("html,body").animate(
      {
        scrollTop: $element,
      },
      900
    );
  });
  $("#gallery").click(function () {
    var $element = $(".gallery").offset().top;
    //alert($element);
    $("html,body").animate(
      {
        scrollTop: $element,
      },
      900
    );
  });

  $("#video").click(function () {
    var $element = $(".video").offset().top;
    //alert($element);
    $("html,body").animate(
      {
        scrollTop: $element,
      },
      900
    );
  });
  $("#document").click(function () {
    var $element = $(".document").offset().top;
    //alert($element);
    $("html,body").animate(
      {
        scrollTop: $element,
      },
      900
    );
  });

  //Image Upload
  $("#img-uploader").click(function (e) {
    $("#file-upload").click();
  });

  $("#file-upload").change(function () {
    var reader = new FileReader();
    reader.onload = function (e) {
      var preview = document.querySelector(".avatar");
      preview.style.backgroundImage = `url(${e.target.result})`;
      //          preview.style.maxWidth = '350px';
      //          preview.style.maxHeight = '350px';
    };
    reader.readAsDataURL(this.files[0]);
  });
});

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();