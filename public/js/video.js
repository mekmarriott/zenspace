var vid = document.getElementById('videoel');
var overlay = document.getElementById('overlay');
var overlayCC = overlay.getContext('2d');
var averages = {
    angry: 0,
    sad: 0,
    surprised: 0,
    happy: 0
}
var average = 0;
var count = 0;
var total = 0;
var avg = [];
var graph = new Rickshaw.Graph( {
    element: document.querySelector("#chart"),
    width: 580,
    height: 250,
    series: [ {
            color: 'steelblue',
            data: avg
    } ]
} );

/********** check and set up video/webcam **********/
function enablestart() {
    var startbutton = document.getElementById('startbutton');
    startbutton.value = "start";
    startbutton.disabled = null;
}

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
window.URL = window.URL || window.webkitURL || window.msURL || window.mozURL;
// check for camerasupport
if (navigator.getUserMedia) {
    // set up stream
    
    var videoSelector = {video : true};
    if (window.navigator.appVersion.match(/Chrome\/(.*?) /)) {
        var chromeVersion = parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10);
        if (chromeVersion < 20) {
            videoSelector = "video";
        }
    };

    navigator.getUserMedia(videoSelector, function( stream ) {
        if (vid.mozCaptureStream) {
            vid.mozSrcObject = stream;
        } else {
            vid.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
        }
        vid.play();
    }, function() {
        //insertAltVideo(vid);
        alert("There was some problem trying to fetch video from your webcam. If you have a webcam, please make sure to accept when the browser asks for access to your webcam.");
    });
} else {
    //insertAltVideo(vid);
    alert("This demo depends on getUserMedia, which your browser does not seem to support. :(");
}
vid.addEventListener('canplay', enablestart, false);

/*********** setup of emotion detection *************/
var ctrack = new clm.tracker({useWebGL : true});
ctrack.init(pModel);
function startVideo() {
    // start video
    vid.play();
    // start tracking
    ctrack.start(vid);
    // start loop to draw face
    drawLoop();
    // startSpeechToText();
}
function drawLoop() {
    requestAnimFrame(drawLoop);
    var cp = ctrack.getCurrentParameters();
    var er = ec.meanPredict(cp);
    if (er) {
        count += 1;
        total += er[1].value;
        average = total / count;
        avg.push({
            x: new Date().getTime(),
            y: average
        });
        document.getElementById("sad-average").innerHTML = average;
        graph.render(); 
    }
}

var ec = new emotionClassifier();
ec.init(emotionModel);
var emotionData = ec.getBlank();    