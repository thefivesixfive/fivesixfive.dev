// Load in Text File
function LoadAboutPage() {
    // Load About
    fetch("/static/texts/front-page-about.txt").then(response => {
        document.getElementById("aboutpagecontentp").innerHTML=response.text();
    }).catch(error => {
        console.log(error);
    });
}
// Set Copyright Year
function SetCopyrightYear() {
    document.getElementById("year").innerHTML=new Date().getFullYear();
}
