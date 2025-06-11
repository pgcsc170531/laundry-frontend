# Laundry Management System

## Overview

The Laundry Management System is a web application designed to streamline the management of laundry services. It allows customers to register, manage their services, make payments, and track their laundry history. The application is built using Vue.js for the frontend, with Tailwind CSS for styling, and communicates with a Laravel API for backend functionality.

## Features

- **User Authentication**: Users can log in and register to access the system.
- **Customer Management**: Register new customers and generate unique identification tags for easy tracking.
- **Service Registration**: Register services for customers, including selecting items and calculating total charges.
- **Payment Management**: Handle payments for services, including generating payment receipts and tracking outstanding balances.
- **Service Collection Management**: Manage the collection of laundry items, marking them as collected and updating records accordingly.
- **Customer History Dashboard**: View a comprehensive history of services, payments, and collected items for each customer.
- **Reporting**: Generate reports on payments, services registered, and completed services.
- **Expense Management**: Register and manage expenses related to the laundry business.

## Project Structure

```
laundry-management-frontend
├── src
│   ├── assets
│   ├── components
│   │   ├── Auth
│   │   ├── Customer
│   │   ├── Service
│   │   ├── Payment
│   │   ├── Collection
│   │   ├── History
│   │   ├── Report
│   │   └── Expense
│   ├── layouts
│   ├── pages
│   ├── router
│   ├── store
│   ├── utils
│   ├── App.vue
│   └── main.js
├── public
│   └── index.html
├── tailwind.config.js
├── package.json
├── vite.config.js
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd laundry-management-frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure Tailwind CSS:
   Ensure that the `tailwind.config.js` file is set up according to your design requirements.

4. Run the application:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` (or the port specified in your configuration).

## Usage

- **Login/Registration**: Access the login and registration pages to create or access your account.
- **Customer Registration**: Use the customer form to register new customers and generate unique tags.
- **Service Registration**: Register services for customers by selecting items and calculating charges.
- **Payment Management**: Process payments and view payment reports.
- **Service Collection**: Manage the collection of laundry items and update their status.
- **Customer History**: View the history of services and payments for each customer.
- **Reporting**: Generate various reports for analysis and management.
- **Expense Management**: Track and manage business expenses.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.