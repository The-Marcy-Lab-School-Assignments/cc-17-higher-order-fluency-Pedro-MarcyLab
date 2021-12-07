//write your code here
const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin']
const numbers = [22, 15, 1114, 416, 37, 4]
 
const pluralize = (words) => {
    return words.map(word => word + 's')
}


console.log(pluralize(animals))
// const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin']
// const map = animals.map(x => x + 's')
// console.log(map)
const uppercase = (words) => {
    return words.map(word => words.substring(0,1).toUpperCase() + words.slice(1))
}
const longWords = (words) => {
    return words.fliter(word => word.length > 3)
}
const shortWords = (words) => {
    return words.fliter(word => word.length < 5)
}
const oddLength = (words) => {
    return words.filter(word => word.length % 2 === 1)
}
const longToShort = (words) => {
    return words.sort((a,b) => b.length - a.length)
}
const sum = (words) => {
    return words.reduce((previosValue, currentValue) => previosValue + currentValue)
}
console.log(sum(numbers));