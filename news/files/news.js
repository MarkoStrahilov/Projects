// const h1 = document.querySelector('h1')
// const button = document.querySelector('button')
// const body = document.querySelector('body')
// const container = document.querySelector('section')

// window.addEventListener('DOMContentLoaded', async() => {
//     try {
//         const res = await axios.get(' https://newsapi.org/v2/top-headlines?country=us&apiKey=9e15c87528b34314a81c263e4da5c08a')
//         if (res == undefined || res == '') {
//             console.error('ERROR NO RESPONSE FOUND')
//         }
//         const title = res.data.articles[0].title;
//         myHeadTitle(title)
//         const author = res.data.articles[0].author;
//         myAuhtor(author)
//         const description = res.data.articles[0].description;
//         myDescription(description)
//         const url = res.data.articles[0].url;
//         myUrl(url)
//         const img = res.data.articles[0].urlToImage;
//         myArticleImg(img)
//             // seconnd section
//         const title1 = res.data.articles[1].title;
//         myHeadTitle(title1)
//         const author1 = res.data.articles[1].author;
//         myAuhtor(author1)
//         const description1 = res.data.articles[1].description;
//         myDescription(description1)
//         const url1 = res.data.articles[1].url;
//         myUrl(url1)
//         const img1 = res.data.articles[1].urlToImage;
//         myArticleImg(img1)
//             // third section
//         const title2 = res.data.articles[2].title;
//         myHeadTitle(title2)
//         const author2 = res.data.articles[2].author;
//         myAuhtor(author2)
//         const description2 = res.data.articles[2].description;
//         myDescription(description2)
//         const url2 = res.data.articles[2].url;
//         myUrl(url2)
//         const img2 = res.data.articles[2].urlToImage;
//         myArticleImg(img2)
//             // fourth section
//         const title3 = res.data.articles[3].title;
//         myHeadTitle(title3)
//         const author3 = res.data.articles[3].author;
//         myAuhtor(author3)
//         const description3 = res.data.articles[3].description;
//         myDescription(description3)
//         const url3 = res.data.articles[3].url;
//         myUrl(url3)
//         const img3 = res.data.articles[3].urlToImage;
//         myArticleImg(img3)
//             //fifth section 
//         const title4 = res.data.articles[4].title;
//         myHeadTitle(title4)
//         const author4 = res.data.articles[4].author;
//         myAuhtor(author4)
//         const description4 = res.data.articles[4].description;
//         myDescription(description4)
//         const url4 = res.data.articles[4].url;
//         myUrl(url4)
//         const img4 = res.data.articles[4].urlToImage;
//         myArticleImg(img4)
//             // sixth section
//         const title5 = res.data.articles[5].title;
//         myHeadTitle(title5)
//         const author5 = res.data.articles[5].author;
//         myAuhtor(author5)
//         const description5 = res.data.articles[5].description;
//         myDescription(description5)
//         const url5 = res.data.articles[5].url;
//         myUrl(url5)
//         const img5 = res.data.articles[5].urlToImage;
//         myArticleImg(img5)
//             // seventh section
//         const title6 = res.data.articles[6].title;
//         myHeadTitle(title6)
//         const author6 = res.data.articles[6].author;
//         myAuhtor(author6)
//         const description6 = res.data.articles[6].description;
//         myDescription(description6)
//         const url6 = res.data.articles[6].url;
//         myUrl(url6)
//         const img6 = res.data.articles[6].urlToImage;
//         myArticleImg(img6)
//             // eight section
//         const title7 = res.data.articles[7].title;
//         myHeadTitle(title7)
//         const author7 = res.data.articles[7].author;
//         myAuhtor(author7)
//         const description7 = res.data.articles[7].description;
//         myDescription(description7)
//         const url7 = res.data.articles[7].url;
//         myUrl(url7)
//         const img7 = res.data.articles[7].urlToImage;
//         myArticleImg(img7)
//             // nineth section
//         const title8 = res.data.articles[8].title;
//         myHeadTitle(title8)
//         const author8 = res.data.articles[8].author;
//         myAuhtor(author8)
//         const description8 = res.data.articles[8].description;
//         myDescription(description8)
//         const url8 = res.data.articles[8].url;
//         myUrl(url8)
//         const img8 = res.data.articles[8].urlToImage;
//         myArticleImg(img8)
//             // tenth section
//         const title9 = res.data.articles[9].title;
//         myHeadTitle(title9)
//         const author9 = res.data.articles[9].author;
//         myAuhtor(author9)
//         const description9 = res.data.articles[9].description;
//         myDescription(description9)
//         const url9 = res.data.articles[9].url;
//         myUrl(url9)
//         const img9 = res.data.articles[9].urlToImage;
//         myArticleImg(img9)
//             // eleventh section
//         const title10 = res.data.articles[10].title;
//         myHeadTitle(title10)
//         const author10 = res.data.articles[10].author;
//         myAuhtor(author10)
//         const description10 = res.data.articles[10].description;
//         myDescription(description10)
//         const url10 = res.data.articles[10].url;
//         myUrl(url10)
//         const img10 = res.data.articles[10].urlToImage;
//         myArticleImg(img10)
//             // twelveth section
//         const title11 = res.data.articles[11].title;
//         myHeadTitle(title11)
//         const author11 = res.data.articles[10].author;
//         myAuhtor(author11)
//         const description11 = res.data.articles[11].description;
//         myDescription(description11)
//         const url11 = res.data.articles[11].url;
//         myUrl(url11)
//         const img11 = res.data.articles[11].urlToImage;
//         myArticleImg(img11)
//             // tirtheenth section
//         const title12 = res.data.articles[12].title;
//         myHeadTitle(title12)
//         const author12 = res.data.articles[12].author;
//         myAuhtor(author12)
//         const description12 = res.data.articles[12].description;
//         myDescription(description12)
//         const url12 = res.data.articles[12].url;
//         myUrl(url12)
//         const img12 = res.data.articles[12].urlToImage;
//         myArticleImg(img12)
//             // fourtheenth section
//         const title13 = res.data.articles[13].title;
//         myHeadTitle(title13)
//         const author13 = res.data.articles[13].author;
//         myAuhtor(author13)
//         const description13 = res.data.articles[13].description;
//         myDescription(description13)
//         const url13 = res.data.articles[13].url;
//         myUrl(url13)
//         const img13 = res.data.articles[13].urlToImage;
//         myArticleImg(img13)
//             // fivetheenth section 
//         const title14 = res.data.articles[14].title;
//         myHeadTitle(title14)
//         const author14 = res.data.articles[14].author;
//         myAuhtor(author14)
//         const description14 = res.data.articles[14].description;
//         myDescription(description14)
//         const url14 = res.data.articles[14].url;
//         myUrl(url14)
//         const img14 = res.data.articles[14].urlToImage;
//         myArticleImg(img14)
//             // sixteenth section
//         const title15 = res.data.articles[15].title;
//         myHeadTitle(title15)
//         const author15 = res.data.articles[15].author;
//         myAuhtor(author15)
//         const description15 = res.data.articles[15].description;
//         myDescription(description15)
//         const url15 = res.data.articles[15].url;
//         myUrl(url15)
//         const img15 = res.data.articles[15].urlToImage;
//         myArticleImg(img15)
//             // seventeenth section
//         const title16 = res.data.articles[16].title;
//         myHeadTitle(title16)
//         const author16 = res.data.articles[16].author;
//         myAuhtor(author16)
//         const description16 = res.data.articles[16].description;
//         myDescription(description16)
//         const url16 = res.data.articles[16].url;
//         myUrl(url16)
//         const img16 = res.data.articles[16].urlToImage;
//         myArticleImg(img16)
//             // eighteenth section
//         const title17 = res.data.articles[17].title;
//         myHeadTitle(title17)
//         const author17 = res.data.articles[17].author;
//         myAuhtor(author17)
//         const description17 = res.data.articles[17].description;
//         myDescription(description17)
//         const url17 = res.data.articles[17].url;
//         myUrl(url17)
//         const img17 = res.data.articles[17].urlToImage;
//         myArticleImg(img17)
//             // niniteenth section
//         const title18 = res.data.articles[18].title;
//         myHeadTitle(title18)
//         const author18 = res.data.articles[18].author;
//         myAuhtor(author18)
//         const description18 = res.data.articles[18].description;
//         myDescription(description18)
//         const url18 = res.data.articles[18].url;
//         myUrl(url18)
//         const img18 = res.data.articles[18].urlToImage;
//         myArticleImg(img18)
//             // tweentieth section 
//         const title19 = res.data.articles[19].title;
//         myHeadTitle(title19)
//         const author19 = res.data.articles[19].author;
//         myAuhtor(author19)
//         const description19 = res.data.articles[19].description;
//         myDescription(description19)
//         const url19 = res.data.articles[19].url;
//         myUrl(url19)
//         const img19 = res.data.articles[19].urlToImage;
//         myArticleImg(img19)
//             // twentyfirst section 
//         const title20 = res.data.articles[20].title;
//         myHeadTitle(title20)
//         const author20 = res.data.articles[20].author;
//         myAuhtor(author20)
//         const description20 = res.data.articles[20].description;
//         myDescription(description20)
//         const url20 = res.data.articles[20].url;
//         myUrl(url20)
//         const img20 = res.data.articles[20].urlToImage;
//         myArticleImg(img20);
//         dontDisplay()
//     } catch (err) {
//         console.log('There was an error', err)
//     }

// })

// function myHeadTitle(title) {
//     const head = document.createElement('h1');
//     head.classList.add('makeWay')
//     head.style.fontSize = '2rem'
//     head.textContent = title;
//     container.append(head);
// }

// function myAuhtor(author) {
//     const h4 = document.createElement('h4');
//     h4.textContent = author;
//     h4.style.padding = '2rem'
//     container.append(h4);
// }

// function myDescription(desc) {
//     const content = document.createElement('p')
//     content.textContent = desc;
//     content.style.fontSize = '1.5rem'
//     container.append(content);
// }


// function myUrl(url) {
//     const textUrl = document.createElement('p')
//     textUrl.textContent = url;
//     container.append(textUrl)
// }

// function myArticleImg(img) {
//     const myImg = document.createElement('img');
//     myImg.src = img;
//     myImg.style.width = '80%'
//     myImg.style.height = '80%'
//     myImg.style.marginTop = '2rem'
//     container.append(myImg)
//     if (myImg === null) {
//         console.log(null)
//     }
// }

// function dontDisplay() {
//     if (!img) return img.style.display = 'none'
//     if (!p) return img.style.display = 'none'
//     if (!h1) return img.style.display = 'none'
// }