import { Button, Divider } from "antd";
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
    <div className="container">
      <div className={styles.intro_wrapper}>
        {Array.from({ length: 10 }, (item, idx) => {
          return (
            <div className={idx != 4 && styles.light}>
              <h1>Shahriar Hasan Parash</h1>
              <h4>Front-end Developer | Visual Designer</h4>
            </div>
          );
        })}
        <div className="space" />
        <div className={styles.connect_wrapper}>
          <div className={styles.connects}>
            <GithubOutlined
              onClick={() =>
                window.open("https://github.com/this-shahriar", "_blank")
              }
              className={styles["connect"]}
            />
            <BehanceOutlined
              onClick={() =>
                window.open("https://www.behance.net/shahriarha4973", "_blank")
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
      </div>
    </div>
  );
};
