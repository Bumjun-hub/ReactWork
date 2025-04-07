function ArrowFun() {
    const func1 = function(a,b){
        return a+b;

    }
    console.log(`${func1(3,4)}`);
    // console.log("func1: " + func1(3,4));
    const func2 = (a,b) => {
        return a+b;
    }
    const func3 = (a,b) => a+b;
    console.log(`${func3(4,5)}`)

    const func4 = a=> a+5
    console.log(`func4 : ${func4(7)}`)
}
export default ArrowFun;