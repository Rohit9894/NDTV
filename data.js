arr=
[
{
  "name": "Saurabh Gupta",
  "name href": "https://www.ndtv.com/author/saurabh-gupta"
},
{
  "name": "Sonal Joshi",
  "name href": "https://www.ndtv.com/author/sonal-joshi"
},
{
  "name": "Dr. Kalpana Aggarwal",
  "name href": "https://www.ndtv.com/author/dr.-kalpana-aggarwal"
},
{
  "name": "Maya Sharma",
  "name href": "https://www.ndtv.com/author/maya-sharma"
},
{
  "name": "Payal Kohli",
  "name href": "https://www.ndtv.com/author/payal-kohli"
},
{
  "name": "Dr Sameer Gupta",
  "name href": "https://www.ndtv.com/author/dr-sameer-gupta"
},
{
  "name": "Sohini Guharoy",
  "name href": "https://www.ndtv.com/author/sohini-guharoy"
},
{
  "name": "Harsha Kumari Singh",
  "name href": "https://www.ndtv.com/author/harsha-kumari-singh"
},
{
  "name": "Snigdha Basu",
  "name href": "https://www.ndtv.com/author/snigdha-basu"
},
{
  "name": "Shonakshi Chakravarty",
  "name href": "https://www.ndtv.com/author/shonakshi-chakravarty"
},
{
  "name": "Aaditya Thackeray",
  "name href": "https://www.ndtv.com/author/aaditya-thackeray"
},
{
  "name": "Ravish Ranjan Shukla",
  "name href": "https://www.ndtv.com/author/ravish-ranjan-shukla"
},
{
  "name": "Saurabh Shukla",
  "name href": "https://www.ndtv.com/author/saurabh-shukla"
},
{
  "name": "Chetan Bhattacharji",
  "name href": "https://www.ndtv.com/author/chetan-bhattacharji"
},
{
  "name": "Manish Kumar",
  "name href": "https://www.ndtv.com/author/manish-kumar"
},
{
  "name": "Nazir Masoodi",
  "name href": "https://www.ndtv.com/author/nazir-masoodi"
},
{
  "name": "Sadhguru Jaggi Vasudev",
  "name href": "https://www.ndtv.com/author/sadhguru-jaggi-vasudev"
},
{
  "name": "Vishnu Som",
  "name href": "https://www.ndtv.com/author/vishnu-som"
},
{
  "name": "Alok Pandey",
  "name href": "https://www.ndtv.com/author/alok-pandey"
},
{
  "name": "Arjun Soin",
  "name href": "https://www.ndtv.com/author/arjun-soin"
},
{
  "name": "Nikhil Naz",
  "name href": "https://www.ndtv.com/author/nikhil-naz"
}
]
// console.log(arr[0])
function append9(data)
{
  data.forEach(function(el)
  {
    
    let div=document.createElement("div")
      div.setAttribute("id","name11")
      let h3=document.createElement('h3')
      h3.innerText=el.name;
      div.append(h3)
      document.querySelector("#cata").append(div)
  })
}
append9(arr);
arr1=
[

{
  "news_Itm-img href": "https://www.ndtv.com/opinion/dear-fringe-elements-a-note-for-you-3059604",
  "image1": "https://i.ndtvimg.com/mt/2015-01/brinda_karat_240x180.jpg",
  "newsHdng": "Opinion: Dear \"Fringe Elements,\" A Note For You",
  "posted-by": "| Sunday June 12, 2022",
  "posted-by 2": "Brinda Karat",
  "posted-by href": "https://www.ndtv.com/topic/brinda-karat",
  "newsCont": "The impunity with which BJP leaders continue to make the most obnoxious and provocative statements, seeking to strip India's Muslims of equal citizenship shows the patronage they enjoy from the State, the government and the ruling regime leadership."
},
{
  "news_Itm-img href": "https://www.ndtv.com/opinion/child-labour-how-long-can-we-fail-our-children-3054908",
  "image1": "https://c.ndtvimg.com/2022-06/a90r8ero_sourav-sanyal-240_120x90_10_June_22.jpg",
  "newsHdng": "Child Labour: How Long Can We Fail Our Children?",
  "posted-by": "| Sunday June 12, 2022",
  "posted-by 2": "Sourav Sanyal",
  "posted-by href": "https://www.ndtv.com/topic/sourav-sanyal",
  "newsCont": "In 2015, the Sustainable Development Goals (SDGs) were adopted by world leaders with a firm commitment to end all forms of child labour by 2025. As we observe the World Day Against Child Labour today, we realise how far we are from achieving our goal"
},

{
  "news_Itm-img href": "https://www.ndtv.com/opinion/in-rajya-sabha-election-a-midnight-twist-3057800",
  "image1": "https://i.ndtvimg.com/i/2017-02/swati-chaturvedi-blogger_240x180_81486186202.jpg",
  "newsHdng": "Opinion: Congress Disaster In Haryana Includes A Deleted Tweet",
  "posted-by": "| Saturday June 11, 2022",
  "posted-by 2": "Swati Chaturvedi",
  "posted-by href": "https://www.ndtv.com/topic/swati-chaturvedi",
  "newsCont": "The 16 seats which were contested (the others were elected unopposed) turned into a midnight thriller with the BJP clinching victories in three of the four states involved and posting an upset in Maharashtra."
},
{
  "news_Itm-img href": "https://www.ndtv.com/opinion/mukesh-ambani-has-a-6-3-billion-prescription-for-boots-3054582",
  "image1": "https://c.ndtvimg.com/2022-06/3sbhcaeo_andrea-felstead_120x90_10_June_22.jpg",
  "newsHdng": "Opinion: Mukesh Ambani Has A $6.3 Billion Prescription for Boots",
  "posted-by": "| Friday June 10, 2022",
  "posted-by 2": "Andrea Felsted. Bloomberg",
  "posted-by href": "https://www.ndtv.com/topic/andrea-felsted-bloomberg",
  "newsCont": "Private equity firm Apollo Global Management Inc. and Indian billionaire Mukesh Ambani's Reliance Industries Ltd. have made a binding offer for chemist chain Boots."
},
{
  "news_Itm-img href": "https://www.ndtv.com/opinion/opinion-rbi-is-getting-its-way-on-rates-but-for-how-long-3052094",
  "image1": "https://i.ndtvimg.com/i/2017-02/andy-mukherjee_240x180_61485952991.jpg",
  "newsHdng": "Opinion: RBI Is Getting Its Way On Rates. But For How Long?",
  "posted-by": "| Thursday June 09, 2022",
  "posted-by 2": "Andy Mukherjee | Bloomberg",
  "posted-by href": "https://www.ndtv.com/topic/andy-mukherjee-bloomberg",
  "newsCont": "Back in February, when India was still in denial about its brewing inflation challenge, economists at Nomura Holdings Inc. summarized the choices before the monetary authority into three neat boxes."
},

{
  "news_Itm-img href": "https://www.ndtv.com/opinion/nupur-sharma-episode-is-moment-of-truth-for-modis-bjp-3049689",
  "image1": "https://c.ndtvimg.com/2021-03/8kv9ldkk_sagarika-ghose-240_120x90_30_March_21.jpg",
  "newsHdng": "Opinion: Nupur Sharma Unraveled Modi-Led BJP's Makeover",
  "posted-by": "| Wednesday June 08, 2022",
  "posted-by 2": "Sagarika Ghose",
  "posted-by href": "https://www.ndtv.com/topic/sagarika-ghose",
  "newsCont": "As it makes this choice, the BJP may like to consider the fate of other right wing radicals across the world - the Maulvis and fundamentalists who dominate the discourse on Muslim questions have all mostly become marginalized."
},
{
  "news_Itm-img href": "https://www.ndtv.com/opinion/five-facts-that-sum-up-the-tragic-story-of-modis-india-3044875",
  "image1": "https://c.ndtvimg.com/cj568je_ashutosh-new-240_120x90_29_August_18.jpg",
  "newsHdng": "Opinion: PM Modi, The Djinn Is Out Of The Bottle And Out Of Control",
  "posted-by": "| Tuesday June 07, 2022",
  "posted-by 2": "Ashutosh",
  "posted-by href": "https://www.ndtv.com/topic/ashutosh",
  "newsCont": "This story is about how the RSS and Modi are caught in their own web and are losing control over the new phenomenon which is blinded by bigotry and has no respect for other religions. Sooner than later, India will pay a heavy price for its actions."
},
{
  "news_Itm-img href": "https://www.ndtv.com/opinion/after-gulf-anger-bjps-new-found-clarity-3044813",
  "image1": "https://c.ndtvimg.com/2020-06/rompp8l8_rajmohan-gandhi-240_120x90_29_June_20.jpg",
  "newsHdng": "Opinion: After Gulf Anger, BJP's New-Found Clarity",
  "posted-by": "| Tuesday June 07, 2022",
  "posted-by 2": "Rajmohan Gandhi",
  "posted-by href": "https://www.ndtv.com/topic/rajmohan-gandhi",
  "newsCont": "The Gulf is conspicuous for obvious reasons. But can we afford to forget that Muslims form 42 percent of the people of vast Africa, and that Christians form 49 percent of that continent's population, not to mention other parts of the world?"
},
{
  "news_Itm-img href": "https://www.ndtv.com/opinion/an-old-money-billionaire-rises-up-against-gautam-adani-3044823",
  "image1": "https://i.ndtvimg.com/i/2017-02/andy-mukherjee_240x180_61485952991.jpg",
  "newsHdng": "Opinion: An Old-Money Billionaire Rises up Against Gautam Adani",
  "posted-by": "| Tuesday June 07, 2022",
  "posted-by 2": "Andy Mukherjee | Bloomberg",
  "posted-by href": "https://www.ndtv.com/topic/andy-mukherjee-bloomberg",
  "newsCont": "Gautam Adani's meteoric rise to the world's ninth-richest person began with a port on India's west coast in the 1990s"
},
{
  "news_Itm-img href": "https://www.ndtv.com/blog/at-iifa-salman-gets-attention-abhishek-is-a-quiet-winner-3042420",
  "image1": "https://c.ndtvimg.com/2018-11/132f2o18_jyotsna-bhargava_120x90_08_November_18.jpg",
  "newsHdng": "Blog: At IIFA, Salman Gets Attention, Abhishek Is A Quiet Winner",
  "posted-by": "| Monday June 06, 2022",
  "posted-by 2": "Jyotsna Mohan Bhargava",
  "posted-by href": "https://www.ndtv.com/topic/jyotsna-mohan-bhargava",
  "newsCont": "In all this, a shoutout to the one man who stands out - the underrated Abhishek Bachchan - even his dancing comes from a place that appreciates the audience."
},
{
  "news_Itm-img href": "https://www.ndtv.com/blog/an-indian-american-queer-sikh-ceos-story-3041692",
  "image1": "https://c.ndtvimg.com/2022-06/cjf0ds1s_rayman-kaur-mathoda-240_120x90_06_June_22.jpg",
  "newsHdng": "An Indian-American Queer Sikh CEO's Story",
  "posted-by": "| Monday June 06, 2022",
  "posted-by 2": "Rayman Kaur Mathoda",
  "posted-by href": "https://www.ndtv.com/topic/rayman-kaur-mathoda",
  "newsCont": "This Pride Month, if you are LGBTQ+ or have someone who is in your family or community, I urge you to educate yourself and speak up publicly about your support for the LGBTQ+ members in your temple, gurudwara, Diwali party and weddings."
},
{
  "news_Itm-img href": "https://www.ndtv.com/opinion/modi-sarkar-euphoric-on-its-own-propaganda-3041617",
  "image1": "https://c.ndtvimg.com/2022-06/5sr119lc_pavan-varma-240_120x90_06_June_22.jpg",
  "newsHdng": "Opinion: Modi  Euphoric On Its Own Propaganda",
  "posted-by": "| Monday June 06, 2022",
  "posted-by 2": "Pavan K. Varma",
  "posted-by href": "https://www.ndtv.com/topic/pavan-k-varma",
  "newsCont": "Balance sheets, if they must be made, can be uncomfortable. The worry is that the government after eight years in power is caught in the cocoon of its own propaganda machine, and in no mood to replace euphoria with introspection."
},
{
  "news_Itm-img href": "https://www.ndtv.com/opinion/opinion-india-cant-afford-to-lose-worlds-trust-on-trade-3034437",
  "image1": "https://c.ndtvimg.com/2022-06/6frsckmg_mihir-bloomberg_120x90_03_June_22.jpg",
  "newsHdng": "Opinion: India Can't Afford to Lose World's Trust On Trade",
  "posted-by": "| Friday June 03, 2022",
  "posted-by 2": "Mihir Sharma, Bloomberg",
  "posted-by href": "https://www.ndtv.com/topic/mihir-sharma-bloomberg",
  "newsCont": "Prime Minister Narendra Modi often speaks of \"trusted\" supply chains. At the G-20 last year, he said that global supply chains depend upon \"trust, transparency, and timeframes\"."
},
{
  "news_Itm-img href": "https://www.ndtv.com/opinion/opinion-finally-boarding-time-for-singapore-airlines-flight-to-india-3034407",
  "image1": "https://i.ndtvimg.com/i/2017-02/andy-mukherjee_240x180_61485952991.jpg",
  "newsHdng": "Opinion: The Significance Of Tata Hiring Campbell Wilson As Air India CEO",
  "posted-by": "| Friday June 03, 2022",
  "posted-by 2": "Andy Mukherjee | Bloomberg",
  "posted-by href": "https://www.ndtv.com/topic/andy-mukherjee-bloomberg",
  "newsCont": "As travel resumes and the carrier moves past the record annual loss it was reporting around this time last year, Chief Executive Officer Goh Choon Phong wants to pursue a multi-hub strategy, one in which airlines owned by it will benefit from aviatio"
}
]
function append(data) {

    data.forEach(function (el) {
       
        let div = document.createElement("div");
        div.setAttribute('id', 'div')
        let img1 = document.createElement("img");
        img1.setAttribute('id', 'imgn')
        img1.src = el.image1;
        let head3 = document.createElement("h2");
        head3.setAttribute("id", "head3")
        head3.innerText = el.newsHdng;
        head3.addEventListener("click",function()
        {
            show(el)
        })
        let p=document.createElement("p");
        p.setAttribute("id","p")
        p.innerText=el.newsCont;
        div.append(img1, head3)
        let div21=document.createElement("div");
        div21.setAttribute("id","div21")
        div21.append(div,p)
        document.getElementById("list").append(div21)
    })

}
append(arr1);
add=
[
    {
        "image":"https://resize.indiatvnews.com/en/resize/newbucket/290_-/2022/06/assam-floods-1655209326.jpg",
        "head":"Mercury drops below 40°C, Delhi gets relief from intense heat",

    },
    {
        "image":"https://resize.indiatvnews.com/en/resize/newbucket/290_-/2022/06/china-covid-1655218001.jpg",
        "head":"China lifts two-year Covid visa ban on Indians; to allow return of stranded professionals, families",

    },
    {
        "image":"https://resize.indiatvnews.com/en/centered/newbucket/315_190/2022/06/hrithik-roshan-1655221486.jpg",
        "head":"Hrithik Roshan shares selfie in clean-shaved look, becomes internet's crush once again",

    },
    {
        "image":"https://resize.indiatvnews.com/en/resize/newbucket/220_-/2022/06/khatron-ke-khiladi-12-premiere-1655213436.jpg",
        "head":" chemistry while doing stunts gets people going awww",

    },
    {
        "image":"https://resize.indiatvnews.com/en/resize/newbucket/210_-/2022/06/pjimage-65-1655219787.jpg",
        "head":"Sudhir Mishra’s mother's funeral was held at Pawan Hans crematorium and was attended by the Mishra's friends and colleagues from the film industry, including Nawazuddin Siddiqui, Saurabh Shukla, Arbaaz Khan and Ashoke Pandit among others.",

    },
    {
        "image":"https://resize.indiatvnews.com/en/resize/newbucket/210_-/2022/06/raveena-tandon-1655217565.jpg",
        "head":"Raveena Tandon rejected nearly 20 scripts before OTT debut with Aranyak",

    },
    {
        "image":"https://resize.indiatvnews.com/en/resize/newbucket/210_-/2022/06/krushna-simbu-1655213974.jpg",
        "head":"Simbu flies father T Rajender to USA for 60-day advanced medical treatment, deets inside",

    },
    {
        "image":"https://resize.indiatvnews.com/en/resize/newbucket/210_-/2022/06/siddhanth-kapoor-1655211328.jpg",
        "head":"Siddhanth Kapoor's big revelation after bail in Bengaluru drug raid, says friends gave him drinks",

    },

]
function append4(data) {
data.forEach(function (el) {
       
    let div = document.createElement("div");
    div.setAttribute('id', 'add1')
    let img1 = document.createElement("img");
    img1.setAttribute('id', 'img_add')
    img1.src = el.image;
    let head3 = document.createElement("h3");
    head3.setAttribute("id", "head5")
    head3.innerText = el.head;
div.append(img1,head3)
    document.getElementById("add").append(div)
})

}
append4(add)
