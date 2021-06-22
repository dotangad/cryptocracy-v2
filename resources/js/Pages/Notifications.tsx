import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import styled from "styled-components";
import AdminLayout from "../Components/Layout/Admin";
import { PrimaryButton } from "../Components/Button";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr td:nth-child(1) {
    width: 70%;
  }
  tr td:nth-child(2) {
    width: 20%;
  }
  tr td:nth-child(3) {
    width: 10%;
  }

  tr td:nth-child(3) {
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

interface INotificationsProps {
  notifications: { id: number; content: string; created_at: string }[];
}

const Notifications: React.FC<INotificationsProps> = ({
  notifications
}: INotificationsProps) => {
  const { data, setData, post, processing, reset, errors } = useForm({
    content: ""
  });

  const handleChange = (e: any) => setData(e.target.name, e.target.value);

  return (
    <AdminLayout title="Admin">
      <>
        <div>
          <form
            onSubmit={(e: any) => {
              e.preventDefault();
              post("/admin/notifications", {
                preserveState: true,
                onSuccess: () => {
                  reset();
                }
              });
            }}
          >
            <div className="input-group">
              <label htmlFor="notification">Notification</label>
              <textarea
                placeholder="Example notification content"
                name="content"
                disabled={processing}
                rows={4}
                value={data.content}
                onChange={handleChange}
              />
              {errors.content && <div className="error">{errors.content}</div>}
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
        </div>

        <div style={{ maxWidth: "800px" }}>
          <Table>
            <thead>
              <tr>
                <th>Content</th>
                <th>Created At</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {notifications.map(({ id, content, created_at }) => (
                <tr>
                  <td>{content}</td>
                  <td>{created_at}</td>
                  <td>
                    <a href={`/admin/notifications/${id}`}>Edit</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </>
    </AdminLayout>
  );
};

export default Notifications;
