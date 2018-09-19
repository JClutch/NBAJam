const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/www'));
app.use(bodyParser.json());

const db = {
	test: 'testing123'
}

// app.use(webpackDevMiddleware(compiler, {
//   hot: true,
//   filename: 'bundle.js',
//   publicPath: '/',
//   stats: {
//     colors: true,
//   },
//   historyApiFallback: true,
// }));


// app.get('/', (req, res) => {
//   res.send('hello world')
// })


app.post('/authentication/logIn', (req,res) => {
	if(db[req.body.user] === req.body.password){
		res.send('true')
	} else{
		res.send('false')
	}
})



  app.set('port', process.env.PORT || 8000)

const server = app.listen(app.get('port'), () => {
    console.log('running on port:' + app.get('port'))
  })
