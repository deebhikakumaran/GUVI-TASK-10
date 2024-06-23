var current_page = 1;
var records_per_page = 10;
var objJson;

function setUp(data) {
    objJson = data;
    changePage(1);
}

fetch('https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json')
.then(response=>response.json())
.then(data=>setUp(data))

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < 10) {
        current_page++;
        changePage(current_page);
    }
}

function changePage(page)
{
    current_page = page
    var tbody = document.querySelector("tbody");
    var page_span = document.getElementById("page");
 
    if (page < 1) {
        page = 1;
    }
    if (page > 10) {
        page = 10;
    }

    tbody.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
        tr = document.createElement('tr')
        for (var j = 0; j < 3; j++) {
            td = document.createElement('td')
            if(j == 0){
                td.innerHTML = objJson[i].id
            }
            else if(j == 1){
                td.innerHTML = objJson[i].name
            }
            else{
                td.innerHTML = objJson[i].email
            }    
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    }

    page_span.innerHTML = page;

}



