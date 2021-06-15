import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useForm } from "@inertiajs/inertia-react";
import { PrimaryButton } from "../Components/Button";
import Layout from "../Components/Layout";

const Global = createGlobalStyle`
  .Content > div {
    min-height: 0;
    width: 100%;
  }

  .Content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }

  form {
    padding-bottom: 20px;
    width: 100%;
  }

  form .input-group {
    margin: 15px 0;
  }

  form div .input-group select {
    padding: 14px 15px !important;
    width: 300px !important;
  }

  @media screen and (max-width: 700px) {
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }

    form div .input-group select {
      width: 100% !important;
    }

    form > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }

    input, select, button {
      max-width: 600px !important;
      min-width: 200px !important;
    }
  }
`;

const InputGroupGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

  div:nth-child(2) {
    margin-left: 20px;
  }

  @media screen and (max-width: 700px) {
    div:nth-child(2) {
      margin-left: 0;
    }
  }
`;

interface IProps {
  failure?: boolean;
}

const Login: React.FC<IProps> = ({ failure }: IProps) => {
  const { data, setData, post, processing, reset, errors } = useForm({
    Name: "",
    Email: "",
    Username: "",
    Country: "",
    Phone: "",
    Institution: "",
    Password: "",
    "Password confirmation": ""
  });

  const handleChange = (e: any) => setData(e.target.name, e.target.value);

  if (failure) reset();

  return (
    <>
      <Global />
      <Layout title="Login">
        <div>
          <form
            onSubmit={(e: any) => {
              e.preventDefault();
              post("/login", {
                preserveState: true,
                onSuccess: () => {
                  reset();
                }
              });
            }}
          >
            <InputGroupGroup>
              <div className="input-group">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  name="Email"
                  disabled={processing}
                  placeholder="ramkumar@aadhar.co"
                  value={data.Email}
                  onChange={handleChange}
                />
                {errors.Email && <div className="error">{errors.Email}</div>}
              </div>

              <div className="input-group">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  name="Password"
                  disabled={processing}
                  placeholder="g4y4m0d!j!"
                  value={data.Password}
                  onChange={handleChange}
                />
                {errors.Password && <div className="error">{errors.Password}</div>}
              </div>
            </InputGroupGroup>

            {failure && (
              <div className="input-group">
                <div className="annotate error">Could not log in, please try again</div>
              </div>
            )}

            <div className="input-group">
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
                Login
              </PrimaryButton>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Login;
