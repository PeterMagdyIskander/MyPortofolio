import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { BiArrowToTop } from "react-icons/bi";
import { BiArrowToBottom } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: #252325;
`;

const heightOfMenu = "70px";

const Menu = styled.div`
  height: ${heightOfMenu};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: #00a36c;
  background-image: linear-gradient(to bottom right, #0bda51, #00a36c);
`;

const MenuButtom = styled.button`
  width: 150px;
  height: 34px;
  border: 0;
  color: #000000;
  background: transparent;
  font-size: 16px;
  font-weight: 100;
  &:hover {
    color: #90ee90;
  }
`;

const Burger = styled.button`
  position: absolute;
  z-index: 1;
  top: 10px;
  right: 10px;
  color: ${(p) => (p.isOpen ? "#00A36C" : "#00A36C")};
`;

const BurgerIcon = styled.span`
  font-size: 36px;
`;

const Content = styled.div`
  transform: translateY(${(p) => (p.isOpen ? 0 : `-${heightOfMenu}`)});
  transition: transform 0.45s;
`;

const Project = (props) => {
  return (
    <article className="card">
      <h3 className="titleOfProject">{props.projectName}</h3>
      <div
        className="videoContainer"
        onClick={() => window.open(props.githubRepo, "_blank")}
      >
        {" "}
        video here
      </div>
      <p className="description">{props.description}</p>
    </article>
  );
};

export const App = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Wrapper>
      <Burger isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
        <BurgerIcon class="material-icons">
          {isOpen ? <BiArrowToTop /> : <BiArrowToBottom />}
        </BurgerIcon>
      </Burger>
      <Content isOpen={isOpen}>
        <Menu>
          <MenuButtom>My Work</MenuButtom>
          <MenuButtom>CV</MenuButtom>
          <MenuButtom
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/peter-iskander-17b9501b1/",
                "_blank"
              )
            }
          >
            {" "}
            <FaLinkedin />
            Linkedin
          </MenuButtom>
          <MenuButtom
            onClick={() =>
              window.open("https://github.com/PeterMagdyIskander", "_blank")
            }
          >
            {" "}
            <FaGithub />
            Github
          </MenuButtom>
        </Menu>
        <div className="MainDiv">
          <h1 className="title"> Peter Iskander</h1>
          <section className="card-list">
            <Project projectName="Logic Gates Simulator" description="used java blablabla" ></Project>
            <Project projectName="Twitch Bot" description="used Python blablabla" ></Project>
            <Project projectName="Food Catering" description="used java blablabla" ></Project>
          </section>
        </div>
      </Content>
    </Wrapper>
  );
};

export default App;
