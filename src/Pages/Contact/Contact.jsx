import React, { useEffect, useRef, useState } from "react";
import { Heading, Text, Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import style from "./Contact.module.css";

const Contact = ({ theme }) => {
  const ref = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  // useEffect(() => {

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

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
  //         let cont = document.getElementById("Contact");
  //             cont.className = "navbutAnimationAdd"
  //       }
  //       else{
  //         let cont = document.getElementById("Contact");
  //         cont.className = "navbutAnimationRemove"
  //         cont.classList.remove("navbutAnimationAdd")
  //       }
  //   }
  // };

  return (
    <Box
      ref={ref}
      id="contact"
      className={!theme ? style.Contact : style.ContactDark}
      pb="7rem"
      style={{ userSelect: "none", WebkitUserSelect: "none" }}
    >
      <Heading
        as="h1"
        lineHeight="3rem"
        // borderBottom="3px solid green"
        //  width={{base:"10%",sm:"28%",md:"16%"}}
        // width={{ base: "55%", sm: "51%", md: "13%" }}
        fontSize={{ base: "1.3rem", sm: "1.6rem", md: "2rem" }}
        data-aos="fade-down"
        data-aos-delay="20"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        m="4rem auto"
        pt="2rem"
        textShadow="2px 2px 10px rgb(250 200 100)"
      >
        <span
          style={{
            boxShadow: "0px 0px 3px grey",
            padding: "0.2rem 0.8rem",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            borderBottom: `3px solid ${!theme ? "#3182CE" : "#8B54F8"}`,
            color: `${!theme ? "black" : "white"}`,
            background: `${!theme ? "rgb(206, 241, 247)" : "black"}`,
          }}
        >
          Get in Touch
        </span>
      </Heading>
      <Text
        fontSize={{ base: "15px", sm: "18px", md: "20px" }}
        fontWeight="500"
        m="auto"
        data-aos="fade-left"
        data-aos-delay="100"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        textShadow="2px 2px 10px rgb(250 200 100)"
      >
        Shakil Pendhari
      </Text>
      <Text
        fontSize={{ base: "13px", sm: "16px", md: "18px" }}
        fontWeight="700"
        data-aos="fade-right"
        data-aos-delay="500"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        textShadow="2px 2px 10px rgb(200 150 100)"
      >
        call: 919921317929
      </Text>
      <Flex
        gap="1rem"
        width="20%"
        justifyContent="space-around"
        direction={{ base: "column", sm: "row", md: "row" }}
        alignItems="center"
        padding="0.5rem"
        data-aos="fade-left"
        data-aos-delay="500"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        m="auto"
      >
        <a
          target="_blank"
          rel="noreferrer"
          w="0.5rem"
          href="https://github.com/ShakilPendhari"
          className={!theme ? "svg12" : "svg12Dark"}
        >
          <svg viewBox="71 71 370 370" className="svg121">
            <path
              fill="rgb(100,100,100)"
              d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"
            />
          </svg>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/shakil-pendhari-b00351245/"
          className={!theme ? "svg13" : "svg13Dark"}
        >
          <svg viewBox="0 0 512 512" className="svg131">
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
            className="svg141"
            data-testid="MailIcon"
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
          </svg>
        </a>
      </Flex>
      <Text
        fontWeight="700"
        data-aos="fade-up"
        mt="2rem"
        textShadow="2px 2px 10px rgb(250 200 100)"
      >
        Thank you
      </Text>
    </Box>
  );
};

export default Contact;
