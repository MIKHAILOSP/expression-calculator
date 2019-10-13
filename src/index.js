function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here/ as you wish!
let arr1=[];
let map=new Map;
let Arrayel=[];
let q;
let r=0;
let n=0;
let index;
let e=0;
let firstscob=[];
 let znach;
// let razn;
// let umnog;
// let delen;
for (i=0; i<expr.length;i++){
    if (expr.charAt(i)=="(") {
        r+=1;
        e+=1;
    }
    if (expr.charAt(i)==")") {
        r-=1;
        e+=1;
    }
}
if (r!=0) {
    throw Error("ExpressionError: Brackets must be paired");
        } 
let expr1="";
Arrayel=expr.split(" ");
        if (e>=2){
           // Arrayel=expr.split(" ");
            for (let j=0; j<Arrayel.length;j++){
                
                if (Arrayel[j]=="("){
                    n=j;
                    continue;
                    } else {
                    if (Arrayel[j]==")"){
                       // let w=0;
                        znach=Arrayel.splice(n,(j-n+1));
                        znach.splice(j-n,1);
                        znach.splice(0,1);
                        znach.forEach(function(e,i) {
                            if (znach[i]!=""){
                                expr1+=e+" ";
                                    }
                        });
                        
                        Arrayel.splice(n,0,expressionCalculator(expr1));
                        //map.set(w,znach);
                       // w+=1;
                       q=1;
                       j=-1;
                       expr1="";
                    }
                }

                // if (Arrayel[j]==""){
                //     Arrayel.splice(j,1);
                //     }
                }
            }
 // summa 
 function summ (arr1) {return parseFloat(arr1[0])+parseFloat(arr1[1]);}
 // raznica
 function razn (arr1) {return  parseFloat(arr1[0])-parseFloat(arr1[1]);}
 // emnogenie
 function umnog (arr1) {return parseFloat(arr1[0])*parseFloat(arr1[1]);}
 // delenie
 function delen (arr1) {return (parseFloat(arr1[0])*1000)/(parseFloat(arr1[1])*1000);}



// обрабатывает только строку
//удаляем пробелы
    
    //Arrayel=expr.split(" ");
        Arrayel.forEach (function(e,i) {
        if (e==" "){
      Arrayel.splice(i,1);
          }
      });  
    Arrayel.forEach (function(e,i) {
      if (e==""){
        Arrayel.splice(i,1);
        q+=1;
        }
              
      });
      if ((q==undefined)||(q==0)){
        Arrayel=expr.split(""); 
        Arrayel.forEach (function(e,i) {
            if (e==" "){
          Arrayel.splice(i,1);
              }
            });  
      }

// отрабатываем умножение и деление
 
for (let i=0; i<Arrayel.length;i++){
        if(Arrayel[i]=="/"){
            arr1.push(Arrayel[i-1]);
            arr1.push(Arrayel[i+1]);
            Arrayel.splice(i-1,3,delen(arr1));
            i-=2;
            arr1=[];
            
        }
        if(Arrayel[i]=="*"){
            arr1.push(Arrayel[i-1]);
            arr1.push(Arrayel[i+1]);
            Arrayel.splice(i-1,3,umnog(arr1));
            i-=2;
            arr1=[];
        }
    }
    // отрабатываем сложение и вычитание
    for (let i=0; i<Arrayel.length;i++){
        if(Arrayel[i]=="+"){
            arr1.push(Arrayel[i-1]);
            arr1.push(Arrayel[i+1]);
            Arrayel.splice(i-1,3,summ(arr1));
            i-=2;
            arr1=[];
        }
        if(Arrayel[i]=="-"){
            arr1.push(Arrayel[i-1]);
            arr1.push(Arrayel[i+1]);
            Arrayel.splice(i-1,3,razn(arr1));
            i-=2;
            arr1=[];
        }
    }
    
    if (Arrayel[0]==Infinity){
        throw TypeError ("TypeError: Division by zero.");
    }else{
        return Arrayel[0];
    }
}

module.exports = {
    expressionCalculator
}