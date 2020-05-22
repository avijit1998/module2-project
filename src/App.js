import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as contactsAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";
import { Route } from "react-router-dom";
import ActionButton from "./ActionButton";
import PostForm from "./PostForm";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  // async componentDidMount() {

  //   // fetch("https://jsonplaceholder.typicode.com/users")
  //   //   .then((result) => result.json())
  //   //   .then((jsonResult) => {
  //   //     this.setState({
  //   //       isLoaded: true,
  //   //       items: jsonResult,
  //   //     });
  //   //   });

  //   // the above can be also be written in

  //   let result = await fetch("https://jsonplaceholder.typicode.com/users");
  //   let resultJSON = await result.json();
  //   this.setState({
  //     isLoaded: true,
  //     items: resultJSON,
  //   });
  // }

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

  // onClick = () => {
  //   console.log(this.firstName.value);
  // };

  // onKeyUp = (target, event) => {
  //   if (event.keyCode === 13) {
  //     switch (target) {
  //       case "firstName":
  //         this.firstName.focus();
  //         break;
  //       case "lastName":
  //         this.lastName.focus();
  //         break;
  //       case "age":
  //         this.age.focus();
  //         break;
  //       case "submit":
  //         this.submit.focus();
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  // };
  render() {
    // const { items, isLoaded } = this.state;

    return (
      // isLoaded && (
      //   <div className="App">
      //     data has been loaded.
      //     <ul>
      //       {items.map((item) => {
      //         return <li key={item.id}>{item.name}</li>;
      //       })}
      //     </ul>
      //     <PostForm />
      //   </div>
      // )
      /* <div>
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
        */

      <ActionButton
        label="deal"
        // action={() => {
        //   console.log("deal");
        // }}
      />
    );
  }
}

export default App;
