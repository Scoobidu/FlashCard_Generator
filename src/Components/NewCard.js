import React, { useEffect, useState } from "react";
import { Form, Field, Formik, FieldArray, ErrorMessage } from "formik";
import { string, object, array } from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "../redux/store";
import { addCards } from "../redux/actions";
// import { MdOutlineUploadFile } from "react-icons/md";
import { GoTrashcan } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import "../CSS/NewCard.css";
import "../CSS/App.css";

// import uuid from "react-uuid";

function NewCard() {
  const [group, setGroup] = useState("");
  const [active, setActive] = useState(false);
  // let uniqId = uuid();

  const initialValues = {
    // id: uniqId,
    group: "",
    description: "",
    cards: [
      {
        id: Math.random(),
        term: "",
        defination: "",
      },
    ],
  };

  const onSubmit = (values, { resetForm, setSubmitting }) => {
    // console.log("Form Data ", values);
    notify("Submitted");
    store.dispatch(addCards(values));
    setSubmitting(false);
    resetForm();
  };

  const notify = (val) => {
    toast.success(val, {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    const lowerCard = document.querySelector(".lowerCard");
    const Desc = document.querySelector(".Description");
    const addMore = document.querySelector(".addMore");

    if (group.length > 0) {
      setActive(true);
      lowerCard.style.opacity = "1";
      Desc.style.opacity = "1";
      addMore.disabled = false;
    } else {
      setActive(false);
      lowerCard.style.opacity = "0.5";
      Desc.style.opacity = ".5";
      addMore.disabled = true;
    }
  });

  return (
    <>
      <div className='outer relative'>
        <div className='pb-5'>
          {/* <button
            className='createBtn btn2 block mx-auto hover:bg-red-500 hover:text-white border-red-500 border-2 focus:ring-4 focus:outline-none focus:ring-red-300 hover:-translate-y-1 shadow-lg transition-all ease-in-out duration-150'
            type='button'
            onClick={() => notify("sa")}
          >
            Notify!
          </button> */}

          <Formik
            initialValues={initialValues}
            // -------------using yup for validation ---------
            validationSchema={object({
              group: string()
                .max(15, "Must be 15 character or less")
                .required("Required"),

              description: string()
                .max(500, "Must be 300 character or less")
                .required("Required"),

              cards: array(
                object({
                  term: string()
                    .max(15, "Must be 15 character or less")
                    .required("Required"),
                  defination: string()
                    .max(500, "Must be 300 character or less")
                    .required("Required"),
                })
              ),
            })}
            onSubmit={onSubmit}
          >
            {({ values, handleChange, setFieldValue }) => (
              <Form>
                <div className='box py-5 px-11 mb-6'>
                  <div className='my-2'>
                    <label className='h3 ' htmlFor='Create'>
                      Create Group*
                    </label>
                  </div>
                  <div className='mb-5 flex flex-col lg:flex-row gap-3'>
                    <div className='flex flex-col mb-5'>
                      <input
                        className='input createInput '
                        type='text'
                        name='group'
                        placeholder='Group Name'
                        id='Create'
                        value={values.group}
                        onChange={(e) => setGroup(e.target.value)}
                        onInput={handleChange}
                      />
                      <div className='text-red-500'>
                        <ErrorMessage name='group' />
                      </div>
                    </div>

                    {/* ------dont need this button -----------*/}
                    {/* <button id='button' className='btn1 w-48'><div className='flex justify-center'><h1 className='text-3xl'><MdOutlineUploadFile /></h1><h3 className='pt-1 '>Upload Image</h3></div></button> */}
                  </div>
                  <div className='Description'>
                    <div className='my-2'>
                      <label className='h3 ' htmlFor='description'>
                        Add Description
                      </label>
                    </div>
                    <div className='mb-5'>
                      <textarea
                        className='input '
                        disabled={!active}
                        name='description'
                        id='description'
                        value={values.description}
                        onChange={handleChange}
                        cols=''
                        rows='5'
                        placeholder='Describe the roles , responsibility , skills required for the job and help candidate understand the role better.'
                      ></textarea>
                      <div className=' text-red-500'>
                        <ErrorMessage name='description' />
                      </div>
                    </div>
                  </div>
                </div>
                {/* ------  Lower Card  ------ */}
                <div className='box py-5 px-9'>
                  <div className='lowerCard'>
                    <FieldArray
                      name='cards'
                      render={(arrayHelpers) => (
                        <>
                          {values.cards && values.cards.length > 0 ? (
                            values.cards.map((cardItem, index) => (
                              <div
                                className='relative md:flex block my-5 space-x-7'
                                key={index}
                              >
                                <div className=''>
                                  <button
                                    // className='numberTag px-3 mt-2 mb-8'
                                    className='bg-red-500 px-2 rounded-full  text-white'
                                  >
                                    {index + 1}
                                  </button>
                                </div>
                                <div className='lowerInput space-y-3'>
                                  <label
                                    className='h3'
                                    htmlFor={`cards.${index}.term`}
                                  >
                                    Enter Terms*
                                  </label>
                                  <div className='flex flex-col'>
                                    <input
                                      id={`term${index}`}
                                      className='terms input leading-8'
                                      disabled={!active}
                                      type='text'
                                      name={`cards.${index}.term`}
                                      placeholder='term'
                                      onChange={(e) =>
                                        setFieldValue(
                                          `cards.${index}.term`,
                                          e.target.value
                                        )
                                      }
                                      value={cardItem.term}
                                    />
                                    <div className='text-red-500'>
                                      <ErrorMessage
                                        name={`cards.${index}.term`}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className='lowerInput space-y-3'>
                                  <label
                                    className='h3 '
                                    htmlFor={`cards.${index}.defination`}
                                  >
                                    Enter Definition*
                                  </label>
                                  <div className='flex flex-col'>
                                    <textarea
                                      className='definition lowerInputField leading-8 '
                                      // className='border-slate-200 h-11 rounded-md focus:h-24 p-2 lg:w-96 md:w-72 resize-none transition-all ease-in-out bg-gray-50 border duration-500  text-gray-900 text-sm '
                                      disabled={!active}
                                      type='text'
                                      name={`cards.${index}.term`}
                                      placeholder='definition'
                                      onChange={(e) =>
                                        setFieldValue(
                                          `cards.${index}.defination`,
                                          e.target.value
                                        )
                                      }
                                      value={cardItem.defination}
                                    />
                                    <div className='text-red-500'>
                                      <ErrorMessage
                                        name={`cards.${index}.defination`}
                                      />
                                    </div>
                                  </div>
                                </div>
                                {/* <div className='relative'> */}
                                <div className='trash flex gap-2'>
                                  <button
                                    type='button'
                                    disabled={!active}
                                    className='text-2xl text-blue-600 hover:-translate-y-1 transition-all ease-in-out duration-150'
                                    onClick={() => {
                                      const field = document.getElementById(
                                        `term${index}`
                                      );
                                      field.focus();
                                    }}
                                  >
                                    <FiEdit />
                                  </button>
                                  <button
                                    type='button'
                                    disabled={!active}
                                    className=' hover:-translate-y-1 transition-all ease-in-out duration-150'
                                    onClick={() => {
                                      arrayHelpers.remove(index);
                                    }}
                                  >
                                    <GoTrashcan />
                                  </button>
                                </div>
                                {/* </div> */}
                              </div>
                            ))
                          ) : (
                            <button
                              type='button'
                              disabled={!active}
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
                            disabled={!active}
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
                    className='createBtn btn2 block mx-auto bg-red-500 hover:bg-red-500 hover:text-white border-red-500 border-2 hover:-translate-y-1 shadow-lg transition-all ease-in-out duration-150'
                    disabled={!active}
                    type='submit'
                    name='create'
                    onClick={() => {
                      if (group) {
                        // console.log("create button clicked");
                        setGroup(group);
                      }
                    }}
                  >
                    Create
                  </button>
                  {/*------------ notification  -------------*/}
                  <ToastContainer />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default NewCard;
