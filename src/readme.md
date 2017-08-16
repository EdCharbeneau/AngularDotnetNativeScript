# Code Sharing with ASP.NET Core and NativeScript using Angular

This project contains a sample application showing how to share code between an ASP.NET Core application and NativeScript using Angular.

## Using this project

This is an experimental project that is not currently setup for ease of use. It will require some manual operation to get started, be prepared for some hacking.

Requires ASP.NET Core 2 and NativeScript installed on your machine.

1. Restore all dependencies. From Visual Studio right click on each solution's dependency nodes for NPM and NuGet (if applicable), and choose restore packages. Using the commandline run `$ npm install` and `dotnet restore`
2. Because the NativeScript application is a native mobile app, it cannot make calls to `localhost` the IP Address of the machine will need to be used to host the ASP.NET Core application. In addition, the port ASP.NET Core is running on must be open for the native mobile application to reach the API calls. IP and Port settings can be found in the properties\launchSettings.json. Use the `WebServerClient` profile for your host ip:port. Next, the applicaiton code in `WebServerClient/ClientApp/sharedLibs/WeatherService.ts` will need to be modified with your ip:port. After the correct ip:port is applied, run the `sharedLibs` script for the `NativeApplication` either by using Visual Studio's task runner or at the commandline `$ npm run sharedLibs`. This will copy any shared code from the `WebServerClient` to `NativeApplication`. 
3. Running the applicaiton. There are two parts to the application, the WebServerClient solution contains both the Web API and Web Client application. To run the server and web app use the `run with debugging` option in Visual Studio using the `WebServerClient` profile, or from the commandline `$ dotnet run`. Next, start the NativeScript application by running the `livesync` task in the `NativeApplication`, use task runner or `$ npm run livesync`.  