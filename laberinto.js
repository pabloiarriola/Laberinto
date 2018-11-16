import React from "react"
import $ from "jquery"
import Pared from './Pared.js'
import Whitespace from './Whitespace.js'
import Link from './Link.js'
import MasterSword from './MasterSword.js'
import img from './background.jpg'

const styles = {
	background: `url(${img})`,
	backgroundSize: 2250
}

export default class Laberinto extends React.Component{
	
	constructor(){
		super()
		this.state = {
			laberinto:[],
			px:1,
			py:1,
			
		}

		$.getJSON('http://34.210.35.174:3001/?type=json&w=10&h=10').done((result)=>{
			this.setState({laberinto:result})
		})
	}

	handleKeyDown(e) {
		e.preventDefault()
        if (e.key === "ArrowRight") {
        	const laberinto2 = this.state.laberinto
        	if(laberinto2[this.state.py][this.state.px+1] == " "){
        		
            	laberinto2[this.state.py][this.state.px] = " "
            	laberinto2[this.state.py][this.state.px+1] = "p"
            	this.setState({
                	px: this.state.px +1,
                	laberinto: laberinto2

            	})
        	} 
        	if(laberinto2[this.state.py][this.state.px+1] == "g"){
        		
            	laberinto2[this.state.py][this.state.px] = " "
            	laberinto2[this.state.py][this.state.px+1] = "p"
            	this.setState({
                	px: this.state.px +1,
                	laberinto: laberinto2,
                	
            	})
				//Si se quiere que suene la cancion de Zelda de cuando se abre un cofre quitar el comment. Se quito por ser mala practica que suene algo al poner ok
				//en un alert
				//document.getElementById('won').play();
            	alert("You found the master sword");
				
            	
        	} 
        }
        if (e.key === "ArrowLeft") {
            const laberinto2 = this.state.laberinto
        	if(laberinto2[this.state.py][this.state.px-1] == " "){
        		
            	laberinto2[this.state.py][this.state.px] = " "
            	laberinto2[this.state.py][this.state.px-1] = "p"
            	this.setState({
                	px: this.state.px -1,
                	laberinto: laberinto2
            	})
        	}
        }
        if (e.key === "ArrowUp") {
            const laberinto2 = this.state.laberinto
        	if(laberinto2[this.state.py-1][this.state.px] == " "){
            	laberinto2[this.state.py][this.state.px] = " "
            	laberinto2[this.state.py-1][this.state.px] = "p"
            	this.setState({
                	py: this.state.py -1,
                	laberinto: laberinto2
            	})
        	} 
        }
        if (e.key === "ArrowDown") {
            const laberinto2 = this.state.laberinto
        	if(laberinto2[this.state.py+1][this.state.px] == " "){
        		
            	laberinto2[this.state.py][this.state.px] = " "
            	laberinto2[this.state.py+1][this.state.px] = "p"
            	this.setState({
                	py: this.state.py + 1,
                	laberinto: laberinto2
            	})
        	}
        	if(laberinto2[this.state.py+1][this.state.px] == "g"){
        		
            	laberinto2[this.state.py][this.state.px] = " "
            	laberinto2[this.state.py+1][this.state.px] = "p"
            	this.setState({
                	px: this.state.py +1,
                	laberinto: laberinto2,
                	
            	})
				//Si se quiere que suene la cancion de Zelda de cuando se abre un cofre quitar el comment. Se quito por ser mala practica que suene algo al poner ok
				//en un alert
				//document.getElementById('won').play();
            	alert("You found the master sword");
			
            	
        	} 
        }

    }

	render(){
		return <div id="Laberinto" style = {styles} onKeyDown = {this.handleKeyDown.bind(this)} tabIndex = "0">
            <h1 style={{textAlign:"center",color:"white"}}>Laberinto Zelda</h1>
			{
				this.state.laberinto.map(row=>{
					let paredes = row.map(pared =>{
						if((pared== "+")||(pared=="|")||(pared=="-"))
						{
							return <Pared/>
						}
						if(pared == " "){
							return <Whitespace/>
						}
						if(pared == "p"){
							return <Link/>
						}
						if(pared == "g"){
							return <MasterSword/>
						}
						return <span>{pared}</span>
					})
					paredes.push(<br />)
						return paredes
				})
			}
		</div>
	}

}