# CKEditor5 Custom Plugin Integration in Angular

This repository demonstrates the integration of a custom CKEditor5 plugin into an Angular application using the "new installation methods." However, an issue arises when attempting to integrate the plugin as a local file reference, resulting in a "duplicated modules error" upon restarting the Angular application.

## Repository Structure

The repository is organized into two main subfolders:

- **/angular**: This folder contains the Angular application where CKEditor5 is integrated.
- **/ckeditor5-testplugin**: This folder contains the custom CKEditor5 plugin that we are trying to integrate into the Angular application.

## Installation and Setup

### Step 1: Install Dependencies

To set up the project, you need to install the dependencies in both subfolders. Start with the CKEditor5 plugin repository:

1. Navigate to the `ckeditor5-testplugin` folder:
   ```bash cd ckeditor5-testplugin```
2. Install the dependencies:
   ```bash npm install```

Next, install the dependencies for the Angular application:

1. Navigate to the `angular` folder:
   ```bash
   cd ../angular
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

3. Install the custom plugin
   ```bash
   npm install ../ckeditor5-testplugin
   ```

### Step 2: Run the Angular Application

After installing the dependencies, you can run the Angular application:

1. While in the `angular` folder, start the Angular development server:
   ```bash
   ng serve
   ```

At this point, the application might run without any issues, and the CKEditor5 custom plugin can be integrated successfully. 
If  the Angular development server is stopped and then restarted (e.g., by shutting down and running `ng serve` again), a "duplicated modules error" may occur.
