import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <main class="flex w-full">
                <div class="max-h-screen hidden md:block mx-auto">
                    <img class="object-cover h-full w-full"
                        src="https://img.freepik.com/premium-vector/woman-with-laptop-sitting-office-desk-holding-pen-while-thinking-about-something-concept-illustration_270158-373.jpg"
                        alt="background" />
                </div>
                <div class="w-full md:w-4/6 lg:w-3/5 xl:w-2/5 p-10 min-h-screen flex flex-col justify-center">
                    <div class="mb-10">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-indigo-600" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                                clip-rule="evenodd" />
                        </svg>
                        <h1 class="mt-10 text-5xl font-extrabold">Register</h1>
                    </div>
                    <div class="w-full mx-auto space-y-6">
                        <div class="flex flex-col">
                            <label class="text-sm font-bold text-gray-600 mb-1" for="email">Your Name</label>
                            <input type="text" name="name" id="name"
                                class="w-full rounded-md px-4 py-2 mt-1 text-sm outline-none border-2 border-gray-200 focus:border-indigo-500"
                                placeholder="Your name" />
                        </div>
                        <div class="flex flex-col">
                            <label class="text-sm font-bold text-gray-600 mb-1" for="email">Your Photo</label>
                            <input type="file" name="photo" id="photo"
                                class="w-full rounded-md px-4 py-2 mt-1 text-sm outline-none border-2 border-gray-200 focus:border-indigo-500" />
                        </div>
                        <div class="flex flex-col">
                            <label class="text-sm font-bold text-gray-600 mb-1" for="email">Email Address</label>
                            <input type="text" name="email" id="email"
                                class="w-full rounded-md px-4 py-2 mt-1 text-sm outline-none border-2 border-gray-200 focus:border-indigo-500"
                                placeholder="jonn@doe.com" />
                        </div>
                        <div class="flex flex-col">
                            <label class="text-sm font-bold text-gray-600 mb-1" for="password">Password</label>
                            <input type="password" name="password" id="password"
                                class="w-full rounded-md px-4 py-2 mt-1 text-sm outline-none border-2 border-gray-200 focus:border-indigo-500"
                                placeholder="******" />
                        </div>
                        <div>
                            <button class="w-full bg-indigo-600 text-white rounded-md p-2">Sign Up</button>
                        </div>
                        <div class="relative pb-2">
                            <div class="absolute top-0 left-0 w-full border-b"></div>
                            <div class="absolute -top-3 left-0 w-full text-center">
                                <span class="bg-white px-3 text-sm">or</span>
                            </div>
                        </div>
                        <div class="text-center w-full">
                            <Link href="#" class="font-medium text-indigo-600 border-b border-indigo-600 text-sm">
                                Login to your existing account
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SignUp;