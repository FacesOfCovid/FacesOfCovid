import axios from 'axios';

export default {
    addMemorial: function (obj) {
        console.log("Adding memorial ");
        return axios.post('/api/posts', obj);
    },
    getMemorials: function () {
        console.log("Getting all memorials");
        return axios.get("/api/memorials");
    },
    getOneMemorial: function (id) {
        console.log("Getting memorial " + id);
        return axios.get("/api/memorials/" + id);
    },
    // updateMemorial: function (id, obj) {
    //     console.log("Updating memorial " + id);
    //     return axios.put('/api/posts/' + id, obj);
    // },
    // deleteMemorial: function (id) {
    //     console.log("Deleting memorial " + id);
    //     return axios.delete('/api/posts/' + id);
    // },
    // addProfile: function (id, obj) {
    //     console.log("Adding profile");
    //     return axios.post('/api/profiles/' + obj);
    // },
    // updateProfile: function (id, obj) {
    //     console.log("Updating profile " + id);
    //     return axios.put('/api/profiles/' + id, obj);
    // }
};