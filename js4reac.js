

const comp= () => {
     return <div>ss </div>}


<button
    onClick={() => {
        console.log("hy");
    }}
></button>

    
let age=50;
//let b= age>18 && "zy";
let b= age>18 ? "zy" : "pa";

const comp= () =>{ 
    return age > 18 ? <div> zy</div> : <div> pa</div>;
};

const pers={
    name:"s",
    age:15,
    wed= false
};

const {name,age,wed} = pers;
const pers2= {...pers,name:"waltuh"}
const ages=[15,42]
const ages2={..,41}

let n1=["s","e","r"];
n1.map (()=> {
    return "waltuh" + "1";
});

let n2=[15,52,55];
n2.map((n) => {
    return <h1> {n}</h1>
});

let n2=[15,52,55];
n2.filter((n) => {
    return n !==15
});

Async + await + Fetch;