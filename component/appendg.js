

function appendg(data,container) {

    data.forEach(function (el) {

        let div = document.createElement("div");
        div.setAttribute('id', 'div')
        let img1 = document.createElement("img");
        img1.setAttribute('id', 'imgn')
        img1.src = el.image1;
        let head3 = document.createElement("h2");
        head3.setAttribute("id", "head3")
        head3.innerText = el.newsHdng;
        head3.addEventListener("click", function () {
            show(el)
        })
        let p = document.createElement("p");
        p.setAttribute("id", "p")
        p.innerText = el.newsCont;
        div.append(img1, head3)
        let div21 = document.createElement("div");
        div21.setAttribute("id", "div21")
        div21.append(div, p)
       container.append(div21)
    })

}
export default appendg;