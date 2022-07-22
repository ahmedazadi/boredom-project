import { Button as RButton } from "react-bootstrap";

function Button({ setData }) {
  return (
    <RButton
      className="d-block mt-5 mx-auto"
      variant="warning"
      onClick={() => {
        fetch("https://www.boredapi.com/api/activity")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setData(data);
          });
      }}
    >
      Explore
    </RButton>
  );
}

export default Button;
