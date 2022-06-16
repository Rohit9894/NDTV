function appendt(data,container) {
    data.pop();
    
    data.reverse();

    data.forEach(function (el) {

        let div = document.createElement("div");
        div.setAttribute('id', 'div')
        let img1 = document.createElement("img");
        img1.setAttribute('id', 'imgn')
        img1.src = el.image1;
        let head3 = document.createElement("h3");
        head3.setAttribute("id", "head3")
        head3.innerText = el.head;
        head3.addEventListener("click", function () {
            show(el)
        })
        let p = document.createElement("p");
        p.setAttribute("id", "p")
        p.innerText = el.trenz_dateline;
        div.append(head3)
        let div21 = document.createElement("div");
        div21.setAttribute("id", "div21")
        div21.append(p)
      var  div51=document.createElement("div");
      div51.setAttribute('id','div51')
        div51.append(div,div21)
        var div61=document.createElement("div");
        div61.setAttribute("id","div61")
       div61.append(img1,div51)
        container.append(div61)
    })

}
export default appendt;