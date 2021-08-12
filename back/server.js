const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
// npm install body-parser
const app = express()
const sequelize = require('sequelize')
const Op = sequelize.Op;
const db = require('./models')
const { calculator1, calculator2, FAQ, FeedBack, Income_Scores, apply_alert1 } = require('./models')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false, }))
app.use(cors());

db.sequelize.sync({ focus: false }) // promise object
    .then(() => {
        console.log('DB 접속 성공');
    })
    .catch(error => {
        console.log(`DB 접속 실패 : ${error} `)
    })

app.post('/calculator1', async (req, res, next) => {

    const { income, Resident_period, Resident_Location1, Resident_Location2, Number_Of_Payment, Applying_Location } = req.body

    try {
        const data = await calculator1.create({
            income: income,
            Resident_Period: Resident_period,
            Resident_Location1: Resident_Location1,
            Resident_Location2: Resident_Location2,
            Number_Of_Payment: Number_Of_Payment,
            Applying_Location: Applying_Location

        })
        res.json(data)
    } catch (error) {
        console.error(error)
        next(error)
    }
})


app.post('/calculator2', async (req, res, next) => {

    const { Number_Of_Children, Resident_period, Resident_Location1, Resident_Location2, Number_Of_Payment, Applying_Location, Period_Of_HomeLessness } = req.body

    try {
        const data = await calculator2.create({
            Number_Of_Children: Number_Of_Children,
            Resident_Period: Resident_period,
            Resident_Location1: Resident_Location1,
            Resident_Location2: Resident_Location2,
            Number_Of_Payment: Number_Of_Payment,
            Applying_Location: Applying_Location,
            Period_Of_HomeLessness: Period_Of_HomeLessness,

        })

        res.json(data)
    } catch (error) {
        console.error(error)
        next(error)
    }
})

app.post('/Feedback', async (req, res, next) => {
    const { feedbackcontent } = req.body
    try {
        const data = await FeedBack.create({
            Content:feedbackcontent
        })
        res.json(data)
    } catch (error) {
        console.error(error)
        next(error)
    }
})

app.get('/IncomeScores', async (req, res, next) => {


    const {Income, Person, Cost} = req.query

    const data = await Income_Scores.findAll({
        where: { Income:Income, Person:Person, Cost_Front: {[Op.lt]: Cost}, Cost_Back: {[Op.gte]: Cost}}
    })

    res.json(
        {...data}
    )

})

app.get('/apply_alert1_1', async (req, res, next) => {


    let {apply, Location, dbLocation, option2} = req.query

        const data = await apply_alert1.findAll({
            where: { apply:apply, Location:Location, dbLocation:dbLocation, option2:{[Op.lte]:option2} }
        })

        if(data.length == 0){

            const data = await apply_alert1.findAll({
                where: { apply:apply, Location:Location, dbLocation:'not', option2:{[Op.lte]:option2}}
            })

                if(data.length == 0){
                    const data = await apply_alert1.findAll({
                        where: { apply:apply, Location:Location, option2:{[Op.lte]:option2}}


                    })


                        if(data.length == 0){

                            const data = await apply_alert1.findAll({
                                where: { apply:apply, Location:'not', option2:{[Op.lte]:option2}}
                            })
                            if(data.length == 0){

                                const data = await apply_alert1.findAll({
                                    where: { apply:apply, dbLocation:dbLocation, option2:{[Op.lte]:option2}}
                                })
                        
                                if(data.length == 0){

                                    const data = await apply_alert1.findAll({
                                        where: { apply:apply, dbLocation:'not', option2:{[Op.lte]:option2}}
                                    })
                                    
                                }
                                res.json(
                                    {...data}
                                )
                            }
                            
                            res.json(
                                {...data}
                            )
                        }

                    res.json(
                        {...data}
                    )
                }

            res.json(
                {...data}
            )
        }

        res.json(
            {...data}
        )

})


app.get('/faqs/:localhost', async (req, res, next) => {

    const {localhost} = req.params

    console.log(localhost)

    const data = await FAQ.findAll({
        where: { Category: localhost }
    })

    console.log(data)

    // res.json({question:data.Question, answer:data.Answer,})
    res.json(
        { ...data }
    )
})

// app.get('/', (req, res) => {
//     res.send('sadgsdg')
// })
// app.get('/lolo', (req, res) => {
//     res.send('lolo')
// })
// app.get('/ff', (req, res) => {
//     res.send('asdf')
// })

app.listen(80, () => {
    console.log('start server port 80')
})

