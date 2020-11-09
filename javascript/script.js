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

  $(".expgroup").hide();
  $(".share").click(function () {
    $(".expgroup").animate({ height: "toggle" });
  });

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

  // $(".dropdown").hover(
  //   function () {
  //     $(".dropdown-menu", this)
  //       .not(".in .dropdown-menu")
  //       .stop(true, true)
  //       .slideDown("400");
  //     $(this).toggleClass("open");
  //   },
  //   function () {
  //     $(".dropdown-menu", this)
  //       .not(".in .dropdown-menu")
  //       .stop(true, true)
  //       .slideUp("400");
  //     $(this).toggleClass("open");
  //   }
  // );

  var speed = 500;
  var autoswitch = true;
  var autoswicth_speed = 3000;
  var $counter = 0;
  var txtArray = [".text_1", ".text_2", ".text_3", ".text_4"];
  //console.log(imgArray);
  var $new_ctn = 0;

  var $call = $(".call");

  // $(".down").on("click", next);
  // $(".down").on("click", main);
  // function next() {
  //   $counter++;
  //   if ($counter >= txtArray.length) $counter = 0;
  //   $(".caption_text").hide();
  //   $.each(txtArray, function () {
  //     $new_ctn++;
  //     if ($new_ctn >= txtArray.length) $new_ctn = 0;

  //     if ($counter === $new_ctn) {
  //       console.log("Count is " + $counter + " and new count is : " + $new_ctn);
  //       $(txtArray[$new_ctn]).fadeIn(500);
  //     }
  //   });
  // }
  // $(".up").on("click", function () {
  //   $counter--;
  //   console.log($counter);
  //   if ($counter < 0) $counter = txtArray.length - 1;

  //   $(".caption_text").hide();
  //   $.each(txtArray, function () {
  //     $new_ctn--;
  //     if ($new_ctn < 0) $new_ctn = txtArray.length - 1;

  //     if ($counter === $new_ctn) {
  //       console.log("Count is " + $counter + " and new count is : " + $new_ctn);

  //       $(txtArray[$new_ctn]).fadeIn(500);
  //     }
  //   });
  // });

  // if (autoswitch == true) {
  //   setInterval(next, autoswicth_speed);
  // }

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

//Banner background image slide show
// var folder = "";
// var pictures = [
//   "images/Rental.jpg",
//   "images/realty%20Finance.jpg",
//   "images/Water.jpg",
//   "images/Savings.jpg",
// ];
// var num = 0;

// function main() {
//   var slider = document.getElementById("section");
//   if (num == 3) num = 0;
//   else num++;

//   slider.style.backgroundImage =
//     "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(" +
//     pictures[num] +
//     ")";
// }

// setInterval("main()", 3000);

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