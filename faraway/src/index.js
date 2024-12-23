import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
// function App() {
//   const [currentLevel, updateLevel] = useState(0);
//   return (
//     <div className="w-96 border h-auto p-8 mt-5 mx-auto">
//       <Levels />
//       <h2 className="text-center m-4">Step 1 Learn React.</h2>
//       <Buttons />
//     </div>
//   );
// }

// function Levels() {
//   return (
//     <ul className="flex w-full justify-between items-center ">
//       <li className="h-10 w-10 text-center p-2 rounded-full border bg-violet-600 text-white">
//         1
//       </li>
//       <li className="h-10 w-10 text-center p-2 rounded-full border">2</li>
//       <li className="h-10 w-10 text-center p-2 rounded-full border">3</li>
//     </ul>
//   );
// }

// function Buttons() {
//   return (
//     <ul className="flex justify-between">
//       <li className="p-1 px-4 bg-violet-600 text-white rounded-2xl cursor-pointer">
//         Previous
//       </li>
//       <li className="p-1 px-7 bg-violet-600 text-white rounded-2xl cursor-pointer">
//         Next
//       </li>
//     </ul>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
