import axios from "axios";
import Items from './Items';
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import './Endorsement.css'
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const Endorsement = () => {
  const [commenter, setName] = useState('');
  const [commentTitle, setTitle] = useState('');
  const [commentContent, setContent] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    let body = {
      name: commenter,
      title: commentTitle,
      content: commentContent
    }

    await axios
      .post("/api/endorsements", body)
      .then(() => {

          console.log('handleSubmit');
          event.preventDefault(); // prevent page refresh
      
          // clear all input values in the form
          setName('');
          setTitle('');
          setContent('');

      })
  }

    return (
      <div className='section'>
        <h2 className='section__title'>Endorsements</h2>
        <Items class='endorsement__grid' />
        <div className = 'endorsement__form'>
            <form method="post" action="" onSubmit={handleSubmit}>
                <Grid container alignItems="center" justify="center" direction="column">
                <h3>Give some kudos to Yoon</h3>
                    <Grid item>
                        <TextField 
                          type="text" 
                          name="name"
                          value={commenter}
                          placeholder="Name" 
                          onChange={event => setName(event.target.value)} />
                    </Grid>
                    <Grid item>
                        <TextField 
                          type="text" 
                          name="title"
                          value={commentTitle}
                          placeholder="Job title" 
                          onChange={event => setTitle(event.target.value)} />
                    </Grid>
                    <Grid item>
                        <TextField 
                          multiline fullWidth 
                          rows={4} 
                          value={commentContent}
                          name="content" 
                          placeholder="Comment" 
                          onChange={event => setContent(event.target.value)} />
                    </Grid>
                        <Button type="submit">Post</Button>
                </Grid>
            </form>
        </div>
      </div>
    );
  };

export default Endorsement;
