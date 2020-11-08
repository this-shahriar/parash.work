import { Col, Divider, Row } from "antd";
import styles from "./intro.module.scss";
import { EnvironmentOutlined } from "@ant-design/icons";

export const Intro = () => {
  return (
    <div className={styles["intro-wrapper"]}>
      <Row>
        <Col lg={18} md={18} xs={24}>
          <h1>Shahriar Hasan Parash</h1>
          <h4>Front-end developer | Visual designer</h4>
          <h5>
            <EnvironmentOutlined /> <span>Dhaka, Bangladesh</span>
          </h5>
          <div className="space" />
          <div className={styles["about-section"]}>
            <h4>About </h4>
            <Divider style={{ borderTop: "2px solid #2c2c2c" }} />
            <p>
              I started my career with ES6 and ReactJS in front end development.
              After 2 years of professional experience I am now comfortable with
              React, Angular, ES6, TypeScript, Redux, RxJS and worked with
              backend systems providing REST API and GraphQL. Completed BSc in
              Computer Science and additionally courses at Free Code Camp
              contains 300 hours of course materials. Fast and responsive UX to
              the customer, maintainable code and learning at every level is my
              motto.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
