---
title: "Create a Raycast Function"
metaTitle: "Raycasting to the Cursor: Create a function to Raycast in Script Canvas"
metaDescription: "Learn how to select objects in your game using the mouse cursor.  Filter the objects with Collision Groups"
---

##### Tutorial Overview:
-  Create a reusable function to Raycast to the mouse cursor.
-  Extend the function to draw a visible ray on-screen.
-  Create a Script Canvas graph using the Raycast function.
-  Extend the graph to select different kinds of objects in your game based on PhysX Collision Groups.

# Level Setup

1. In your level, create a new entity and add a Script Canvas component to it.
2. In the script canvas component, press ![](../images/icons/editor/open.png) 'Open in Script Canvas Editor' to create a new Script Canvas graph for the entity.

# Create the Script Canvas Graph

<a href="../images/02/rc-01.png" target="_blank">
  <img align="center" src="../images/02/rc-01.png"/>
</a>

>  The completed Script Canvas Graph

# Graph Variables

|Variable Name|Variable Type|Default Value|Scope|
|-------------|-------------|-------------|-----|
|Camera|Entity ID||In|
|Collision Group|String|Default|In|
|Raycast Action Name|String||In|
|Current Toast ID|Number|-|Local|

# How it Works

After the entity is activated, the **Increment Visible Counter** node from the UI Cursor category displays the mouse cursor on screen.  **Input Handler** will listen for an input event set up on the entity's Input component.  The **Raycast Action Name** input should match the event name set in the Input Component's event bindings.  The **Camera** and **Collision Group** inputs are passed to the raycast function.  If a valid entity was hit with the raycast the function will trigger the node's Out slot.  You need a **Time Delay** node set to 1 tick before any of the function's variables are accessible.  For this example, the **Entity ID** is used to get the hit entity's name.  Finally the **clear-and-display-toast** function found in ![Popups and Toast: Examples](01-popups/01-05-usage) displays the entity's name in a Toast notification in the bottom right corner of the screen.

# Exposed Variables on the Script Canvas Component

![Script Canvas Component with completed graph](../images/02/rc-05.png "Script Canvas Component with completed graph")
>  The Input Variables that are exposed from the graph to the SC Component in the editor.

# How it Works

The graph uses the **Ordered Sequencer** from the Logic category to divide the function into four steps **Out 0** - **Out 3**.  **Out 0** gets the world translation of the **Camera** entity and also gets the screen's height in pixels, this is needed for the next step.

In **Out 1** we use the **Get Position** and **UnprojectViewportToWorldDIrection** nodes.  While both nodes use a 2-dimensional coordinate system measured in pixels, the systems are not centered at the same origin.  This step converts the cursor's coordinates.  **UnprojectViewportToWorldDIrection** returns the ray (normalized) that will be used for the raycast.

In **Out 2** the raycast is performed using the values that were supplied as inputs.  If the **Draw Raycast?** input was set to **True** the rest of **Out 2** is executed.

Finally, **Out 3** checks if a valid entity was hit during the raycast.  If the check succeeds, then the function is allowed to return the output values.


3. Open the Node Palette ( Hotkey: Ctrl+Shift+L ) and add the **On Entity Activated**  node to the graph. Using this node to start the graph will ensure that your entity is ready to interact with.

>Note: The **On Entity Activated** node can be found in the Node Palette under the categories **Entity > Game Entity**.

4. Connect a **Show Popup** node to the output of **On Entity Activated**.

# The Show Popup Node

![The Show Popup Node](../images/01/popups-03.png "The Show Popup Node")

5. The **Show Popup** node has two input fields.

- The **Message** field requires a string input, this is the text the Popup displays on-screen.
- The **Button Kind** field requires an integer input. The three acceptable values are 0,1,2.

|Button Kind|Buttons Displayed|Popup closes on Button Click?|
|----|----|----|
|0|OK|Yes|
|1|Yes & No|Yes|
|2|**None**|**No**|

Note: With Button Kind 2 selected, the Popup will remain on-screen until it is hidden with the **Hide Popup** node.

6. The **Show Popup** node has one return value, **Popup ID**, an integer. The **Popup ID** is randomly generated. If you need to hide a Popup, or keep track of button clicks from multiple Popups, you need the **Popup ID**.

# Display a Popup

7. In the open Script Canvas graph, type a message to display on-screen in the **Message** field. Set the **Button Kind** to **0**, this will display an OK button on this Popup.

8. Save the graph ( Hotkey: Ctrl+S ) and close or minimize the Script Canvas editor.

![Step 8: Completed Script Canvas Graph](../images/01/popups-04.png "Step 8: Completed Script Canvas Graph")
> Step 8: The completed Script Canvas Graph

9. Check that the graph has been loaded into the entity's Script Canvas component. If the **Script Canvas Asset** field is empty, press ![](../images/icons/editor/tree.png) 'Pick Script Canvas' and select the graph you created.

10. Save the level ( Hotkey: Ctrl+S ). Play the level ( Hotkey: Ctrl+G ).

11. Your message should display on-screen in a Popup with the rest of the screen dimmed. A cursor is automatically shown, and you can click the OK button to close the Popup. The cursor is hidden after the Popup closes.

![Step 11: Playing the level](../images/01/popups-05.png "Step 11: Playing the level")
