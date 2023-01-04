import styles from "./index.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div
        style={{
          border: "1px solid green",
          borderRadius: "8px",
          padding: "14px 14px",
          width: "500px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            style={{ width: 20, height: 20, marginRight: "10px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z" />
          </svg>

          <span>Welcome Elsa, you have logged in successfullt</span>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
