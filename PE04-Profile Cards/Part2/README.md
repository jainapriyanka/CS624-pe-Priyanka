# CS624-Fall-2023-HOS

**Input:**
The program receives input in the form of an array named 'data', each element of which represents a profile card with properties such as 'image', 'name', 'occupation', 'description', and 'showThumbnail'. The 'showThumbnail' property determines whether to display the card as a thumbnail.

**Process:**
The core logic resides in the 'App' component, managing the state ('data') and handling the toggle of 'showThumbnail' on card press. The 'ProfileCard' component, a functional component, is responsible for rendering individual profile cards with a touchable highlight feature. The styling is defined using React Native's StyleSheet, with flexibility for different platforms.

**Output:**
The output is a visually appealing list of profile cards displayed within a 'WrapContainer'. The 'WrapContainer' is styled to create a column layout. The 'ProfileCard' components are dynamically generated based on the data array, and the user can toggle the thumbnail view by pressing each card.
