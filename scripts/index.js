// Set Copyright Year
function SetCopyrightYear() {
    // Log
    console.log("SetCopyrightYear() Called");
    document.getElementById("year").innerHTML=new Date().getFullYear();
}
// Menu Hamburger
function Hamburger() {
    // Get Navbar
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.left == "100vw") {
        sidebar.style.left = "0vw";
    } else {
        sidebar.style.left = "100vw";
    }
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
    // Set Video
    for (let video = 0; video < 3; video++) {
        // Get Video via Index
        var latest_video = videos[video];
        // Get Element
        var video_element = document.getElementById("videospagevideo"+video.toString())
    }
}
