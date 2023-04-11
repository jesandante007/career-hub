import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto space-y-10 divide-y mt-20">
      <div>
        <p className="text-xl font-medium">When should we use context api?</p>
        <p className="text-gray-500">
            We all know about props drilling. This is a common way of sharing data between children components. But when components are deeply nested then props drilling way is very annoying. So using context api we can easily share data between children easily without chaining. It's like a global variable and we can use anywhere we want just using a hook called useContext. 
        </p>
      </div>
      <div>
        <p className="text-xl font-medium">What is a custom hook?</p>
        <p className="text-gray-500">
            Custom hook is special javascript function which is reusable. When we have component logic that needs to be used by multiple components then we can make a custom hook using that logic. Hooks are start with 'use' like: useContext()
        </p>
      </div>
      <div>
        <p className="text-xl font-medium">What is useRef?</p>
        <p className="text-gray-500">
            useRef is one of a hook in react. It is used to reference a object inside a functional component and preserve the referenced object's state between rerender. useRef has a property called 'current' used to retrieve the value of the referenced object at any time while also accepting an initial value as an argument. We can change the value of a referenced object by updating the current value. Unlike useState, useRef is mutable.
        </p>
      </div>
      <div>
        <p className="text-xl font-medium">What is useMemo?</p>
        <p className="text-gray-500">
            useMemo is one of a hook in react. It is used to cache the result of calculation between re-renders. So it usually returns a memorized value. It take two arguments calculateValue and dependencies. It runs when any of dependency changes. When there is some expensive computation and we want to skip doing it again if the data hasn't changed then we can use useMemo.
        </p>
      </div>
    </div>
  );
};

export default Blog;
