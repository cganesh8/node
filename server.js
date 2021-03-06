const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())

const database = {
    learners: [
        {
            mobile: '0412886730',
            name: 'Subra',
            email: 'subra730@gmail.com',
            enrolled: new Date(),
            suburb: 'Dandenong',
            postcode: '3175',
            dtdate: '01/09/2020',
            dttime: '10.30am',
            dtcenter: 'Dandenong',
            source: 'TM2D'
        },
        {
            mobile: '0123456789',
            name: 'test',
            email: 'test@gmail.com',
            enrolled: new Date(),
            suburb: 'Bundoora',
            postcode: '3083',
            dtdate: '30/11/2020',
            dttime: '3.30pm',
            dtcenter: 'Bundoora',
            source: 'other'
        }
    ]
}

app.get('/', (req, res) => {
    res.send('Connected to backend successfully');
})

app.post('/login', (req, res) => {
    if (req.body.mobile === database.learners[0].mobile) {
        //res.json(database.learners[0].mobile);
        res.json('LoginOK');
    }
    else {
        //res.json('no learner in database');
        //console.log(req.body.mobile);
        res.json('LoginNotOK');
    }
})

app.post('/register', (req, res) => {
    if (req.body.mobile === database.learners[0].mobile) {
        res.json('learner record exists in database');
    }
    else {
        res.json('learner record successfully created');
        console.log(req.body.mobile);
    }
})

app.listen(3000, () => {
    console.log('app is running on port 3000');
});




