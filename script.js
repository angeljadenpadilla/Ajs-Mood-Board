var sleepyImages=["https://m.media-amazon.com/images/M/MV5BOWQ3YjE3NTQtZjM5MC00YTgwLWFjNTItNjc0OTZkZDEyMTFjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjYyODY4NDU@._V1_.jpg"];
var scaredImages=[ "https://i.pinimg.com/474x/fb/e2/fb/fbe2fb20799437f868b4b40596035f2e.jpg"];
var gladImages=[ "https://happyologist.co.uk/wp-content/uploads/happy.jpeg"];
var angryImages=["https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/Lightspring_Shutterstock_0.jpg?itok=OQtzR0If", ];


$('button').click(function(){
    var input = $('input').val();
    $(".images").html("");
    if(input === "sleepy"){
        sleepyMood();
    } else if(input==="scared"){
        scaredMood();
    }else if(input==="glad"){
        gladMood();
    }else if(input==="angry"){
        angryMood();
    }else{
     alert("Please enter sleepy, scared, glad, or angry!");   
    }
});


function sleepyMood(){
    changeBackground("grey");
    changeTextColor("blue");
    displayImage(sleepyImages);
}
function scaredMood(){
    changeBackground("purple");
    changeTextColor("red");
    displayImage(scaredImages);
}
function gladMood(){
    changeBackground("green");
    changeTextColor("yellow");
    displayImage(gladImages);
}
function angryMood(){
    changeBackground("red");
    changeTextColor("orange");
    displayImage(angryImages);
}


function changeBackground(backgroundColor){
    $('body').css('background-color', backgroundColor);
}

function changeTextColor(color){
    $('body').css('color', color);
}

function displayImage(image){
    $('.images').append('<img src ='+ image + '>');

}