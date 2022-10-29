import React, { Fragment } from "react";
import styles from "./Star.module.scss";

const StarView = (props) => {
    const { star } = props;
  
    return (
      <div
      className={styles._}
      style={{
        top: star.top,
        left: star.left
      }}
      ></div>
    );
  };
export default StarView;