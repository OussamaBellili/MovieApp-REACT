import React, { Component } from "react";

export default class Add extends Component {
  state = {
    title: "",
    rate: 0,
    img: "",
    year: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div style={{ right: "0", bottom: "0", margin: "25px" }}>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          +
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Add Movie
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="title">movie title</label>
                    <input
                      type="text"
                      name="title"
                      class="form-control"
                      id="title"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <label for="image">movie image</label>
                    <input
                      type="text"
                      name="img"
                      class="form-control"
                      id="image"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <label for="year">movie year</label>
                    <input
                      type="text"
                      name="year"
                      class="form-control"
                      id="year"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <label for="rate">movie rate</label>
                    <input
                      type="number"
                      name="rate"
                      class="form-control"
                      id="rate"
                      onChange={this.handleChange}
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() =>
                    this.props.add({ id: Math.random(), ...this.state })
                  }
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
