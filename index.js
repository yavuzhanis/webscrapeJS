const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');


const app = express()

const url = "https://www.trendyol.com.tr/"

axios(url)
    .then(response =>{
        const html = response.data
        const $ = cheerio.load(html)
        const articles = [];
        $('.contentFrame',html).each(function(){
            const title =  $(this).text()
            const url =  $(this).find('img').attr('src')
            articles.push({
                title,
                url
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))



app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));