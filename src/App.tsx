import Hero from "./components/Hero";
import ProjectsContainer from "./containers/ProjectsContainer";
import ContactsContainer from "./containers/ContactContainer";
import { BackToTopButton } from "./components/Button/BackToTopButton";
import { useEffect } from "react";
import MainWrapper from "./wrappers";

let BackToTopBtnEl: HTMLElement | null;

function App() {
  window.onscroll = () => {
    backToTopBtnFunc();
  };

  useEffect(() => {
    BackToTopBtnEl = document.getElementById("BackToTopBtn");
  }, []);

  const backToTopBtnFunc = () => {
    if (!BackToTopBtnEl) {
      return;
    }
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      BackToTopBtnEl.style.display = "block";
    } else {
      BackToTopBtnEl.style.display = "none";
    }
  };

  return (
    <MainWrapper>
      <BackToTopButton
        id="BackToTopBtn"
        onClick={() => {
          document.body.scrollTo({ top: 0, behavior: "smooth" });
          document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Back to top
      </BackToTopButton>
      <Hero />
      <ProjectsContainer />
      {/* Contact */}
      <ContactsContainer />
    </MainWrapper>
  );
}

export default App;

// 576px for portrait phones.
// 768px for tablets.
// 992px for laptops.
// 1200px for large devices.
