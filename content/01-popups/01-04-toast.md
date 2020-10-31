---
title: "Display Toast"
metaTitle: "UI Popups and Toast: Display Toast"
metaDescription: "Learn how to use Popups to display simple notifications in the center of the screen with optional, OK or Yes/No buttons.  Use Toast to display notifications at the bottom of the screen."
---

In this tutorial learn how to:

-  Create Popups to display notifications in the center of the screen.  
-  Receive player input with optional OK or Yes/No buttons.  
-  Use Toast to display notifications at the bottom of the screen.   

# The Show Toast node

1. The


1. The **Show Toast** node has two input fields.

- The **Message** field requires a string input, this is the text the Toast displays on-screen.
- The **Duration** field requires an integer input.  This is the length of time in *seconds* that the Toast notification will be displayed for.

TODO IMG

2. The **Show Toast** node has one return value, **Popup ID**, an integer. With this ID you can hide Toast before the duration time has elapsed with the **Hide Popup** node.

# Display a Toast

3. In the Popup Script Canvas graph replace the two **Print** nodes with **Show Toast** nodes.  Set the **Message** and **Duration** on each node.

TODO IMG

4. Save the graph and play the level.  Toast notifications display in the bottom right corner of the screen when the Yes and No buttons are pressed.

# Conclusion

asdasd

See the next section of the tutorial for a few examples of how you can use Popups and Toast in your project.
