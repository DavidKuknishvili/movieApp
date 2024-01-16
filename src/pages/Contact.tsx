import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Notification from "../components/notification/Notification";
import { useEffect, useState } from "react";

function Contact() {
  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    message: yup.string().required("Message is required"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [showNotification, setShowNotification] = useState(false);
  const [notificationData, setNotificationData] = useState({
    title: "",
    content: "",
  });
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const onSubmit = (formData:any) => {
    setData(formData);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  useEffect(() => {
    setNotificationData({
      title: "Success",
      content: `${data.firstName}, your information has been sent successfully.`,
    });
  }, [data]);

  return (
    <div className="min-h-screen  flex items-center justify-center phone:pl-[56px] p-4 relative  ">
      {showNotification && (
        <Notification
          title={notificationData.title}
          content={notificationData.content}
        />
      )}
      <div className="max-w-[600px] w-[600px] bg-[#292929] p-8 shadow-lg rounded-md">
        <h2 className="text-2xl text-white font-semibold mb-4 animate-pulse">
          Contact Us
        </h2>
        <form className="text-white" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-[2.25rem]">
            <div className="mb-4 w-full">
              <label
                htmlFor="firstName"
                className="text-sm  w-full font-medium text-white"
              >
                First name
              </label>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    id="firstName"
                    className={`mt-1 p-2 bg-[#3f3f3f] w-full rounded-md ${
                      errors.firstName ? "border-red-500" : ""
                    }`}
                  />
                )}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="lastName"
                className="text-sm w-full font-medium text-white"
              >
                Last name
              </label>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    id="lastName"
                    className={`mt-1 p-2 bg-[#3f3f3f] w-full rounded-md ${
                      errors.lastName ? "border-red-500" : ""
                    }`}
                  />
                )}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors?.lastName?.message}
                </p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-sm font-medium text-white">
              Email
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  id="email"
                  className={`mt-1 p-2 bg-[#3f3f3f] w-full rounded-md ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-sm font-medium text-white">
              Message
            </label>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  id="message"
                  rows={4}
                  className={`mt-1 p-2 w-full bg-[#3f3f3f] rounded-md ${
                    errors.message ? "border-red-500" : ""
                  }`}
                />
              )}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="px-8 rounded-full text-white p-2 flex justify-center bg-gradient-to-tr from-[#00c0cc] via-[#c800c0] to-[#00c0cc38] bg-opacity-25"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
