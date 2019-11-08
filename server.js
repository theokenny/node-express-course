const express = require('express');
const app = express();

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

//listen to port 8000
app.listen(8000,function(){ console.log("server is running") })