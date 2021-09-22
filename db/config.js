module.exports = {
    baseUrl: {
        protocol: 'http',
        hostname: 'api.openweathermap.org',
        path: '/data/2.5/weather',
    },

    query: {
        name: 'q',
        id: 'id',
        coordinates: {
            latitude: 'lat',
            longitude: 'lon',
        },
        zipcode: 'zip',
    },

    APIkey: 'a493fa2bb5106619493a42788771ad6c',
};