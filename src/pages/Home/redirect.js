import React, { Component } from 'react'

export class Redirect extends Component {
  constructor(props){
    super()
    this.state = {...props}
  }

  componentWillMount(){
    window.location = "https://konsultasi-setc.herokuapp.com/admin/auth/login"
  }

  render(){
    return <section>Tunggu bentar om...</section>
  }
}

export default Redirect