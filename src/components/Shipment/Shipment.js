import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [Error, setError] = useState("");

  // set name
  const handleNameField = (event) => {
    setName(event.target.value);
  };

  // set password
  const handleAddressField = (event) => {
    setAddress(event.target.value);
  };
  // set Confirm password
  const handlePhoneField = (event) => {
    setPhone(event.target.value);
  };
  // form submit function
  const handleCreateUser = (event) => {
    event.preventDefault();
    const email = user.email;
    const shippingInfo = { name, email, address, phone };
    console.log(shippingInfo);
  };
  return (
    <div className="w-full  px-2 md:px-8 flex justify-center">
      <div className="login-form border-2   border-[#95A0A7] rounded-md w-full md:w-[500px] mt-[100px] mb-12 flex justify-center px-2 md:px-4 lg:px-[40px]">
        <div className="w-full">
          <form onSubmit={handleCreateUser}>
            <h3 className="text-[35px]  tracking-tight text-[#2A414F] text-center py-[25px]">
              Shipping Information
            </h3>
            <div className="form-group w-full mb-[20px]">
              <label htmlFor="name" className="ml-2">
                Your Name
              </label>
              <br />
              <input
                required
                autoCapitalize="off"
                type="text"
                name="name"
                id="name"
                onBlur={handleNameField}
                className="w-full border-2 px-2 border-[#95A0A7]  rounded-md h-[55px] text-xl"
              />
            </div>
            <div className="form-group w-full mb-[20px]">
              <label htmlFor="email" className="ml-2">
                Email
              </label>
              <br />
              <input
                required
                autoCapitalize="off"
                type="email"
                name="email"
                id="email"
                value={user?.email}
                readOnly
                className="w-full border-2 px-2 border-[#95A0A7]  rounded-md h-[55px] text-xl"
              />
            </div>
            <div className="form-group w-full mb-[20px]">
              <label htmlFor="address" className="ml-2">
                Address
              </label>
              <br />
              <input
                onBlur={handleAddressField}
                required
                autoCapitalize="off"
                type="text"
                name="address"
                id="address"
                className="w-full border-2 px-2 border-[#95A0A7]  rounded-md h-[55px] text-xl"
              />
            </div>
            <div className="form-group w-full mb-[20px]">
              <label htmlFor="phone" className="ml-2">
                Phone Number
              </label>
              <br />
              <input
                required
                onBlur={handlePhoneField}
                autoCapitalize="off"
                type="number"
                name="phone"
                id="phone"
                className="w-full border-2 px-2 border-[#95A0A7]  rounded-md h-[55px] text-xl"
              />
            </div>
            <p className="text-red-400 font-semibold">{Error}</p>
            <input
              type="submit"
              value="Shipping"
              className="w-full   rounded-md cursor-pointer  h-[55px] text-xl text-[#0E161A] font-semibold bg-[#FFE0B3] mb-[15px] duration-200 ease-in hover:bg-yellow-600"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
