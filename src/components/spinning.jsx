/* eslint-disable react/prop-types */

import BounceLoader from "react-spinners/BounceLoader"
const Spinning = ({loading}) => {
  return (
    <div className="w-full h-96 flex justify-center items-center">
      <BounceLoader loading={loading} color="#EBEEEF" />
    </div>
  );
}

export default Spinning
