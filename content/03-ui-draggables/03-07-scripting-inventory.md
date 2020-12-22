---
title: "Scripting the Inventory"
metaTitle: "Build UIs with Drag and Drop, Stacking Functionality"
metaDescription: "Create UI slices for drag and drop stacking and non-stacking elements.  Create an interactive UI canvas with a hotbar and inventory."
---

##### Tutorial Overview:
-  Import and configure a spritesheet.
-  Create drop target, stacking and non-stacking draggable UI slices.
-  Create an interactive UI canvas with draggables.

# Create Input Bindings

We only need one input binding 'B' in order to toggle opening and closing all of the bags.  When a character screen is added to the canvas, it is ready to be toggled open and closed too, so 'C' will also be set as an input so it is ready to go.  If you wanted to add Hotkeys for toggling open specific bags, feel free to add input bindings for those, in the Script Canvas graph that follows, the CharacterTab shows how to set up a button and a Hotkey for the same effect.

Open the Asset Editor and create a new Input Bindings file.  Add two **Input Events**, with the **Event Names**, *B* and *C*.  Set the **Input Device Type** to *keyboard* for both events and select the appropriate **Input Name** for the event, *keyboard_key_alphanumeric_B* and *keyboard_key_alphanumeric_C*.  Save the file as *'ui-inventory.inputbindings'* in your project directory.

# Scripting the Inventory Canvas

Now we'll make a new Script Canvas graph to control the UI.  Open the Script Canvas Editor and create the following graph.  Save it as *'ui-inventory.scriptcanvas'* in your project directory when you are finished.

<a href="../images/03/sc-03.png">
  <img align="center" src="../images/03/sc-03.png"/>
</a>

>  The completed Script Canvas Graph

# Graph Variables

|Variable Name|Variable Type|Default Value|Display Order|Scope|
|-------------|-------------|-------------|-------------|-----|
|Bag1|EntityID|-|1|In|
|BagSlot1|EntityID|-|1|In|
|BagSlot1 Has Bag?|Boolean|True|1|Local|
|BagSlot1 Open?|Boolean|True|1|Local|
|Bag2|EntityID|-|2|In|
|BagSlot2|EntityID|-|2|In|
|BagSlot2 Has Bag?|Boolean|False|2|Local|
|BagSlot2 Open?|Boolean|False|2|Local|
|Bag3|EntityID|-|3|In|
|BagSlot3|EntityID|-|3|In|
|BagSlot3 Has Bag?|Boolean|False|3|Local|
|BagSlot3 Open?|Boolean|False|3|Local|
|Character Open?|Boolean|False|4|Local|
|Character Screen|EntityID|-|4|In|
|Character Tab|EntityID|-|4|In|
|Inventory Displayed?|Boolean|True|-|Local|


# How it Works

<a href="../images/03/sc-04.png">
  <img align="center" src="../images/03/sc-04.png"/>
</a>

>  A single button toggle

1. Let's look at the BagSlot1 button toggle first.  The other BagSlot buttons work the same way.  First the **UI Button Bus** is connected to the input variable **BagSlot1**.  If BagSlot1 is closed, Bag1 is enabled to make it visible on-screen and the Sprite image of BagSlot1 is set to the open bag sprite.  The local variable **BagSlot1 Open?** is set to *True*.
2. If the BagSlot1 button is clicked again, the **If** node will evaluate to true.  Bag1 is disabled to hide it, and the image of BagSlot1 is set to the closed bag sprite.  **BagSlot1 Open** is set to *False*.  The bag is ready to be opened again.

> Note: Bag1 is the only bag enabled in the UI by default, so the local variables for **BagSlot1 Has Bag?** and **BagSlot1 Open?** are set to *True* in the Script Canvas graph by default as well.  Because Bag1 is open the local variable **Inventory Displayed?** is set to *True*.

3. The node group for the Character Screen Toggle is very similar to the BagSlot toggles.  An **Any** node is used to accept two inputs.  Once a character screen is added to the canvas, either the CharacterTab button **On Button Click** action or Input Event **C** will make the screen open and close.
4. The final node group is triggered on Input Event **B**.
5. If *any* bag is open, **Inventory Displayed?** is *True*.  An Ordered Sequencer is used to check if a BagSlot has a bag. If there is an open bag, the bag is closed.
6. If all bags are currently closed, Input Event **B** will open every bag that is in a BagSlot.
7. Finally, **On Graph Start** the mouse cursor is made visible with the **Increment Visible Counter** node.


# Add the Script to the Canvas

After saving the Script Canvas graph reopen UI canvas you created.  

8. In the Hierarchy panel select the **Main** element and add a **Script Canvas** component.  Select *'ui-inventory.scriptcanvas'* as the asset.
9. Assign your input variables by clicking the picker icon and then left-clicking on the appropriate element in the Hierarchy panel.  If you have no character screen, it can be left unassigned in the Script Canvas component. Save your canvas.

![The Main Element's Script Canvas Configuration](../images/03/drag-14.png "The Main Element's Script Canvas Configuration")
> Step 9. The Main Element's Script Canvas Configuration

# Add the Input Bindings and Play the Level

In your level, select the *UI* entity and load the inputbindings file you created into the **Input** component.  Save and play the level.  Pressing the key 'B' will toggle Bag1 open and closed, as will pressing the BagSlot1 button.
