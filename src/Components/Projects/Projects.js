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
        Projects
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
              <div className="flex justify-center">
                <Function
                  image={
                    <img
                      src={require("../../images/TVC/Solidworks.png")}
                      alt={"Solidworks"}
                    />
                  }
                  caption={"CAD with Folders and equation driven mating"}
                ></Function>
              </div>
              <p>
                <p>2) Learning a bit of solids and dynamics</p> In order to
                perform hand calcs to spec the linear actuators, bearings,
                bolts, and to have a general understanding of what Ansys does.
                It required that I learn solids and dynamics, preparing me for
                these courses that I will be taking in Fall 2022.{" "}
              </p>
              <div className="flex justify-center">
                <Function
                  image={
                    <img
                      src={require("../../images/TVC/Hand Calcs.png")}
                      alt={"Hand Calcs"}
                    />
                  }
                  caption={
                    "Hand Calcs for Acceleration needed of Linear Actuators"
                  }
                />
              </div>
              <p>
                <p>3) Conducting Ansys/FEAs</p> While designing, I would also
                have to test the components in Ansys to ensure the stress from
                the engine would cause stress under the yield strength of the
                component.
              </p>
              <div className="flex justify-center">
                <Function
                  image={
                    <img
                      src={require("../../images/TVC/Ansys.png")}
                      alt={"Ansys"}
                    ></img>
                  }
                  caption={"FEA of Middle Ring"}
                ></Function>
              </div>
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
                    "https://s3.us-west-1.amazonaws.com/darrenau.com/images/FIRE/FIRE_Final.pdf"
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
                        "https://s3.us-west-1.amazonaws.com/darrenau.com/images/1DOF/1DOF.mp4"
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
                  "https://s3.us-west-1.amazonaws.com/darrenau.com/images/1DOF/1DOF.pdf"
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
                        "https://s3.us-west-1.amazonaws.com/darrenau.com/images/Connect4/C4.mp4"
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
                    "https://s3.us-west-1.amazonaws.com/darrenau.com/images/Monte+Carlo/Monte+Carlo.pdf"
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
                        "https://s3.us-west-1.amazonaws.com/darrenau.com/images/Web+Scrap/WS.mp4"
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
                        "https://s3.us-west-1.amazonaws.com/darrenau.com/images/Bathroom+Detector/detector.mp4"
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
                        "https://s3.us-west-1.amazonaws.com/darrenau.com/images/Bathroom+Detector/humidity.mp4"
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
                        "https://s3.us-west-1.amazonaws.com/darrenau.com/images/Bathroom+Detector/light.mp4"
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
