
const greetUser = (username) =>{
    console.log(`hello, ${username}`);
}


const getSumofArray = (arr) =>{
      let ans =  arr.reduce((acc,cur)=>{
            return acc + cur;
        },0)

        console.log(ans);
}


const removeDuplicates = (arr) =>{
    let ansArray = [];
    for(let i = 0 ; i < arr.length ; i++){
        let ele = arr[i];

        if(!ansArray.includes(ele)){
            ansArray.push(ele)
        }
}
return ansArray
    
}


const getProductofArray = (arr) =>{
    let ans  = arr.reduce((acc,cur)=>{
            return acc * cur;
    },1)

    return ans
}


const findMaxInArray = (arr) =>{
       let ans  = Math.max(...arr)
       return ans;
}


const findMinInArray = (arr) =>{
    let ans  = Math.min(...arr)
    return ans;
}


const generateRandomColor = () =>{
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const flattenArray = (arr) => {
   let ans  =  arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    }, []);

    return ans;
};

const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};


const Firstlettercapital = (str) => {
    return str.replace(/\b\w/g, char => char.toUpperCase());
};


module.exports = {
    greetUser,
    getSumofArray,
    removeDuplicates,
    getProductofArray,
    findMaxInArray,
    findMinInArray,
    generateRandomColor,
    flattenArray,
    deepClone,  
    Firstlettercapital 

};