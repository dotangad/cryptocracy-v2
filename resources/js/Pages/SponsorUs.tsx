import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useForm } from "@inertiajs/inertia-react";
import { PrimaryButton } from "../Components/Button";
import Layout from "../Components/Layout";

const Global = createGlobalStyle`
  .Sidebar {
    overflow: hidden;
  }

  .Content > div {
    min-height: 0;
  }

  .Content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }

  form {
    margin-top: 30px;
  }
`;

const P = styled.p`
  font-size: 1.6rem;
  max-width: 700px;
`;

const SponsorUs: React.FC<any> = ({ success }: any) => {
  const { data, setData, post, processing, reset, errors } = useForm({
    Name: "",
    Contact: "",
    Description: ""
  });

  const handleChange = (e: any) => setData(e.target.name, e.target.value);

  return (
    <>
      <Global />
      <Layout title="Sponsor Us">
        <div>
          <P>
            Cryptocracy can help your brand gain new audiences and solidify old ones, let
            us tell you how your brand can benefit by partnering with us.
          </P>
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
            <div className="input-group">
              <label htmlFor="Name">What do you call yourself?</label>
              <input
                type="text"
                name="Name"
                disabled={processing}
                placeholder="Acme Corp Ltd."
                value={data.Name}
                onChange={handleChange}
              />
              {errors.Name && <div className="error">{errors.Name}</div>}
            </div>

            <div className="input-group">
              <label htmlFor="Contact">Where can we reach you?</label>
              <input
                type="text"
                placeholder="Email/Phone"
                disabled={processing}
                name="Contact"
                value={data.Contact}
                onChange={handleChange}
              />
              {errors.Contact && <div className="error">{errors.Contact}</div>}
            </div>

            <div className="input-group">
              <label htmlFor="Description">How can we help you?</label>
              <textarea
                placeholder="Tell us about what you'd want from this partnership, and we'll get back with what we can offer"
                name="Description"
                disabled={processing}
                rows={4}
                value={data.Description}
                onChange={handleChange}
              />
              {errors.Description && <div className="error">{errors.Description}</div>}
            </div>

            {success && (
              <div className="input-group">
                <div className="annotate">
                  Submitted successfully, we'll reach out to you soon!
                </div>
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
                Submit
              </PrimaryButton>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default SponsorUs;
