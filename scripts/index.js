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
function BuildDemo(url, demo_name)
{
    // Grab Parent Element
    var demo_container = document.getElementById("demos");
    // Set text
    var req = new XMLHttpRequest();
    req.open("GET", url+"/.txt", true);
    req.send();
    // When REQ Loads
    req.onload = function()
    {
        if (req.status == 200)
        {
            // Important Text
            demo_fill_text = this.responseText.split("\n");

            // Create Demo Element
            var demo = document.createElement("div")
            demo.id = demo_name;
            demo.classList = ["demo centered"];
            demo_container.appendChild(demo);

            // Add Wrap
            var demowrap = document.createElement("div");
            demowrap.classList = ["demowrap"];
            demo.appendChild(demowrap);

            // Add Image
            var demoimage = document.createElement("img");
            demoimage.classList = ["demoimage"];
            demoimage.src = url+"/.png";
            demowrap.appendChild(demoimage);

            // Add Text Wrapper
            var demotext = document.createElement("div");
            demotext.classList = ["demotext"];
            demowrap.appendChild(demotext);

            // Add Text Objects
            var demotitle = document.createElement("div");
            demotitle.classList = ["demosec demotitle"];

            var innerText = document.createElement("p");
            innerText.innerHTML = demo_fill_text[0];
            demotitle.appendChild(innerText);
            demotext.appendChild(demotitle);

            var demodesc = document.createElement("div");
            demodesc.classList = ["demosec demodesc"];

            var innerText = document.createElement("p");
            innerText.innerHTML = demo_fill_text[1];
            demodesc.appendChild(innerText);
            demotext.appendChild(demodesc);

            // Link Wrapper
            var demolinks = document.createElement("div");
            demolinks.classList = ["demosec demolinks"];
            demotext.appendChild(demolinks);


            // Links
            var link_count = (demo_fill_text.length - 2)/2;
            // Loop through and add links
            for (var link_num=0; link_num < link_count; link_num++)
            {
                var demolink = document.createElement("a");
                demolink.classList = ["demolink"]
                demolink.setAttribute("target", "_blank");
                demolink.setAttribute("rel", "noreferrer noopener");
                // Set Link Text
                var index = (link_num*2)+2;
                demolink.href = demo_fill_text[index];
                demolink.innerHTML = demo_fill_text[index+1];
                demolinks.appendChild(demolink);
                
                // <a class="demolink" target="_blank" rel="noreferrer noopener" href="https://youtube.com/fivesixfive">
            }
            
        }
    }
}