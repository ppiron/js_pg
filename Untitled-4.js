const ArraySeq = (array) =>
{
    let counter = 0;
    return {
        next() {
            if (counter <= array.length - 1) {
                counter ++;
                return array[counter - 1];
            }
            return null;
        }
    }
}

const RangeSeq = (from, to) =>
{
    let arr = [];
    for (let i = from; i <= to; i++) {
        arr.push(i);
    }
    return ArraySeq(arr);
}

//const seq = ArraySeq([1,2,3]);

const logFive = (seq) => {
    for (let i = 0; i < 5; i++) {
        let el = seq.next();
        if (el) {
            console.log(el);
        }
        else {
            break;
        }
        
    }
}

logFive(ArraySeq([1,2,5,8,3,5]));
logFive(RangeSeq(100, 1000));