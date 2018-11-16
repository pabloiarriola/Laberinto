import React from "react"
import $ from "jquery"
import img from './link.gif'

const styles = {
	width:'3%',
	height: '3%',

}

export default class Mario extends React.Component{
	render(){
		return <img style = {styles} src = {img}/>
	}

}