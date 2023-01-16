let button = document.getElementsByTagName("button");
let h1_button = document.getElementsByClassName("row1")
let h2_button = document.getElementsByClassName("row2")
let h3_button = document.getElementsByClassName("row3")
let r11 = document.getElementById('R11');
let r12 = document.getElementById('R12');
let r13 = document.getElementById('R13');
let r21 = document.getElementById('R21');
let r22 = document.getElementById('R22');
let r23 = document.getElementById('R23');
let r31 = document.getElementById('R31');
let r32 = document.getElementById('R32');
let r33 = document.getElementById('R33');
let playagain = document.getElementById('playagain');
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");

function win(){
    let h1=[];
    let h2 = [];
    let h3 = [];
    let td1 =[];
    let td2 =[];
    let v1 = Array(r11.innerHTML,r21.innerHTML,r31.innerHTML);
    let v2 = Array(r12.innerHTML,r22.innerHTML,r32.innerHTML);
    let v3 = Array(r13.innerHTML,r23.innerHTML,r33.innerHTML);
    let d1 = Array(r11,r22,r33);
    let d2 = Array(r13,r22,r31);
   
    Array.from(h1_button).forEach((b)=>{
        h1.push(b.innerHTML);
    })
    Array.from(h2_button).forEach((b)=>{
        h2.push(b.innerHTML);
    })
    Array.from(h3_button).forEach((b)=>{
        h3.push(b.innerHTML);
    })
    Array.from(d1).forEach((b)=>{
        td1.push(b.innerHTML);
    })
    Array.from(d2).forEach((b)=>{
        td2.push(b.innerHTML);
    })
    let H1 = new Set(h1);
    let H2 = new Set(h2);
    let H3 = new Set(h3);
    let v_1 = new Set(v1);
    let v_2 = new Set(v2);
    let v_3 = new Set(v3);
    let d_1 = new Set(td1);
    let d_2 = new Set(td2);
    if(H1.size==1 || H2.size == 1 || H3.size == 1 ||v_1.size==1||v_2.size==1||v_3.size==1||d_1.size==1||d_2.size==1){
        // console.log("WIN");
        return true
    }
}

let c= 1;
arr = [1,2,3,4,5,6,7,8,9,10];
Array.from(button).forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(btn.innerHTML in arr){
            if(c%2!=0){
                btn.innerHTML = 'X';
                btn.style.color = 'white'
                c++;
                if(win()){
                    console.log("A WIN");
                    playagain.addEventListener('click',()=>{
                            btn.style.color='rgb(69, 63, 63)';
                            playagain.innerHTML = "Play Again";
                            // p1.innerHTML = "WON";
                            // p2.innerHTML = "LOSS";
                    })
                    if(win()){
                        p1.innerHTML = "WON";
                        p2.innerHTML = "LOSS";
                        p1.style.color = 'rgb(36, 223, 36)';
                        p2.style.color = 'rgb(235, 37, 37)';
                    }
                }
            }
            else{
                let B = 'O'
                btn.innerHTML = B;
                btn.style.color = 'white'
                c++;
                if(win()){
                    console.log("B WIN");
                    playagain.addEventListener('click',()=>{
                            btn.style.color='rgb(69, 63, 63)';
                            playagain.innerHTML = "Play Again";
                            p2.innerHTML = "0";
                            p1.innerHTML = "0";
                    })
                    if(win()){
                        p1.innerHTML = "LOSS";
                        p1.style.color = 'rgb(235, 37, 37)';
                        p2.innerHTML = "WON";
                        p2.style.color = 'rgb(36, 223, 36)';
                    }
                }
            }
        }
    })
})
playagain.addEventListener('click',()=>{
    c = 1;
    p2.innerHTML = "0";
    p1.innerHTML = "0";
    r11.innerHTML = '1';
    r12.innerHTML = '2';
    r13.innerHTML = '3';
    r21.innerHTML = '4';
    r22.innerHTML = '5';
    r23.innerHTML = '6';
    r31.innerHTML = '7';
    r32.innerHTML = '8';
    r33.innerHTML = '9';
    Array.from(button).forEach(btn=>{
        btn.style.color = 'rgb(69, 63, 63)';
    })
})