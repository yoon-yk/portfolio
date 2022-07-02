import React, { Component } from "react";
import axios from "axios";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Endorsements: []
    }
  }

  componentWillReceiveProps(props) {
      console.log(props);
      this.renderEndorsment();
  }

  componentDidMount() {
      this.renderEndorsment();
  }

  async renderEndorsment() {

    try {
        let endorsements = await axios.get("/api/endorsements");

        this.setState({
            Endorsements: endorsements.data.map(endorsement => {
                console.log(this.getItem(endorsement));
                return this.getItem(endorsement);
            })
        });
    } catch (err) {
        console.log(err);
    }
  }

  getItem(endorsement) {
    //   console.log(endorsement);
    return (
      <div class='endorsement endorsement__grid' key={endorsement._id}>
        <div class='endorsement__description'>
          <h3>"{endorsement.content}"</h3>
          <h4>{endorsement.name}, {endorsement.title}</h4>
          <div>{endorsement.regdate}</div>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.state.Endorsements}</div>;
  }
}

export default Items;
