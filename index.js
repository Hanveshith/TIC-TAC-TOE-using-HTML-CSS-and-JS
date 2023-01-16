let R = "";
let buttons = document.querySelectorAll('.button');
// console.log(buttons);
Array.from(buttons).forEach((b)=>{
    b.addEventListener('click',(p)=>{
        // console.log(p.target);
        if(p.target.innerHTML=='='){
            R = eval(R);
            document.querySelector('input').value=R;
        }
        else if(p.target.innerHTML == 'C'){
            R = "";
            document.querySelector('input').value=R;
        }
        // else if(p.target.innerHTML == '÷'){
            //     p.target.innerHTML == '/';
            //     document.querySelector('input').value=R;
            // }
        else if(p.target.innerHTML == 'X'){
            R = R.slice(0,R.length-1);
            document.querySelector('input').value=R;
            
        }
        else{
            R += p.target.innerHTML;
            document.querySelector('input').value=R;
        }
    })
})
