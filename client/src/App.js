import React from 'react'
import ImageLinkForm from './components/ImageLinkForm'
import Logo from './components/Logo';
import * as ml5 from "ml5";



const InputChange = (event) => {
  document.getElementById('img').src = event.target.value;
  document.getElementById('result').innerText = '';
  document.getElementById('confidence').innerText = '';
}

const ButtonSubmit = () => {

  try {
    // Initialize the Image Classifier method with MobileNet
    var img = document.getElementById('img')
    img.crossOrigin = "anonymous";


    const classifier = ml5.imageClassifier('MobileNet', modelLoaded);
    // When the model is loaded
    function modelLoaded() {
      console.log('Model Loaded!');
    }

    // Put the image to classify inside a variable
    // Make a prediction with a selected image
    classifier.predict(img, 5, function (err, results) {
      // print the result in the console
      if (err) {
        console.log('Error');
      }
      else {
        console.log(results)

        // console.log(results[0].confidence)


        document.getElementById('result').innerHTML = results[0].label;
        let probability = results[0].confidence;

        probability = Math.floor(probability * 10000) / 100 + "%";
        document.getElementById('confidence').innerHTML = 'Probability : ' + probability;


      }
    });
  }
  catch (err) {
    console.log('Error!');
  }
}

export default function App() {

  return (
    < >
      <Logo />
      <ImageLinkForm
        onInputChange={InputChange}
        onButtonSubmit={ButtonSubmit}
      />
    </>
  )
}
