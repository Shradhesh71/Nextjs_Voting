import { Form, useNotification } from "web3uikit";
import Image from "next/image";

export default function AddCandidate() {
  async function onSubmit() {}
  return (
    <div>
      <div className="mr-5 mt-5">
        <button className="focus:outline-none float-end bg-red-400 rounded-full pl-5 pr-5 pt-2 pb-2">
          Home
        </button>
      </div>
      <div className=" container">
        <div></div>
        <div>
          <form onSubmit={onSubmit}>
            <input type="text" name="name" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
