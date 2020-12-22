---
title: "On Hide Events"
metaTitle: "UI Popups and Toast: On Hide Events"
metaDescription: "Learn how to use Popups to display simple notifications in the center of the screen with optional, OK or Yes/No buttons. Use Toast to display notifications at the bottom of the screen."
---

##### Tutorial Overview:
 -  Create Popups to display notifications in the center of the screen.
 -  Receive player input with optional OK or Yes/No buttons.
 -  Use Toast to display notifications at the bottom of the screen.


# The On Hide node

![The On Hide Node](../images/01/popups-08.png "The On Hide Node")

1. The **On Hide** node has one input field, **Source**, and EntityID. This should be set to the entity that is creating Popups.

2. The **On Hide** node has two return values.

- The **Popup ID** of the Popup that was hidden.
- The **Button Pressed** return value is an integer with the values 0 or 1.

|Button Pressed Return Value|Button Pressed|
|----|----|
|0|OK and Yes|
|1|No|

# Receive Player Input

3. In the Popup Script Canvas graph remove the **Duration** and **Hide Popup** nodes. Add an **On Hide** node. This node doesn't need an input connection.

4. To see what button was pressed when a Popup was hidden, connect an **Equal To (==)** node to **On Hide**'s output.

>Note: The **Equal To (==)** node can be found in the Node Palette under the categories **Math > Comparisons**.

5. Connect **Button Pressed** to **Value A**. Set **Value B** to 0. If the Ok or Yes buttons are pressed, **Equal To (==)** will return True. If the No button is pressed **Equal To (==)** will return False.

6. Add two **Print** nodes after **True** and **False** and change the values of **Print** to 'Yes Pressed' and 'No Pressed' respectively.

7. Finally, set the **Button Kind** of the **Show Popup** node to 1. This will display Yes and No buttons on the Popup.

<a href="../images/01/popups-09.png">
  <img align="center" src="../images/01/popups-09.png"/>
</a>

> Step 7: The completed Script Canvas Graph

# Printing Player Input to the Console

8. Save the graph. Ensure the console is open in the editor, or press tilde \` to toggle the console open while the level is running. Play the level and press Yes or No on the Popup. The **Print** nodes should display which button was pressed in the console.

![Step 8: Console output](../images/01/popups-10.png "Step 8: Console output")

9. In the next section of this tutorial, you will replace the **Print** nodes with Toast!
