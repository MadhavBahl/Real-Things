# Real Things

This repository contains the code for InOut project, "Real Things"

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

# Running Backend
The backend files can be found in the PyCode folder. The main script is "
drow.py"

The following command line arguments are available :
1. --webcam (int) : Provide source of an external camera device
2. --user (str) : Provide user ID which corressponds to database. By default its "test" user
3. --violence (int) : Enable violence detection. 

The model files have been included. The graph "retrained_graph_yawn.pb" and its label has been provided, with which we can detect yawns instead of violence (update required)

Requirements : scipy, imutils, numpy, dlib, opencv, pyrebase, python3.5 or later.