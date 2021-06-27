const axios = require("axios");


const apikey = "AIzaSyAKbrbVkfYltCUUIXsWIGthBlF6c85qTm0"
class YoutubeIntegration {

    searchTerm(term) {
        const service = google.youtube('v3');
        service.channel.list()
        const fetch = require('node-fetch');
        const url = "https://youtube.googleapis.com/youtube/v3/search?q="+ term +" playlist&key="+apikey;

        const playlist = axios.get(url).then(r => {return returnPlaylist(r)})


        return playlist
    }

    returnPlaylist(r){
        foreach
    }

}

module.exports = YoutubeIntegration;
