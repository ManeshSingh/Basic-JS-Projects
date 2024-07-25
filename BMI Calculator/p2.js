
let form = document.querySelector('form');

form.addEventListener('submit', function (e){
    e.preventDefault();  // it is necessary bcoz we have to display the details not to send the details to the database

    let height = parseInt(document.querySelector('#height').value);   // if the value is not an integer, then it will convert it to integer
    let weight = parseInt(document.querySelector('#weight').value);
    let result = document.querySelector('#result')

    if(height === '' || height<0 || isNaN(height)){
        result.innerHTML = "Please enter a valid height";
    }else if(weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML = "Please enter a valid weight";
    }else{
        height = height/100;

        height = height*height;
        let BMI = (weight/height).toFixed(1)
    
        if(BMI < 18.6){
            result.innerHTML = `Your BMI is ${BMI} and you are UnderWeight`
        }else if(BMI>=18.6 && BMI<=24.9){
            result.innerHTML = `Your BMI is ${BMI} and you are Normal`
        }else{
            result.innerHTML = `Your BMI is ${BMI} and you are OverWeight`
        }
    }

    
})



