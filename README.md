# Real Things

Corporate Driver Management System

## DB Structure

```sh
.
└── user1
    └── drowsiness
        ├── EAR
        ├── frequentYawns
        └── status
    └── profinity
    └── violence
```

## About Real Things



## The Problem it solves

Safety within cabs is a major concern these days. Many cases prove that even the big cab providing companies like Ola and Uber are not at all a completely safe option. Research shows that in previous five years there have been many cases in the past that ruined many trips for various people who chose to travel in cabs like Uber and Ola, instead of other modes of transportation.

Applications involving SOS signals are launched in market regularly, but most of them fail to work in the time of real emergency, the only reason being that at time of emergency, an individual does not get enough time to actually trigger that SOS signal. 

The best solution to this problem is to completely automate the task completely by prior detection of problem, and even in case of problems, removing the human part completely. 

We addressed the problems like accidents due to carelessnes of driver,quarrals or fights between driver and passenger, and came up with a product which will solve all these along with ensuring women safety.

## Challenges we ran into

The initial stage was to detect drowsiness of a person, which took time to setup because of the constraints like for how much time the eyes should be open to classifying the person as drowsy. The yawn detection part has been a challenge too because of false positives by the bottom of face. We trained models a few times to get better results each time

Violence detection was a problem faced too. There are several cases where it would fail to detect violence in a frame. With  higher amount of steps , we have increased the accuracy of its detection.

The final part was to make a profanity detection model, but we failed to do it because of less time. Its training takes 4hrs on a 1080ti GPU, and so with limited hardware, we couldn't implement it in time. We are open to adding it in future.

## Instructions to execute the WebApp

```
npm i
npm start
```
## Running the python script for CV

The backend files can be found in the PyCode folder. The main script is "
drow.py"

The following command line arguments are available :
1. --webcam (int) : Provide source of an external camera device
2. --user (str) : Provide user ID which corressponds to database. By default its "test" user
3. --violence (int) : Enable violence detection. 

The model files have been included. The graph "retrained_graph_yawn.pb" and its label has been provided, with which we can detect yawns instead of violence (update required)

Requirements : scipy, imutils, numpy, dlib, opencv, pyrebase, python3.5 or later.