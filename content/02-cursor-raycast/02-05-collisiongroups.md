---
title: "Setting up PhysX Collision Groups"
metaTitle: "Raycasting to the Cursor: Create a function to Raycast in Script Canvas"
metaDescription: "Learn how to select objects in your game using the mouse cursor.  Filter the objects with Collision Groups"
---

##### Tutorial Overview:
-  Set up a level to use PhysX raycasting.
-  Create a reusable function to Raycast to the mouse cursor.
-  Create a Script Canvas graph using the Raycast function.
-  Filter the raycasts based on PhysX Collision Groups.

# PhysX Configuration

1. In the Lumberyard Editor in the Tools menu, open PhysX Configuration.
2. Select the second tab, **Collision Filtering**.  The Layers tab of Collision Filtering will be displayed.
3. Add a **Collision Layer** named **Targets** under the Default collision layer.

![Completed collision layer setup](/images/02/rc-06.png "Completed collision layer setup")
>  Completed collision layer setup

4. Select the **Groups** tab.  *Collision Groups* are displayed in the leftmost column.  After that there is a column for each *Collision Layer*.
5. Add a new Collision Group by clicking the 'Add' button under the Groups column. Name it 'TargetsOnly'.  This will be the string that the raycast graph and function uses to filter out collisions.
6. Set the new TargetsOnly group to only collide with Targets.  In the row TargetsOnly, uncheck the box for Default and check the box for Targets.

![Completed collision group setup](/images/02/rc-07.png "Completed collision group setup")
>  Completed collision group setup

7. Close the PhysX Configuration window.

# PhysX Configuration

8. In the Script Canvas component of the camera entity set the Collision Group input to **'TargetsOnly'**

![Completed Script Canvas component setup](/images/02/rc-08.png "Completed Script Canvas component setup")
>  Completed Script Canvas component setup

9. In the Collider components of each of your target entities, set the collision layer to **Targets**.  

> Note: There is no need to change the value of **Collides With** to TargetsOnly.

![Completed PhysX Collider component setup](/images/02/rc-09.png "Completed PhysX Collider component setup")
>  Completed PhysX Collider component setup

10. Save and play the level.  Now only raycast hits on your targets will be displayed!
