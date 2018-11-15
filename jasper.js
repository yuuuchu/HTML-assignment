

var dogImages = new Array();
    dogImages[0] = new Image(); 
    dogImages[0].src = "d1.jpg"; //the image path file goes here

    dogImages[1] = new Image(); 
    dogImages[1].src = "d2.jpg";  //remember to change the element locaton

    dogImages[2] = new Image(); 
    dogImages[2].src = "d3.jpg"; 

    dogImages[3] = new Image(); 
    dogImages[3].src = "d4.jpg"; 

var dogNames = ["Chopper", "Nami", "Jembei", "Blackfoot"]; 

function displayImage(index){
    document.getElementById("img1").src = dogImages[index].src;

}

//for loop for the names
for(i=0;i<dogNames.length;i++){
 document.write("<td onmouseover = 'displayImage("+ i + ")'>"+ dogNames[i] + "</td>");
}
