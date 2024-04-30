import { UiContext } from "@/context/UiContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { CONTEXT_TYPEs } from "@/context";

import { Loader } from "../shared";
import { useCheckPet } from "@/react-query/query/clinic.query";

const ClinicForm = () => {
  const {
    dispatch,
    state: { data, id, type },
  } = useContext(UiContext);
  const { mutateAsync, isPending } = useCheckPet();
  const formRef = useRef();
  const disease = useRef();
  const medicine = useRef();
  const [vaccine, setVaccine] = useState(false);

  return (
    <form
      ref={formRef}
      onSubmit={async (e) => {
        e.preventDefault();
        await mutateAsync({
          pet_id: data.id,
          disease: disease.current.value,
          medicine: medicine.current.value,
          vaccine,
        });
        formRef.current.reset();
        dispatch({
          type: CONTEXT_TYPEs.CLINIC_FORM,
        });
      }}
      className="fixed inset-0 m-auto p-5 max-h-[600px] overflow-y-auto rounded-md bg-primary-500 shadow-md z-[1100] w-[95%] max-w-[500px] h-fit flex flex-col justify-start items-center gap-5 text-white">
      <h2 className="w-full text-center text-body1-semibold">Check Pet</h2>
      <FormControl>
        <FormLabel>Disease</FormLabel>
        <Input ref={disease} type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Medicine</FormLabel>
        <Input ref={medicine} type="text" />
      </FormControl>

      <Checkbox
        className="w-full"
        isChecked={vaccine}
        onChange={(e) => setVaccine(e.target.checked)}
        defaultChecked>
        Vaccine
      </Checkbox>
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
            type: CONTEXT_TYPEs.CLINIC_FORM,
          })
        }
        className="w-full p-2 rounded-md bg-red-500 text-white">
        Close
      </button>
    </form>
  );
};

export default ClinicForm;
