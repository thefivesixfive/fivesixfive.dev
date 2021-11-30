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

// Get Demo
function BuildVideoDemo(demo_name)
{
    url = "https://raw.githubusercontent.com/thefivesixfive/cdn.fivesixfive.dev/master/ytpost/"+demo_name;
    // Set image
    document.getElementById(demo_name).getElementsByClassName("demoimage")[0].setAttribute("src", url+"/.png");
    // Set text
    var req = new XMLHttpRequest();
    req.open("GET", url+"/.txt", true);
    req.send();
    // When REQ Loads
    req.onload = function()
    {
        if (req.status == 200)
        {
            var response = req.responseText.split("\n");
            // Set Image
            var demo = document.getElementById(demo_name).getElementsByClassName("demoimage")[0];
            var demo_children = document.getElementById(demo_name).getElementsByClassName("demotext")[0];
            // Title
            demo_children.getElementsByClassName("demotitle")[0].getElementsByTagName("p")[0].innerHTML = response[0];
            // Description
            demo_children.getElementsByClassName("demodesc")[0].getElementsByTagName("p")[0].innerHTML = response[1];
            // Links
            var demo_links = demo_children.getElementsByClassName("demolinks")[0].getElementsByTagName("a");
            for (var link_index = 0; link_index < demo_links.length; link_index++)
            {
                var response_index = link_index * 2
                demo_links[link_index].setAttribute("href", response[response_index+2]);
                demo_links[link_index].innerHTML = response[response_index+3];
            }
        }
    }
}