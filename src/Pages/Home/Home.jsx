import React, { useEffect, useRef } from "react";
import { Box, Flex, Heading, Image, Text, Link } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import resume from "../../Componets/Shakil-Pendhari-Resume.pdf";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import style from "./Home.module.css";

let main = {
  id: "home",
  // width: "100%",
  // padding: "3rem 2rem",
  gap: "1rem",
  justifyContent: "center",
  alignItems: "center",
  //  border:"1px solid red"
};

const Home = ({ setIsIntersection, obj, isIntersection, theme }) => {
  let ref = useRef(null);
  useEffect(() => {
    AOS.init();
  }, []);
  // useEffect(()=>{
  //   window.addEventListener("scroll",handleScroll);

  //   return ()=> window.removeEventListener("scroll",handleScroll)
  // })

  // const handleScroll = (e) => {
  //   let options = {
  //     root: null,
  //     rootMargins: "0px", // top margin and bottom margin
  //     threshold: 0, //when top of element see then it allow to do lazy loading
  //   };
  //   const observer = new IntersectionObserver(handleIntersect, options);
  //   observer.observe(ref.current);

  //   function handleIntersect (entries){
  //       if(entries[0].isIntersecting)
  //       {
  //         let home = document.getElementById("Home");
  //             home.className {style.}= "navbutAnimationAdd"
  //       }
  //       else{
  //         let home = document.getElementById("Home");
  //         home.className {style.}= "navbutAnimationRemove"
  //         home.classList.remove("navbutAnimationAdd")
  //       }
  //   }
  // }

  return (
    <Flex
      ref={ref}
      boxSizing="borderBox"
      direction={{ base: "column", sm: "column", md: "row" }}
      padding="0rem 2rem"
      // className={style.home}
      // background={!theme?"white":"black"}
      background={!theme?"rgb(206, 241, 247)":"black"}
      style={main}
      width="82%"
      m="1.5rem auto"
      borderBottom={`3px solid ${!theme ? "#3182CE" : "#8B54F8"}`}
      borderTopLeftRadius="5px"
      borderTopRightRadius="5px"
      overflow="hidden"
      boxShadow={`0px 2px 6px ${!theme ? "#3182CE" : "#8B54F8"}`}
      p={{base:"1rem",sm:"1rem",md:"2rem 2.3rem 3.4rem"}}
    >
      <Flex
        flex="1"
        data-aos="fade-left"
        data-aos-delay="20"
        data-aos-duration="700"
        justifyContent="flex-start"
        alignItems="center"
        width={{ base: "60%", md: "100%" }}
        height={{ base: "60%", md: "100%" }}
        minW="5.5rem"
        minH="12.4rem"
      >
        {/* <Image
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          style={{
            borderRadius: "10%",
            border: "2px solid",
            height: { base: "80%", sm: "21rem", md: "26rem" },
            boxShadow: "0px 5px 15px 5px orange",
          }}
          width={{ base: "70%", sm: "70%", md: "26rem" }}
          margin="auto"
          mt={{ base: "1.7rem", sm: "1.7rem", md: "2.7rem" }}
          src="/MyImg.jpeg"
          alt="Shakil Pendhari"
        /> */}
        <LazyLoadImage
          style={
            !theme
              ? {
                  borderRadius: "10%",
                  border: "2px solid",
                  boxShadow: "0px 5px 15px 5px pink",
                  // minWidth:"17.06rem"
                }
              : {
                  borderRadius: "10%",
                  border: "2px solid",
                  boxShadow: "0px 5px 15px 5px orange",
                  // minWidth:"17.06rem"
                }
          }
          // width={{ base: "50%", sm: "70%", md: "26rem" }}
          alt="Shakil Pendhari"
          effect="blur"
          src="/MyImg.jpeg"
        />
      </Flex>
      <Flex
        data-aos="fade-right"
        data-aos-delay="20"
        data-aos-duration="700"
        direction="column"
        mt={{ base: "1.3rem", sm: "1.3rem", md: "2.3rem" }}
        flex="2"
        // minW="20.05rem"
      >
        <Heading
          as="h1"
          textAlign="left"
          textShadow="2px 2px 10px rgb(250 200 100)"
          fontFamily="Robota, sans-serif"
          fontSize={{ base: "20px", sm: "25px", md: "2.05rem" }}
          // paddingLeft="1rem"
          color={!theme?"black":"white"}
          style={{ userSelect: "none", WebkitUserSelect: "none" }}
        >
          Hello👋
        </Heading>
        {/* <Box
          textAlign="left"
          fontWeight="450"
          fontFamily="Robota, sans-serif"
          textShadow="2px 2px 10px rgb(250 200 100)"
          fontSize={{ base: "15px", sm: "20px", md: "1.8rem" }}
          paddingLeft="1rem"
          color="white"
          style={{ userSelect: "none", WebkitUserSelect: "none" }}
        >
          I'm{" "}
          <Text
            as="b"
            color="white"
            fontSize={{ base: "14px", sm: "22px", md: "2.3rem" }}
            textShadow="2px 2px 10px red"
            style={{ userSelect: "none", WebkitUserSelect: "none" }}
          >
            {" Shakil Pendhari"}
          </Text>
        </Box> */}
        <Text
          width="100%"
          fontWeight="light"
          fontFamily="Robota, sans-serif"
          // paddingLeft="1rem"
          textShadow="2px 2px 10px rgb(250 200 100)"
          // fontSize={{ base: "15px", sm: "20px", md: "1.5rem" }}
          textAlign="justify"
          fontSize={{ base: "15px", sm: "19px", md: "1.4rem" }}
          color={!theme?"black":"white"}
        >
          Welcome to my portfolio, showcasing my expertise in full stack web
          development. Trained by Masai School, I have a strong command of the
          MERN stack, API integrations, and responsive design. I have
          successfully created diverse projects that blend functionality with
          aesthetics, demonstrating collaborative teamwork and meticulous
          attention to detail. Step into my world of code and innovation, where
          each line is crafted to leave a lasting impact.
        </Text>

        <Flex
          // width="95%"
          // m="auto"
          // border="1px solid red"
          mt="1rem"
          // direction={{ base: "row", sm: "row", md: "column" }}
          direction="column"
          gap="1rem"
        >
          <Link
            className={style.resumeHome}
            href={resume}
            download={true}
            fontFamily="helvetica"
            // color="whiteAlpha.700"
            color={!theme?"black":"white"}
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            // bgColor="purple.600"
            bgColor={`${!theme ? "#3182CE" : "#8B54F8"}`}
            w={{ base: "5rem", sm: "7rem", md: "8.6rem" }}
            fontSize={{ base: "0.8rem", sm: "1.2rem", md: "1.4rem" }}
            style={{
              fontWeight: "700",
              padding: "0.3rem 0rem",
              // marginLeft: "1rem",
              textDecoration: "none",
              border: "1px solid rgba(1,1,1,0.5)",
              borderRadius: "0.3rem",
              userSelect: "none",
              WebkitUserSelect: "none",
            }}
            target="_blank"
            textAlign="center"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/17gxAc8lmovBKGQ7oEPSos8TkS9KqAjz2/view?usp=share_link",
                "_blank",
                "noreferrer"
              );
            }}
          >
            Resume
          </Link>

          <Flex
            className="svg"
            // paddingLeft="1rem"
            gap="0.5rem"
            margin="0"
            direction={{ base: "column", sm: "row", md: "row" }}
            width={{ base: "5rem", sm: "6rem", md: "8rem" }}
            style={{ userSelect: "none", WebkitUserSelect: "none" }}
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ShakilPendhari"
              className={!theme ? "svg12" : "svg12Dark"}
            >
              <svg viewBox="71 71 370 370" className="svg121">
                <path
                  d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"
                  fill="rgb(100,100,100)"
                />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/shakil-pendhari-b00351245/"
              className={!theme ? "svg13" : "svg13Dark"}
            >
              <svg viewBox="0 0 512 512" width="50px" className="svg131">
                <path
                  fill="rgb(230,230,230)"
                  d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"
                />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:shakilpp123456@gmail.com"
              className={!theme ? "svg14" : "svg14Dark"}
            >
              <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                width="50px"
                className="svg141"
                data-testid="MailIcon"
              >
                <path
                  stroke="black"
                  strokeWidth="0.5px"
                  fill="rgb(1, 1, 1)"
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
                ></path>
              </svg>
            </a>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
