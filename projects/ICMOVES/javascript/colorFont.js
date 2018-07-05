// Global Variables
// innerHTML outputs
// var txtOutput = document.getElementById("font-size-output");
var colorOutput = document.getElementById("color-output");
// var mainContent = document.getElementById("main-content");

// selector elements for even callers
// var fontSelectionDiv = document.getElementById("font-selection");
var colorSelectionDiv = document.getElementById("color-selection");
// arry of color choices - no more than 5 in the array at the moment - resolve in whatColor 
// var colorRang = [   "RGBA(92, 236, 238, 1.00)", 
//                     "RGBA(155, 216, 85, 1.00)", 
//                     "RGBA(250, 246, 114, 1.00)", 
//                     "RGBA(228, 32, 125, 1.00)", 
//                     "RGBA(69, 69, 69, 1.00)", 
//                     ];

// var colorRang = ["#0035a2", "#00a26d", "#00a26d", "#00a21c", "#846267"];
var colorRang = ["#86a300", "#a36f00", "#a31e00", "#a30033", "#0086a2"];

//  functions 
// craetes the color selection buttons on the page giving them a class and an ID
// function is called on load to ensure the color buttons are rendered to the screen
function crateColorBtns() {
    console.log(colorRang)
    for (var i = 0; i < colorRang.length; i++) {
        var nuDiv = document.createElement('div');
        colorSelectionDiv.appendChild(nuDiv);
        nuDiv.id = "color-" + i;
        nuDiv.className = "color-choices";
        nuDiv.style.backgroundColor = colorRang[i];
        
    }
}

//text functions

// function modifyText(size) {
//     mainContent.style.fontSize = size + "px";
//     txtOutput.style.fontSize = size + "px";
//     txtOutput.innerHTML = size + "px";
//     localStorage.setItem("fontSize", size);
// }

// function whatSize(e) {
//     var fontSizeCount = localStorage.getItem("fontSize");
//     if (e.target !== e.currentTarget) {
//         var clickedItem = e.target.id;
//         switch (clickedItem) {
//             case "font-size-increase":
//                 fontSizeCount = parseInt(fontSizeCount) + 2;
//                 break;
//             case "font-size-decrease":
//                 fontSizeCount = parseInt(fontSizeCount) - 2;
//                 break;
//         }
//     }
//     modifyText(fontSizeCount);
//     e.stopPropagation();
// }

function modifyColor(color) {
    var colorItem = document.getElementsByClassName("btn-action");
    console.log(color);
    localStorage.setItem("bgColor", color);
    colorOutput.innerHTML= color;
//getElementsByClassName returns an array so to change color array must be looped through
    for (var colorItemIndex = 0 ; colorItem.length ; colorItemIndex ++) {
        var currentColorItem = colorItem[colorItemIndex];
        currentColorItem.style.backgroundColor = color;
     };
    
}

function whatColor(e) {
    var setColor;
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        var clickedChild = colorSelectionDiv.childNodes;
        for(var i = 0; i<colorRang.length; i++){
            if( clickedItem == clickedChild[i+1].id ){
                setColor = colorRang[(i)]; // putting -1 on the i results in the right color except the last item doesnt click! 
                console.log(clickedItem);
                console.log(colorRang[i]);  //returns out by 1 color!
            }    
        }
    }
    modifyColor(setColor);
    e.stopPropagation();
}

// event listeners
// waits for click on font-selection-div
// fontSelectionDiv.addEventListener("click", whatSize, false);
colorSelectionDiv.addEventListener("click", whatColor, false);

// onload 
window.addEventListener("load", function () {
    crateColorBtns();
    // var localSize = localStorage.getItem("fontSize");
    var localBgColor = localStorage.getItem("bgColor");
    // if (!localSize) {
    //     localSize = 30;
    // };
    if (!localBgColor) {
        localBgColor = colorRang[0];
    };
    // modifyText(localSize);
    modifyColor(localBgColor); 
    
}, false)