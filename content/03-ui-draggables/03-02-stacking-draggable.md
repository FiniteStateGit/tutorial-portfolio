---
title: "Stacking Draggables"
metaTitle: "Build UIs with Drag and Drop, Stacking Functionality"
metaDescription: "Create UI slices for drag and drop stacking and non-stacking elements.  Create an interactive UI canvas with a hotbar and inventory."
---

##### Tutorial Overview:
-  Import and configure a spritesheet.
-  Create drop target, stacking and non-stacking draggable UI slices.
-  Create an interactive UI canvas with draggables.

# Create a Stacking Draggable UI Slice

1. The stacking version of the draggable will be based off of the slice you just made.  We'll add a box with text in the bottom-left corner of the Draggable, the text will display the quantity of items in a stack of draggables. In the UI editor, rename the Draggable-Sprite element *Draggable-Stacking-Sprite*.

2. With *both* Draggable-Stacking-Sprite and Image selected in the Hierarchy panel, right-click on Draggable-Stacking-Sprite and select *Make Detached Slice from Selected Entities...*.  Name the slice *'Draggable-Stacking-Sprite.slice'* and save it to your project directory.

3. Right-Click on the **Image** element and add a new Image element from the slice library, rename it *CounterBox*.  In the **Transform2D** component, set the anchor to the *bottom-left corner* and the Width Offset to *20* and Height Offset to *16*.

4. As before, set the Sprite path of the **Image** component of CounterBox to a sliced button or a color fill. It needs visual contrast from the background gray color, so the default (255,255,255) white color can remain.

![The CounterBox Element Configuration](../images/03/drag-06.png "The CounterBox Element Configuration")
> Step 4. The CounterBox Element Configuration

5. Right-Click on the **CounterBox** element and add a new Text element from the slice library, rename it *CounterText*.

6. In the **Text** component of CounterText, set the Text parameter to a number, ex: *4*.  Set color to (0,0,0) black to contrast with the CounterBox color and set Font Size to *16*.

7. In the **Transform2D** component of CounterText, set the anchors to be *centered*.  **XPos** and **YPos** Offsets set to *-1* should center the text in the CounterBox.

![The CounterText Element Configuration](../images/03/drag-07.png "The CounterText Element Configuration")
> Step 7. The CounterText Element Configuration

8. Select Draggable-Stacking-Sprite in the Hierarchy panel.  In the **Script Canvas** component, click the X icon to unload *'draggable.scriptcanvas'*.  Press ![](../images/icons/editor/open.png) 'Open in Script Canvas Editor' to create a new Script Canvas graph for the entity.  Save the blank Script Canvas graph as *'stacking-draggable.scriptcanvas'* and close the Script Canvas editor.  We can edit the graph later, *'stacking-draggable.scriptcanvas'* should be set as the **Script Canvas Asset** in the **Script Canvas** component.

8. In the Hierarchy panel, select all four elements of the Draggable-Stacking-Sprite, right-click on Draggable-Stacking-Sprite and select *Push to Slice...*.  Ensure this is saving to *'Draggable-Stacking-Sprite.slice'* and not the regular draggable slice.
