// import React, { useState } from "react";
// // import Accordion from "./Accordion";
// import SearchWiki from "./SearchWiki";
// import Dropdown from "./Dropdown";
// import Translate from "./Translate";
// // const items = [
// //   {
// //     title: "what is React",
// //     content: "React is a front end javascript framework",
// //   },
// //   {
// //     title: "what is Bhakti",
// //     content: "React is a front end javascript framework",
// //   },
// //   {
// //     title: "what is Shakti",
// //     content: "React is a front end javascript framework",
// //   },
// // ];

// const options = [
//   { label: "The Color Red", value: "red" },
//   { label: "The Color Blue", value: "blue" },
//   { label: "The Color Green", value: "green" },
// ];

// const App = () => {
//   // const [selected, setSelected] = useState(options[0]);
//   // const [showDropdown, setShowdropdown] = useState(true);

//   // const onOptionClick = (i) => {
//   //   setSelected(options[i]);
//   // };
//   return (
//     <div>
//       {/* <Accordion items={items} /> */}
//       {/* <SearchWiki /> */}
//       <Translate />
//     </div>
//   );
// };
// export default App;

import React from "react";
import "../style/main.scss";
import List from "./List";
import FriendList from "./FriendList";

const App = () => {
  return (
    <div className="container">
      <FriendList list={List} />
    </div>
  );
};
export default App;
