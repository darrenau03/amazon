import React from "react";
import ModalTile from "./ModalTile";
import Function from "./Function";

const Projects = () => {
  return (
    <div
      id="proj"
      className="flex justify-center mt-[100px] mb-[100px] flex-col max-w-[1400px]"
    >
      <div className="flex text-4xl justify-center font-bold mb-[50px]">
        School Projects
      </div>
      <div className="flex flex-wrap flex-row justify-center">
        <ModalTile
          projectName={"Thrust Vector Control"}
          image={require("../../images/TVC/TVC.png")}
          description="Gimbal mechanism for rocket engine"
          projectDuration={"Jan 2022 - Present"}
          toolsUsed={"Solidworks, Ansys"}
          modalHtml={
            <div className="space-y-4 flex flex-col">
              {" "}
              <p className="">
                I am a member of the{" "}
                <a
                  href="https://www.texasrocketlab.com/"
                  className=" text-blue-600 hover:text-purple-800"
                >
                  Texas Rocket Engineering Lab
                </a>
                , a student run lab who's goal is to build Halcyon, a liquid
                bi-propellant rocket that will launch past the Karman Line. I
                was in charge of leading the design of a gimbal system for our
                engine, aka TVC or{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Thrust_vectoring/"
                  className=" text-blue-600 hover:text-purple-800"
                >
                  Thrust Vector Control
                </a>
                .
              </p>
              <p>
                The primary requirements of this system was to with stand the
                15.5 kN thrust of the engine while being able to actuate 5
                degrees in any direction. The project began with recognizing
                that the triple ring design would be the most optimal for this
                situation. This was because the top ring, as well as the bolt
                pattern of the innermost of the triple ring design had to remain
                constant. Additionally, this would allow for most of the stress
                of the engine to be transferred to the supports as opposed to
                the linear actuator itself, allowing for more flexibility.
              </p>
              <p>
                While this project is very much still in progress, the design of
                the TVC system is close to completion. So far, this project has
                taught me in three main areas
              </p>
              <p>
                <p>1) Improving my Solidworks skills.</p> As this was the
                largest Solidworks project I've done to date, it required me to
                learn better organization and CADding practices than before,
                including primarily mating through reference geometry, sketching
                primarily through the top, right, and front planes, using folder
                and equations, creating hotkeys to improve workflow, and more.
              </p>
              <p>
                <p>2) Learning a bit of solids and dynamics</p> In order to
                perform hand calcs to spec the linear actuators, bearings,
                bolts, and to have a general understanding of what Ansys does.
                It required that I learn solids and dynamics, preparing me for
                these courses that I will be taking in Fall 2022.{" "}
              </p>
              <p>
                <p>3) Conducting Ansys/FEAs</p> While designing, I would also
                have to test the components in Ansys to ensure the stress from
                the engine would cause stress under the yield strength of the
                component.
              </p>
              <p>
                There is still a lot of work to be done but I am very grateful
                for this opportunity and excited to watch this project progress
              </p>
              <p className="text-xs">Progress as of May 2022</p>
            </div>
          }
        />

        <ModalTile
          projectName={"FIRE"}
          image={require("../../images/FIRE/FIRE.png")}
          description="Machine Learning Algorithm to detect feature-rich areas in AFM images"
          projectDuration={"Aug 2021 - Dec 2021"}
          toolsUsed={"OpenCV, Python, PyTorch"}
          modalHtml={
            <div className="space-y-4 flex flex-col">
              <p className="italic">
                Copy pasted from my{" "}
                <a
                  href="https://github.com/darrenau03/FIRE-Machine-Learning"
                  className=" text-blue-600 hover:text-purple-800"
                >
                  github repository
                </a>
                .
              </p>
              <p>
                This project was created as part of the First-year Introduction
                to Research in Engineering (FIRE) program.
              </p>
              <p>
                The project aims to create a program/algorithm to help detect
                high gradient areas in an image. The long-term hope of this is
                project is to integrate it with the research of Dr. Michael
                Cullinan and Eva Natinsky, the advisors for this project, and
                their work on AFM image scans. The gradient detection from this
                project will help distinguish feature-rich areas from
                feature-poor areas in these images scans, allowing for a more
                optimized use of the electron microscope to focus on the
                feature-rich area.
              </p>
              <p>
                This project works by creating an artificial dataset by applying
                a simple Sobel filter to detect high gradient areas. Afterward,
                all the images are passed and in a UNet machine learning
                architecture to create a more generalized model. The end result
                is available in this repository.
              </p>
              <div className="">
                <a
                  href={
                    "https://s3.us-west-1.amazonaws.com/darrenau.com/S3/FIRE_Final.pdf"
                  }
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-blue-600 hover:text-purple-800"
                >
                  PDF of Final Report
                </a>
              </div>
            </div>
          }
        />
        <ModalTile
          projectName={"Longhorn Racing: Electric"}
          image={require("../../images/LHR/LHR.png")}
          description="Member of LHR Electric Team"
          projectDuration={"Feb 2022-Present"}
          toolsUsed={
            "lathe, manual mill, 3d printer, laser cutter, drop saw, hand tools"
          }
          modalHtml={
            <div className="space-y-4 flex flex-col">
              <p>
                As a dynamics member, I helped machine components for the{" "}
                <a
                  href="https://www.longhornracing.org/electric-vehicle"
                  className=" text-blue-600 hover:text-purple-800"
                >
                  Longhorn Racing Electric Team
                </a>
                . This included shims, plugs, jig components, and more. I also
                helped draft drawings using conventional tolerancing. This
                opportunity also taught me a lot about vehicle dynamics such as
                purpose of camber, caster, toe, what an arb was and how it
                functioned,{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Ackermann_steering_geometry"
                  className=" text-blue-600 hover:text-purple-800"
                >
                  Ackermann steering geometry
                </a>
                , etc
              </p>
            </div>
          }
        />
        <ModalTile
          projectName={"HeRo Summer Research"}
          image={require("../../images/HeRo/HeRo.png")}
          description="Undergraduate Summer Researcher"
          projectDuration={"May 2022 - August 2022 "}
          toolsUsed={"Python, OpenCV, Solidworks, manual mill"}
          modalHtml={
            <div className="space-y-4 flex flex-col">
              <p>
                The summer following my freshman year, I was employed as an
                Undergraduate Research Assistant as a part of{" "}
                <a
                  href="https://robotics.utexas.edu//"
                  className=" text-blue-600 hover:text-purple-800"
                >
                  Texas Robotics
                </a>{" "}
                at the{" "}
                <a
                  href="https://sites.utexas.edu/herolab/"
                  className=" text-blue-600 hover:text-purple-800"
                >
                  HeRo Lab
                </a>
                , under the supervision of{" "}
                <a
                  href="https://www.me.utexas.edu/people/faculty-directory/amfey"
                  className=" text-blue-600 hover:text-purple-800"
                >
                  Dr. Ann Majewicz Fey
                </a>
                .
              </p>
              <p>
                My role was to write the data analysis code for an ongoing
                project called the Baby Silo. More information can be found in
                my{" "}
                <a
                  href={
                    "https://s3.us-west-1.amazonaws.com/darrenau.com/S3/Undergraduate+Honors+Thesis.docx"
                  }
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-blue-600 hover:text-purple-800"
                >
                  partner's senior thesis
                </a>
                , but to put it in simple terms: my job was to design a system
                to reliably measure the diameter of a compliant silicon ring as
                it is expanded via air being pumped into the ring.
              </p>
              <p>
                This used to be done was with electromagnetic trackers fastened
                to the sides of the ring. However, this solution was proven to
                be cumbersome due to the difficulty mounting them on each ring
                individually.
              </p>
              <p>
                My approach involved using computer vision to measure the
                diameter. This is done through the contour detection algorithm
                that exists in OpenCV and creating a mapping function to take
                the area of the contours to determine the diameter of the ring.
                It saves the results as a time series in an excel while another
                script can read from the excel file to plot the results.
              </p>
              <p>
                To make sure the algorithm can run properly, it requires that
                the ring is flush on the surface (doesn't rotate). To ensure
                this, I created a jig that would prevent this. It functions by
                having a piece of acrylic mounted on 4 dowel pins, such that
                motion is restricted vertically, thus preventing rotational
                motion.
              </p>
              <div className="flex justify-center">
                <Function
                  image={
                    <img
                      src={require("../../images/HeRo/CAD.png")}
                      alt={"AntiRollJig"}
                    />
                  }
                  caption={"CAD"}
                ></Function>
                <Function
                  image={
                    <img
                      src={require("../../images/HeRo/AntiRollJig.png")}
                      alt={"AntiRollJig"}
                    />
                  }
                  caption={"Jig"}
                ></Function>
              </div>
              <p>
                The results after running the algorithm on a couple rings are
                shown below.
              </p>
              <p>
                <div className="flex justify-center">
                  <Function
                    image={
                      <img
                        src={require("../../images/HeRo/ring id.jpg")}
                        alt={"Ring Internal Diameter"}
                      />
                    }
                    caption={"Ring Internal Diameter"}
                  ></Function>
                  <Function
                    image={
                      <img
                        src={require("../../images/HeRo/ring od.jpg")}
                        alt={"Ring Outer Diameter"}
                      />
                    }
                    caption={"Ring Outer Diameter"}
                  ></Function>
                  <Function
                    image={
                      <img
                        src={require("../../images/HeRo/tape id.jpg")}
                        alt={"Tape Internal Diameter"}
                      />
                    }
                    caption={"Tape Internal Diameter"}
                  ></Function>
                  <Function
                    image={
                      <img
                        src={require("../../images/HeRo/tape od.jpg")}
                        alt={"Tape Internal Diameter"}
                      />
                    }
                    caption={"Tape Outer Diameter"}
                  ></Function>
                </div>
                <div className="flex justify-center items-center ">
                  <Function
                    image={
                      <img
                        src={require("../../images/HeRo/Graphs.png")}
                        alt={"Graphs"}
                      />
                    }
                    caption={"Graphs of the ID and OD: X is time in seconds and Y is diameter in inches"}
                  ></Function>

                  <Function
                    image={
                      <video
                        controls
                        src={
                          "https://s3.us-west-1.amazonaws.com/darrenau.com/S3/vid.mp4"
                        }
                      />
                    }
                    caption={"Video correlation to graph"}
                  ></Function>
                </div>
              </p>
              <p>
                As seen from the pictures, the program detects quite accurately;
                the tape outer diameter differs the most at .05 inches from the
                calliper measured true value while the other 3 values differ by
                less than 0.01 inches. This 0.05 offset is a result of the
                imperfect circle formed when the ring is calibrated due to the
                tube that is required for the air.
              </p>
              <p>
                The code also incorporates an a camera calibration algorithm
                that corrects for distortion. This is done with an OpenCV
                function that recognizes a checkerboard to extract the
                parameters needed to undistort the image.
              </p>
              <div className="flex justify-center items-center">
                <Function
                  image={
                    <video
                      controls
                      src={
                        "https://s3.us-west-1.amazonaws.com/darrenau.com/S3/AntiDistortion.mp4"
                      }
                    />
                  }
                  caption={
                    "Undistorting Code: recognizes the checkerboard and undistorts the camera output"
                  }
                ></Function>
                <Function
                  image={
                    <img
                      src={require("../../images/HeRo/AntiDistortion.png")}
                      alt={"Kinematic Scope"}
                    />
                  }
                  caption={"Results"}
                ></Function>
              </div>
              <p>
                If you expand the above image, you can see that the edges of the
                checkerboard concave out slightly over the straight lines drawn
                while the undistorted images has the lines completely straight,
                validating the algorithm.
              </p>
            </div>
          }
        />
        <ModalTile
          projectName={"Data Analytics Final"}
          image={require("../../images/CS 329E/CS329.png")}
          description="Final Project for Data Analytics Course"
          projectDuration={"May 2022 - July 2022"}
          toolsUsed={"Python, SciPy, Numpy, Pandas"}
          modalHtml={
            <div className="space-y-4 flex flex-col">
              <p>
                As part of the Final Project for the Data Analytics course I
                took over the summer, we were required to create a project that
                would analyze a dataset, create graphs that would display
                meaningful information as well as perform predictions on said
                dataset.
              </p>
              <a
                href={
                  "https://s3.us-west-1.amazonaws.com/darrenau.com/S3/TermProjPresentation.pdf"
                }
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-600 hover:text-purple-800"
              >
                PDF of Presentation
              </a>
              <a
                href={
                  "https://s3.us-west-1.amazonaws.com/darrenau.com/S3/Final.ipynb"
                }
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-600 hover:text-purple-800"
              >
                Jupyter Notebook of Code
              </a>
            </div>
          }
        />
      </div>
      <div className="flex text-4xl justify-center font-bold mt-[100px] mb-[50px]">
        Personal Projects
      </div>
      <div className="flex flex-wrap flex-row justify-center">
        <ModalTile
          projectName={"1DOF"}
          image={require("../../images/1DOF/1DOF.png")}
          description="1DOF Rocket Simulation"
          projectDuration={"June 2021"}
          toolsUsed={"Matlab/Simulink"}
          modalHtml={
            <div className="space-y-4 flex flex-col">
              <p>
                In the summer before my freshman year at UT, I worked on a 1DOF
                Rocket Simulation in hopes gaining more knowledge on rockets and
                aerospace prior to joining{" "}
                <a
                  href="https://www.texasrocketlab.com/"
                  className=" text-blue-600 hover:text-purple-800"
                >
                  TREL
                </a>
                .
              </p>
              <p>
                As the name implies, my 1DOF simulation only had 1 degree of
                freedom: the vertical direction. It took into account force from
                gravity, the varying mass of the rocket due to fuel burning over
                time, drag, and included a parachute deployment.
              </p>

              <div className="flex justify-center">
                <Function
                  image={
                    <video
                      controls
                      src={
                        "https://s3.us-west-1.amazonaws.com/darrenau.com/S3/1DOF.mp4"
                      }
                    />
                  }
                  caption={
                    "Animation: angle flipped because downwards was positive for this 3DOF animation block"
                  }
                ></Function>
              </div>

              <div className="flex justify-center">
                <Function
                  image={
                    <img
                      src={require("../../images/1DOF/Kinematic.png")}
                      alt={"Kinematic Scope"}
                    />
                  }
                  caption={"Kinematics Graph"}
                ></Function>
              </div>
              <p>
                The 1DOF can be validated using by analyzing the graphs. The
                acceleration gradually increases during powered ascent as
                despite force being constant, the mass of the rocket is
                decreasing and thus, a higher acceleration.
              </p>
              <p>
                Main engine cut off occurs at 10 seconds and the acceleration
                quickly switches to negative as drag and gravity are now acting
                against the rocket.
              </p>
              <p>
                The acceleration remains negative for the remainder of the
                flight until the parachutes deploy at 500 meters, where the drag
                shoots up and consequently, the y acceleration as well. However,
                as drag is proportional to the velocity of the rocket, it
                quickly decreases as the rocket slows down.
              </p>

              <div className="flex justify-center">
                <Function
                  image={
                    <img
                      src={require("../../images/1DOF/Scope.png")}
                      alt={"Scope"}
                      // className="object-contain w-50px"
                    />
                  }
                  caption={"Drag, Mass, and Thrust Graph"}
                ></Function>
              </div>

              <a
                href={
                  "https://s3.us-west-1.amazonaws.com/darrenau.com/S3/1DOF.pdf"
                }
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-600 hover:text-purple-800"
              >
                PDF of Simulink File
              </a>
            </div>
          }
        />
        <ModalTile
          projectName={"Connect 4"}
          image={require("../../images/Connect4/C4.png")}
          description="1DOF Rocket Simulation"
          projectDuration={"June 2021"}
          toolsUsed={"Java, JavaFX"}
          modalHtml={
            <div className="space-y-4 flex flex-col">
              <p>
                {" "}
                This was a Connect 4 game I wrote to practice my Java skills.
                The interface was created with JavaFX. Meanwhile, the AI was
                created with a{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Minimax"
                  className=" text-blue-600 hover:text-purple-800"
                >
                  minimax algorithm
                </a>{" "}
                implemented with{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Alpha%E2%80%93beta_pruning"
                  className=" text-blue-600 hover:text-purple-800"
                >
                  alpha-beta pruning
                </a>
                . This was done by assigning score values to game states; for
                example, winning the game would be 1000 points, getting 2 in a
                row would be 3 points, getting a checker in the center would be
                5, etc. The algorithm would then recursively check the game 7
                moves ahead and determine the worst case highest scoring outcome
                and play according to that.
              </p>
              <div className="flex justify-center">
                {/* <div className="object-scale-down max-w-[400px] flex mt-10 mb-5 rounded mx-auto">
                  <video controls src={video} />{" "}
                </div>{" "} */}

                <Function
                  image={
                    <video
                      controls
                      src={
                        "https://s3.us-west-1.amazonaws.com/darrenau.com/S3/C4.mp4"
                      }
                    />
                  }
                  caption={"Demo (I am bad at this game)"}
                ></Function>
              </div>
              <p>
                {" "}
                <a
                  href="https://github.com/darrenau03/connect4/tree/main"
                  className=" text-blue-600 hover:text-purple-800"
                >
                  Link to GitHub Repo
                </a>
                !
              </p>
            </div>
          }
        />

        <ModalTile
          projectName={"Monte Carlo "}
          image={require("../../images/Monte Carlo/MC.png")}
          description="Monte Carlo Simulation"
          projectDuration={"December 2021"}
          toolsUsed={"MATLAB"}
          modalHtml={
            <div className="space-y-4 flex flex-col">
              <p>
                {" "}
                I created a{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Monte_Carlo_method"
                  className=" text-blue-600 hover:text-purple-800"
                >
                  Monte Carlo
                </a>{" "}
                Simulation in MATLAB to determine the distribution of apogees
                our rocket in{" "}
                <a
                  href="https://www.texasrocketlab.com/"
                  className=" text-blue-600 hover:text-purple-800"
                >
                  TREL
                </a>{" "}
                would hit.
              </p>

              <div className="">
                <a
                  href={
                    "https://s3.us-west-1.amazonaws.com/darrenau.com/S3/Monte+Carlo.pdf"
                  }
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-blue-600 hover:text-purple-800"
                >
                  PDF of Report
                </a>
              </div>
            </div>
          }
        />

        <ModalTile
          projectName={"Website"}
          image={require("../../images/Website/Website.png")}
          description="Website for Personal Portfolio"
          projectDuration={"May 2022"}
          toolsUsed={"Javascript, React, Tailwind CSS"}
          modalHtml={
            <div className="space-y-4 flex flex-col">
              <p> I think most of it speaks for itself :)</p>
              <p>
                {" "}
                <a
                  href="https://github.com/darrenau03/react"
                  className=" text-blue-600 hover:text-purple-800"
                >
                  Link to GitHub Repo
                </a>
                !
              </p>
              <p>
                {" "}
                Credit to Kevin Yu and his{" "}
                <a
                  href="https://kevinhyu.com/"
                  className=" text-blue-600 hover:text-purple-800"
                >
                  site
                </a>{" "}
                for a decent amount of inspiration.
              </p>
              <p></p>
            </div>
          }
        />

        <ModalTile
          projectName={"Yuumi Bot"}
          image={require("../../images/Yuumi Bot/Yuumi.png")}
          description="An AI bot to play Yuumi in League of Legends"
          projectDuration={"July 2021"}
          toolsUsed={"AutoHotKey"}
          modalHtml={
            <div className="space-y-4 flex flex-col">
              <p>
                As the description says, I made an AI bot to play the character
                Yuumi in League of Legends using AutoHotKey. It is a{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Finite-state_machine"
                  className=" text-blue-600 hover:text-purple-800"
                >
                  Finite-state machine
                </a>{" "}
                created by dissecting the game into states. The inputs are
                determined using the pixel recognition function of AutoHotKey,
                as Riot Games does not offer their own API.
              </p>
              <div className="flex justify-center">
                <Function
                  image={
                    <img
                      src={require("../../images/Yuumi Bot/FSM.png")}
                      alt={"FSM"}
                    />
                  }
                  caption={"Finite State Machine Graph"}
                ></Function>
              </div>
              <div className="">
                <a
                  href={require("../../images/Yuumi Bot/Yuumi 1080.ahk")}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-blue-600 hover:text-purple-800"
                >
                  The AutoHotKey Script
                </a>
              </div>
            </div>
          }
        />

        <ModalTile
          projectName={"Web Scrapping"}
          image={require("../../images/Web Scrap/WS.png")}
          description="Web Automation Projects using Selenium"
          projectDuration={"June 2021"}
          toolsUsed={"Python, Selenium"}
          modalHtml={
            <div className="space-y-4 flex flex-col">
              <p>
                Most info can be found on the{" "}
                <a
                  href="https://github.com/darrenau03/UT-Course-Scraping"
                  className=" text-blue-600 hover:text-purple-800"
                >
                  GitHub Repo
                </a>
              </p>
              <div className="flex justify-center">
                {/* <div className="object-scale-down max-w-[400px] flex mt-10 mb-5 rounded mx-auto">
                  <video controls src={video} />{" "}
                </div>{" "} */}

                <Function
                  image={
                    <video
                      controls
                      src={
                        "https://s3.us-west-1.amazonaws.com/darrenau.com/S3/WS.mp4"
                      }
                    />
                  }
                  caption={"Demo"}
                ></Function>
              </div>
            </div>
          }
        />
        <ModalTile
          projectName={"Arduino Bathroom Detector"}
          image={require("../../images/Bathroom Detector/cover.png")}
          description="Arduino Project to Detect if Roommate is in Bathroom"
          projectDuration={"June 2021"}
          toolsUsed={"Arduino"}
          modalHtml={
            <div className="space-y-4 flex flex-col">
              <p>
                Living in the dorms with two roommates, an unusually common
                problem for me was deciding whether ot not to use the restroom
                in the dorm lobby before returning to my dorm or not, as I was
                uncertain if one of my roommates would be in there.
              </p>
              <p>
                This Arduino project would allow me to figure out through a
                webserver hosted using an ESP8266 Wi-Fi microchip.
              </p>
              <div className="flex justify-center">
                <Function
                  image={
                    <video
                      controls
                      src={
                        "https://s3.us-west-1.amazonaws.com/darrenau.com/S3/detector.mp4"
                      }
                    />
                  }
                  caption={"Ultrasonic Demo"}
                ></Function>
              </div>
              <p>
                The ultrasonic sensor will point at the door and the value will
                increase greatly when the door is open as opposed to closed. If
                the value is greater than 50, the door is determined to be open.
                Otherwise, it is closed. As the door to the bathroom usually
                remains open, this method would allow me to know if someone is
                in there.
              </p>
              <div className="flex justify-center">
                <Function
                  image={
                    <video
                      controls
                      src={
                        "https://s3.us-west-1.amazonaws.com/darrenau.com/S3/humidity.mp4"
                      }
                    />
                  }
                  caption={"Humidity Demo"}
                ></Function>
              </div>
              <p>
                There is a humidity sensor as well that will go up if the
                humidity goes up, which can be used to extrapolate if someone is
                in the shower, letting me know that they will probably be in
                there for a while.
              </p>
              <div className="flex justify-center">
                <Function
                  image={
                    <video
                      controls
                      src={
                        "https://s3.us-west-1.amazonaws.com/darrenau.com/S3/light.mp4"
                      }
                    />
                  }
                  caption={"Humidity Demo"}
                ></Function>
              </div>
              <p>
                There is also a light switch that can be controlled from the
                webserver, allowing me to communicate with my roommate as an
                indicator if I would like to use the restroom.
              </p>
              <p>
                Sadly, UT wifi doesn't allow for hosting a webserver so the
                project was never utilized, but it remained a good learning
                experience for arduino and breadboarding.
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Projects;
