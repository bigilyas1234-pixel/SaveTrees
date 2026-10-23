var reasons = [
"Reason 4: Trees provide oxygen",
"Reason 2: Trees provide Shade",
"Reason 3: Trees help in retaining Rainwater",
];

var images = [
    "Tree1.png",
    "Tree2.png",
    "Tree3.png",
     
   ];

    
var i = 0;

function nextslide() {
    // Loops through items smoothly without hitting underfined
    i = (i + 1) % reasons.length;

    document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    document.getElementById("audio").play()


    var audio = docuemnt.getElementById("audio");
    if (audio) {
        audio.play().catch(function(error) {
            console.log("Audio play failed or blocked:", error);
         });
    }
}
      