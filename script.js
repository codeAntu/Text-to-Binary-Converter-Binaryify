let outputVal1 = "";

let encod = getId("encod");
let decod = getId("decod");
let coder = getId("id-coder")

encod.onclick = function () {
   encod.classList.add("on");
   decod.classList.remove("on");
   coder.style.left = "0"
}

decod.onclick = function () {
   decod.classList.add("on");
   encod.classList.remove("on");
   coder.style.left = "-100vw"
}

getId("input1").addEventListener("keyup", Encoder);
getId("input2").addEventListener("keyup", Decoder);

function Encoder() {
   var input1 = getId("input1").value;
   var output1 = getId("output1");
   outputVal1 = "";

   for (var i = 0; i < input1.length; i++) {
      outputVal1 += input1[i].charCodeAt(0).toString(2) + " ";
   }
   output1.value = outputVal1;
}


function Decoder() {
   let input2 = getId("input2").value;
   let output2 = getId("output2");
   let outputVal2 = "";

   input2= input2.split(" ");
   for (let i = 0; i < input2.length-1; i++) {
      outputVal2 += String.fromCharCode(parseInt(input2[i], 2));
   }

   output2.value = outputVal2;
}

function copyText1() {
   output1.select();
   document.execCommand("copy");
}

function copyText2() {
   output2.select();
   document.execCommand("copy");
}

function getId(id) {
   return document.getElementById(id);
}