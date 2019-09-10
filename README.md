# Keptn Integration
This is part of the xMatters Labs Steps awesome listing. For others, see [here](https://github.com/xmatters/xMatters-Labs-Flow-Steps).

This integration with Keptn allows for notifications to problems and evaluation done events. 

This document details how to install and use this integration. 

---------

<kbd>
<img src="https://github.com/xmatters/xMatters-Labs/raw/master/media/disclaimer.png">
</kbd>

---------
# Pre-Requisites
* xMatters account - If you don't have one, [get one](https://www.xmatters.com)!
* GKE/AKS/OpenShift application with keptn install

# Files
* [Keptn.zip](./Keptn.zip) - This is the Communication Plan to import into your xMatters instance

# Introduction - How it works
Keptn easily automates continuous delivery for cloud-native applications. An integration with xMatters makes this delivery even more seamless and allows for quick issue identification in order to  maximize keptn's power.

# Installation

## Import the Comm Plan

1. Download the [Keptn.zip](./Keptn.zip) file onto your local computer
2. Navigate to the Developer tab in your xMatters instance
3. Import the [Keptn.zip](./Keptn.zip) Communication Plan by clicking **Import Plan** and selecting `Keptn.zip`

## Getting the URLs
To set up the keptn service, you will need two URLS. To find these, navigate to the Keptn Comm Plan, then click on Edit > Flows. To get the problem URL, click on the flow for the Problem flow, then double click the inbound trigger, the trigger URL will be at the bottom of the settings tab. To get the Evaluation Done URL, click on the flow for the Evaluation Done flow, then double click the inbound trigger, the trigger URL will be at the bottom of the settings tab. 

## Keptn setup
In order for keptn to send events to xMatters, you must install the xMatters service into your cluster with keptn installed. To do so, you will need the Problem URL and the Evaluation Done URL, then follow the steps here: https://github.com/keptn-contrib/keptn-xmatters-service
Make sure you follow the steps on the GitHub repo to properly set up service. 

# Testing
To test the step, run `keptn send event --file=problem_example.json`, if the step is working correctly, you should get a Problem event created in xMatters.

# Troubleshooting
If the step is not working properly, there are a few places where it could be going wrong.
1. Check that you added the correct xMatters URLs into the `config/service.yaml` file
2. Double check that you have the triggers set up correctly.
3. Check the activity log in xMatters, by going to the Flow Designer, then clicking on **Activity** in the top righthand corner. Click on the Keptn step, then click on **Log** for further info.
