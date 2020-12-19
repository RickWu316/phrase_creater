// require packages used in the project
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const generatePhrase = require('./generate_phrase')

// require handlebars in the project
const exphbs = require('express-handlebars')
const handlebars = require('handlebars')

//Register helper
handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


// setting body-parserg
app.use(bodyParser.urlencoded({ extended: true }))

// routes setting
app.get('/', (req, res) => {

    res.render('index')
})

//POST
app.post('/', (req, res) => {

    const jobs = req.body.inlineRadioOptions
    const empty = '請選擇職業再點選按鈕產生幹話'
    if (jobs) {
        const phrase = generatePhrase(req.body.inlineRadioOptions)
        res.render('index', { phrase: phrase, jobs: jobs })

    } else {
        // console.log(jobs)
        res.render('index', { phrase: empty })
    }


})

// start and listen on the Express server
app.listen(port, () => {
    console.log(`Express is listening on http://localhost:${port}`)
})