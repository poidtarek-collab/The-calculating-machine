let Calctor_cintainoer=document.getElementById('Calctor_cintainoer');
let dispaly_arry=document.getElementById('dispaly_arry');


Calctor_cintainoer.addEventListener('click', (e) => { // لاحظ إضافة e هنا
    if (e.target.nodeName === "BUTTON") {
        // الكود سيعمل الآن بدون أخطاء  
    
  

    switch(e.target.textContent){
        case "C":
        case "c":
            clear();
            break;

            case "DEL":
                Deleteonevalue();
                break;
            case "=":
                evalute();
                break;
        default:
             addtodispaly_arry(e.target.textContent);
                    
    }
}
else{
    return;
}
});




function clear(){
    dispaly_arry.textContent = "" ;
}

function addtodispaly_arry(value){
    dispaly_arry.textContent = dispaly_arry.textContent += value;

}



function Deleteonevalue(){
    let curretcontonte = dispaly_arry.textContent;
    dispaly_arry.textContent = curretcontonte.substring(0, curretcontonte.length - 1);
}

function evalute(){
    try {
        // التأكد أولاً أن الشاشة ليست فارغة لتجنب ظهور خطأ غير ضروري
        if (dispaly_arry.textContent.trim() !== "") {
            let calcation = math.evaluate(dispaly_arry.textContent);
            dispaly_arry.textContent = calcation;
        }
    } catch (error) {
        dispaly_arry.textContent = "Error"; 
        console.error(error);
    }
}
