// import React, { useEffect, useState } from "react";
// import { Field, Formik, FieldArray, useFormik } from "formik";
// // import { MdOutlineUploadFile } from "react-icons/md";
// import { GoTrashcan } from "react-icons/go";
// import "../CSS/NewCard.css";
// // import store from "../redux/store";
// // import { addCards, removeCard } from "../redux/actions";

// const initialValues = {
//   id: Math.random(),
//   group: "",
//   description: "",
//   card: [
//     {
//       id: Math.random(),
//       term: "",
//       defination: "",
//     },
//   ],
// };

// const onSubmit = (values) => {
//   console.log(values);
// };

// const validate = (values) => {};

// function CreateForm() {
//   const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
//     initialValues,
//     onSubmit,
//     validate,
//     validateOnChange: true,
//   });

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div className='outer relative'>
//           <div className='pb-5'>
//             {/* <Formik initialValues={{ id: Math.random(),  group: "",  description: "",  card: [ {id: Math.random(),term: "",defination: "", },], }}onSubmit={(values, { resetForm, setSubmitting }) => { console.log(values);// setTimeout(() => {//   resetForm();//   notify("Submitted");//   dispatch(addCard(values)); //dispatching form data to redux state after form submit//   setSubmitting(false);// }, 400);}}>
//             {({ values, handleChange, setFieldValue }) => ( */}
//             <div>
//               <div className='box py-5 px-11 mb-6'>
//                 <div className='my-2'>
//                   <label className='h3 ' htmlFor='Create'>
//                     Create Group*
//                   </label>
//                 </div>
//                 <div className='mb-5 flex flex-col lg:flex-row gap-3'>
//                   <input
//                     className='input createInput '
//                     type='text'
//                     name='group'
//                     id='Create'
//                     value={values.group}
//                     onChange={handleChange}
//                   />

//                   {/* ------dont need this button -----------*/}
//                   {/* <button id='button' className='btn1 w-48'><div className='flex justify-center'><h1 className='text-3xl'><MdOutlineUploadFile /></h1><h3 className='pt-1 '>Upload Image</h3></div></button> */}
//                 </div>
//                 <div className='my-2'>
//                   <label className='h3' htmlFor='description'>
//                     Add Description
//                   </label>
//                 </div>
//                 <div className='mb-5'>
//                   <textarea
//                     className='input'
//                     name='description'
//                     id='description'
//                     value={values.description}
//                     onChange={handleChange}
//                     cols=''
//                     rows='5'
//                     placeholder='Describe the roles , responsibility , skills required for the job and help candidate understand the role better.'
//                   ></textarea>
//                 </div>
//               </div>
//               {/* ------  Lower Card  ------ */}
//               <div className='box py-5 px-9'>
//                 <div className='lowerCard'>
//                   <FieldArray
//                     name='card'
//                     render={(arrayHelpers) => (
//                       <>
//                         {values.card && values.card.length > 0 ? (
//                           values.card.map((cardItem, index) => (
//                             <div
//                               className='relative md:flex block my-5 space-x-7'
//                               key={index}
//                             >
//                               <div className=''>
//                                 <button className='numberTag px-3 mt-2 mb-8'>
//                                   {index + 1}
//                                 </button>
//                               </div>
//                               <div className='lowerInput flex flex-col space-y-3'>
//                                 <label
//                                   className='h3'
//                                   htmlFor={`card.${index}.term`}
//                                 >
//                                   Enter Terms*
//                                 </label>
//                                 <input
//                                   className='terms input leading-8'
//                                   type='text'
//                                   name={`card.${index}.term`}
//                                   onChange={(e) =>
//                                     setFieldValue(
//                                       `card.${index}.term`,
//                                       e.target.value
//                                     )
//                                   }
//                                   value={cardItem.term}
//                                 />
//                               </div>
//                               <div className='lowerInput flex flex-col space-y-3'>
//                                 <label
//                                   className='h3 '
//                                   htmlFor={`card.${index}.defination`}
//                                 >
//                                   Enter Definition*
//                                 </label>
//                                 <input
//                                   className='definition input leading-8 '
//                                   type='text'
//                                   name={`card.${index}.term`}
//                                   onChange={(e) =>
//                                     setFieldValue(
//                                       `card.${index}.defination`,
//                                       e.target.value
//                                     )
//                                   }
//                                   value={cardItem.defination}
//                                 />
//                               </div>
//                               <button
//                                 onClick={() => {
//                                   arrayHelpers.remove(index);
//                                   // store.dispatch(removeAllCard(id));
//                                 }}
//                                 className='trash'
//                               >
//                                 <GoTrashcan />
//                               </button>
//                             </div>
//                           ))
//                         ) : (
//                           <button
//                             type='button'
//                             className='bg-slate-400 px-6 py-3  text-white rounded-lg my-5 w-28 '
//                             onClick={() =>
//                               arrayHelpers.push({
//                                 id: `${Math.random()}`,
//                                 term: "",
//                                 defination: "",
//                               })
//                             }
//                           >
//                             {/* show this when user has removed all friends from the list */}
//                             Add Card
//                           </button>
//                         )}

//                         <button
//                           className='addMore font-semibold text-blue-600 pt-6 pb-4 px-14'
//                           type='button'
//                           onClick={() =>
//                             arrayHelpers.push({
//                               id: `${Math.random()}`,
//                               term: "",
//                               defination: "",
//                             })
//                           }
//                         >
//                           + Add more
//                         </button>
//                       </>
//                     )}
//                   />
//                 </div>
//               </div>
//               <div className='pt-14 pb-20'>
//                 <button
//                   className='createBtn btn2 block mx-auto'
//                   type='submit'
//                   //   onClick={() => {
//                   //     if (name) {
//                   //       console.log("create button clicked");
//                   //       // store.dispatch(addCards(name, description));
//                   //       setName("");
//                   //       setCreate(true);
//                   //       // console.log("cards", cards);
//                   //     }
//                   //   }}
//                 >
//                   Create
//                 </button>
//               </div>
//             </div>
//             {/* )}
//           </Formik> */}
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }

// export default CreateForm;

// import React from "react";
// import { useFormik } from "formik";
// import { FieldArray } from "formik";

// const initialValues = {
//   groupName: "",
//   hobbies: [],
// };

// const onSubmit = (values) => {
//   console.log(values);
// };

// const Form = () => {
//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//   });

//   const isGroupNameEmpty = !formik.values.groupName;

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor='groupName'>Group Name:</label>
//       <input
//         type='text'
//         id='groupName'
//         name='groupName'
//         onChange={formik.handleChange}
//         value={formik.values.groupName}
//       />

//       {isGroupNameEmpty ? (
//         <div style={{ hidden: "true" }}>
//           <FieldArray name='hobbies'>
//             {(arrayHelpers) => (
//               <div>
//                 {formik.values.hobbies.map((hobby, index) => (
//                   <div key={index}>
//                     <input
//                       type='text'
//                       id={`hobbies[${index}]`}
//                       name={`hobbies[${index}]`}
//                       onChange={formik.handleChange}
//                       value={formik.values.hobbies[index]}
//                     />
//                     <button
//                       type='button'
//                       onClick={() => arrayHelpers.remove(index)}
//                     >
//                       -
//                     </button>
//                   </div>
//                 ))}
//                 <button type='button' onClick={() => arrayHelpers.push("")}>
//                   Add Hobby
//                 </button>
//               </div>
//             )}
//           </FieldArray>
//         </div>
//       ) : (
//         <div>
//           <label htmlFor='hobbies'>Hobbies:</label>
//           <FieldArray name='hobbies'>
//             {(arrayHelpers) => (
//               <div>
//                 {formik.values.hobbies.map((hobby, index) => (
//                   <div key={index}>
//                     <input
//                       type='text'
//                       id={`hobbies[${index}]`}
//                       name={`hobbies[${index}]`}
//                       onChange={formik.handleChange}
//                       value={formik.values.hobbies[index]}
//                     />
//                     <button
//                       type='button'
//                       onClick={() => arrayHelpers.remove(index)}
//                     >
//                       -
//                     </button>
//                   </div>
//                 ))}
//                 <button type='button' onClick={() => arrayHelpers.push("")}>
//                   Add Hobby
//                 </button>
//               </div>
//             )}
//           </FieldArray>
//         </div>
//       )}

//       <button type='submit'>Submit</button>
//     </form>
//   );
// };

// export default Form;

import React, { useEffect, useState } from "react";
import { Form, Field, Formik, FieldArray, ErrorMessage } from "formik";
// import { MdOutlineUploadFile } from "react-icons/md";
import { GoTrashcan } from "react-icons/go";
import "../CSS/NewCard.css";
// import store from "../redux/store";
// import { addCards, removeCard } from "../redux/actions";

const initialValues = {
  id: Math.random(),
  group: "",
  description: "",
  card: [
    {
      id: Math.random(),
      term: "",
      defination: "",
    },
  ],
};

const onSubmit = (values, { resetForm, setSubmitting }) => {
  console.log(values);
  setSubmitting(false);
  resetForm();
};

function NewCardUpper() {
  return (
    <>
      <div className='outer relative'>
        <div className='pb-5'>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ values, handleChange, setFieldValue }) => (
              <Form>
                <div className='box py-5 px-11 mb-6'>
                  <div className='my-2'>
                    <label className='h3 ' htmlFor='Create'>
                      Create Group*
                    </label>
                  </div>
                  <div className='mb-5 flex flex-col lg:flex-row gap-3'>
                    <input
                      className='input createInput '
                      type='text'
                      name='group'
                      id='Create'
                      value={values.group}
                      onChange={handleChange}
                    />

                    {/* ------dont need this button -----------*/}
                    {/* <button id='button' className='btn1 w-48'><div className='flex justify-center'><h1 className='text-3xl'><MdOutlineUploadFile /></h1><h3 className='pt-1 '>Upload Image</h3></div></button> */}
                  </div>
                  <div className='my-2'>
                    <label className='h3' htmlFor='description'>
                      Add Description
                    </label>
                  </div>
                  <div className='mb-5'>
                    <textarea
                      className='input'
                      name='description'
                      id='description'
                      value={values.description}
                      onChange={handleChange}
                      cols=''
                      rows='5'
                      placeholder='Describe the roles , responsibility , skills required for the job and help candidate understand the role better.'
                    ></textarea>
                  </div>
                </div>
                {/* ------  Lower Card  ------ */}
                <div className='box py-5 px-9'>
                  <div className='lowerCard'>
                    <FieldArray
                      name='card'
                      render={(arrayHelpers) => (
                        <>
                          {values.card && values.card.length > 0 ? (
                            values.card.map((cardItem, index) => (
                              <div
                                className='relative md:flex block my-5 space-x-7'
                                key={index}
                              >
                                <div className=''>
                                  <button className='numberTag px-3 mt-2 mb-8'>
                                    {index + 1}
                                  </button>
                                </div>
                                <div className='lowerInput flex flex-col space-y-3'>
                                  <label
                                    className='h3'
                                    htmlFor={`card.${index}.term`}
                                  >
                                    Enter Terms*
                                  </label>
                                  <input
                                    className='terms input leading-8'
                                    type='text'
                                    name={`card.${index}.term`}
                                    onChange={(e) =>
                                      setFieldValue(
                                        `card.${index}.term`,
                                        e.target.value
                                      )
                                    }
                                    value={cardItem.term}
                                  />
                                </div>
                                <div className='lowerInput flex flex-col space-y-3'>
                                  <label
                                    className='h3 '
                                    htmlFor={`card.${index}.defination`}
                                  >
                                    Enter Definition*
                                  </label>
                                  <input
                                    className='definition input leading-8 '
                                    type='text'
                                    name={`card.${index}.term`}
                                    onChange={(e) =>
                                      setFieldValue(
                                        `card.${index}.defination`,
                                        e.target.value
                                      )
                                    }
                                    value={cardItem.defination}
                                  />
                                </div>
                                <button
                                  onClick={() => {
                                    arrayHelpers.remove(index);
                                    // store.dispatch(removeAllCard(id));
                                  }}
                                  className='trash'
                                >
                                  <GoTrashcan />
                                </button>
                              </div>
                            ))
                          ) : (
                            <button
                              type='button'
                              className='bg-slate-400 px-6 py-3  text-white rounded-lg my-5 w-28 '
                              onClick={() =>
                                arrayHelpers.push({
                                  id: `${Math.random()}`,
                                  term: "",
                                  defination: "",
                                })
                              }
                            >
                              {/* show this when user has removed all friends from the list */}
                              Add Card
                            </button>
                          )}

                          <button
                            className='addMore font-semibold text-blue-600 pt-6 pb-4 px-14'
                            type='button'
                            onClick={() =>
                              arrayHelpers.push({
                                id: `${Math.random()}`,
                                term: "",
                                defination: "",
                              })
                            }
                          >
                            + Add more
                          </button>
                        </>
                      )}
                    />
                  </div>
                </div>
                <div className='pt-14 pb-20'>
                  <button
                    className='createBtn btn2 block mx-auto'
                    type='submit'
                  >
                    Create
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default NewCardUpper;
