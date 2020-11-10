import { Col, Divider, Row } from "antd";
import styles from "./intro.module.scss";
import {
  EnvironmentOutlined,
  GithubOutlined,
  BehanceOutlined,
  LinkedinOutlined,
  Html5Outlined,
  GoogleOutlined,
} from "@ant-design/icons";

export const Intro = () => {
  return (
    <div className={styles["intro-wrapper"]}>
      <Row>
        <Col lg={12} md={18} xs={24}>
          <div className={styles["hello-world"]}>
            <h5>{`> Hello world`}</h5>
          </div>
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
              Current front-end stack includes React, Angular, Next, ES6,
              TypeScript, Redux, RxJS. Going all in for user experience, speed
              and reliability.
            </p>
          </div>
          <div className="space" />
          <div>
            <h4>Connect</h4>
            <Divider style={{ borderTop: "2px solid #2c2c2c" }} />
            <div className={styles["connect-wrapper"]}>
              <GithubOutlined
                onClick={() =>
                  window.open("https://github.com/this-shahriar", "_blank")
                }
                className={styles["connect"]}
              />
              <BehanceOutlined
                onClick={() =>
                  window.open(
                    "https://www.behance.net/shahriarha4973",
                    "_blank"
                  )
                }
                className={styles["connect"]}
              />
              <LinkedinOutlined
                onClick={() =>
                  window.open("https://www.linkedin.com/in/shpr", "_blank")
                }
                className={styles["connect"]}
              />
              <Html5Outlined
                onClick={() =>
                  window.open(
                    "https://stackoverflow.com/users/5352204/shahriar-hasan",
                    "_blank"
                  )
                }
                className={styles["connect"]}
              />
              <GoogleOutlined
                onClick={() =>
                  window.open("mailto:shahriarhasan0@gmail.com", "_blank")
                }
                className={styles["connect"]}
              />
            </div>
          </div>
        </Col>
        <Col lg={10} md={5} xs={0}>
          <div className={styles["anim-svg"]}>
            <object type="image/svg+xml" data="/static/anim.svg"></object>
          </div>
        </Col>
      </Row>
    </div>
  );
};
