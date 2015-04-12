
/* G  R A P H S * /
                        /*
                         * Note how the 'data' object is added to here before rendering to provide decoration information.
                         * <p>
                         * This is purposefully done here instead of in data.js as an example of how data would come from a server
                         * and then have presentation information injected into it (rather than as separate arguments in another object)
                         * and passed into LineGraph.
                         *
                         * Also, CSS can be used to style colors etc, but this is also doable via the 'data' object so that the styling
                         * of different data points can be done in code which is often more natural for display names, legends, line colors etc
                         */
// add presentation logic for 'data' object using optional data arguments
var data = {
    "start": 1336594920000,
    "end": 1336680960000,
    "step": 120000,
    "names": ["Sentiment"],
    "values": [
        [10.0, 4.8, 4.7, 4.8, 4.9, 5.1, 5.3, 5.2, 5.0, 4.8, 4.7, 4.8, 4.9, 5.1, 5.3, 5.4, 5.0, 4.8, 4.6, 4.6, 4.6, 4.3, 4.2, 4.2, 4.1, 4.0, 4.1, 4.2, 4.3, 4.5, 4.7, 4.8, 4.9, 5.1, 5.2, 5.2, 5.2, 5.3, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0, 5.9, 5.8, 5.6, 5.6, 5.6, 5.6, 5.6, 5.4, 5.3, 5.2, 5.3, 5.4, 5.5, 5.4, 5.4, 5.0, 4.8, 4.7, 4.8, 4.9, 5.1, 5.3, 5.4, 5.0, 4.8, 4.6, 4.6, 4.6, 4.3, 4.2, 4.2, 4.1, 4.0, 4.1, 4.2, 4.3, 4.5, 4.7, 4.8, 4.9, 5.1, 5.2, 5.2, 5.2, 5.3, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0, 5.9, 5.8, 5.6, 5.6, 5.6, 5.6, 5.6, 5.4, 5.3, 5.2, 5.3, 5.4, 5.5, 5.4, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.7, 5.6, 5.5, 5.4, 5.3, 5.2, 5.1, 5.0, 4.9, 4.8, 4.7, 4.6, 4.5, 4.4, 4.3, 4.2, 4.1, 4.0, 4.0, 4.1, 4.2, 4.1, 4.2, 4.1, 4.0, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.4, 5.0, 4.8, 4.6, 4.6, 4.6, 4.3, 4.2, 4.2, 4.1, 4.0, 4.1, 4.2, 4.3, 4.5, 4.7, 4.8, 4.9, 5.1, 5.2, 5.2, 5.2, 5.3, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0, 5.9, 5.8, 5.6, 5.6, 5.6, 5.6, 5.6, 5.4, 5.3, 5.2, 5.3, 5.4, 5.5, 5.4, 5.4, 5.0, 4.8, 4.7, 4.8, 4.9, 5.1, 5.3, 5.4, 5.0, 4.8, 4.6, 4.6, 4.6, 4.3, 4.2, 4.2, 4.1, 4.0, 4.1, 4.2, 4.3, 4.5, 4.7, 4.8, 4.9, 5.1, 5.2, 5.2, 5.2, 5.3, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0, 5.9, 5.8, 5.6, 5.6, 5.6, 5.6, 5.6, 5.4, 5.3, 5.2, 5.3, 5.4, 5.5, 5.4, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.7, 5.6, 5.5, 5.4, 5.3, 5.2, 5.1, 5.0, 4.9, 4.8, 4.7, 4.6, 4.5, 4.4, 4.3, 4.2, 4.1, 4.0, 4.0, 4.1, 4.2, 4.1, 4.2, 4.1, 4.0, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.2, 5.2, 5.2, 5.3, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0, 5.9, 5.8, 5.6, 5.6, 5.6, 5.6, 5.6, 5.4, 5.3, 5.2, 5.3, 5.4, 5.5, 5.4, 5.4, 5.0, 4.8, 4.7, 4.8, 4.9, 5.1, 5.3, 5.4, 5.0, 4.8, 4.6, 4.6, 4.6, 4.3, 4.2, 4.2, 4.1, 4.0, 4.1, 4.2, 4.3, 4.5, 4.7, 4.8, 4.9, 5.1, 5.2, 5.2, 5.2, 5.3, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0, 5.9, 5.8, 5.6, 5.6, 5.6, 5.6, 5.6, 5.4, 5.3, 5.2, 5.3, 5.4, 5.5, 5.4, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.7, 5.6, 5.5, 5.4, 5.3, 5.2, 5.3, 5.4, 5.5, 5.4, 5.4, 5.0, 4.8, 4.7, 4.8, 4.9, 5.1, 5.3, 5.4, 5.0, 4.8, 4.6, 4.6, 4.6, 4.3, 4.2, 4.2, 4.1, 4.0, 4.1, 4.2, 4.3, 4.5, 4.7, 4.8, 4.9, 5.1, 5.2, 5.2, 5.2, 5.3, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0, 5.9, 5.8, 5.6, 5.6, 5.6, 5.6, 5.6, 5.4, 5.3, 5.2, 5.3, 5.4, 5.5, 5.4, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.7, 5.6, 5.5, 5.4, 5.3, 5.2, 5.1, 5.0, 4.9, 4.8, 4.7, 4.6, 4.5, 4.4, 4.3, 4.2, 4.1, 4.0, 4.0, 4.1, 4.2, 4.1, 4.2, 4.1, 4.0, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0, 4.8, 4.6, 4.6, 4.6, 4.3, 4.2, 4.2, 4.1, 4.0, 4.1, 4.2, 4.3, 4.5, 4.7, 4.8, 4.9, 5.1, 5.2, 5.2, 5.2, 5.3, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0, 5.9, 5.8, 5.6, 5.6, 5.6, 5.6, 5.6, 5.4, 5.3, 5.2, 5.3, 5.4, 5.5, 5.4, 5.4, 5.0, 4.8, 4.7, 4.8, 4.9, 5.1, 5.3, 5.4, 5.0, 4.8, 4.6, 4.6, 4.6, 4.3, 4.2, 4.2, 4.1, 4.0, 4.1, 4.2, 4.3, 4.5, 4.7, 4.8, 4.9, 5.1, 5.2, 5.2, 5.2, 5.3, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0, 5.9, 5.8, 5.6, 5.6, 5.6, 5.6, 5.6, 5.4, 5.3, 5.2, 5.3, 5.4, 5.5, 5.4, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.7, 5.6, 5.5, 5.4, 5.3, 5.2, 5.1, 5.0, 4.9, 4.8, 4.7, 4.6, 4.5, 4.4, 4.3, 4.2, 4.1, 4.0, 4.0, 4.1, 4.2, 4.1, 4.2, 4.1, 4.0, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.2, 5.2, 5.2, 5.3, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0, 5.9, 5.8, 5.6, 5.6, 5.6, 5.6, 5.6, 5.4, 5.3, 5.2, 5.3, 5.4, 5.5, 5.4, 5.4, 5.0, 4.8, 4.7, 4.8, 4.9, 5.1, 5.3, 5.4, 5.0, 4.8, 4.6, 4.6, 4.6, 4.3, 4.2, 4.2, 4.1, 4.0, 4.1, 4.2, 4.3, 4.5, 4.7, 4.8, 4.9, 5.1, 5.2, 5.2, 5.2, 5.3, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0, 5.9, 5.8, 5.6, 5.6, 5.6, 5.6, 5.6, 5.7, 5.9, 6.0, 5.9, 5.9, 5.9, 5.8, 5.7, 5.6, 5.7, 5.8, 5.7, 5.7, 5.7, 5.6, 5.5, 5.6, 5.7, 5.8, 5.9, 5.8, 5.7, 5.6, 5.5, 5.4, 5.5, 5.4, 5.5, 5.6, 5.7, 5.8, 5.7, 5.6, 5.6, 5.6]
    ]
};

data["displayNames"] = ["sentiment"];
data["colors"] = ["darkblue"];
data["scale"] = "linear";
data["rounding"] = [2];
data["numAxisLabelsLinearScale"] = 10;


var end = (new Date).getTime();
var start = end - 43020000
data["end"] = end;
data["start"] = start;





// create graph now that we've added presentation config
var l1 = new LineGraph({
    containerId: 'graph1',
    data: data
});

function addData(datum) {
    end = (new Date).getTime();
    var dataA = {
        "start": end - 43020000,
        "end": end,
        "step": 240000,
        "names": ["sentiment"],
        "values": [
            [241243]
        ]
    };
    // dataA.values[0][0] = datum;
    dataA.values[0][0] = datum;




    dataA.start = dataA.start + dataA.step;
    dataA.end = dataA.end + dataA.step;
    l1.slideData(dataA);
}


setInterval(function() {
    /*
     * The following will simulate live updating of the data (see dataA, dataB, dataC etc in data.js which are real examples)
     * This is being simulated so this example functions standalone without a backend server which generates data such as data.js contains.
     */
    // for each data series ...
    var newData = [];
    data.values.forEach(function(dataSeries, index) {
        // take the first value and move it to the end
        // and capture the value we're moving so we can send it to the graph as an update
        var v = dataSeries.shift();
        dataSeries.push(v);
        // put this value in newDatsa as an array with 1 value
        newData[index] = [v];
    })

    // we will reuse dataA each time
    dataA.values = newData;
    // increment time 1 step
    dataA.start = dataA.start + dataA.step;
    dataA.end = dataA.end + dataA.step;

    l1.slideData(dataA);
}, 10000000);