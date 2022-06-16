function appendr(data1,container) {
    console.log(data1)

    data1.forEach(function (el) {

        let div1 = document.createElement("div");
        div1.setAttribute('id', 'div')
        let img2 = document.createElement("img");
        img2.setAttribute('id', 'imgn')
        img2.src = el.image;
        let head4 = document.createElement("h4");
        head4.setAttribute("id", "head4")
        head4.innerText = el.head;
        div1.append(img2, head4)
        // document.getElementById("list").append(div1)
        container.append(div1)


    })

}
export default appendr;
