



function show(el) {
    localStorage.setItem("show", JSON.stringify(el));
    window.location.href = "show.html"
}
function myfunc() {
    document.getElementById("add_data12").style.display = "none";
    console.log('rohit')

}

arr = [
    {
        "image": "https://c.ndtvimg.com/2022-06/q4r54seg_rahul-gandhi-ed-ani-240_240x180_14_June_22.jpg",
        "hedad": "21 Hours And Counting: Rahul Gandhi's Day 3 At Enforcement Directorat",
    },
    {
        "image": "https://c.ndtvimg.com/2022-06/msoth4b8_mamata-banerjeesharad-pawar_120x90_14_June_22.jpg",
        "hedad": "For Opposition Meet On President Today, 5 Parties Say ",
    },
    {
        "image": "https://c.ndtvimg.com/2022-06/tv20cbbo_rhea-chakraborty_120x90_14_June_22.jpg",
        "hedad": "Beauty    Rhea Chakraborty Ethnic Makeup",
    }, {
        "image": "https://c.ndtvimg.com/2022-06/f2pdlsuo_sonamhaircaretips1_120x90_09_June_22.jpg",
        "hedad": "Beauty    Sonam Kapoor's Ethnic Makeup",
    }, {
        "image": "https://c.ndtvimg.com/2022-06/6gvu6prg_mouniwingedliner1_120x90_15_June_22.jpg",
        "hedad": "Beauty    Mounii RoyEthnic Makeup",
    }, {
        "image": "https://c.ndtvimg.com/2022-04/24r6ad38_vladimir-putin-afp-photo_120x90_19_April_22.jpg",
        "hedad": "Putin Seen Shaking, Struggling To Stand In New Video: Report",
    },
]
function append21(data) {

    data.forEach(function (el) {

        let div4 = document.createElement("div");
        div4.setAttribute('id', 'div7')
        let img1 = document.createElement("img");
        img1.setAttribute('id', 'imgn7')
        img1.src = el.image;
        let head3 = document.createElement("h4");
        head3.innerText=el.hedad;

        div4.append(img1,head3)



        document.getElementById("div1").append(div4)
    })

}


append21(arr);