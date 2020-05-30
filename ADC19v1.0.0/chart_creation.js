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
                    label: 'ricoverati',
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
                data:  getDataSep(lines,1), // chiamo la funzione getData dando il path salvato prima e dicendo che voglio i dati della y per il primo grafico(0-299), inoltre indico sempre di aspettare la funzione
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
                data:  getDataSep(lines,1), // chiamo la funzione getData dando il path salvato prima e dicendo che voglio i dati della y per il primo grafico(0-299), inoltre indico sempre di aspettare la funzione
                fill: false,
                borderColor: 'rgba(2,6,19,73)',
                borderWidth: 1
            }, {
                label: "esposti con indice di infettività variabile",
                data: getDataSep(lines, 2), // come sopra solo che voglio i dati da 300 a 599
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
                data:  getDataSep(lines,1), // chiamo la funzione getData dando il path salvato prima e dicendo che voglio i dati della y per il primo grafico(0-299), inoltre indico sempre di aspettare la funzione
                fill: false,
                borderColor: 'rgba(29,106,199,0.73)',
                borderWidth: 1
            }, {
                label: "",
                data: getDataSep(lines, 2), // come sopra solo che voglio i dati da 300 a 599
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
                data:  getDataSep(lines,1), // chiamo la funzione getData dando il path salvato prima e dicendo che voglio i dati della y per il primo grafico(0-299), inoltre indico sempre di aspettare la funzione
                fill: false,
                borderColor: 'rgba(30,187,19,0.75)',
                borderWidth: 1
            }, {
                label: "",
                data: getDataSep(lines, 2), // come sopra solo che voglio i dati da 300 a 599
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
                text: "Ricoverati con indice di infettività variante",
                fontsize: 50
            },
            legend: {
                display: false,
            }
        }
    });
}