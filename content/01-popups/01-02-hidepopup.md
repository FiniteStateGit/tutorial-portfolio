---
title: "Hide a Popup"
metaTitle: "UI Popups and Toast: Hide a Popup"
metaDescription: "Learn how to use Popups to display simple notifications in the center of the screen with optional, OK or Yes/No buttons.  Use Toast to display notifications at the bottom of the screen."
---

In this tutorial learn how to:

-  Create Popups to display notifications in the center of the screen.  
-  Receive player input with optional OK or Yes/No buttons.  
-  Use Toast to display notifications at the bottom of the screen.   

# The Hide Popup Node

TODO IMG

1. The **Hide Popup** node has two input fields.

- The **Popup ID** field requires the ID **Show Popup** created for the Popup.    
- The **Button Pressed** field requires an integer input. The two acceptable values are 0,1.

|Button Pressed|Button to Simulate Pressing|
|----|----|
|0|OK and Yes|
|1|No|

2. The **Hide Popup** node has one return value, **Succeeded**, a boolean value.  **Succeeded** returns True when the **Hide Popup** node hides an active Popup.  If the **Popup ID** is not valid, or the Popup was already hidden, **Succeeded** returns False.

>Note: As of Lumberyard version 1.26 Popups hidden with the **Hide Popup** node are *not* handled by the **On Hide** event bus node.

# Hide a Popup after a Delay

3. Reopen the Popup script canvas graph.

4. Edit the **Show Popup** node, set the **Button Kind** to 2, no buttons will be displayed on this Popup.  If you played the level now, there would be no way to close the Popup.

5. Add a **Duration** node after **Show Popup**.  Set the duration to 3 seconds, enough time to read the message on the Popup.  

>Note: The **Duration** node can be found in the Node Palette under the category **Timing**

6. Add a **Hide Popup** node after **Duration**, connect it to the **Done** output of **Duration**, the **Out** output of **Duration** should be disconnected.  

7. Connect the **Popup ID** output from **Show Popup** to **Hide Popup**. Alternatively, save the **Popup ID** in the Variable Manager and use Variable References to set and get the **Popup ID**.

8. Save the graph and play the level.  The Popup should be hidden after 3 seconds.
