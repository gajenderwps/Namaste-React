import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
        'h1',
        {id : "heading", className : "heading"},
        'Hello world from React'
    );
const root = ReactDOM.createRoot(document.getElementById('root'));


const parent1 = React.createElement("div", {id : "parent"}, 
                React.createElement("div", {id : "child"},
                [   React.createElement("h1", {id : "subchild"}, "I am h1 tag"),
                    React.createElement("h1", {id : "subchild"}, "I am h1 tag")
                ]
)
);

 const parent = React.createElement("div", {id : "superparent", className : "superparent"},
    [
        React.createElement("div", {id : "parent", className : "parent"}, ),
            React.createElement("h1", {id : "child", className : "parent"}, "this is h1" 

        ),
        React.createElement("div", {id : "parent1", className : "parent"}, 
            React.createElement("h1", {id : "child2", className : "parent"}, "this is h2"),

        )
    ] 
)  



root.render(parent);