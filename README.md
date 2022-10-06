# Run these commands in the terminal to run the app on your local environment

git clone git clone https://github.com/MaliRosen/Currency-Converter.git

npm install

npm start

# or if you use yarn as package manager

git clone https://github.com/MaliRosen/Currency-Converter.git

yarn

yarn start

# Development server
Run npm start or yarn start for a dev server to initialize. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

# 

The currency conversion project has a Page with including Alert Component, Header Component, - Not Found Component, Wildcard Redirection Component, 404 Page Converter Component and History Component.

In case of navigating to a page which doesn't exist in the app, a wildcard route (404) is integrated to the project. It redirects users to the Not Found page.

Used localStorage to store user's currency exchanges with a key:value pair namely exchangeRates and an array of exchanged currency information objects. Also, localStorage used to store token.

Whenever a user enters to the Converter page, an asynchronous HTTP GET request runs for https://api.exchangerate.host/latest?base=USD API.

User can convert between selected currencies with the defined amount.

Each conversion immediately goes to the Exchange History datatable with the exact time of the execution.

In Exchange History field there is Duration select box which user can select the defined time intervals. Under the Duration select box, there are two datatable as well. First one includes Date datatable -execution date and time- and the second one includes Exchange Rate datatable -statistics of the conversions in selected time intervals-.

On History page user can see the previous currency exchanges on datatable with the amount of the executions. User can Delete the selected item of the datatable or can click to View button to create previous exchange scenario on the Converter page.

App designed  of the Google
 Material Design principles by the power of the Angular Material.
