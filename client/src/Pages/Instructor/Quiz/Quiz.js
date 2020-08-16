// import React, { useState } from "react";
// import TextField from "@material-ui/core/TextField";
// import Checkbox from "@material-ui/core/Checkbox";
// import Button from "@material-ui/core/Button";
// import Switch from "@material-ui/core/Switch";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Card from "react-bootstrap/Card";
// import DeleteIcon from "@material-ui/icons/Delete";
// import "./Quiz.css";
// import { connect } from "react-redux";
// import { AddQuizAction } from "../../../Actions/courseActions";

// function Quiz(props) {
//   const [state, setState] = React.useState({
//     checkedA: false,
//     checkedB: false,
//   });
//   const [questions, setQuestions] = React.useState([
//     {
//       Question: "",
//       Type: { type: "LongAnswer" },
//       Answer: "",
//       required: { checkedA: false, checkedB: false },
//     },
//   ]);
//   const [quesType, setquesType] = useState([]);

//   const handleChange = (event, index) => {
//     setState({ ...state, [event.target.name]: event.target.checked });
//     const values = [...questions];
//     values[index].required = state;
//     setQuestions(values);
//     // console.log(state);
//   };
//   const handleAddExpense = (e) => {
//     // console.log(questions);
//     e.preventDefault();
//     const values = [...questions];
//     values.push({
//       Question: "",
//       Type: { type: "LongAnswer" },
//       Answer: "",
//       required: { checkedA: false, checkedB: false },
//     });
//     setQuestions(values);
//   };
//   function handleRemoveFields(e, index) {
//     const values = [...questions];
//     values.splice(index, 1);
//     // console.log(values);
//     setQuestions(values);
//     // console.log(questions)
//   }
//   function handleQuestionTypeChange(index, event) {
//     const values = [...quesType];
//     values[index] = event.target.value;
//     setquesType(values);
//     const question = [...questions];
//     if (event.target.value === "MultipleChoice") {
//       question[index].Type = {
//         type: event.target.value,
//         option1: "",
//         option2: "",
//         option3: "",
//         option4: "",
//       };
//     } else if (event.target.value === "Checkbox") {
//       question[index].Type = {
//         type: event.target.value,
//         option1: "",
//         option2: "",
//         option3: "",
//         option4: "",
//       };
//     } else if (event.target.value === "LongAnswer") {
//       question[index].Type = {
//         type: event.target.value,
//       };
//     } else if (event.target.value === "ShortAnswer") {
//       question[index].Type = {
//         type: event.target.value,
//       };
//     }

//     setQuestions(question);
//   }

//   function handleoption1Change(e, index) {
//     const values = [...questions];
//     console.log(11111);
//     console.log(e.target.checked);
//     values[index].Type.option1 = e.target.value;
//     setQuestions(values);
//     console.log(questions);
//     // setoption1(e.target.value);
//   }
//   function handleoption2Change(e, index) {
//     const values = [...questions];
//     values[index].Type.option2 = e.target.value;
//     setQuestions(values);
//     console.log(questions);
//     // setoption2(e.target.value);
//   }
//   function handleoption3Change(e, index) {
//     const values = [...questions];
//     values[index].Type.option3 = e.target.value;
//     setQuestions(values);
//     console.log(questions);
//     // setoption3(e.target.value);
//   }
//   function handleoption4Change(e, index) {
//     const values = [...questions];
//     values[index].Type.option4 = e.target.value;
//     setQuestions(values);
//     console.log(questions);
//     // setoption4(e.target.value);
//   }
//   function handleCheckbox1Change(e, index) {
//     const values = [...questions];
//     values[index].Type.checkbox1 = e.target.value;
//     setQuestions(values);
//     // console.log(questions);
//     // setCheckbox1(e.target.value);
//   }
//   function handleCheckbox2Change(e, index) {
//     const values = [...questions];
//     values[index].Type.checkbox2 = e.target.value;
//     setQuestions(values);
//     // console.log(questions);
//     // setCheckbox2(e.target.value);
//   }
//   function handleCheckbox3Change(e, index) {
//     const values = [...questions];
//     values[index].Type.checkbox3 = e.target.value;
//     setQuestions(values);
//     // console.log(questions);
//   }
//   function handleCheckbox4Change(e, index) {
//     const values = [...questions];
//     values[index].Type.checkbox4 = e.target.value;
//     setQuestions(values);
//     // console.log(questions);
//   }
//   function handleQuestionChange(event, index) {
//     const values = [...questions];
//     values[index].Question = event.target.value;
//     setQuestions(values);
//   }
//   function submitform(e) {
//     e.preventDefault();
//     console.log(questions);
//     check(questions);
//   }
//   function check(q) {
//     props.AddQuizAction(q);
//     console.log(q);
//   }
//   return (
//     <div className="App">
//       <div>
//         <h1 style={{ textAlign: "center", marginTop: "3%" }}>
//           Create Assessment
//         </h1>
//         {questions.length === 0 ? (
//           <>
//             <Button
//               onClick={handleAddExpense}
//               variant="outlined"
//               style={{ height: "50px", width: "10px" }}
//             >
//               +
//             </Button>
//           </>
//         ) : null}
//         <form>
//           {questions.map((ques, index) => (
//             <div className=" container" key={index}>
//               <div className="row">
//                 <React.Fragment key={index}>
//                   <Card
//                     style={{
//                       display: "inlineBlock",
//                       margin: "5%",
//                       width: "80%",
//                       textAlign: "left",
//                     }}
//                   >
//                     <Card.Body>
//                       <TextField
//                         value={ques.Question}
//                         id="standard-basic"
//                         label="Untitled Question"
//                         multiline
//                         rowsMax={4}
//                         style={{ marginRight: "5%", width: "75%" }}
//                         onChange={(event) => handleQuestionChange(event, index)}
//                       />
//                       <TextField
//                         select
//                         variant="outlined"
//                         onChange={(event) =>
//                           handleQuestionTypeChange(index, event)
//                         }
//                         value={ques.Type.type}
//                         style={{
//                           width: "10rem",
//                           display: "inlineBlock",
//                           margin: "3px",
//                         }}
//                       >
//                         <option selected value="ShortAnswer">
//                           Short Answer
//                         </option>
//                         <option value="LongAnswer">Paragraph</option>
//                         <option value="MultipleChoice">Multiple Choice</option>
//                         <option value="Checkbox">Checkbox</option>
//                       </TextField>
//                       <br />

//                       {ques.Type.type === "LongAnswer" ? (
//                         <>
//                           <TextField
//                             placeholder="Long Answer Text"
//                             defaultValue={ques.Anwer}
//                             fullWidth
//                             margin="normal"
//                             multiline
//                             rowsMax={5}
//                           />
//                         </>
//                       ) : ques.Type.type === "ShortAnswer" ? (
//                         <>
//                           <TextField
//                             placeholder="Short Answer Text"
//                             defaultValue={ques.Answer}
//                             fullWidth
//                             margin="normal"
//                             multiline
//                             rowsMax={2}
//                           />
//                           <br />
//                         </>
//                       ) : ques.Type.type === "MultipleChoice" ? (
//                         <>
//                           <Checkbox style={{ margin: "1%" }} />
//                           <TextField
//                             placeholder="option 1"
//                             name="option1"
//                             value={ques.Type.option1}
//                             onChange={(event) => {
//                               handleoption1Change(event, index);
//                             }}
//                             style={{ marginTop: "1%" }}
//                           />
//                           <br />
//                           <Checkbox style={{ margin: "1%" }} />
//                           <TextField
//                             placeholder="option 2"
//                             name="option2"
//                             value={ques.Type.option2}
//                             onChange={(event) =>
//                               handleoption2Change(event, index)
//                             }
//                             style={{ marginTop: "1%" }}
//                           />
//                           <br />
//                           <Checkbox style={{ margin: "1%" }} />
//                           <TextField
//                             placeholder="option 3"
//                             name="option3"
//                             value={ques.Type.option3}
//                             onChange={(event) =>
//                               handleoption3Change(event, index)
//                             }
//                             style={{ marginTop: "1%" }}
//                           />
//                           <br />
//                           <Checkbox style={{ margin: "1%" }} />
//                           <TextField
//                             placeholder="option 4"
//                             name="option4"
//                             value={ques.Type.option4}
//                             onChange={(event) =>
//                               handleoption4Change(event, index)
//                             }
//                             style={{ marginTop: "1%" }}
//                           />
//                           <br />
//                         </>
//                       ) : ques.Type.type === "Checkbox" ? (
//                         <>
//                           <Checkbox style={{ margin: "1%" }} />
//                           <TextField
//                             style={{ marginTop: "1%" }}
//                             placeholder="Checkbox 1"
//                             name="Checkbox1"
//                             value={ques.Type.checkbox1}
//                             onChange={(event) =>
//                               handleCheckbox1Change(event, index)
//                             }
//                           />
//                           <br />
//                           <Checkbox style={{ margin: "1%" }} />
//                           <TextField
//                             style={{ marginTop: "1%" }}
//                             placeholder="Checkbox 2"
//                             name="Checkbox2"
//                             value={ques.Type.checkbox2}
//                             onChange={(event) =>
//                               handleCheckbox2Change(event, index)
//                             }
//                           />
//                           <br />
//                           <Checkbox style={{ margin: "1%" }} />
//                           <TextField
//                             style={{ marginTop: "1%" }}
//                             placeholder="Checkbox3"
//                             name="Checkbox3"
//                             value={ques.Type.checkbox3}
//                             onChange={(event) =>
//                               handleCheckbox3Change(event, index)
//                             }
//                           />
//                           <br />
//                           <Checkbox style={{ margin: "1%" }} />
//                           <TextField
//                             style={{ marginTop: "1%" }}
//                             placeholder="Checkbox 4"
//                             name="Checkbox4"
//                             value={ques.Type.checkbox4}
//                             onChange={(event) =>
//                               handleCheckbox4Change(event, index)
//                             }
//                           />
//                           <br />
//                         </>
//                       ) : null}

//                       <DeleteIcon
//                         onClick={(event) => handleRemoveFields(event, index)}
//                       />
//                       <FormControlLabel
//                         style={{ marginTop: "1%" }}
//                         control={
//                           <Switch
//                             checked={ques.required.checkedB}
//                             onChange={(event) => handleChange(event, index)}
//                             name="checkedB"
//                             color="primary"
//                           />
//                         }
//                         label="Required"
//                         labelPlacement="start"
//                       />
//                     </Card.Body>
//                   </Card>
//                   <div className="addButton">
//                     <Button onClick={handleAddExpense} variant="outlined">
//                       +
//                     </Button>
//                   </div>
//                 </React.Fragment>
//               </div>
//             </div>
//           ))}
//           <Button
//             type="Submit"
//             onClick={submitform}
//             variant="outlined"
//             style={{ textAlign: "center" }}
//           >
//             Create
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default connect(null, { AddQuizAction })(Quiz);
