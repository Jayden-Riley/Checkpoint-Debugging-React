import { useState } from "react";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  // State to store the count value and its setter function
  let [count, setCount] = useState(0);

  // Function to handle count incrementation
  function Increase() {
    // Debugging change: using the functional form of setCount to ensure
    // state updates are based on the latest value of `count`. This prevents
    // issues with stale state when multiple state updates happen in quick succession.
    setCount((prevCount) => prevCount + 1);
  }

  // Function to handle count resetting
  function Reset() {
    setCount(0);
  }
  // Function to handle count decrementation
  function Decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  // Render the component with count, increment, reset, and decrement buttons
  return (
    <div className="flex-col  flex justify-center items-center h-screen">
      <span className="text-xl font-semibold">{count}</span>
      <div className="flex items-center mt-4 gap-5">
        <div className="bg-green-400 rounded-md shadow-black shadow-md  py-1  active:scale-[.98]">
          <Button onClick={Increase}>Increase</Button>
        </div>
        <div className="bg-white text-black rounded-md shadow-black shadow-md  py-1  active:scale-[.98]">
          <Button onClick={Reset}>Reset</Button>
        </div>
        <div className="bg-red-500 rounded-md shadow-black shadow-md  py-1  active:scale-[.98]">
          <Button onClick={Decrease}>Decrease</Button>
        </div>
      </div>
    </div>
  );
}

// Custom button component for better reusability and styling.
function Button({ children, onClick }) {
  return (
    <button className="border-transparent px-5 font-semibold" onClick={onClick}>
      {children}
    </button>
  );
}
