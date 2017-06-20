// task a;
function sum (a,b){
    var c;
    c=a+b;
    console.log('Result sum: ', c);
}
sum (2,5);

function sub (a,b){
    var c;
    c=a-b;
    console.log('Result sub: ', c);
}
sub (8,5);

function mult (a,b){
    var c;
    c=a*b;
    console.log('Result mult: ', c);
}
mult (8,5);

function mod (a,b){
    var c;
    c=a%b;
    console.log('Result mod: ', c);
}
mod (28,5);

// task b;
function equation(){
    var a=prompt("Enter a: ", '');
    var b=prompt("Enter b: ", '');
    var c=prompt("Enter c: ", '');
    var d=b*b-4*a*c; //дискриминант
    if(d>0){
        var x1 = (-b + Math.sqrt(d))/2*a;
        var x2 = (-b - Math.sqrt(d))/2*a;
        console.log( 'Рівняння ax2+ bx + c = 0 має 2 розв’язки: x1=',  x1, 'x2= ', x2);
    }
    else if(d===0){
        console.log('Уравнение имеет 1 корень (не считала)' );
    }
    else{
        console.log('Уравнение не имеет корней' );
    }
};

equation();

