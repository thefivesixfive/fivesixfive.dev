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

// Grab Video Deoms
function BuildVideoDemos(url)
{
    BuildDemos(url, 999);
}
function BuildDemos(url, iters)
{
    // Grab Indexing File
    var index = new XMLHttpRequest();
    index.open("GET", url, true);
    index.send();
    // Build Demos from Index
    index.onload = function()
    {
        // Split index
        demo_list = this.responseText.split("\n");
        // Loop through each one
        for (var i=0; (i<demo_list.length)&&(i<(iters*2)+1); i+=2)
        {
            BuildDemo(demo_list[i], demo_list[i+1]);
        }
    }
}

// Build Demo from Link
function CompleteBody()
{
    // Grab Parent Element
    var demo_container = document.getElementById("demos");
    // Set text
    var req = new XMLHttpRequest();
    req.open("GET", "homepage/.txt", true);
    req.send();
    // When REQ Loads
    req.onload = function()
    {
        if (req.status == 200)
        {
            // Important Text
            homepage_paragraphs = this.responseText.split("!ENDPAR");
            for (let index = 0; index < homepage_paragraphs.length; index++)
            {
                document.getElementById("homepageparagraph"+index) = homepage_paragraphs[index];
            }            
        }
    }
}