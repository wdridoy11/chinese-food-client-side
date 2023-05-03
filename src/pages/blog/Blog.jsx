import React from 'react'
const blogImg =`https://cdn.pixabay.com/photo/2015/05/31/11/25/girl-791177_960_720.jpg`;
const Blog = () => {
  return (
    <div>
        <div className="hero h-[400px]" style={{ backgroundImage: `url(${blogImg})` }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <h1 className="mb-5 text-5xl font-semibold">Blog</h1>
            </div>
        </div>
        <div className='container mx-auto'>
            <div className='pt-20'>
                <div className='py-8'>
                    <h1 className='text-2xl font-semibold text-black mb-2'>Q: Tell us the differences between uncontrolled and controlled components.</h1>
                    <p className='text-base text-slate-500 font-medium'>React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally</p>
                </div>
                <div className='py-8'>
                    <h1 className='text-2xl font-semibold text-black mb-2'>Q: How to validate React props using PropTypes</h1>
                    <p className='text-base text-slate-500 font-medium'>Props are the read-only properties that are shared between components to give the unidirectional flow of React a dynamic touch. They're mainly shared from the parent component to the child component, but the reverse is also possible. PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype. This makes sure that we don’t receive an error at the very end of our app by the console which might not be easy to deal with.</p>
                </div>
                <div className='py-8'>
                    <h1 className='text-2xl font-semibold text-black mb-2'>Q:Tell us the difference between nodejs and express js.</h1>
                    <p className='text-base text-slate-500 font-medium'>Node.js is a JavaScript runtime environment that can be used to build a wide variety of applications, while Express.js is a web application framework built on top of Node.js that provides a set of tools and utilities for building web applications specifically. While Node.js provides low-level APIs for building network applications, Express.js provides a higher-level abstraction layer that simplifies web application development in Node.js.</p>
                </div>
                <div className='py-8'>
                    <h1 className='text-2xl font-semibold text-black mb-2'>Q: What is a custom hook, and why will you create a custom hook?</h1>
                    <p className='text-base text-slate-500 font-medium'>Custom hooks are a powerful tool for reusing stateful logic across multiple components in React. They can help reduce code duplication, improve maintainability, and encapsulate complex logic. Custom hooks allow developers to extract complex logic from a component and reuse it in other components, without duplicating code. Custom hooks can also be used to share non-visual functionality between components, such as data fetching, authentication, or even animation.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog