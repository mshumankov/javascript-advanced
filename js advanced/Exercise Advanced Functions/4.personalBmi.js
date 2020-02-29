function personalBmi(name, age, weight, height) {

  let personData = {
    name,
    personalInfo: {
      age,
      weight,
      height
    },
    BMI: Math.round(weight / ((height / 100) ** 2))

  }

  if (personData.BMI < 18.5) {
    personData.status = 'underweight';
  } else if (personData.BMI < 25) {
    personData.status = 'normal';
  } else if (personData.BMI < 30) {
    personData.status = 'overweight';
  } else {
    personData.status = 'obese';
    personData.recommendation = 'admission required'
  }
  console.log(personData);
}
personalBmi('Peter', 29, 75, 182);