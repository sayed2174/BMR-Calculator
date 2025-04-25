function calculateBMR(gender, weight, height, age) {
    if (gender === 'Male') {
        return 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
        return 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }
}

function calculateProteinIntake(weight, proteinGoal) {
    if (proteinGoal === 'Muscle Gain') {
        return weight * 2.0;  // 2g per kg of body weight
    } else if (proteinGoal === 'Weight Loss') {
        return weight * 1.2;  // 1.2g per kg of body weight
    } else {
        return weight * 0.8;  // 0.8g per kg of body weight
    }
}
    document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();
    let formData = new FormData(this);
    let data = Object.fromEntries(formData.entries());
    // formData.forEach((value, key) => {
    //     data[key] = value;
    // });

    // fetch('/submit' ,{
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(data) 
    // })
    // .then((res)=>{res.json()})
    // .then((res)=>{console.log(res)})
    // .catch((err)=>{console('error: ',err)});
    // console.log(JSON.stringify(data));
    // formData.forEach((value, key) => {
    //     console.log(data[key]);
    // });
    let gender = data['Male'];
    let weight = data['weight']
    let height = data['height']
    let age = data['age']
    let proteinGoal = data['protein_goal']
    let bmr = calculateBMR(gender, weight, height, age);
    let proteinIntake = calculateProteinIntake(weight, proteinGoal);

    console.log("Calculated BMR:", Math.round(bmr), "kcal/day");
    console.log("Recommended Protein Intake:", proteinIntake, "grams/day");
    document.getElementById('r1').innerText=`Calories burn per day is ${Math.round(bmr)} kcal/day`;
    document.getElementById('r2').innerText=`Protein needs per day is ${Math.round(proteinIntake)} grams/day`;

});