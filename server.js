const express = require('express');
const app = express();

const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'}
];

app.get('/users', function(req, res){
    res.json({
        success: true,
        message: 'Successfully got users. Nice!',
        users: mockUserData
    })
});

//listen to port 8000
app.listen(8000,function(){ console.log("server is running") })