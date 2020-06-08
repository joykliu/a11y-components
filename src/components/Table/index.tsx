import React, { ReactNode, Fragment } from "react";
import shortid from "shortid";
import styles from "./index.module.css";

type PropsType = {
  caption: string;
  headers: string[];
  rows: Array<string[]>;
};

type TableType = {
  Desktop: ReactNode | null;
  Mobile: ReactNode | null;
};

const Table: TableType = {
  Desktop: null,
  Mobile: null
};

Table.Desktop = ({ caption, headers, rows }: PropsType) => {
  return (
    <table className={styles.tableDesktop}>
      <caption className={styles.tableCaption}>{caption}</caption>
      <tbody>
        <tr className={styles.tableRow}>
          {headers.map((header) => (
            <th
              className={styles.tableHeader}
              scope="col"
              key={shortid.generate()}
            >
              {header}
            </th>
          ))}
        </tr>
        {rows.map((row) => (
          <tr key={shortid.generate()} className={styles.tableRow}>
            {row.map((cell) => (
              <td className={styles.tableCell} key={shortid.generate()}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.Mobile = ({ caption, headers, rows }: PropsType) => {
  return (
    <div className={styles.tableMobile}>
      <h2 className={styles.tableCaption}>{caption}</h2>
      {rows.map((row) => (
        <div key={shortid.generate()}>
          <h3 className={styles.tableHeaderMobile}> Transaction #{row[0]}</h3>
          <dl>
            {headers.map(
              (header, i) =>
                i > 0 && (
                  <Fragment key={shortid.generate()}>
                    <dt className={styles.tableHeader}>{header}</dt>
                    <dd className={styles.tableRow}>{row[i]}</dd>
                  </Fragment>
                )
            )}
          </dl>
        </div>
      ))}
    </div>
  );
};

export default Table;
