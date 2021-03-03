//Question 1
//React uses the virtual-DOM because it uses a diffing algorithm to detect changes to components.
//The vitual dom is represents the real dom but it's what react uses under the hood to update the real dom.
//I don't really know what happens but my guess is that React uses the virtual dome to determine the difference between
//the last state and the new state then deletes the part of the dom that needs to be updated and replaces it with that corresponding part
//from the vitual dom
//
//Question 2
//Data in react flows from parent to child unilaterally. React is architechted thsis way because this
//makes managing data easier because it is prediactble where is flows from. It forces you to write cleane, more understandable code
//
//Question 3
//If we have to pass shared state to multiple children of a parent component on of the ways to do it is to create state in the parent component
//and pass the state and the way to change state as props to the children components who need it respectively.
//E.g I have an App and a text input component and component that shows what I
//I'm writing on the screen as im writingit
//I create the state in App
//I pass setState to the text input component and the state variable to the display component
//
//Question 4
//React Router is a way to implement client side routing on an Single page application (SPA)
//A lot of startups nowadays are using the JAM stack. And nice way to incorporate routing when you don't have server side routing
//is to use React router
//
//Question 5
//Brows cannot read JSX. Thay can only read JS. JSX must be compiled in regular Js before is can run on the broser
//
//Question 6
//Keys allow th react diffing algorithm to better understand what changed in components generated through mapping
//
//Question 7
//A react component is a function. Props would be arguments passed to this function from another function. It allows components to recieve
//data from other components
//State allows components to create its own internal data.
//If either props or state changes the component rerenders to reflect that changes
//
//Question8
//The ES6 syntex is being transpiled into an older version of javascript so that browsers that do not understand that latest syntax can
//still run the code that is being transpiled. It's important because as a frontend developer you want your JS to be run in as many brosers as possible
//
//Question 9
//
const properNames = (names) => {
  return names.map((current) => {
    const words = current.match(/[a-zA-Z]+/g);
    const properWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLoweCase();
    });
    return `${properWords[0]} ${properWords[1]}`;
  });
};

// no time to test
//Question10
const smallWordOnly = (array) => array.filter((current) => current.length <= 6);
console.log(smallWordOnly(["something", "2"]));
console.log(smallWordOnly(["someth", "2111111111111111111111"]));
console.log(smallWordOnly(["", "2"]));
console.log(smallWordOnly([]));
console.log(smallWordOnly([undefined, 141432, null, [], {}])); //<--- don't know how to solve this yet I only hvae 10 mins let work on question 9
