
const {google} = require('googleapis');

const auth = new google.auth.GoogleAuth({
    keyFile: 'C:\\Users\\Andrew Zhou\\IdeaProjects\\playlistgenerator\\server\\meta-aura-318119-35566082ca58.json',
    scopes : ['https://www.googleapis.com/youtube/v3/search']
});
const authClient =  async () => {return await auth.getClient()};
const authResponse = authClient().then((response) => {
    return response
})
setTimeout(()=>{console.log(authResponse)}, 50);


class YoutubeIntegration {

    searchTerm(term) {
        const service = google.youtube('v3');
        service.channel.list()
        const fetch = require('node-fetch');
        console.log("Youtube API Attempt")
        fetch('https://youtube.googleapis.com/youtube/v3/search?part=what%20is%20up&key=[AIzaSyDQ6Ds8NnLQsAQk1-aQlYE6vgyt61u69fU]'
        ).then((res) => {
            console.log("Fetch Response:")
            console.log(res)
        }).catch((err)=> {
            console.log("Error Occurred \n", err)
        });
    }

}

module.exports = YoutubeIntegration;
