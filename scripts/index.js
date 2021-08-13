// Set Copyright Year
function SetCopyrightYear() {
    // Log
    console.log("SetCopyrightYear() Called");
    document.getElementById("year").innerHTML=new Date().getFullYear();
}
// Get Latest Video
function GetLatestVideo() {
    // Set Up Request Variables
    const url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D"
    const channel = "UCTvgtn2oKlVQFndrAykFI5g";
    var request = new XMLHttpRequest();
    // Get Request
    request.open("GET", url+channel, false);
    request.send();
    // Find Latest Video
    const videos = JSON.parse(request.responseText)["items"];
    console.log(videos);
    const latest_video = videos[0];
    // Set Video
    document.getElementById("latest_video").href=latest_video["link"];
}
