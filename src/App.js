import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as contactsAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";
import { Route } from "react-router-dom";
import ActionButton2 from "./ActionButton";
class App extends Component {
  // state = {
  //   contacts: [],
  // };

  // componentDidMount() {
  //   contactsAPI.getAll().then((contacts) => {
  //     this.setState(() => ({
  //       contacts: contacts,
  //     }));
  //   });
  // }

  // removeContact = (contact) => {
  //   this.setState((currentState) => ({
  //     contacts: currentState.contacts.filter((c) => {
  //       return c.id !== contact.id;
  //     }),
  //   }));

  //   contactsAPI.remove(contact);
  // };

  // createContact = (contact) => {
  //   contactsAPI.create(contact).then((contact) => {
  //     this.setState((currentState) => ({
  //       contacts: currentState.contacts.concat([contact]),
  //     }));
  //   });
  // };

  // render() {
  //   return (
  //     <div>
  //       <Route
  //         exact
  //         path="/"
  //         render={() => (
  //           <ListContacts
  //             contacts={this.state.contacts}
  //             onDeleteContact={this.removeContact}
  //           />
  //         )}
  //       />
  //       <Route
  //         path="/create"
  //         render={({ history }) => (
  //           <CreateContact
  //             onCreateContact={(contact) => {
  //               this.createContact(contact);
  //               history.push("/");
  //             }}
  //           />
  //         )}
  //       />
  //     </div>
  //   );
  // }

  onClick = () => {
    console.log(this.firstName.value);
  };

  onKeyUp = (target, event) => {
    if (event.keyCode === 13) {
      switch (target) {
        case "firstName":
          this.firstName.focus();
          break;
        case "lastName":
          this.lastName.focus();
          break;
        case "age":
          this.age.focus();
          break;
        case "submit":
          this.submit.focus();
          break;
        default:
          break;
      }
    }
  };
  render() {
    return (
      <div className="App">
        <div>
          <span>First Name:</span>
          <input
            ref={(input) => {
              this.firstName = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "lastName")}
            type="text"
          />
          <span>Last Name:</span>
          <input
            ref={(input) => {
              this.lastName = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "age")}
            type="text"
          />
          <span>Age:</span>
          <input
            ref={(input) => {
              this.age = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "submit")}
            type="text"
          />
          <input
            ref={(input) => {
              this.submit = input;
            }}
            type="submit"
            value="submit"
            onClick={this.onClick}
          />
        </div>

        <ActionButton2
          label="deal"
          action={() => {
            console.log("deal");
          }}
        />
      </div>
    );
  }
}

export default App;
