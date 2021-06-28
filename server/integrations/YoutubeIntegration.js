const axios = require("axios");
const { YOUTUBE_API_KEY } = require("../config/config");

class YoutubeIntegration {

    searchTerm(term, res) {
        const url = `https://youtube.googleapis.com/youtube/v3/search?q=${term}%20playlist&key=${YOUTUBE_API_KEY}&maxResults=50`;

        axios.get(url).then(results => {
            res.send(this.returnPlaylist(results.data.items));
        });
    }

    returnPlaylist(results){
        const filteredResults = results.filter((result) => {
            return result.id.kind === "youtube#playlist";
        });
        return filteredResults && filteredResults.length > 0 ?
            this.formatPlaylistIdUrl(filteredResults[this.getRandomInt(filteredResults.length - 1)].id.playlistId) :
            "https://www.youtube.com/embed/playlist?list=PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj";
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    formatPlaylistIdUrl(playlistId) {
        return `https://www.youtube.com/embed/playlist?list=${playlistId}`;
    }

}

module.exports = YoutubeIntegration;
