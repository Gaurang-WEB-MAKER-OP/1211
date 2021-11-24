function setup() {
    canvas = ceatecanvas(300, 300);
    canvas = center();
    video = createCapture(VEDIO);
    classifier = ml5.imgClassifier('MobileNet', modleLoded)
}

function modelLoaded() {
    console.log('Model Loded')
}

function draw() {
    image(vedio, 0, 0, 300, 300)
    classifier.classify(vedio, gotresults);
}

var previous_results = '';

function gotresults(error, results) {
    if (error) {
        console.error(error);
    } else {
        if ((results[0].confodence > 0.5) && (previous_results != result[0].label)) {
            console.log(results);
            previous_result = result[0].label;
            var synth = window.speechSynthesis;
            speak_data = 'Object detected is-' + results[0].label;
            var utterThis = new speechSythesisUtterence(speak_data);
            synth.speak(utterThis);

            document.getElementById("result_object_name").innerHTML = results[0].label;
            document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);


        }
    }
}