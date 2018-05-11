require('dotenv').config()

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);

module.exports.run = app => {
    app.get('/', function (req, res) {
        res.send('News API')
    })

    app.get('/headlines', (req, res) => newsapi.v2.topHeadlines({
        category: [req.query.categories],
        language: 'en',
        country: 'us'
    }).then(response => res.json(response)))

    app.get('/financial-headlines', (req, res) => newsapi.v2.topHeadlines({
        sources: 'bloomberg, reuters, financial-times',
        language: 'en'
    }).then(response => res.json(response.articles)))
}
