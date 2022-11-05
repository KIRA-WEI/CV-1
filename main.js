let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string =`/*你好，我叫小韦
*接下来我要制作一个八卦图
*首先我要准备一个div
**/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来我把div变成一个八卦图
*注意看好啦
*首先将div变成一个圆
**/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成的
*一黑一白
**/
#div1{
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加上黑色小圆**/

#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform: translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
/*加上白色小圆**/
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform: translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string2 = "";

let n = 0;

let step = () =>{
setTimeout(() => { 
    //如果是回车就往后面加一个br
    //如果不是回车就照搬
    if (string[n] === "\n"){
        string2 += "<br>";
    }else if (string[n] === " "){
        string2 += "&nbsp;";
    }else {
        string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0,n);
    window.scrollTo(0,99999);
    html.scrollTo(0,99999);
    if(n < string.length-1){
        //如果n不是最后一个,就继续
        n+=1;
    step(); 
}
}, 10);
};

step();
