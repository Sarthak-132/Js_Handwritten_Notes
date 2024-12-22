const baseURL = `https://restcountries.com/v3.1`;

//  [1] AJAX call

const getCountryData01 = function (country) {
    // AJAX Call 1
    const request1 = new XMLHttpRequest();
    request1.open("GET", `${baseURL}/name/${country}`);
    request1.send();

    request1.addEventListener("load", function () {
        const data1 = JSON.parse(request1.responseText);
        console.log(data1[0].name.common);
        const nighbourAlpha1 = data1[0].borders[0];

        // AJAX Call 2
        const request2 = new XMLHttpRequest();
        request2.open("GET", `${baseURL}/alpha/${nighbourAlpha1}`);
        request2.send();

        request2.addEventListener("load", function () {
            const data2 = JSON.parse(request2.responseText);
            console.log(data2[0].name.common);
            const nighbourAlpha2 = data2[0].borders[0];

            // AJAX Call 3
            const request3 = new XMLHttpRequest();
            request3.open("GET", `${baseURL}/alpha/${nighbourAlpha2}`);
            request3.send();

            request3.addEventListener("load", function () {
                const data3 = JSON.parse(request3.responseText);
                console.log(data3[0].name.common);
                const nighbourAlpha3 = data3[0].borders[0];
            });
        });
    });
};

getCountryData01("india");

//  [2] fetch
const getCountryData02 = function (country) {
    fetch(`${baseURL}/name/${country}`)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data[0].name.common);
            const n1 = data[0].borders[0];
            return fetch(`${baseURL}/alpha/${n1}`);
        })
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data[0].name.common);
            const n2 = data[0].borders[0];
            return fetch(`${baseURL}/alpha/${n2}`);
        })
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data[0].name.common);
        });
};

getCountryData02("india");

//  [3] Async-Await
