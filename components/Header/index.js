import { Row, Col } from "antd";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles["header-wrapper"]}>
      <div className="container">
        <Row>
          <Col span={18}>
            <ul>
              <li className={styles.selected}>Home</li>
              <li>Blog</li>
              <li>Resume</li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};
