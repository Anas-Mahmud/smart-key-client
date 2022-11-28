import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5'>
            <div className='my-5'>
                <a class="group block h-56" href="/blog">
                    <div class="relative flex h-full items-end rounded-3xl border-4 border-black bg-white p-8 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#000]">
                        <div class="lg:group-hover:absolute lg:group-hover:opacity-0">
                            <span class="text-3xl sm:text-4xl" role="img" aria-hidden="true">📆</span>
                            <p class="mt-4 text-xl font-bold sm:text-2xl">1. What are the different ways to manage a state in a React application?</p>
                        </div>
                        <div class="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100">
                            <p class="mt-4 text-xs font-medium leading-relaxed">
                                The Four Kinds of React State to Manage: 1.Local state, 2.Global state, 3.Server state, 4.URL state <br />
                                <strong>Local (UI) state</strong> – Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. <br />
                                <strong>Global (UI) state</strong> – Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application. <br />
                                <strong>Server state</strong> – Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. <br />
                                <strong>URL state</strong> – Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div className='my-5'>
                <a class="group block h-56" href="/blog">
                    <div class="relative flex h-full items-end rounded-3xl border-4 border-black bg-white p-8 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#000]">
                        <div class="lg:group-hover:absolute lg:group-hover:opacity-0">
                            <span class="text-3xl sm:text-4xl" role="img" aria-hidden="true">📆</span>
                            <p class="mt-4 text-xl font-bold sm:text-2xl">2. How does prototypical inheritance work?</p>
                        </div>
                        <div class="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100">
                            <h3 class="text-2xl font-bold">2. How does prototypical inheritance work?</h3>
                            <p class="mt-4 text-lg font-medium leading-relaxed">
                                Datepicker input using Flatpickr with a button that clears the selected
                                date.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div className='my-5'>
                <a class="group block h-56" href="/blog">
                    <div
                        class="relative flex h-full items-end rounded-3xl border-4 border-black bg-white p-8 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#000]"
                    >
                        <div class="lg:group-hover:absolute lg:group-hover:opacity-0">
                            <span class="text-3xl sm:text-4xl" role="img" aria-hidden="true">📆</span>
                            <p class="mt-4 text-xl font-bold sm:text-2xl">3. What is a unit test? Why should we write unit tests?</p>
                        </div>

                        <div
                            class="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100"
                        >
                            <h3 class="text-2xl font-bold">3. What is a unit test? Why should we write unit tests?</h3>

                            <p class="mt-4 text-lg font-medium leading-relaxed">
                                Datepicker input using Flatpickr with a button that clears the selected
                                date.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div className='my-5'>
                <a class="group block h-56" href="/blog">
                    <div
                        class="relative flex h-full items-end rounded-3xl border-4 border-black bg-white p-8 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#000]"
                    >
                        <div class="lg:group-hover:absolute lg:group-hover:opacity-0">
                            <span class="text-3xl sm:text-4xl" role="img" aria-hidden="true">📆</span>
                            <p class="mt-4 text-xl font-bold sm:text-2xl">4. React vs. Angular vs. Vue?</p>
                        </div>

                        <div
                            class="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100"
                        >
                            <h3 class="text-2xl font-bold">4. React vs. Angular vs. Vue?</h3>

                            <p class="mt-4 text-lg font-medium leading-relaxed">
                                Datepicker input using Flatpickr with a button that clears the selected
                                date.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Blogs;