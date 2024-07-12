//Program to find the largest number from the given array
const numbers=[23,56,11,73,288,912,8,63]
let largest = numbers[0]
for (const num of numbers){
    if(num>largest){
        largest=num
    }
}
console.log(`Largest number in a given array is`,largest)

//Program to find the sum of odd numbers from the given array
const number = [5, 8, 10, 20, 7, 13,87,34,12,93,103];
let sum = 0;
for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 == 1) {
        sum += number[i];
    }
}
console.log('Sum of odd numbers is', sum);

//Program to say Hello to all elements from any array use key of loop
const nameElement = ['karishma', 'anshul', 'yashashree', 'shweta', 'anuradha', 'vidhi', 'punam', 'mayur', 'sejal']

for (let element of nameElement) {
    console.log("Hello", element);
}