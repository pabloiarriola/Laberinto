module.exports = 

{
	"entry":"./index.js","output":"./bundle.js",
	module:{
		rules:[
		{
			test:/\.js$/,
			loader:['babel-loader']
		},
		{
			test:/\.png$/,
			loader: 'url-loader'
		}, 
		{
			test:/\.jpg$/,
			loader: 'url-loader'
		},
		{
			test:/\.gif$/,
			loader:'url-loader'
		}
		]
	},
	devServer:{
		port:8080,
		historyApiFallback:true
	}
}
