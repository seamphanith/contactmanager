import React, { Component } from "react";
import Proptypes from "prop-types";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";
class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
  onClickDelete = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };
  render() {
    // Destructuring
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={this.onShowClick}
                  style={{ cursor: "pointer" }}
                  className="fas fa-sort-down"
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onClickDelete.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.proptypes = {
  contact: Proptypes.object.isRequired,
  deleteClickHandler: Proptypes.func.isRequired
};

export default Contact;
