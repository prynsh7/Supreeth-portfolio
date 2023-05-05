const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/Supreethsk05">
        <i className="fa-brands fa-github" aria-hidden="true" title="Supreeths' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/supreeth-kadappanavar-672213224/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Supreeths' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/supreeth_kadappanavar/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Supreeths' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/Supreeth_K">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="'Supreeth' Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
