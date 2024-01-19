import React, { ReactNode } from "react";
import styles from "./base-layout.module.scss";




type BaseLayoutProps = {
  children: ReactNode;
};





export function BaseLayout({ children }: BaseLayoutProps) {
  return <div className={styles['wrapper']}>{children}</div>;
}
