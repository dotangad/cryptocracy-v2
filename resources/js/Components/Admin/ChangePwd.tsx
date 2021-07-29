import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../Button";

const ChangePasswordFormContainer = styled.form`
  width: 640px;

  .input-group-sp {
    display: flex;
    width: 100%;
  }

  input {
    flex: 1;
    border: none;
    padding: 20px 15px;
    min-width: 0px;
    max-width: 100%;
  }
`;

export const ChangePasswordForm: React.FC<{ id: number }> = ({ id }: { id: number }) => {
  const { data, setData, post, processing, errors, reset } = useForm({ password: "" });

  const handleChange = (e: any) =>
    setData(
      e.target.name,
      e.target.value
    );

  return (
    <ChangePasswordFormContainer
      onSubmit={(e: any) => {
        e.preventDefault();
        post(`/admin/users/${id}/pwd`, {
          onSuccess: () => setData("password", "")
        });
      }}
    >
      <div className="input-group input-group-sp">
        <input
          type="text"
          name="password"
          placeholder="New Password"
          disabled={processing}
          value={data.password}
          onChange={handleChange}
        />
        <PrimaryButton
          as="button"
          type="submit"
          disabled={processing}
          style={{
            fontWeight: "bold",
            fontSize: "0.9rem",
            padding: "10px 15px",
            textTransform: "uppercase"
          }}
        >
          Change
        </PrimaryButton>
      </div>

      {errors.password && (
        <div className="input-group">
          <div className="error">{errors.password}</div>
        </div>
      )}
    </ChangePasswordFormContainer>
  );
};
