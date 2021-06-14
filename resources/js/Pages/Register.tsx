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
  countries: { [iso: string]: string }[];
}

const Register: React.FC<IProps> = ({ countries }: IProps) => {
  const { data, setData, post, processing, reset, errors } = useForm({
    Name: "",
    Email: "",
    Username: "",
    Country: "",
    Phone: "",
    Institution: "",
    Password: ""
  });

  const handleChange = (e: any) => setData(e.target.name, e.target.value);

  return (
    <>
      <Global />
      <Layout title="Register">
        <div>
          <form
            onSubmit={(e: any) => {
              e.preventDefault();
              post("/sponsor", {
                preserveState: true,
                onSuccess: () => {
                  reset();
                }
              });
            }}
          >
            <InputGroupGroup>
              <div className="input-group">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  name="Name"
                  disabled={processing}
                  placeholder="Ram Kumar"
                  value={data.Name}
                  onChange={handleChange}
                />
                {errors.Name && <div className="error">{errors.Name}</div>}
              </div>

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
            </InputGroupGroup>

            <InputGroupGroup>
              <div className="input-group">
                <label htmlFor="Username">Username</label>
                <input
                  type="email"
                  name="Username"
                  disabled={processing}
                  placeholder="govtsimp"
                  value={data.Username}
                  onChange={handleChange}
                />
                {errors.Username && <div className="error">{errors.Username}</div>}
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

            <InputGroupGroup>
              <div className="input-group">
                <label htmlFor="Country">Country</label>
                <select
                  name="Country"
                  disabled={processing}
                  onChange={(e) => setData("Country", e.target.value)}
                  defaultValue={data.Country}
                >
                  <option disabled value="">
                    Select a country
                  </option>
                  {Object.entries(countries).map(([iso, country], i) => (
                    <option key={i} value={iso}>
                      {country}
                    </option>
                  ))}
                </select>
                {errors.Country && <div className="error">{errors.Country}</div>}
              </div>

              <div className="input-group">
                <label htmlFor="Phone">Phone (with country code)</label>
                <input
                  type="text"
                  name="Phone"
                  disabled={processing}
                  placeholder="+91 8842069123"
                  value={data.Phone}
                  onChange={handleChange}
                />
                {errors.Phone && <div className="error">{errors.Phone}</div>}
              </div>
            </InputGroupGroup>

            <InputGroupGroup>
              <div className="input-group">
                <label htmlFor="Institution">Company/Educational Institution</label>
                <input
                  type="text"
                  name="Institution"
                  disabled={processing}
                  placeholder="BJP IT Cell"
                  value={data.Institution}
                  onChange={handleChange}
                />
                {errors.Institution && <div className="error">{errors.Institution}</div>}
              </div>
            </InputGroupGroup>

            {/* success && (
              <div className="input-group">
                <div className="annotate">
                  Submitted successfully, we'll reach out to you soon!
                </div>
              </div>
            ) */}

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
                Submit
              </PrimaryButton>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Register;
