let seir_testy = [];
let seir_test1y = [];
let seir_test2y = [];
let seir_test3y = [];
let seir_testx = [];

function create() { // vado a chiamare le funzioni per leggere i dati
    getdatas();
    getDataEsp();
    getDataInfe();
    getDataRecovered();
    getDataSens();
}

function getdatas() {
    $(document).ready(function () {
        $.ajax({
            url: "https://raw.githubusercontent.com/PieGroppelli/ADC19/master/sirsTest2.csv", // prendo i dati dal file raw di github
            type: 'get',
            dataType: 'text',
            success: function (data) {

                console.log("I got the data");

                //lines è un array che contiene le ricghe della tabella tranne le prime due che sono quella della intestazione
                let lines = data.split('\n').slice(2);


                for (let i = 0; i < lines.length; i++) { //faccio il for per dividere le righe in colonne
                    let temp = lines[i].split(";"); // divido la colonna

                    if (!isNaN(parseFloat(temp[0])) &&
                        !isNaN(parseFloat(temp[1])) &&
                        !isNaN(parseFloat(temp[4])) &&
                        !isNaN(parseFloat(temp[7])) &&
                        !isNaN(parseFloat(temp[10]))) {
                        //controllo di avere solo valori numerici e non lettere o altro

                        seir_testx.push(parseFloat(temp[0])); // per l'asse x di tutti sempre uguale
                        seir_testy.push(parseFloat(temp[1])); //Susceptible people
                        seir_test1y.push(parseFloat(temp[4])); //Exposed people v
                        seir_test2y.push(parseFloat(temp[7])); //Recovered people
                        seir_test3y.push(parseFloat(temp[10])); //Infectious people
                    }
                }
                createSeir();
            },
            error: function (jqXHR, textStatus, errorThrow) {

                console.log("I failed to get the data");

                console.log(textStatus);
            }
        });
    });
}

function getDataEsp() { //prima leggo i dati e poi chiamo la funzione per creare il grafico passando come parametro la varibile coi dati del grafico
    $(document).ready(function () {
        $.ajax({
            url: "https://raw.githubusercontent.com/PieGroppelli/ADC19/master/Exposed_people.csv",
            type: 'get',
            dataType: 'text',
            success: function (data) {
                let lines = data.split('\n').slice(3);
                createEsposti(lines);
            },
            error: function (jqXHR, textStatus, errorThrow) {
                console.log(textStatus);
            }
        });
    });
}
function getDataInfe() {
    $(document).ready(function () {
        $.ajax({
            url: "https://raw.githubusercontent.com/PieGroppelli/ADC19/master/Infectious_people.csv",
            type: 'get',
            dataType: 'text',
            success: function (data) {
                let lines = data.split('\n').slice(3);
                createInfetti(lines);
            },
            error: function (jqXHR, textStatus, errorThrow) {
                console.log(textStatus);
            }
        });
    });
}
function  getDataSens() {
    $(document).ready(function () {
        $.ajax({
            url: "https://raw.githubusercontent.com/PieGroppelli/ADC19/master/Susceptible_people.csv",
            type: 'get',
            dataType: 'text',
            success: function (data) {
                let lines = data.split('\n').slice(3);
                createSensibili(lines);
            },
            error: function (jqXHR, textStatus, errorThrow) {
                console.log(textStatus);
            }
        });
    });
}

function getDataRecovered() {
    $(document).ready(function () {
        $.ajax({
            url: "https://raw.githubusercontent.com/PieGroppelli/ADC19/master/Recovered_people.csv",
            type: 'get',
            dataType: 'text',
            success: function (data) {
                let lines = data.split('\n').slice(3);
                createRecovered(lines);
            },
            error: function (jqXHR, textStatus, errorThrow) {
                console.log(textStatus);
            }
        });
    });
}


function getDataSep(lines, n) {
    let y =[];
    let t = 300 * (n - 1);// indico con t il valore da cui devo aprtire all'interno del array lines con tutte le linee
    for (let i = 0; i < 300; i++) {
        let temp = lines[t].split(";");
        y.push(parseFloat(temp[1]));
        t++;
    }
    return y;
}

function createSeir() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our database
        data: {
            labels: seir_testx, // do i valori per la x
            datasets: [{
                label: 'infetti',
                data: seir_test3y, // do i valori per la y
                fill: false,
                borderColor: 'rgba(255,99,132,0.7)',
                borderWidth: 1
            }, {
                label: 'Persone con maggiore rischio di infezione',
                data: seir_testy,
                fill: false,
                borderColor: 'rgba(29,106,199,0.73)',
                borderWidth: 1
            },
                {
                    label: 'esposti',
                    data: seir_test1y,
                    fill: false,
                    borderColor: 'rgba(2,6,19,73)',
                    borderWidth: 1
                },
                {
                    label: 'guariti',
                    data: seir_test2y,
                    fill: false,
                    borderColor: 'rgba(30,187,19,0.75)',
                    borderWidth: 1
                }
            ]
        },

        options: {
            title: {
                text: "andamento previsto",
                fontsize: 50
            }
        }
    });
}
function createInfetti(lines) {
    var ctx = document.getElementById('myChart1').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our datase
        data: {
            labels: seir_testx, //indico i valori della x che sono sempre uguali
            datasets: [{
                label: '',
                data:  getDataSep(lines,1), // chiamo la funzione getDataSep dicendo che voglio i dati della y per il primo grafico(0-299)
                fill: false,
                borderColor: 'rgba(255,99,132,0.7)',
                borderWidth: 1
            }, {
                label: "",
                data: getDataSep(lines, 2), // come sopra solo che voglio i dati da 300 a 599
                fill: false,
                borderColor: 'rgba(255,99,132,0.7)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 3),
                fill: false,
                borderColor: 'rgba(255,99,132,0.7)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 4),
                fill: false,
                borderColor: 'rgba(255,99,132,0.7)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 5),
                fill: false,
                borderColor: 'rgba(255,99,132,0.7)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 6),
                fill: false,
                borderColor: 'rgba(255,99,132,0.7)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 7),
                fill: false,
                borderColor: 'rgba(255,99,132,0.7)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 8),
                fill: false,
                borderColor: 'rgba(255,99,132,0.7)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 9),
                fill: false,
                borderColor: 'rgba(255,99,132,0.7)',
                borderWidth: 1
            }, {
                label: "",
                data: getDataSep(lines, 10),
                fill: false,
                borderColor: 'rgba(255,99,132,0.7)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 11),
                fill: false,
                borderColor: 'rgba(255,99,132,0.7)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 12),
                fill: false,
                borderColor: 'rgba(255,99,132,0.7)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 13),
                fill: false,
                borderColor: 'rgba(255,99,132,0.7)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 14),
                fill: false,
                borderColor: 'rgba(255,99,132,0.7)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 15),
                fill: false,
                borderColor: 'rgba(255,99,132,0.7)',
                borderWidth: 1
            },  {
                label: "",
                data:  getDataSep(lines, 16),
                fill: false,
                borderColor: 'rgba(255,99,132,0.7)',
                borderWidth: 1
            }, {
                label: "",
                data: getDataSep(lines, 17),
                fill: false,
                borderColor: 'rgba(255,99,132,0.7)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 18),
                fill: false,
                borderColor: 'rgba(255,99,132,0.7)',
                borderWidth: 1
            }]
        },

        options: {
            title: {
                display: true,
                text: "Infetti con indice di infettività variante",
                fontsize: 50
            },
            legend: {
                display: false,
            }
        }
    });
}
function createEsposti(lines) {
    var ctx = document.getElementById('myChart2').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our datase
        data: {
            labels: seir_testx, //indico i valori della x che sono sempre uguali
            datasets: [{
                label: 'esposti con indice di infettività variabile',
                borderColor: 'rgb(14,12,13)',
                data:  getDataSep(lines,1),
                fill: false,
                borderColor: 'rgba(2,6,19,73)',
                borderWidth: 1
            }, {
                label: "esposti con indice di infettività variabile",
                data: getDataSep(lines, 2),
                fill: false,
                borderColor: 'rgba(2,6,19,73)',
                borderWidth: 1
            }, {
                label: "esposti con indice di infettività variabile",
                data:  getDataSep(lines, 3),
                fill: false,
                borderColor: 'rgba(2,6,19,73)',
                borderWidth: 1
            }, {
                label: "esposti con indice di infettività variabile",
                data:  getDataSep(lines, 4),
                fill: false,
                borderColor: 'rgba(2,6,19,73)',
                borderWidth: 1
            }, {
                label: "esposti con indice di infettività variabile",
                data:  getDataSep(lines, 5),
                fill: false,
                borderColor: 'rgba(2,6,19,73)',
                borderWidth: 1
            }, {
                label: "esposti con indice di infettività variabile",
                data:  getDataSep(lines, 6),
                fill: false,
                borderColor: 'rgba(2,6,19,73)',
                borderWidth: 1
            }, {
                label: "esposti con indice di infettività variabile",
                data:  getDataSep(lines, 7),
                fill: false,
                borderColor: 'rgba(2,6,19,73)',
                borderWidth: 1
            }, {
                label: "esposti con indice di infettività variabile",
                data:  getDataSep(lines, 8),
                fill: false,
                borderColor: 'rgba(2,6,19,73)',
                borderWidth: 1
            }, {
                label: "esposti con indice di infettività variabile",
                data:  getDataSep(lines, 9),
                fill: false,
                borderColor: 'rgba(2,6,19,73)',
                borderWidth: 1
            }, {
                label: "esposti con indice di infettività variabile",
                data: getDataSep(lines, 10),
                fill: false,
                borderColor: 'rgba(2,6,19,73)',
                borderWidth: 1
            }, {
                label: "esposti con indice di infettività variabile",
                data:  getDataSep(lines, 11),
                fill: false,
                borderColor: 'rgba(2,6,19,73)',
                borderWidth: 1
            }, {
                label: "esposti con indice di infettività variabile",
                data:  getDataSep(lines, 12),
                fill: false,
                borderColor: 'rgba(2,6,19,73)',
                borderWidth: 1
            }, {
                label: "esposti con indice di infettività variabile",
                data:  getDataSep(lines, 13),
                fill: false,
                borderColor: 'rgba(2,6,19,73)',
                borderWidth: 1
            }, {
                label: "esposti con indice di infettività variabile",
                data:  getDataSep(lines, 14),
                fill: false,
                borderColor: 'rgba(2,6,19,73)',
                borderWidth: 1
            }, {
                label: "esposti con indice di infettività variabile",
                data:  getDataSep(lines, 15),
                fill: false,
                borderColor: 'rgba(2,6,19,73)',
                borderWidth: 1
            },  {
                label: "esposti con indice di infettività variabile",
                data:  getDataSep(lines, 16),
                fill: false,
                borderColor: 'rgba(2,6,19,73)',
                borderWidth: 1
            }, {
                label: "esposti con indice di infettività variabile",
                data: getDataSep(lines, 17),
                fill: false,
                borderColor: 'rgba(2,6,19,73)',
                borderWidth: 1
            }, {
                label: "esposti con indice di infettività variabile",
                data:  getDataSep(lines, 18),
                fill: false,
                borderColor: 'rgba(2,6,19,73)',
                borderWidth: 1
            }]
        },

        options: {
            title: {
                display: true,
                text: "Esposti con indice di infettività variante",
                fontsize: 50
            },
            legend: {
                display: false,
            }
        }
    });
}
function createSensibili(lines) {
    var ctx = document.getElementById('myChart3').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our datase
        data: {
            labels: seir_testx, //indico i valori della x che sono sempre uguali
            datasets: [{
                label: '',
                data:  getDataSep(lines,1),
                fill: false,
                borderColor: 'rgba(29,106,199,0.73)',
                borderWidth: 1
            }, {
                label: "",
                data: getDataSep(lines, 2),
                fill: false,
                borderColor: 'rgba(29,106,199,0.73)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 3),
                fill: false,
                borderColor: 'rgba(29,106,199,0.73)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 4),
                fill: false,
                borderColor: 'rgba(29,106,199,0.73)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 5),
                fill: false,
                borderColor: 'rgba(29,106,199,0.73)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 6),
                fill: false,
                borderColor: 'rgba(29,106,199,0.73)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 7),
                fill: false,
                borderColor: 'rgba(29,106,199,0.73)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 8),
                fill: false,
                borderColor:'rgba(29,106,199,0.73)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 9),
                fill: false,
                borderColor: 'rgba(29,106,199,0.73)',
                borderWidth: 1
            }, {
                label: "",
                data: getDataSep(lines, 10),
                fill: false,
                borderColor: 'rgba(29,106,199,0.73)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 11),
                fill: false,
                borderColor: 'rgba(29,106,199,0.73)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 12),
                fill: false,
                borderColor: 'rgba(29,106,199,0.73)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 13),
                fill: false,
                borderColor: 'rgba(29,106,199,0.73)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 14),
                fill: false,
                borderColor: 'rgba(29,106,199,0.73)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 15),
                fill: false,
                borderColor: 'rgba(29,106,199,0.73)',
                borderWidth: 1
            },  {
                label: "",
                data:  getDataSep(lines, 16),
                fill: false,
                borderColor: 'rgba(29,106,199,0.73)',
                borderWidth: 1
            }, {
                label: "",
                data: getDataSep(lines, 17),
                fill: false,
                borderColor: 'rgba(29,106,199,0.73)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 18),
                fill: false,
                borderColor: 'rgba(29,106,199,0.73)',
                borderWidth: 1
            }]
        },

        options: {
            title: {
                display: true,
                text: "Persone con maggiore rischio di infezione con indice di infettività variante",
                fontsize: 50
            },
            legend: {
                display: false,
            }
        }
    });
}

function createRecovered(lines) {
    var ctx = document.getElementById('myChart4').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our datase
        data: {
            labels: seir_testx, //indico i valori della x che sono sempre uguali
            datasets: [{
                label: '',
                data:  getDataSep(lines,1),
                fill: false,
                borderColor: 'rgba(30,187,19,0.75)',
                borderWidth: 1
            }, {
                label: "",
                data: getDataSep(lines, 2),
                fill: false,
                borderColor: 'rgba(30,187,19,0.75)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 3),
                fill: false,
                borderColor: 'rgba(30,187,19,0.75)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 4),
                fill: false,
                borderColor: 'rgba(30,187,19,0.75)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 5),
                fill: false,
                borderColor: 'rgba(30,187,19,0.75)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 6),
                fill: false,
                borderColor: 'rgba(30,187,19,0.75)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 7),
                fill: false,
                borderColor: 'rgba(30,187,19,0.75)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 8),
                fill: false,
                borderColor: 'rgba(30,187,19,0.75)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 9),
                fill: false,
                borderColor: 'rgba(30,187,19,0.75)',
                borderWidth: 1
            }, {
                label: "",
                data: getDataSep(lines, 10),
                fill: false,
                borderColor: 'rgba(30,187,19,0.75)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 11),
                fill: false,
                borderColor: 'rgba(30,187,19,0.75)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 12),
                fill: false,
                borderColor: 'rgba(30,187,19,0.75)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 13),
                fill: false,
                borderColor: 'rgba(30,187,19,0.75)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 14),
                fill: false,
                borderColor: 'rgba(30,187,19,0.75)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 15),
                fill: false,
                borderColor: 'rgba(30,187,19,0.75)',
                borderWidth: 1
            },  {
                label: "",
                data:  getDataSep(lines, 16),
                fill: false,
                borderColor: 'rgba(30,187,19,0.75)',
                borderWidth: 1
            }, {
                label: "",
                data: getDataSep(lines, 17),
                fill: false,
                borderColor: 'rgba(30,187,19,0.75)',
                borderWidth: 1
            }, {
                label: "",
                data:  getDataSep(lines, 18),
                fill: false,
                borderColor: 'rgba(30,187,19,0.75)',
                borderWidth: 1
            }]
        },

        options: {
            title: {
                display: true,
                text: "Guariti con indice di infettività variante",
                fontsize: 50
            },
            legend: {
                display: false,
            }
        }
    });
}