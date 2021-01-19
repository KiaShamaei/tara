
// Get the modal
var modal = document.getElementById("main-nav");

// Get the button that opens the modal
var btn = document.getElementById("btn-slideMenu");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }



// When the user clicks anywhere outside of the modal, close it
function openNav() {
  
  document.getElementById("mySidenav").style.width = "350px";
  document.querySelector('.modal').style.display="block";
  
}
function openSecound() {
  
  document.getElementById("mySidenav2").style.width = "350px";
  
  
}
function closeNav2(){
  document.getElementById("mySidenav2").style.width = "0";
}
document.querySelector('#closeSide2').addEventListener('click', function(){
  closeNav2();
})
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector('.modal').style.display="none";
  // window.addEventListener("click",function(event) {
  //     if (event.target.class == modal) {
  //       document.querySelector('.modal').style.display="none";
  //     }
  //   })
  }
  // slider  -------------------------------------------->
  $(document).ready(function(){
    jQuery('#camera_wrap').camera({
            loader: false,
            pagination: false ,
            minHeight: '444',
            thumbnails: false,
            height: '48.375%',
            caption: true,
            navigation: true,
            fx: 'mosaic'
    });
    /*carousel*/
    var owl=$("#owl");
            owl.owlCarousel({
            items : 2, //10 items above 1000px browser width
            itemsDesktop : [995,2], //5 items between 1000px and 901px
            itemsDesktopSmall : [767, 2], // betweem 900px and 601px
            itemsTablet: [700, 2], //2 items between 600 and 0
            itemsMobile : [479, 1], // itemsMobile disabled - inherit from itemsTablet option
            navigation : true,
            pagination : false
            });
    $().UItoTop({ easingType: 'easeOutQuart' });
    });
 /*sidenav  -------===============================>*/
 