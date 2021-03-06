import React, { Component } from "react";
import { graphql } from "react-apollo";
import fetchOneSong from "../queries/fetchOneSong";
import { Link } from "react-router";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) {
      return <h1>Loading...</h1>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={this.props.params.id} />
      </div>
    );
  }
}

export default graphql(fetchOneSong, {
  options: (props) => {
    return { variables: { id: props.params.id } };
  },
})(SongDetail);
