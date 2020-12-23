---
title: "Level Setup"
metaTitle: "Raycasting to the Cursor: PhysX vs Legacy Physics and Level Setup"
metaDescription: "Learn how to select objects in your game using the mouse cursor.  Filter the objects with Collision Groups"
---

##### Tutorial Overview:
-  Set up a level to use PhysX raycasting.
-  Create a reusable function to Raycast to the mouse cursor.
-  Create a Script Canvas graph using the Raycast function.
-  Filter the raycasts based on PhysX Collision Groups.

# PhysX vs. Legacy Physics

This tutorial assumes you are using PhysX colliders on the entities you want to raycast to.  If you are using legacy physics in your level, some modifications to the raycast function and graph will be necessary.  Take care that you use the raycast node in Script Canvas that is specific to the physics system you use in your level.

# Target Entity Setup

Raycasting requires a collider component on all intended targets.  There are 3 colliders components to choose from: **PhysX Character Controller**, **PhysX Collider** and **PhysX Shape Collider**

The only additional requirement for raycasting is that the **In Scene Queries** toggle button on the collider component is set to **True**.

The target's collision layer may be left as their default values.  Collision filtering requires further setup discussed in a later section of the tutorial.

1. Create a few entities in the level with PhysX colliders, setting **In Scene Queries** to **True**.  Give them different names in the Entity Outliner so it is clear which target you are hitting with the raycast.

# Raycasting Entity Setup

2. A raycast to the mouse cursor should originate from the active camera in your level.  Create an entity and add the camera component to it.  Adjust the position of the camera to point towards your target entities.

3. The raycast will be triggered by player input.  Add an Input component to the camera entity.  Create an input bindings file  in the Asset Editor with at least one input event set up.  Set the Input component to load the input bindings you created.  In this tutorial, an event from the mouse is set up, when the Left Mouse Button is pressed it generates the event named 'LMB'.

![An example input bindings file.](/images/02/rc-10.png "An example input bindings file.")
>  An example input bindings file.

4. Open the Script Canvas Editor and create a new blank function.  The next section of the tutorial describes the what should go in your new function.  Save your function when you have completed it.
