

let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");
let nextBtn = document.getElementById("nextButton");
let backBtn = document.getElementById("backButton");

let StartCount = 0;
let endCount = 3;
let maxLimit = null;
let data = []


function createAndAppendSearchResult(result) {
    let {
        link,
        title,
        description
    } = result;

    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");

    let titleEl = document.createElement("a");
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.textContent = title;
    titleEl.classList.add("result-title");
    resultItemEl.appendChild(titleEl);

    let titleBreakEl = document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);

    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    resultItemEl.appendChild(urlEl);

    let linkBreakEl = document.createElement("br");
    resultItemEl.appendChild(linkBreakEl);

    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    resultItemEl.appendChild(descriptionEl);

    searchResultsEl.appendChild(resultItemEl);
}

function displayResults(searchResults) {
    spinnerEl.classList.add("d-none");
    for (let result of searchResults) {
        createAndAppendSearchResult(result);
    }
}

const sliceFunction = () => {
    let modify = data[0].slice(StartCount, endCount);
    displayResults(modify);
}

function searchWikipedia(event) {
    if (event.key === "Enter") {

        spinnerEl.classList.remove("d-none");
        searchResultsEl.textContent = "";

        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        };

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                maxLimit = search_results.length;
                data.push(search_results);
                console.log(data)
                sliceFunction();
            });
    }
}

const nextFunction = () => {
    StartCount = StartCount + 3;
    endCount = endCount + 3;
    sliceFunction();


}

const backFunction = () => {
    StartCount = StartCount - 3;
    endCount = endCount - 3;
    sliceFunction();

}

searchInputEl.addEventListener("keydown", searchWikipedia);
nextBtn.addEventListener("click", nextFunction);
backBtn.addEventListener("click", backFunction);

