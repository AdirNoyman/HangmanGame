// jshint esversion: 8
'use strict';

// New code
const getPuzzleWord = async wordCount => {

    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);

    if (response.status === 200) {

        const data = await response.json();
        return data.puzzle;
    } else {

        throw new Error('Unable to get puzzle');
    }
};


// Making a second HTTP request

const getCountry = async countryCode => {

    const response = await fetch('http://restcountries.eu/rest/v2/all');

    if (response.status === 200) {

        const data = await response.json();
        return data.find(country => country.alpha2Code === countryCode);

    } else {

        throw new Error('Unable to fetch country');
    }

};


// Making a third HTTP request
const getLocation = async () => {

    const response = await fetch('http://ipinfo.io/json?token=c0757743a4ef89');

    if (response.status === 200) {

        return response.json();

    } else {

        throw new Error('Unable to fetch country');
    }

};

const getCurrentCountry = async () => {

    const location = await getLocation();
    return getCountry(location.country);

};




