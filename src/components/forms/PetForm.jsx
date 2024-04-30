import { UiContext } from "@/context/UiContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { CONTEXT_TYPEs } from "@/context";
import { useAddPet, useUpdatePet } from "@/react-query/query/pet.query";
import { Loader } from "../shared";
import { Input as ShadInput } from "@/components/ui/input";
import { ImageContext } from "@/context/ImageContext";

const PetForm = () => {
  const {
    dispatch: imageDispatch,
    state: { petImg },
  } = useContext(ImageContext);
  const {
    dispatch,
    state: { data, id, type },
  } = useContext(UiContext);
  const { mutateAsync, isPending } =
    type !== "update" ? useAddPet() : useUpdatePet(id);
  const formRef = useRef();
  const name = useRef();
  const breed = useRef();
  const color = useRef();
  const gender = useRef();
  const age = useRef();
  const imgRef = useRef();

  useEffect(() => {
    imageDispatch({
      type: CONTEXT_TYPEs.PET_IMAGE,
      payload: "",
    });
    if (data && type === "update") {
      name.current.value = data?.name;
      breed.current.value = data?.breed;
      color.current.value = data?.color;
      age.current.value = data?.age;
      gender.current.value = data?.gender;
    }
  }, [data]);

  return (
    <form
      ref={formRef}
      onSubmit={async (e) => {
        e.preventDefault();
        await mutateAsync({
          state: {
            name: name.current.value,
            breed: breed.current.value,
            color: color.current.value,
            age: age.current.value,
            gender: gender.current.value,
          },
          oldImg: data?.image_name,
          oldURL: data?.image_url,
          image: petImg,
        });
        formRef.current.reset();
        dispatch({
          type: CONTEXT_TYPEs.PET_FORM,
        });
      }}
      className="fixed inset-0 m-auto p-5 max-h-[600px] overflow-y-auto rounded-md bg-primary-500 shadow-md z-[1100] w-[95%] max-w-[500px] h-fit flex flex-col justify-start items-center gap-5 text-white">
      <h2 className="w-full text-center text-body1-semibold">
        {type !== "update" ? "Add" : "Update"} Pet
      </h2>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input ref={name} type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Breed</FormLabel>
        <Input ref={breed} type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Color</FormLabel>
        <Input ref={color} type="text" />
      </FormControl>

      <FormControl>
        <FormLabel>Age</FormLabel>
        <Input ref={age} type="number" />
      </FormControl>

      <FormControl>
        <FormLabel>Gender</FormLabel>
        <Select ref={gender} placeholder="Select Gender">
          <option className="text-primary-500" value="male">
            Male
          </option>
          <option className="text-primary-500" value="female">
            Female
          </option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Image</FormLabel>
        <ShadInput
          onChange={(e) => {
            imageDispatch({
              type: CONTEXT_TYPEs.PET_IMAGE,
              payload: e.target.files[0],
            });
          }}
          ref={imgRef}
          id="picture"
          type="file"
        />
      </FormControl>
      {petImg !== "" && petImg && (
        <>
          <button
            type="button"
            onClick={() => {
              imageDispatch({
                type: CONTEXT_TYPEs.PET_IMAGE,
                payload: "",
              });
              imgRef.current.value = ""; // Clear the input field
              imgRef.current.files = null; // Clear the files
            }}
            className="w-full p-2 rounded-md bg-red-500 text-white">
            Remove
          </button>
          <div className="relative w-full max-h-[300px]">
            <img
              className="w-full h-full object-contain"
              src={URL.createObjectURL(petImg)}
              alt="pet"
            />
          </div>
        </>
      )}
      {!petImg && petImg === "" && data?.image_url && (
        <div className="relative w-full max-h-[300px]">
          <img
            className="w-full h-full object-contain"
            src={data?.image_url}
            alt="pet"
          />
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full p-2 rounded-md bg-tertiary-500 text-white mt-5">
        {isPending ? <Loader /> : "Submit"}
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: CONTEXT_TYPEs.PET_FORM,
          })
        }
        className="w-full p-2 rounded-md bg-red-500 text-white">
        Close
      </button>
    </form>
  );
};

export default PetForm;
