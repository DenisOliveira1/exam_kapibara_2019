// Denis Bernardes Oliveira

const filter = ht => {
    for(let key in ht){
        if (ht[key] <= 1){
            delete ht[key]
        }
    }
    return ht
}

const counter= ({ht, v}) => {
    for(let key in ht){
        for(let item of v){
            if (key == item){
                ht[key] += 1
            }
        }
    }
    return filter(ht)
}

v = [1,8,9,2,1,8,5,4,7,2,3,9,6,4,82,1,2,3,9,10,12,5,22,25,27,31,30,5,9,80,82,50,40,41,50]
//v = [1,1,2,3,3,4,5,5,5]
uniqueItems = new Set(v)
ht = {}
uniqueItems.forEach(element => {
    ht[element] = 0
});

params = {ht, v, uniqueItems}
answer = counter(params)
console.log(answer)
//console.log(Object.keys(answer).length)
