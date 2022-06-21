import React from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const InitForm = () => {
  const { register, handleSubmit } = useForm();
  const history = useNavigate();

  const onSubmit = ({ name, room }) => {
    history(`/chat?name=${name}&room=${room}`);
  };
  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name", { required: true })} />
        <input type="text" {...register("room", { required: true })} />
        <button type="submit">join room</button>
      </form>
    </main>
  );
};

export default InitForm;
