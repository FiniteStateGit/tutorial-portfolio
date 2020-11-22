---
title: "Inventory Canvas: Hotbar and Buttons"
metaTitle: "Build UIs with Drag and Drop, Stacking Functionality"
metaDescription: "Create UI slices for drag and drop stacking and non-stacking elements.  Create an interactive UI canvas with a hotbar and inventory."
---

##### Tutorial Overview:
-  Import and configure a spritesheet.
-  Create drop target, stacking and non-stacking draggable UI slices.
-  Create an interactive UI canvas with draggables.

# Create the UI Canvas: Hotbar

With the completed UI slices, we can add some common game UI elements that use draggables.  A Hotbar for abilities, consumables and equipment.  A set of spaces to hold bags that can be opened and closed.  We'll also create the starting point for a character or equipment screen.

1. In the 'Hierarchy' panel of the UI editor, right-click and add a new empty element to the canvas.  Rename it 'Main'.  In the **Transform2D** component of Main set the Anchors to *fill all space*.

2. Add a Droptarget-Container slice to the canvas if there isn't one already. Rename it 'Hotbar'.  Rename the child element **Droptarget-Slice** to 'HotbarSlot1'.

3. In the 'Hierarchy' panel, drag the Hotbar and drop it onto Main, to make Hotbar the child of Main.

4. Select **HotbarSlot1**, right-click and copy (Hotkey: Ctrl+c).  Select the **Hotbar** and right-click *Paste as child* (Hotkey: Ctrl+Shift+v). Do this until you have 10 Hotbar slots.

5. In the **Transform2D** component of Hotbar, set the anchor to *bottom* and change the Width and Height to fit all the Hotbar slots in one row. The Width should be *515*, Height *55*.

6. Now is a good time add a stacking and non-stacking draggable slice to a few hotbar slots.  You can change the Image Index of the draggables to set sprite that is displayed.


<a href="../images/03/drag-10.png" target="_blank">
  <img align="center" src="../images/03/drag-10.png"/>
</a>

> Step 6. The Hotbar Element Configuration

# Character and BagSlot Buttons

7. Add two new Droptarget-Container slices and Parent them to Main.  Rename the first container 'Tabs', rename the child DropTarget 'CharacterTab'.  Rename the second container 'BagSlots', rename the child DropTarget 'BagSlot1'.

8. Select Tabs and set the anchor to *bottom-left*.  Select BagSlots and set the anchor to *bottom-right*, set the Width Offset of BagSlots' **Transform2D** component to *160*.

9. With *both* CharacterTab and BagSlot1 selected, Delete the **DropTarget** and **Lua Script** components. Add a **Button** component.  In the **Image** component, change the Sprite path to load *'basic-sprites.png'*.

10. Select CharacterTab and set the **Image** index to *11*, the helmet sprite.

11. Select BagSlot1, set the **Image** Alpha parameter to *.5* to signify that the BagSlot is empty, set the **Image** Index parameter to *1*, the closed bag sprite.

12. In the 'Hierarchy' panel, select **BagSlot1**, right-click and copy (Hotkey: Ctrl+c).  Select the **BagSlots** and right-click *Paste as child* (Hotkey: Ctrl+Shift+v). Do this until you have 3 BagSlots.  You may want to reorder or rename the BagSlots to have BagSlot1 on the far-right of the screen, alternatively, you change the horizontal ordering of BagSlots' **LayoutGrid** component to *Right to left*.

13. For this tutorial, BagSlot2 and BagSlot3 will be empty, but BagSlot1 will contain a bag.  Change the **Image** Alpha parameter of **BagSlot1** back to *1.0*.  Set the **Image** Index to *2*, the open bag sprite.  This bag will be open by default.

<a href="../images/03/drag-11.png" target="_blank">
  <img align="center" src="../images/03/drag-11.png"/>
</a>

> Step 13. The BagSlot1 Element Configuration
