/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".es", ".net"];
  // []
  function DomainGen() {
    let myDomain = [];
    for (let p = 0; p < pronoun.length; p++) {
      for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < noun.length; n++) {
          for (let e = 0; e < extension.length; e++) {
            myDomain.push(pronoun[p] + adj[a] + noun[n] + extension[e]);
          }
        }
      }
    }
    return myDomain;
  }
  console.log(DomainGen());
};
