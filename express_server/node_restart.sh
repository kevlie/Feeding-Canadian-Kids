#!/bin/bash

echo CHECKING EXPRESS SERVER STATUS
if [ $(pgrep -c "npm") -lt 2 ]
then
	echo EXPRESS SERVER DOWN RESTARTING
	eval "npm start"
fi
