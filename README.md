
# CosmoComm

## Summary:
The Supreme Galactic Leader, Groshnok has commissioned an application that enables interstellar communication between planets across the galaxy. This application, known as CosmoComm, will allow users to send and receive messages across vast distances, ensuring efficient and effective communication among the stars. The Supreme Galactic Leader requires a robust system capable of handling asynchronous operations, dynamic state management, and a user-friendly interface for message composition and transmission.

This project is for those who wish to learn the basics of working with forms, and deepen their knowledge of async operations and state management, in the context of an interstellar communications application commissioned by the Supreme Galactic Leader.

1. Form fields
2. Collecting user input
3. `fetch()`
4. Asynchronous state management

## Features

### User can choose a sender

**Given** a planet wants to send an interstellar message<br/>
**When** the CosmoComm app loads<br/>
**Then** there should be a select element that displays all available planets to choose as the author

### User can choose a recipient

**Given** a planet wants to send an interstellar message<br/>
**When** the CosmoComm app loads<br/>
**Then** there should be a select element that displays all available planets to choose as the recipient

### User can choose a message topic

**Given** a planet wants to send an interstellar message<br/>
**When** the CosmoComm app loads<br/>
**Then** there should be a group of radio buttons for the user to choose a topic

### User can enter the message body

**Given** a planet wants to send an interstellar message<br/>
**When** the CosmoComm app loads<br/>
**Then** there should be a textarea element in which the user can type the message body

### User can send the message

**Given** a planet wants to send an interstellar message<br/>
**When** the CosmoComm app loads<br/>
**Then** there should be a button labeled Transmit at the bottom of the form<br/>

---

**Given** a planet has composed an interstellar message<br/>
**When** the planet clicks the Transmit button<br/>
**Then** the message should be saved in the API database<br/>
**And** the new message should immediately be rendered in the list of messages below the form<br/>
**And** the rendered message should display the following information

* date sent
* sender
* recipient
* topic of the message
* message body

## Optional Advanced Challenge

Think you have a strong understanding of asynchronous operations using `fetch()`? In the mood to stretch your coding skills and take on a challenge? Once you complete the assessment given the features listed above, you have the option of taking on this challenge.

### User can choose multiple message topics

**Given** a planet wants to send an interstellar message<br/>
**When** the CosmoComm app loads<br/>
**Then** there should be a group of checkboxes for the user to choose one, or more, topics

### User can send a message with multiple topics

**Given** a planet has composed an interstellar message<br/>
**When** the user clicks the Transmit button<br/>
**Then** the message should be saved in the API database<br/>
**And** the new message should immediately be rendered in the list of messages below the form<br/>
**And** the rendered message should display the following information

* date sent
* sender
* recipient
* all topics chosen
* message body
