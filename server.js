const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'}
];

//list of users
app.get('/users', function(req, res){
    res.json({
        success: true,
        message: 'Successfully got users. Nice!',
        users: mockUserData
    })
});

//user ID
app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

//add login site with dummy username & password
app.post('/login', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = 'billyTheKid';
    const mockPassword = 'superSecret';

    if(username == mockUsername && password == mockPassword) {
        res.json({
            success: true,
      	 	message: 'password and username match!',
      	 	token: 'encrypted token goes here'
        })
    }
    else {
        res.json({
            success: false,
            message: 'password and username do not match'
       })
    }
})

//listen to port 8000
app.listen(8000,function(){ console.log("server is running") })
