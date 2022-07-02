import axios from "axios";
import Items from './Items';
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import './Endorsement.css'
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

class Endorsement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : "",
      title: "",
      relationship : "",
      content: "",
      change: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.sumbit = this.sumbit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(name, value);

    this.setState({
      [name]: value
    });
  }

  async sumbit(event){
    event.preventDefault();
    console.log(`${this.state.name},${this.state.title},${this.state.relationship},${this.state.content}`);

    await axios
      .post("/api/endorsements", {
        name: this.state.name,
        title: this.state.title,
        relationship: this.state.relationship,
        content: this.state.content
      })
      .then((result) => {
        this.setState({
          change : true
        });
      })
  }

  render() {
    return (
      <div className='section'>
        <h2 className='section__title'>Endorsements</h2>
        <Items class='endorsement__grid' change={this.state.change}/>
        <div className = 'endorsement__form'>
            <form method="post" action="">
                <Grid container alignItems="center" justify="center" direction="column">
                <h3>Give some kudos to Yoon</h3>
                    <Grid item>
                        <TextField type="text" name="name" placeholder="Name" onChange={this.handleChange} />
                    </Grid>
                    <Grid item>
                        <TextField type="text" name="title" placeholder="Job title" onChange={this.handleChange} />
                    </Grid>
                    <Grid item>
                        <TextField multiline fullWidth rows={4} name="content" placeholder="Comment" onChange={this.handleChange} />
                    </Grid>
                        <Button onClick={this.sumbit}>Post</Button>
                </Grid>
            </form>
        </div>
      </div>
    );
  }
}

export default Endorsement;
