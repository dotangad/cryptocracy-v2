import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
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
  failure?: boolean;
}

const Register: React.FC<IProps> = ({ countries, failure }: IProps) => {
  const { data, setData, post, processing, reset, errors } = useForm({
    Name: "",
    Email: "",
    Username: "",
    Country: "",
    Phone: "",
    Institution: "",
    Password: "",
    "Password confirmation": "",
    referral_code: "",
    recaptcha: ""
  });

  const handleChange = (e: any) => setData(e.target.name, e.target.value);

  if (failure) reset();

  return (
    <>
      <Global />
      <Layout title="Register">
        <div>
          <form
            onSubmit={(e: any) => {
              e.preventDefault();
              post("/register", {
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
                  placeholder="Jahir Bhordoj"
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
                  placeholder="jahir@cryptocracy.co"
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
                  type="text"
                  name="Username"
                  disabled={processing}
                  placeholder="jahir"
                  value={data.Username}
                  onChange={handleChange}
                />
                {errors.Username && <div className="error">{errors.Username}</div>}
              </div>

              <div className="input-group">
                <label htmlFor="Institution">Company/Educational Institution</label>
                <input
                  type="text"
                  name="Institution"
                  disabled={processing}
                  placeholder="Cryptocracy"
                  value={data.Institution}
                  onChange={handleChange}
                />
                {errors.Institution && <div className="error">{errors.Institution}</div>}
              </div>
            </InputGroupGroup>

            <InputGroupGroup>
              <div className="input-group">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  name="Password"
                  disabled={processing}
                  placeholder="we<3u"
                  value={data.Password}
                  onChange={handleChange}
                />
                {errors.Password && <div className="error">{errors.Password}</div>}
              </div>

              <div className="input-group">
                <label htmlFor="Password confirmation">Password Confirmation</label>
                <input
                  type="password"
                  name="Password confirmation"
                  disabled={processing}
                  placeholder="we<3u"
                  value={data["Password confirmation"]}
                  onChange={handleChange}
                />
                {errors["Password confirmation"] && (
                  <div className="error">{errors["Password confirmation"]}</div>
                )}
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
                <label htmlFor="referral_code">Referral Code (optional)</label>
                <input
                  type="text"
                  autoComplete="off"
                  name="referral_code"
                  disabled={processing}
                  placeholder="CANIHAZPRIZE"
                  value={data.referral_code}
                  onChange={handleChange}
                />
                {errors.referral_code && (
                  <div className="error">{errors.referral_code}</div>
                )}
              </div>
            </InputGroupGroup>

            {failure && (
              <div className="input-group">
                <div className="annotate error">Could not register, please try again</div>
              </div>
            )}

            <div className="input-group">
              <ReCAPTCHA
                sitekey="6LeYOskbAAAAANlHSl8JtcCgv49-rglm9EjZFrPn"
                onChange={(token: string | null) => setData('recaptcha', token || "")}
                theme="dark"
              />
              {errors.recaptcha && (
                <div className="error">{errors.recaptcha}</div>
              )}
            </div>

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
