#!/bin/bash
cd /home/kavia/workspace/code-generation/red-and-black-tic-tac-toe-292610-292619/tic_tac_toe_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

