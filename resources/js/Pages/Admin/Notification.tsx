import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import AdminLayout from "../../Components/Layout/Admin";
import { PrimaryButton, SecondaryButton } from "../../Components/Button";

interface INotificationsProps {
  notification: { id: number; content: string; created_at: string };
}

const Notifications: React.FC<INotificationsProps> = ({
  notification
}: INotificationsProps) => {
  const {
    data,
    setData,
    put,
    delete: del,
    processing,
    errors
  } = useForm({
    content: notification.content
  });

  const handleChange = (e: any) => setData(e.target.name, e.target.value);

  return (
    <AdminLayout title={`Notification ${notification.id}`} backTo="/admin/notifications">
      <div>
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            put(`/admin/notifications/${notification.id}`, {
              preserveState: true,
              onSuccess: () => window.location.reload()
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
            <div className="annotate">Created {notification.created_at}</div>
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
              Edit
            </PrimaryButton>
            <SecondaryButton
              as="button"
              disabled={processing}
              style={{
                fontWeight: "bold",
                fontSize: "0.9rem",
                padding: "8px 13px",
                textTransform: "uppercase",
                color: "#fff",
                marginLeft: "30px"
              }}
              onClick={(e: any) => {
                e.preventDefault();
                del(`/admin/notifications/${notification.id}`);
              }}
            >
              delete
            </SecondaryButton>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Notifications;
