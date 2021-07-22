import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../../Components/Button";
import AdminLayout from "../../Components/Layout/Admin";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr td {
    text-align: center;
  }

  th,
  td {
    padding: 15px 10px;
  }

  tbody tr:nth-child(even) {
    background: #ffffff10;
  }

  thead tr {
    background: white;
    color: #333;
  }
`;

interface IFormProps {
  url: string;
  post: any;
  processing: boolean;
  buttonLabel: string;
}

const SingleButtonForm: React.FC<IFormProps> = ({
  url,
  post,
  processing,
  buttonLabel
}: IFormProps) => {
  return (
    <form
      onSubmit={(e: any) => {
        e.preventDefault();
        post(url);
      }}
    >
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
        {buttonLabel}
      </PrimaryButton>
    </form>
  );
};

export interface ILink {
  id: number;
  shortlink: string;
  url: string;
}

interface IAdminLinksProps {
  links: ILink[];
}

const Links: React.FC<IAdminLinksProps> = ({ links }: IAdminLinksProps) => {
  const { data, setData, post, processing, reset, errors } = useForm({
    shortlink: "",
    url: ""
  });

  const sbf = useForm({});

  const handleChange = (e: any): void => setData(e.target.name, e.target.value);

  return (
    <AdminLayout title="Links" backTo="/admin">
      <div style={{ maxWidth: "1000px", paddingBottom: "100px" }}>
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            post("/admin/shortlinks", {
              preserveState: true,
              onSuccess: () => {
                reset();
              }
            });
          }}
          style={{
            maxWidth: "640px",
            width: "100%",
            margin: "50px auto",
            marginTop: "0"
          }}
        >
          <div className="input-group">
            <label htmlFor="shortlink">Shortlink</label>
            <input
              type="text"
              name="shortlink"
              disabled={processing}
              placeholder="discord"
              value={data.shortlink}
              onChange={handleChange}
            />
            {errors.shortlink && <div className="error">{errors.shortlink}</div>}
          </div>

          <div className="input-group">
            <label htmlFor="url">Target</label>
            <input
              type="text"
              name="url"
              disabled={processing}
              placeholder="https://discord.com"
              value={data.url}
              onChange={handleChange}
            />
            {errors.url && <div className="error">{errors.url}</div>}
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
              Create
            </PrimaryButton>
          </div>
        </form>
        <Table>
          <thead>
            <tr>
              <th>Shortlink</th>
              <th>URL</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {links.map(({ id, shortlink, url }) => (
              <tr>
                <td>{shortlink}</td>
                <td>{url}</td>
                <td>
                  <PrimaryButton
                    as="button"
                    disabled={sbf.processing}
                    style={{
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                      padding: "8px 13px",
                      textTransform: "uppercase"
                    }}
                    onClick={(e: any) => {
                      e.preventDefault();
                      sbf.delete(`/admin/shortlinks/${id}`);
                    }}
                  >
                    delete
                  </PrimaryButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </AdminLayout>
  );
};

export default Links;
