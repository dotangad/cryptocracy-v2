import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "./Button";

const ReferralCodeFormContainer = styled.form`
  width: 100%;

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

export const ReferralCodeForm: React.FC = () => {
  const { data, setData, post, processing, errors } = useForm({ referral_code: "" });

  const handleChange = (e: any) =>
    setData(
      e.target.name,
      e.target.value
        .split("")
        .filter((x: any) => /^[a-zA-Z0-9]$/.test(x))
        .join("")
        .toUpperCase()
    );

  return (
    <ReferralCodeFormContainer
      onSubmit={(e: any) => {
        e.preventDefault();
        post(`/referral/set`, {
          preserveState: true
        });
      }}
    >
      <div className="input-group input-group-sp">
        <input
          type="text"
          name="referral_code"
          placeholder="Referral Code"
          disabled={processing}
          value={data.referral_code}
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
          Create
        </PrimaryButton>
      </div>

      {errors.referral_code && (
        <div className="input-group">
          <div className="error">{errors.referral_code}</div>
        </div>
      )}
    </ReferralCodeFormContainer>
  );
};
