import { Form, useNotification } from "web3uikit";
import Image from "next/image";
import Navbar from "../component/Navbar/Navigation"

export default function Registration() {
  async function sumbit() {}
  return (
    <div>
      {/* <Navbar/> */}
      <div className="grid grid-cols-2 gap-2 ">
        <div className="ml-20 mt-10 ">
          <Image
            src="/regis.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="w-100 justify-center items-center ml-20 pl-20 mr-20 mt-20">
          <Form
            onSubmit={sumbit}
            data={[
              {
                name: "Name",
                type: "text",
                // inputWidth: "50%",
                value: "",
                key: "name",
              },
              {
                name: "Email",
                type: "email",
                // inputWidth: "50%",
                value: "",
                key: "email",
              },
              {
                name: "Phone Number",
                type: "number",
                value: "",
                key: "phone",
              },
              {
                name: "Aadhar Number",
                type: "number",
                value: "",
                key: "aadhar",
              },
              {
                name: "Voter Address",
                type: "text",
                value: "",
                key: "address",
              },
            ]}
            title="Registration Form"
            id="Main Form"
          />
        </div>
      </div>
      <h1 className=" text-center mb-20">Shradesh Jain ©️</h1>
    </div>
  );
}
