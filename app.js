window.ifsProcessing = false;

window.ifsContext = {
    "flow" : [
        {"type" : "embed", "url" : "https://microsite.nnmtools.com"},
        {"type" : "article", "text" : "<h1>The Enduring Legacy of Star Wars: A Galaxy Far, Far Away</h1><p>Few franchises in cinematic history have left as indelible a mark as <em>Star Wars</em>. From its groundbreaking debut in 1977 to its sprawling modern expansions, George Lucas’s space opera transcends generations, cementing its place as a cultural phenomenon.</p><p>At its core, <em>Star Wars</em> is a tale of heroism, family, and the eternal struggle between good and evil. The saga begins with <em>A New Hope</em>, where audiences first encounter iconic characters like Luke Skywalker, Princess Leia, and Darth Vader. The original trilogy captivated viewers with its innovative special effects, compelling storytelling, and the unforgettable John Williams score.</p><p>The franchise expanded with the prequel trilogy (1999–2005), exploring the rise of Darth Vader and the fall of the Jedi Order. While initially met with mixed reactions, these films gained a dedicated fanbase for their political intrigue and epic battles.</p><p>Few franchises in cinematic history have left as indelible a mark as <em>Star Wars</em>. From its groundbreaking debut in 1977 to its sprawling modern expansions, George Lucas’s space opera transcends generations, cementing its place as a cultural phenomenon.</p><p>At its core, <em>Star Wars</em> is a tale of heroism, family, and the eternal struggle between good and evil. The saga begins with <em>A New Hope</em>, where audiences first encounter iconic characters like Luke Skywalker, Princess Leia, and Darth Vader. The original trilogy captivated viewers with its innovative special effects, compelling storytelling, and the unforgettable John Williams score.</p><p>The franchise expanded with the prequel trilogy (1999–2005), exploring the rise of Darth Vader and the fall of the Jedi Order. While initially met with mixed reactions, these films gained a dedicated fanbase for their political intrigue and epic battles.</p><p>Few franchises in cinematic history have left as indelible a mark as <em>Star Wars</em>. From its groundbreaking debut in 1977 to its sprawling modern expansions, George Lucas’s space opera transcends generations, cementing its place as a cultural phenomenon.</p><p>At its core, <em>Star Wars</em> is a tale of heroism, family, and the eternal struggle between good and evil. The saga begins with <em>A New Hope</em>, where audiences first encounter iconic characters like Luke Skywalker, Princess Leia, and Darth Vader. The original trilogy captivated viewers with its innovative special effects, compelling storytelling, and the unforgettable John Williams score.</p><p>The franchise expanded with the prequel trilogy (1999–2005), exploring the rise of Darth Vader and the fall of the Jedi Order. While initially met with mixed reactions, these films gained a dedicated fanbase for their political intrigue and epic battles.</p><p>Few franchises in cinematic history have left as indelible a mark as <em>Star Wars</em>. From its groundbreaking debut in 1977 to its sprawling modern expansions, George Lucas’s space opera transcends generations, cementing its place as a cultural phenomenon.</p><p>At its core, <em>Star Wars</em> is a tale of heroism, family, and the eternal struggle between good and evil. The saga begins with <em>A New Hope</em>, where audiences first encounter iconic characters like Luke Skywalker, Princess Leia, and Darth Vader. The original trilogy captivated viewers with its innovative special effects, compelling storytelling, and the unforgettable John Williams score.</p><p>The franchise expanded with the prequel trilogy (1999–2005), exploring the rise of Darth Vader and the fall of the Jedi Order. While initially met with mixed reactions, these films gained a dedicated fanbase for their political intrigue and epic battles.</p>"},
    ]
}

document.addEventListener("DOMContentLoaded", function() {
    var placeholderDiv = document.createElement("div");
    placeholderDiv.id = "ifsplaceholder";
    placeholderDiv.classList.add("content");
    document.body.appendChild(placeholderDiv);
    
    // detect the user's scroll position and when 300px from the bottom trigger the content load
    window.onscroll = function(ev) {
        if (window.ifsProcessing) {
            return;
        }
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 300) {
            
            // get the first element in the flow
            var flow = window.ifsContext.flow;
            var next = flow.shift();
            
            if (next === undefined) {
                return;
            }
            
            // Pause scroll event so we don't get a cascade of requests
            window.ifsProcessing = true;
            var placeholder = document.getElementById('ifsplaceholder');

            // create a div to hold the content
            var div = document.createElement('div');
            div.classList.add('content');
            placeholder.appendChild(div);
            
            // load the page content and insert it into the placeholder
            if (next.type === "embed") {
                var url = next.url;
                fetch(url)
                    .then(response => response.text())
                    .then(data => {
                    var parser = new DOMParser();
                    var data = parser.parseFromString(data, "text/html");

                    var body = data.querySelector('body');
                    var criticalStyles = data.querySelector('#elimin8r-critical-style');
                    var backgroundStyles = data.querySelector('#custom-background-css');
                    var css = data.querySelectorAll('link[rel="stylesheet"]');
                    
                    // Get scripts
                    const shadow = div.attachShadow({ mode: 'open' });

                    shadow.appendChild(criticalStyles);
                    shadow.appendChild(backgroundStyles);
                    
                    // Append links to shadow root
                    css.forEach(function(link) {
                        shadow.appendChild(link.cloneNode(true));
                    });
                    
                    // Get the src of elimin8r-script-js and splide-script-js
                    var micrositeScript = data.querySelector('#elimin8r-script-js');
                    var splideScript = data.querySelector('#splide-script-js');
                    var elimin8rScriptSrc = micrositeScript.src;
                    var splideScriptSrc = splideScript.src;
                    
                    // Remove elimin8r-script-js and splide-script-js from the data
                    micrositeScript.remove();
                    splideScript.remove();

                    // Add class 'ifs-shadow-dom' to the body tag
                    body.classList.add('ifs-shadow-dom');

                    // Append body content to shadow root
                    shadow.appendChild(body.cloneNode(true));

                    // Create the new scripts
                    /*var micrositeScript = document.createElement('script');
                    micrositeScript.src = elimin8rScriptSrc;
                    micrositeScript.type = 'text/javascript';

                    var splideScript = document.createElement('script');
                    splideScript.src = splideScriptSrc;
                    splideScript.type = 'text/javascript';
                    splideScript.onload = function () {
                        shadow.appendChild(micrositeScript);
                    };

                    // Append splide to the shadow root
                    shadow.appendChild(splideScript);*/
                    window.ifsProcessing = false;
                })
                .catch(error => {
                    console.error('Error:', error);
                    window.ifsProcessing = false;
                });
            } else if (next.type === "article") {

                // fetch article
                if (typeof next.url !== "undefined") {

                    var url = next.url;
                    fetch(url)
                            .then(response => response.text())
                            .then(data => {
                            var parser = new DOMParser();
                            var data = parser.parseFromString(data, "text/html");

                            var placeholder = document.getElementById('ifsplaceholder');
                            var body = data.querySelector('body');
                            placeholder.appendChild(body.cloneNode(true));
                            window.ifsProcessing = false;
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            window.ifsProcessing = false;
                        });
                } else if (typeof next.text !== "undefined") {
                    
                    console.log('Adding article text');
                    var placeholder = document.getElementById('ifsplaceholder');
                    // create div
                 
                    div.innerHTML = next.text;
                    window.ifsProcessing = false;
                }
            }
        }
    };

});