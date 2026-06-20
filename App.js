import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
        'h1',
        {id : "heading", className : "heading"},
        'Hello world from React'
    );


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


const jsxHeading = <h1>this is jsx heading</h1>  //we can use single line without bracket

const jsxHeadingMulti = (
    <div>
        <h1 className="heading" >this is jsx multi line code heading</h1>
    </div>
 );

 const Title = () => <h2>This is Title</h2>;

const HeadingComponent = () => 
(
<div className="container">
    <h1>This is a component in React</h1>
    <Title/>
</div>
);



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>);