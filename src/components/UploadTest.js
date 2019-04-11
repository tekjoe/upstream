import React, { Component } from "react";
import { storage } from "../firebase/firebase";

export default class UploadTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      url: ""
    };
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({
        image
      }));
    }
  };

  handleUpload = () => {
    const { image } = this.state;
    const uploadToFirebase = storage.ref(`images/${image.name}`).put(image);
    uploadToFirebase.on(
      "state_changed",
      snapshot => {
        // progress
      },
      error => {
        console.log(error);
      },
      () => {
        // complete
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
          });
      }
    );
  };

  render() {
    return (
      <div>
        <input type="file" onChange={this.handleChange} />
        <button onClick={this.handleUpload}>Upload</button>
      </div>
    );
  }
}
