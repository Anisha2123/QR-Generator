
const wrapper = document.querySelector(".container"),
qrInput=wrapper.querySelector('input') ,
generateBtn = wrapper.querySelector("button");
qrImg = wrapper.querySelector("img");

generateBtn.addEventListener("click", () => {
    let qrValue=qrInput.value;
    if(!qrValue) return ;
    generateBtn.innerText="Generating QR Code...";
    console.log(qrValue);
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load" , () =>{
        wrapper.classList.add("active");
        generateBtn.innerText="Generate QR Code";
    })
    qrInput.addEventListener("keyup",()=>{
        if(!qrInput.value){
            wrapper.classList.remove("active") ;
        }
    })
});