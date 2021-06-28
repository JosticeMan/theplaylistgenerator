const axios = require("axios");


const apikey = "AIzaSyAKbrbVkfYltCUUIXsWIGthBlF6c85qTm0"
class YoutubeIntegration {

    searchTerm(term, res) {
        const url = `https://youtube.googleapis.com/youtube/v3/search?q=${term}%20playlist&key=${apikey}&maxResults=50`;

        axios.get(url).then(results => {
            res.send(this.returnPlaylist(results.data.items));
        });
    }

    returnPlaylist(results){
        const filteredResults = results.filter((result) => {
            return result.id.kind === "youtube#playlist";
        });
        return filteredResults && filteredResults.length > 0 ?
            this.formatPlaylistIdUrl(filteredResults[0].id.playlistId) :
            "https://www.youtube.com/playlist?list=PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj";
    }

    formatPlaylistIdUrl(playlistId) {
        return `https://www.youtube.com/playlist?list=${playlistId}`;
    }

}

module.exports = YoutubeIntegration;
