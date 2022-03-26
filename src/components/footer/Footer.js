import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='question'>
                <h3> 1.How React Works</h3>
                <p>
                    React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.
                    React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
                    A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks.

                </p>
            </div>
            <div className='question '>
                <h3>2. How useState Works</h3>
                <p>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
                    As Example: const [items, setItems] = useState([]);
                    Like every other React hook, the useState hook is a special JavaScript function and hence must be invoked as a function. When it is invoked inside a function component, it declares a piece of state which React keeps track of under the hook for subsequent re-renders of the component.

                </p>

            </div>

        </div>
    );
};

export default Footer;