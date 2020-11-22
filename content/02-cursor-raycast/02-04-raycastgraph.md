---
title: "Use the Function in a SC Graph"
metaTitle: "Raycasting to the Cursor: Create a function to Raycast in Script Canvas"
metaDescription: "Learn how to select objects in your game using the mouse cursor.  Filter the objects with Collision Groups"
---

##### Tutorial Overview:
-  Set up a level to use PhysX raycasting.
-  Create a reusable function to Raycast to the mouse cursor.
-  Create a Script Canvas graph using the Raycast function.
-  Filter the raycasts based on PhysX Collision Groups.

# Level Setup

Now that you have a function created to raycast, set up a Script Canvas graph to use it.

1. In your level, add a Script Canvas component to the camera entity.
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

1. After the entity is activated, the **Increment Visible Counter** node from the UI Cursor category displays the mouse cursor on screen.
2. **Input Handler** will listen for an input event set up on the entity's Input component.  The **Raycast Action Name** input should match the event name set in the Input Component's event bindings.  The **Camera** and **Collision Group** inputs are passed to the raycast function.  If a valid entity was hit with the raycast the function will trigger the node's Out slot.  
3. You need a **Time Delay** node set to 1 tick before any of the function's variables are accessible.  
4. For this example, the **Entity ID** is used to get the hit entity's name.  
5. Finally the **clear-and-display-toast** function found in [Popups and Toast: Examples](../01-popups/01-05-usage) displays the entity's name in a Toast notification in the bottom right corner of the screen.

# Exposed Variables on the Script Canvas Component

![Script Canvas Component with completed graph](../images/02/rc-05.png "Script Canvas Component with completed graph")
>  The Input Variables that are exposed from the graph to the SC Component in the editor.

After saving the graph, fill in the variables exposed on the Script Canvas component.  If you set the collision group in either the graph or function to have a default value of **Default**, you can leave the **Collision Group** field blank on the component.  The **Raycast Action Name** must match the event from your input bindings file.  In this example the raycast graph is on the same entity as the active **Camera**, so use the target icon to select the entity with the Camera, Input and Script Canvas component.

4. Save and play the level. The mouse cursor is displayed on-screen and pressing the input key while hovering over your target entities raycasts to them.  Toast notifications display in the bottom right corner of the screen when a raycast is successful with the name of the target hit.

>Note: If your terrain is a valid target for the raycast, its name will be an empty string "".

5.  In the next section, configure your PhysX settings to filter by **Collision Group** so that only the target entities are valid for the raycast.
