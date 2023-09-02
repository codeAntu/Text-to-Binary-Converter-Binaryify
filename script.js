let outputVal1 = "";
let outputVal2 = ""
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
   for (let i = 0; i < input1.length; i++) {
      const c = input1[i];
      for (let j = 7; j >= 0; j--) {
         let x = (c.charCodeAt(0) >> j) & 1;
         outputVal1 += x.toString();
      }
   }
   output1.value = outputVal1;
}

function Decoder() {
   var input2 = getId("input2").value; 
   var output2 = getId("output2");
   var decodedText = "";

   var binaryChunks = input2.match(/.{8}/g);

   if (binaryChunks) {
      for (let i = 0; i < binaryChunks.length; i++) {
         const binaryChunk = binaryChunks[i];
         const decimalValue = parseInt(binaryChunk, 2); 
         const char = String.fromCharCode(decimalValue); 
         decodedText += char;
      }
   }

   output2.value = decodedText;
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
