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
  // setTimeout(() => {
  //   notify("Submitted");
  //   dispatch(addCard(values)); //dispatching form data to redux state after form submit
  // }, 400);
};

function NewCardUpper() {
  const [group, setGroup] = useState("");
  const [active, setActive] = useState(false);

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
                      onChange={(e) => setGroup(e.target.value)}
                      onInput={handleChange}
                    />

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
                    </div>
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
                                    disabled={!active}
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
                                    disabled={!active}
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
                                  disabled={!active}
                                  onClick={() => {
                                    arrayHelpers.remove(index);
                                    // store.dispatch(removeAllCard(id));
                                  }}
                                  className='trash'
                                >
                                  <GoTrashcan />
                                </button>
                                {/* <div className='image_sec'>
                                  <div className='sel_image '>
                                    <button className='btn1 w-36' type='button'>
                                      <h3 className='p-1'>Select Image</h3>
                                      <input
                                        // disabled
                                        type='file'
                                        accept='image/*'
                                      />
                                    </button>
                                  </div>
                                  <img className='display_image' alt='mj' />
                                </div> */}
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
                    className='createBtn btn2 block mx-auto'
                    disabled={!active}
                    type='submit'
                    //   onClick={() => {
                    //     if (name) {
                    //       console.log("create button clicked");
                    //       // store.dispatch(addCards(name, description));
                    //       setName("");
                    //       setCreate(true);
                    //       // console.log("cards", cards);
                    //     }
                    //   }}
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
