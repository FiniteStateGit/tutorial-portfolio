---
title: "Inventory Canvas: Bags"
metaTitle: "Build UIs with Drag and Drop, Stacking Functionality"
metaDescription: "Create UI slices for drag and drop stacking and non-stacking elements.  Create an interactive UI canvas with a hotbar and inventory."
---

##### Tutorial Overview:
-  Import and configure a spritesheet.
-  Create drop target, stacking and non-stacking draggable UI slices.
-  Create an interactive UI canvas with draggables.

# Adding Bag Inventories

Now we'll create a container to hold the inventories of up to three open bags.  We'll add a Droptarget-Container for each bag.

1. In the Hierarchy panel, right-click Main and add a new **LayoutGrid** from the slice library.  Rename it 'Bags'.

2. In the **Transform2D** component of Bags, set the anchor to *bottom-right*.  Set the **XPos** Offset to *-5* and the **YPos** Offset to *-75*, this will place the container above the bagslots and hotbar.  Set the **Width** and **Height** Offsets to *450*.

3. In the **LayoutGrid** component of Bags, set Horizontal and Vertical **Spacing** to *5*. Set the Cell Size to Width *160* and Height *210*.  

4.  We'll change the **Order** to ensure that the first open bag is always in the lower-right, the second open bag is above the first, and if a third bag is opened, it is to the left of the first bag. Set **Horizontal Order** to *Right to left*, **Vertical Order** to *Bottom to top* and **Starting with** to *Vertical*.  Set **Child Alignment** Horizontal to *Right* and Vertical to *Bottom*.

5. In the Hierarchy panel, right-click Bags and select *New...*, *Element from Slice Browser..*, and choose the Droptarget-Container slice. Rename it 'Bag1'. Rename the child DropTarget 'Slot1'.

6. Select **Slot1**, right-click and copy (Hotkey: Ctrl+c).  Select **Bag1** and right-click *Paste as child* (Hotkey: Ctrl+Shift+v). Do this until you have 12 slots.

<a href="../images/03/drag-12.png">
  <img align="center" src="../images/03/drag-12.png"/>
</a>

> Step 6. The Bags Element Configuration

7. In the 'Hierarchy' panel, select **Bag1**, right-click and copy (Hotkey: Ctrl+c).  Select the **Bags** and right-click *Paste as child* (Hotkey: Ctrl+Shift+v). Do this until you have 3 Bags. They should be aligning in the bottom-right corner.  

8. To hide bags we will disable the elements in Script Canvas.  Ctrl-Left-Click Bag2 and Bag3, don't select any of their Slots. In the **Element** component, set the *Start enabled* toggle button to *off*, now Bag2 and Bag3 will be hidden by default.  If you press the **Preview** button on the UI Editor toolbar, only Bag1 should be visible on-screen and BagSlot1 should have the open bag sprite displayed with full Alpha coloring.

9.  Add a few draggable slices to Bag1, changing their Image Index and CounterText (for the stackable variety).

![The Completed Canvas in Preview Mode](../images/03/drag-13.png "The Completed Canvas in Preview Mode")
> Step 9. The Completed Canvas in Preview Mode

10.  Save the UI Canvas to your project directory.  Next we'll create the Script Canvas graphs for stacking and non-stacking draggables.
