async function data() {
    let res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=e628577ba79343d1997e22ef4f5ad176")
    let data = await res.json();



    for (var i = 0; i < 10; i++) {
        var x = data.articles
        x.pop();
        x.reverse();
    }

    append(x)
    console.log(data.articles)
}

function append(data) {

    data.forEach(function (el) {

        let div = document.createElement("div");
        div.setAttribute('id', 'div')
        let img1 = document.createElement("img");
        img1.setAttribute('id', 'imgn')
        img1.src = el.urlToImage;
        let head3 = document.createElement("h2");
        head3.setAttribute("id", "head3")
        head3.innerText = el.title;
        head3.addEventListener("click", function () {
            show(el)
        })
        let p = document.createElement("p");
        p.setAttribute("id", "p")
        p.innerText = el.description;
        div.append(img1, head3)
        let div21 = document.createElement("div");
        div21.setAttribute("id", "div21")
        div21.append(div, p)
        document.getElementById("div2").append(div21)
    })

}
data();
