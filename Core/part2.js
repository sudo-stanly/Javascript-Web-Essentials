export default class Core {
    constructor(){ }

    intro(){
        console.log("What is Javascript?");
    }

    //random
    count(n){
        if(n <= 0){
            return;
        }
        this.count(n - 1);
        // console.log(n);
        if(n % 2 === 0){
            console.log(`[EVEN] -> ${n}`)
        } else{
            console.log(`[ODD] -> ${n}`)
        }
    }

    t1(n){
        if(n <= 0){
            return;
        }
        this.t1(n - 1);
        if(n % 3 == 0){
            console.log(`[MULTIPLE OF 3] -> ${n}`);
        } else{
            console.log(`[NOT MULTIPLE OF 3] -> ${n}`);
        }
    }

    t2(n){
        if(n <= 0){
            return;
        }
        this.t2(n - 1);
        console.log(`${n} -> ${n * n}`);
    }

    t3(n){
        if(n <= 0){
            return;
        }
        this.t3(n - 1);
        console.log(`${n} -> ${n * (n - 1)}`);
    }

    t4(n){
        if(n <= 0){
            return;
        }
        console.log(n);
        this.t4(n - 1);
    }

    t5(n, i){
        if (n <= 1) {
            console.log(`[NOT PRIME] -> ${n}`);
            return false;
        }
        if (i * i > n) {
            console.log(`[PRIME] -> ${n}`);
            return true;
        }
        if (n % i === 0) {
            console.log(`[NOT PRIME] -> ${n}`);
            return false;
        }
        this.t5(n, i + 1);
    }

    Fibonacci(T1, T2, n, index){
        if(index >= n) return;
        let prev1 = index - 2 >= 0 ? index - 2 : 0;
        let prev2 = index - 1 >= 0 ? index - 1 : 1;
        console.log(`f(${index}) = f(${prev1}) + f(${prev2})`);
        console.log(`\t = ${T1}`);
        this.Fibonacci(T2, T1 + T2, n, index + 1);
    }
}
