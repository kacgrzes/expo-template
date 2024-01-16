# Doppler configuration 🌈

<details>
    <summary>1.Sign up for the Doppler tool</summary>
a. Ideally, the account will be created by the client, the developer will be invited to participate in a workspace
</details>
<br>
<details>
    <summary>2.Create a new workspace for the project.</summary>
a. Open a dropdown of the workspaces list:

![Open dropdown](../static/doppler_open_dropdown.png)

b. Click <b>+Create workspace</b> button:
![Create workspace](../static/doppler_create_workspace.png)

c. Fill in the workspace name:
![Fill workspace name](../static/doppler_workspace_name.jpg)

d. Confirm <b>Create Workspace →</b> button
![Confirm workspace creation](../static/doppler_workspace_button.png)
</details>
<br>
<details>
    <summary>3.Create new project</summary>
a. In newly created workspace please click <b>Create Project</b> button

![Create project](../static/doppler_project_button.png)

b. Provide project name
![Project name](../static/doppler_project_name.png)

c. Confirm with <b>Create Project →</b> button
![Confirm project creation](../static/doppler_project_button.png)
</details>
<br>
<details>
    <summary>4.Adding environment variables.</summary>
a. Enter the projects tab, and select a newly created project

![Select project](../static/doppler_project_select.png)

b. Each project consist of three predefined environments - dev, stg and prd. <br>
Click each of them to enter environment variable page.
![Select environment](../static/doppler_envirnoments.png)

c. To add a new environment variable click on <b>Add first secret</b>
![Add first secret](../static/doppler_secret_add.png)

d. Enter the name of the environment variable name and its value into proper inputs: <br>
![Secret list](../static/doppler_secret_list.png)

You can add more environment variables by clicking  <b>+ Add Secret</b> button, and providing names and values.
![Add more secrets](../static/doppler_secret_more.png)

e. Confirm with <b>Save</b> button:
![Save secrets](../static/doppler_secrets_save.png)

g. Make sure that you have consistent data in each environment. In these step, you can copy newly created variable to the rest environments (select checkboxes). When selected the necessary environments confirm with <b>Save</b> button:
![Confirm save secrets](../static/doppler_secret_confirm.png)

</details>
<br>
<details>
    <summary>5.Implement Doppler tool onto the app.</summary>

Use gist to go through the implementation of Doppler tool in the app. <br>
In doppler_variables.sh file, please use generated Access Tokens from the above.
</details>
<br>
<details>
    <summary>6.Get Access from your code level</summary>

a. Enter <b>Access</b> tab:

![Access tab](../static/doppler_access_tab.png)

b. In the Access tab you should click on <b>+Generate</b> or <b>Generate Service Token</b> button:
![Generate token](../static/doppler_access_generate.png)

c. Provide some unique name to your personal access token:
![Token name](../static/doppler_access_name.png)

d. And next click <b>Generate Service Token→</b> button:
![Confirm generate token](../static/doppler_access_confirm.png)

e. Copy your Access Token (Service Token).

Save your Access Token, it will be used later to grant access from the code level.
If you do not copy the token, you will need to revoke that token and generate a new one.

Click <b>copy</b> button:
![Copy token](../static/doppler_access_copy.png)

f. To be able to use environment variables for different environments (qa/staging/production) you need to generate an access token for every environment.

</details>
<br>
<details>
    <summary>7.Check if everything works correctly.</summary>

In project dir terminal run:

```bash
yarn prepare:(qa/staging/production)
```

Choose the proper app version depending on the environment for which you want to generate env file.

<b>.env</b> file should be generated and consist of variables passed to Doppler, and some extra doppler variables as DOPPLER_CONFIG.

CONGRATULATION !! 🥳🥳 You have configured the Doppler tool for your project!
</details>