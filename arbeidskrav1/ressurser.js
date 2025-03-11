// En liste med informasjon om HTML, CSS, JavaScript, React og Sanity CMS
const resources = [
    {
        category: "HTML", // Dette handler om HTML
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [  // Nettsteder med mer info om HTML  
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",  // Dette handler om CSS
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",  // Dette handler om JavaScript
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",  // Dette handler om React
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",  // Dette handler om Sanity CMS
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]
// Henter informasjon om hver kategori
const HTMLInfo = resources.filter((html) => html.category === "HTML")

const CSSInfo = resources.filter((css) => css.category === "CSS")

const javascriptInfo = resources.filter((javascript) => javascript.category === "JavaScript")

const ReactInfo = resources.filter((react) => react.category === "React")

const SHCMSInfo = resources.filter((shcms) => shcms.category === "Sanity and headless CMS")
// Henter HTML-elementer fra nettsiden
const main = document.getElementById("main"); // Hoveddelen av nettsiden
const knpHTML = document.getElementById("knpHTML"); // HTML-knappen
const knpCSS = document.getElementById("knpCSS"); // CSS-knappen
const knpJScript = document.getElementById("knpJScript"); // JavaScript-knappen
const knpReact = document.getElementById("knpReact"); // React-knappen
const knpSHCMS = document.getElementById("knpSHCMS"); // Sanity CMS-knappen

// Setter HTML-knappen som aktiv først
knpHTML.classList.add("active");

// Funksjon som viser HTML-informasjon når knappen trykkes
function HTMLmap(){
    HTMLInfo.map((html) => {
        let links =``;  // Lager en tom liste for lenker
        html.sources.map((link) => {  // Går gjennom kildene og legger dem til i listen
            links += `<li><a target="blank" href="${link.url}">${link.title}</a></li>`;
        });
        // Viser HTML-info på nettsiden
        main.innerHTML = `<h2>${html.category}</h2>
        <p>${html.text}</p>
        <ul>
        ${links}
        </ul>`
    })

    // Markerer HTML-knappen som aktiv og fjerner aktiv status fra de andre knappene
    knpHTML.classList.add("active");

    knpCSS.classList.remove("active");
    knpJScript.classList.remove("active");
    knpReact.classList.remove("active");
    knpSHCMS.classList.remove("active");
}

function CSSmap(){
    CSSInfo.map((css) => {
        let links =``;
        css.sources.map((link) => {
            links += `<li><a target="blank" href="${link.url}">${link.title}</a></li>`;
        });
        main.innerHTML = `<h2>${css.category}</h2>
        <p>${css.text}</p>
        <ul>
        ${links}
        </ul>`
    })

    knpCSS.classList.add("active");

    knpHTML.classList.remove("active");
    knpJScript.classList.remove("active");
    knpReact.classList.remove("active");
    knpSHCMS.classList.remove("active");
}

function JavaScriptmap(){
    javascriptInfo.map((javascript) => {
        let links =``;
        javascript.sources.map((link) => {
            links += `<li><a target="blank" href="${link.url}">${link.title}</a></li>`;
        });
        main.innerHTML = `<h2>${javascript.category}</h2>
        <p>${javascript.text}</p>
        <ul>
        ${links}
        </ul>`
    })

    knpJScript.classList.add("active");

    knpHTML.classList.remove("active");
    knpCSS.classList.remove("active");
    knpReact.classList.remove("active");
    knpSHCMS.classList.remove("active");
}

function Reactmap(){
    ReactInfo.map((react) => {
        let links =``;
        react.sources.map((link) => {
            links += `<li><a target="blank" href="${link.url}">${link.title}</a></li>`;
        });
        main.innerHTML = `<h2>${react.category}</h2>
        <p>${react.text}</p>
        <ul>
        ${links}
        </ul>`
    })

    knpReact.classList.add("active");

    knpHTML.classList.remove("active");
    knpCSS.classList.remove("active");
    knpJScript.classList.remove("active");
    knpSHCMS.classList.remove("active");
}

function SHCMSmap(){
    SHCMSInfo.map((shcms) => {
        let links =``;
        shcms.sources.map((link) => {
            links += `<li><a target="blank" href="${link.url}">${link.title}</a></li>`;
        });
        main.innerHTML = `<h2>${shcms.category}</h2>
        <p>${shcms.text}</p>
        <ul>
        ${links}
        </ul>`
    })

    knpSHCMS.classList.add("active");

    knpHTML.classList.remove("active");
    knpCSS.classList.remove("active");
    knpJScript.classList.remove("active");
    knpReact.classList.remove("active");
}

HTMLmap()