function exec(fn, a, b){
    return fn(a, b)
}

const somarNoTerminal = (a, b) => console.log(a + b);

const subtrairNoTerminal = (w, z) => console.log(w - z);

const subtrair = (w, z) => w - z


exec(somarNoTerminal, 56, 38);
exec(subtrairNoTerminal, 182, 27)

const r = exec(subtrair, 50, 25)
console.log(r);

const cb = () => console.log('Exec...');
setInterval(cb, 1000)