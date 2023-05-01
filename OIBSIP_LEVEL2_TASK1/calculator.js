function cal(a){
    let res=document.getElementById("display");
    res.value+=a;

}
function clr(){
    let res=document.getElementById("display");
    res.value="";
}
function res(){
    let res=document.getElementById("display").value;
    var q=eval(res);
    document.getElementById("display").value=q;
}
function back(){
    let b=document.getElementById("display").value;
    document.getElementById("display").value=b.substr(0,b.length-1);
}