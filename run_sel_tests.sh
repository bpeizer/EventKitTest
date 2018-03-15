#!/bin/bash -ex
echo start

echo "\\/ \\/ \\/ CHECK FOR ENV VARS HERE \\/ \\/ \\/"
echo "$GEOAXIS_USERNAME"
echo "^  ^  ^  CHECK FOR ENV VARS HERE  ^  ^  ^"

pushd `dirname $0` > /dev/null
base=$(pwd -P)
popd > /dev/null

# Initialize "bigLatch".  If anything fails, this should be set to 1,
# so that the overall job exists with failure.
bigLatch=0
# Get the "spaces" environment variable, the spcae that the tests will be run against.
# If it is "test", that should mean that a change was made to the pztest-integration repo,
# and all spaces should be tested.


# Selenium Configurations:


echo "RUN TESTS ON CHROME"



		# Run the Firefox Selenium tests.
		FirefoxContainer="$(docker run -d -p 4444:4444 -p 5900:5900 -v /dev/shm:/dev/shm selenium/standalone-firefox-debug:3.11.0-antimony)"  
		npm testFirefox || { latch=1; }
		# Remember that there was an overall failure, if a single iteration has a failure.
		docker kill "${FirefoxContainer}"
		if [ "$latch" -eq "1" ]; then
			bigLatch=1
		fi
		# Run the Chrome Selenium tests.
		ChromeContainer="$(docker run -d -p 4444:4444 -p 5900:5900 -v /dev/shm:/dev/shm selenium/standalone-chrome-debug:3.11.0-antimony)"  
		npm testChrome || { latch=1; }
		docker kill "${ChromeContainer}"
		# Remember that there was an overall failure, if a single iteration has a failure.
		if [ "$latch" -eq "1" ]; then
			bigLatch=1
		fi


# Return an overall error if any collections failed.
exit $bigLatch