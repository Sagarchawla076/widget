// // AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
// import React from "react";
// import { useState } from "react/cjs/react.development";
// import Dropdown from "./Dropdown";
// import Convert from "./Convert";

// const options = [
//   { label: "Afrikaans", value: "af" },
//   { label: "Arabic", value: "ar" },
//   { label: "Hindi", value: "hi" },
// ];

// const Translate = () => {
//   const [language, setLanguage] = useState(options[0]);
//   const [text, setText] = useState("");
//   return (
//     <div>
//       <div className="ui form">
//         <input value={text} onChange={(e) => setText(e.target.value)} />
//       </div>
//       <Dropdown
//         options={options}
//         selected={language}
//         setSelected={setLanguage}
//         label="Select a Language"
//       />
//       <hr />
//       <h3 className="ui header">OutPut</h3>
//       <Convert language={language} text={text} />
//     </div>
//   );
// };
// export default Translate;
