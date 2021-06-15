REACT Portal Starter Kit

---

Install and run locally.
- clone the project
- npm run install
- npm run dev

---

Create your own project

- To create your own project, replace to yourProjectName (CASE SENSITIVE) all occurrences of Starter-Template-UI and portalstartertemplate.

---

Create an Openshift pipeline

OpenShift Container Platform — an on-premises platform as a service built around Docker containers orchestrated and managed by Kubernetes on a foundation of Red Hat Enterprise Linux.

Git

- Before starting, make sure that your project is already pushed to the repository
- In the openshift-template.yml file, update all occurrences of the repository to yours project repository, there will be a few occurrences:
  type: Git
  git:
  uri: ssh://tfs.tsl.enterprise.com:22/tfs/enterprise/BT-GIT/\_git/CustOM-Starter-Template-UI
  ref: \${BRANCH}
  contextDir: ""

Login to the openshift terminal

- Download the Openshift Client Tools from https://github.com/openshift/origin/releases
- Extract oc.exe from the downloaded zip file, copy it to any folder in your machine and add it to the %PATH%
- go to https://your.openshift.instance.enterprise.com/console/
- Click on the Question Mark (?) menu, and select "Command line tools"
- Copy the session token by clicking on the rightmost icon, and paste it to your local terminal
- Press enter to login to openshift

Create pipeline

- Go to the openshift directory and run the commands below.
  openshift> oc apply -f openshift-template.yml
  openshift> oc process portalstartertemplate-ui-pipeline BRANCH=master | oc apply -f -
- change the shell file permissions to allow the pipeline to execute them
  openshif> git update-index --chmod=+x openshift-template.yml run-apply-templates.sh run-deploy.sh run-deploy-prod.sh run-test.sh

Run pipeline

- Go to the openshift console in the browser, select Builds/Pipeline
- Find yourproject-pipeline and click on "Start Pipeline"


For the JWT, it is recommended to create your own pair of keys, and replace them at:

- ui/src/servers/jwt-private.pem
- ui/src/servers/jwt-public.pem
- bff/src/middlewares/jwt-public.pem
