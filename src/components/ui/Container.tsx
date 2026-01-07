import React from "react";
import { Row, Col, Grid } from "antd";

const { useBreakpoint } = Grid;

interface ContainerProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, fullWidth = false, className }) => {
  const screens = useBreakpoint();

  const getMaxWidth = () => {
    if (fullWidth) return "100%";
    if (screens.xxl) return "1320px";
    if (screens.xl) return "1200px";
    if (screens.lg) return "1100px";
    if (screens.md) return "960px";
    return "100%";
  };

  return (
    <div
      className={className}
      style={{
        maxWidth: getMaxWidth()
      }}
    >
      <Row>
        <Col span={24}>{children}</Col>
      </Row>
    </div>
  );
};

export default Container;
