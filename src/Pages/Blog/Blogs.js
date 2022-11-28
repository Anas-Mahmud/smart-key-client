import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5'>
            <div className='my-5'>
                <div className="group block h-56">
                    <div className="relative flex h-full items-end rounded-3xl border-4 border-black bg-white p-8 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#000]">
                        <div className="lg:group-hover:absolute lg:group-hover:opacity-0">
                            <span className="text-3xl sm:text-4xl" role="img" aria-hidden="true">📆</span>
                            <p className="mt-4 text-xl font-bold sm:text-2xl">1. What are the different ways to manage a state in a React application?</p>
                        </div>
                        <div className="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100">
                            <p className="mt-4 text-xs font-medium leading-relaxed">
                                <strong>The Four Kinds of React State to Manage: 1.Local state, 2.Global state, 3.Server state, 4.URL state </strong><br />
                                <strong>Local (UI) state</strong> – Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. <br />
                                <strong>Global (UI) state</strong> – Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application. <br />
                                <strong>Server state</strong> – Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. <br />
                                <strong>URL state</strong> – Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-5'>
                <div className="group block h-56">
                    <div className="relative flex h-full items-end rounded-3xl border-4 border-black bg-white p-8 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#000]">
                        <div className="lg:group-hover:absolute lg:group-hover:opacity-0">
                            <span className="text-3xl sm:text-4xl" role="img" aria-hidden="true">📆</span>
                            <p className="mt-4 text-xl font-bold sm:text-2xl">2. How does prototypical inheritance work?</p>
                        </div>
                        <div className="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100">
                            <h3 className="text-2xl font-bold">2. How does prototypical inheritance work?</h3>
                            <p className="mt-4 text-lg font-medium leading-relaxed">
                                Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-5'>
                <div className="group block h-56">
                    <div className="relative flex h-full items-end rounded-3xl border-4 border-black bg-white p-8 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#000]">
                        <div className="lg:group-hover:absolute lg:group-hover:opacity-0">
                            <span className="text-3xl sm:text-4xl" role="img" aria-hidden="true">📆</span>
                            <p className="mt-4 text-xl font-bold sm:text-2xl">3. What is a unit test? Why should we write unit tests?</p>
                        </div>
                        <div className="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100">
                            <h3 className="text-xl font-bold">3-1. What is a unit test?</h3>
                            <p className="mt-4 text-sm font-medium leading-relaxed">
                                Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.
                            </p>
                        </div>
                        <div className="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100">
                            <h3 className="text-xl font-bold">3-2. Why should we write unit tests?</h3>
                            <p className="mt-4 text-sm font-medium leading-relaxed">
                                They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-5'>
                <div className="group block h-56">
                    <div className="relative flex h-full items-end rounded-3xl border-4 border-black bg-white p-8 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#000]">
                        <div className="lg:group-hover:absolute lg:group-hover:opacity-0">
                            <span className="text-3xl sm:text-4xl" role="img" aria-hidden="true">📆</span>
                            <p className="mt-4 text-xl font-bold sm:text-2xl">4. React vs. Angular vs. Vue?</p>
                        </div>
                        <div className="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100">
                            <h3 className="text-2xl font-bold"># React</h3>
                            <p className="mt-4 text-sm font-medium leading-relaxed">
                                <strong>React</strong> offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries.
                            </p>
                        </div>
                        <div className="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100 ml-3">
                            <h3 className="text-2xl font-bold"># Angular</h3>
                            <p className="mt-4 text-sm font-medium leading-relaxed">
                                <strong>Angular</strong> has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works.
                            </p>
                        </div>
                        <div className="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100">
                            <h3 className="text-2xl font-bold"># Vue</h3>
                            <p className="mt-4 text-sm font-medium leading-relaxed">
                                <strong>Vue</strong> provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;