// import React from "react";

// import { useState, useEffect, useRef } from "react/cjs/react.development";

// const Dropdown = ({ options, selected, setSelected, label }) => {
//   const [active, setActive] = useState(false);
//   const ref = useRef();

//   useEffect(() => {
//     const closeDropDown = (e) => {
//       if (ref.current.contains(e.target)) {
//         return;
//       }
//       setActive(false);
//     };
//     document.body.addEventListener("click", closeDropDown, { capture: true });
//     return () => {
//       document.body.removeEventListener("click", closeDropDown, {
//         capture: true,
//       });
//     };
//   }, []);

//   const handleClick = (i) => {
//     setSelected(options[i]);
//     setActive(!active);
//   };

//   const renderOptions = options.map((option, i) => {
//     if (option.value === selected.value) return null;

//     return (
//       <div
//         className="item"
//         key={option.value}
//         onClick={() => handleClick(i)}
//         data-id={`i`}
//       >
//         {option.label}
//       </div>
//     );
//   });

//   const visible = active ? "visible" : "";

//   return (
//     <div className="ui form" ref={ref}>
//       <div className="field">
//         <label htmlFor="" className="label">
//           {label}
//         </label>
//         <div
//           className={`ui selection dropdown ${visible} ${
//             active ? "active" : ""
//           } `}
//           onClick={() => {
//             setActive(!active);
//           }}
//         >
//           <i className="dropdown icon"></i>
//           <div
//             className="text"
//             style={{ backgroundColor: `${selected.value}` }}
//           >
//             {selected.label}
//           </div>
//           <div className={`menu ${visible}   ${active ? "transition" : ""}`}>
//             {renderOptions}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Dropdown;
