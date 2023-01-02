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
          image={require("../../images/TVC/TREL.png")}
          description="Gimbal mechanism for rocket engine"
          projectDuration={"Jan 2022 - Present"}
          toolsUsed={"Solidworks, Ansys, Arduino"}
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
                I'm particularly proud of this project because it was a project I was able to develop alone from the ground up with minimal guidance.
                For context, since the start of our lab, the primary control system has been actuated fins (fins that rotate to use aerodynamic forces generated from the change in angle of attack to induce torque control over the vehicle). TVC was brought up as a concept as some feared the control authority (or lack thereof) of fins. However, as no development of TVC had been done, many were fearful of the affect to our launch timeline TVC would bring.

                Yet, through design iterations and development, I was eventually able to bring the system to a point where the majority of teams in the lab felt comfortable with it. As of September, it is our primary control system for Halcyon.
              </p>
              <p>
                The core design of TVC has remained the same throughout the project: three concentric rings, which rotate on different axis through electric linear actuators, allowing for pitch yaw rotation of the engine that is mounted to the inner most ring, thus enabling the engine to induce a consequent pitch and yaw torque command on our rocket. Other designs were considered but deemed to be too intrusive to the existing designs on the rocket.
              </p>
              <p>
                However, many some factors have changed throughout the development of the system.
                <ul>
                  <li>-most of these come from geometric design: changes that would optimize stiffness, mass, cost, and manufacturability</li>
                  <li>-better CAD practice: specifically using a 3d sketch that all geometry is created and mated off of, allowing for parameters within the assembly to be altered with a single variable change</li>
                </ul>
              </p>
              <p>
                <p class="font-bold">Other work that was required for the design</p>
                <ul>
                  <li>-Hand Calcs: basic solids and dynamics question to determine bolt max stress, required angular acceleration, etc</li>
                  <li>-FEA: to ensure components that don't fail</li>
                  <li>-Arduino breadboarding and programming: to test the movement of our 3d prototype. There were two circuitries created.
                    The 1st one is a linear actuator test where the speed of the linear actuator is dependent on the encoder position, modified by setting the PWM signal duty cycle. In the future, we would like the linear actuators to move to a commanded position, which would be done with positional feedback encoders that. As the current actautors don’t have this feature, this encoder integration allows for a rudimentary method to ensure the closed loop feedback would work (having linear actuator dependent on sensors).
                    The 2nd one is a gimbal range test. This is an open loop program that maps polar coordinates to cartesian. By varying the theta value as a function of time, it allows the actuators to control the system in a rotational motion.</li>
                  <li>-Forward kinematics calculator: used to determine the actuator lengths as a function of the desired gimbal angles. The system is deterministic, so while the math is not a simple trig function, each linear actuator length value can be mapped as a function of the gimbal angles. This will likely not be implemented for computational purposes (the small angle approximation will suffice), creating the mapping algorithm was good for educational purposes.</li>
                  <li>-Test Stand Design: this was accomplished by a team I oversaw. It involved creating a dynamic test stand capable of applying the simulated force of the engine without placing the system on the hotfire stand. It works with a high tension cable who's direction of pull is redirected with actuator.</li>
                </ul>
              </p>



              <div className="flex justify-center items-center ">
                <Function
                  image={
                    <video
                      controls
                      src={
                        "https://s3.us-west-1.amazonaws.com/darrenau.com/S3/TVC5.mp4"
                      }
                    />
                  }
                  caption={"Full Range Motion Gimbal"}
                ></Function>
                <Function
                  image={
                    <video
                      controls
                      src={
                        "https://s3.us-west-1.amazonaws.com/darrenau.com/S3/TVC6.mp4"
                      }
                    />
                  }
                  caption={"Linear Actuator Encoder Test"}
                ></Function>
              </div>
              <p>
                <a class="font-bold">The biggest problem</a> with the design thus far has been speccing the linear actuators. Bearing friction, tolerance stack up, rotational inertia, vibrations from engine, and pressurized line stiffness were factors I identified would contribute to the required force of the linear actuators, but having a proper account of each one seemed to be near impossible. We plan to resolve this by creating a temporary design with higher safety margin and fire this with the engine and collect data to determine the force requirements.
              </p>
              <p>
                Unfortunately due to ITAR regulations, most of the design work cannot
                be shared.
              </p>
              <p>
                {" "}
              </p>
              <p>
                There is still a lot of work to be done but I am very grateful
                for this opportunity and excited to watch this project progress.
              </p>
              <p className="text-sm">
                A couple of social media features:{" "}
                <a
                  href="https://www.linkedin.com/posts/sandybarker_design-testing-success-activity-6959970570717339649-lHtc?utm_source=linkedin_share&utm_medium=member_desktop_web/"
                  className=" text-blue-600 hover:text-purple-800"
                >
                  Linkedin
                </a>{" "}
                <a
                  href="https://www.instagram.com/p/CgulUspuFVK/"
                  className=" text-blue-600 hover:text-purple-800"
                >
                  Instagram
                </a>
              </p>
              <p className="text-xs">Progress as of December 2022</p>
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
            "lathe, manual mill, tig welder, 3d printer, laser cutter, drop saw, hand tools, assisted cnc mill operation"
          }
          modalHtml={
            <div className="space-y-4 flex flex-col">
              <p>
                I am a member of our school’s {" "}
                <a
                  href="https://www.longhornracing.org/electric-vehicle"
                  className=" text-blue-600 hover:text-purple-800"
                >
                  Longhorn Racing Electric Team
                </a>
                {" "} , where our goal is to design a Formula styled car to compete in in a series of events.
              </p>
              <p>Due to the time I spend on TREL, my involvement in LHRE is less intense. As a general member (dynamics last year, powertrain this year), most of my involvement is helping with miscellaneous tasks, from design/packaging help, FEA analysis, debugging and developing our simulation, creating drawings, machining components, and more. While I don’t have a specific project I have fully immersed myself in, assisting small subtasks here and there has allowed me to become more well-rounded in the skills I gain. It has also allowed me to become familiar with the most of the design considerations and justifications around the vehicle.</p>
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
                    caption={
                      "Graphs of the ID and OD: X is time in seconds and Y is diameter in inches"
                    }
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
          projectName={"Website"}
          image={require("../../images/Website/Website.png")}
          description="Website for Personal Portfolio"
          projectDuration={"May 2022"}
          toolsUsed={"Javascript, React, Tailwind CSS"}
          modalHtml={
            <div className="space-y-4 flex flex-col">
              <p> I think most of it speaks for itself :)</p>
              <p>
                Written with Javasciprt, TailwindCSS, ReactJS, and hosted on AWS.
              </p>
              <p>
                {" "}
                <a
                  href="https://github.com/darrenau03/amazon"
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
          projectName={"Gas Bot"}
          image={require("../../images/Gas Bot/Gas Bot.png")}
          description="Gas Bot to Determine Cheapest Gas"
          projectDuration={"July 2022"}
          toolsUsed={"Python, Selenium, Google Maps API, MongoDB"}
          modalHtml={
            <div className="space-y-4 flex flex-col">
              <p>
                During the Spring semester of my freshman year, before one of
                our outings, my friend told our group that he would be driving
                20 minutes to get gas at a cheaper station. Thus began a
                discussion on how much cheaper would gas have to be to make the
                journey worth it. Inspired by that conversation, I decided to
                create a bot that would perform that calculation.
              </p>
              <p>
                It works by taking the 10 cheapest gas stations in Austin from
                Gas Buddy, calculates the distance/time to drive there from the
                current location with google maps API, and saves all the data
                into a MongoDB. It then request for the user to input their
                gallons needed as well as how much their time costs. Using all
                these parameters, it spits out ranking of the 10 stations from
                least to most "expensive", with time it takes to get there as a
                consideration.
              </p>
              <div className="flex justify-center">
                <Function
                  image={
                    <video
                      controls
                      src={
                        "https://s3.us-west-1.amazonaws.com/darrenau.com/S3/Gas Bot.mp4"
                      }
                    />
                  }
                  caption={"WebScrap/Data Save"}
                ></Function>
                <Function
                  image={
                    <video
                      controls
                      src={
                        "https://s3.us-west-1.amazonaws.com/darrenau.com/S3/Gas Bot2.mp4"
                      }
                    />
                  }
                  caption={"UserInput/Calculations"}
                ></Function>
              </div>
            </div>
          }
        />

        {/* <ModalTile
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
        /> */}

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
          projectDuration={"June 2022"}
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
