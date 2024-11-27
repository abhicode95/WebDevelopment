import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import Cover from "./pages/Cover";
import coverImg from "../assets/cover.png";

const MyBook = () => {
  return (
    <HTMLFlipBook width={600} height={700} showCover="true">
      <Page number={1}>
        <Cover coverImg={coverImg} title="My Portfolio" />
      </Page>

      <Page number={2}>
        <div className="demoPage text-white text-3xl">
          <FirstPage />
        </div>
      </Page>

      <Page number={3}>
        <div className="demoPage text-white text-3xl">Page 3</div>
      </Page>
    </HTMLFlipBook>
  );
};
export default MyBook;
