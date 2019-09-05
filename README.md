# keptn Inbound (from keptn) integration
This is part of the xMatters Labs Steps awesome listing. For others, see [here](https://github.com/xmatters/xMatters-Labs-Flow-Steps).

With this library, notification recipients can quickly build a Jenkins Pipeline.

This document details how to install and use this integration. 

---------

<kbd>
<img src="https://github.com/xmatters/xMatters-Labs/raw/master/media/disclaimer.png">
</kbd>

---------
# Pre-Requisites
* xMatters account - If you don't have one, [get one](https://www.xmatters.com)! 
* An xMatters Communication Plan with a created flow
* GKE/AKS/OpenShift application with keptn install

# Files
* [script-problem.js](./script-problem.js) - This is the script to paste into the `Inbound Problem from keptn` trigger
* [script-evaluation.js](./script-evaluation.js) - This is the script to paste into the `Inbound Evaluation Done from keptn` trigger
# Introduction - How it works
Keptn easily automates continuous delivery for cloud-native applications. An integration with xMatters makes this delivery even more seamless and allows for quick issue identification in order to  maximize keptn's power.

# Installation

## Problem Trigger
Note that this is an HTML Trigger and not a custom step

### Settings

| Option                     | Value                                   |
| ---------------------- | ------------------------------- |
| Name                      | Inbound Problem From Keptn |
| Description             | Notifies Receivers when a problem is received by keptn |
| Icon | [Keptn Icon](./keptn-icon.png) |
| Current State | Deployed |

### Outputs

| Name | 
| ------- |
| PID | 
| id | 
| impactedEntities |
| impactedEntity |
| problemDetails |
| problemDetailsHTML |
| problemID |
| problemTitle |
| shkeptncontext |
| source |
| state |
| time |

### Script
In the script tab, paste in [this](./script-problem.js) script, then click **Save**

## Evaluation Done Trigger
Note that this is an HTML Trigger and not a custom step

### Settings

| Option                     | Value                                   |
| ---------------------- | ------------------------------- |
| Name                      | Inbound Evaluation Done From Keptn |
| Description             | Notifies receivers when an Evaluation Done is received by keptn |
| Icon | [Keptn Icon](./keptn-icon.png) |
| Current State | Deployed |

### Outputs

| Name | 
| ------- |
| PID | 
| id | 
| impactedEntities |
| impactedEntity |
| problemDetails |
| problemID |
| problemTitle |
| shkeptncontext |
| source |
| state |
| time |

### Script
In the script tab, paste in [this](./script-evaldone.js) script, then click **Save**

## Flow setup
1. In your flow, click and drag the custom **Inbound Problem from Keptn** trigger into the flow
2. Under the tools tab, drag the **xMatters Create Event** into the flow, connecting it to the problem trigger.
3. Click and drag the custom **Inbound Evaluation Done from Keptn** trigger into the flow
4. Once again, drag the **xMatters Create Event** into the flow, connecting it to the evaluation done trigger.
5. In the flow, double click the problem trigger to edit it. Note the trigger URL, you will need it later to add into keptn.
6. Double click the evaluation done trigger and note this trigger URL, you will also need this to add into keptn.
7. TODO: add setup for event step and adding flow

## Keptn setup
In order for keptn to send events to xMatters, you must install the xMatters service into your cluster with keptn installed. To do so, follow the steps here: https://github.com/michael-sorenson/keptn-xmatters-service
Make sure you follow the steps on the GitHub repo to properly set up service. Note: you will need the Inbound URL for both the Problem trigger and the Evaluation Done trigger

# Testing
To test the step, run `keptn send event --file=problem_example.json`, if the step is working correctly, you should get a Problem event created in xMatters.

# Troubleshooting
If the step is not working properly, there are a few places where it could be going wrong.
1. Check that you added the correct xMatters URLs into the `config/service.yaml` file
2. Double check that you have the triggers set up correctly.
3. Check the activity log in xMatters, by going to the Flow Designer, then clicking on **Activity** in the top righthand corner. Click on the Keptn step, then click on **Log** for further info.
