import ContentLoader from "react-content-loader";
import "./styles.css";

const ContentLoaderCapitais = () => {
  return (
    <div className="content-loader">
      <ContentLoader
        height="100%"
        width="100%"
        viewBox="0 0 450 254"
        backgroundColor="#fff3e4"
        foregroundColor="#ff8000"
      >
        <rect x="50" y="100" rx="4" ry="4" width="90%" height="15%" />
        <rect x="50" y="55" rx="4" ry="4" width="90%" height="15%" />
        <rect x="50" y="145" rx="4" ry="4" width="90%" height="15%" />
        <rect x="50" y="190" rx="4" ry="4" width="90%" height="15%" />
      </ContentLoader>
    </div>
  );
};

export default ContentLoaderCapitais;
