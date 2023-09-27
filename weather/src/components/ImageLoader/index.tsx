import ContentLoader from "react-content-loader";
import "./styles.css";

const ImageLoader = () => {
  return (
    <div className="image-loader">
      <ContentLoader
        width={475}
        height={285}
        viewBox="0 0 475 285"
        backgroundColor="#fff3e4"
        foregroundColor="#ff8000"
      >
        <rect x="55" y="10" rx="5" ry="5" width="365" height="265" />
      </ContentLoader>
    </div>
  );
};

export default ImageLoader;
