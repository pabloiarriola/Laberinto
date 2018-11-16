import React from "react"
import $ from "jquery"
import img from './mastersword.gif'

const styles = {
	width: '3%',
	height: '3%'

}

export default class Star extends React.Component{
	render(){
		return <img style = {styles} src = {img}/>
	}

}