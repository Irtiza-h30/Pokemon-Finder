import React from "react";
import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

export default function BackButton() {
  const history = useHistory();
  const goBack = () => {
    history.push("/");
  };

  const dStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const pStyle = {
    color: "black",
    backgroundColor: "white",
  };

  return (
    <div style={dStyle}>
      <Button
        style={pStyle}
        onClick={goBack}
        type="primary"
        icon={<LeftOutlined />}
      >
        Back to search
      </Button>
    </div>
  );
}
