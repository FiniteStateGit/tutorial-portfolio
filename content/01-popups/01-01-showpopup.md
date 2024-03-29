---
title: "Display a Popup"
metaTitle: "UI Popups and Toast: Level Setup and Displaying a Popup"
metaDescription: "Learn how to use Popups to display simple notifications in the center of the screen with optional, OK or Yes/No buttons. Use Toast to display notifications at the bottom of the screen."
---

##### Tutorial Overview:
 -  Create Popups to display notifications in the center of the screen.
 -  Receive player input with optional OK or Yes/No buttons.
 -  Use Toast to display notifications at the bottom of the screen.

# Level Setup

1. In your level, create a new entity and add a Script Canvas component to it.
2. In the script canvas component, press ![](/images/icons/editor/open.png) 'Open in Script Canvas Editor' to create a new Script Canvas graph for the entity.

# Edit the SC graph

3. Open the Node Palette ( Hotkey: Ctrl+Shift+L ) and add the **On Entity Activated**  node to the graph. Using this node to start the graph will ensure that your entity is ready to interact with.

>Note: The **On Entity Activated** node can be found in the Node Palette under the categories **Entity > Game Entity**.

4. Connect a **Show Popup** node to the output of **On Entity Activated**.

# The Show Popup Node

![The Show Popup Node](/images/01/popups-03.png?raw=true "The Show Popup Node")

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

![Step 8: Completed Script Canvas Graph](/images/01/popups-04.png "Step 8: Completed Script Canvas Graph")
> Step 8: The completed Script Canvas graph

9. Check that the graph has been loaded into the entity's Script Canvas component. If the **Script Canvas Asset** field is empty, press ![](/images/icons/editor/tree.png) 'Pick Script Canvas' and select the graph you created.

10. Save the level ( Hotkey: Ctrl+S ). Play the level ( Hotkey: Ctrl+G ).

11. Your message should display on-screen in a Popup with the rest of the screen dimmed. A cursor is automatically shown, and you can click the OK button to close the Popup. The cursor is hidden after the Popup closes.

![Step 11: Playing the level](/images/01/popups-05.png "Step 11: Playing the level")
