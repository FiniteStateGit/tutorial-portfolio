---
title: "Examples"
metaTitle: "UI Popups and Toast: Examples"
metaDescription: "Learn how to use Popups to display simple notifications in the center of the screen with optional, OK or Yes/No buttons. Use Toast to display notifications at the bottom of the screen."
---

# Show a Buttonless Popup for a Duration

The **Show Popup** node with **Button Kind** set to **2** remains on-screen until hidden. The following function displays the **Popup Message** for the **Popup Duration** in *seconds*.

### Function Node

![The Function](/images/01/ex-01.png "The Function")

### Graph Variables

|Variable Name|Variable Type|Default Value|Scope|
|-------------|-------------|-------------|-----|
|Popup Duration|Number||In|
|Popup Message|String||In|

### Graph of Function

![Script Canvas graph of function](/images/01/ex-02.png)

# Show Toast if Popup Yes Clicked

Display a Yes/No Popup. If the player clicks 'yes', tell them the *consequence* with a Toast notification. The following function displays the **Popup Message** and then displays the **Toast Message** for the **Toast Duration** in *seconds* if 'yes' is clicked.

### Function Node

![The Function](/images/01/ex-03.png "The Function")

### Graph Variables

|Variable Name|Variable Type|Default Value|Scope|
|-------------|-------------|-------------|-----|
|Popup Message|String||In|
|Popup Source|Entity ID|Self|In|
|Toast Duration|Number||In|
|Toast Message|String||In|
|Button Pressed|Number||Local|
|Popup ID|Number||Local|

### Graph of Function

![Script Canvas graph of function](/images/01/ex-04.png)

# Clear and Display New Toast

Ensure that Toast notifications never overlap with the following function. Provide any current Toast notification's ID with **Previous Popup ID** and it will be hidden before a new Toast notification displays **Toast Message** for the **Toast Duration** in *seconds*. The function outputs the **New Popup ID**.

### Function Node

![The Function](/images/01/ex-05.png "The Function")

### Graph Variables

|Variable Name|Variable Type|Default Value|Scope|
|-------------|-------------|-------------|-----|
|Previous Popup ID|Number||In|
|Toast Duration|Number||In|
|Toast Message|String||In|
|New Popup ID|Number||Out|

### Graph of Function

![Script Canvas graph of function](/images/01/ex-06.png)

# Clear and Display New Buttonless Popup

Ensure that Buttonless Popups never overlap and give them a timeout with the following function. Provide any current Popup's ID with **Previous Popup ID** and it will be hidden before a new Toast notification displays **Popup Message** for the **Popup Duration** in *seconds*. The function outputs the **New Popup ID**.

### Function Node

![The Function](/images/01/ex-07.png "The Function")

### Graph Variables

|Variable Name|Variable Type|Default Value|Scope|
|-------------|-------------|-------------|-----|
|Popup Duration|Number||In|
|Popup Message|String||In|
|Previous Popup ID|Number||In|
|New Popup ID|Number||Out|

### Graph of Function

![Script Canvas graph of function](/images/01/ex-08.png)

# Clear a Popup after a Timeout

Hide any Toast notification or Popup, regardless of **Button Kind**, after a **Timeout** in *seconds*. The following function can also be used to override a Popup's timeout. If the Popup was not closed by the player before the **Timeout**, the output of **Timed Out?** will be **True**.

### Function Node

![The Function](/images/01/ex-09.png "The Function")

### Graph Variables

|Variable Name|Variable Type|Default Value|Scope|
|-------------|-------------|-------------|-----|
|Popup ID|Number||In|
|Timeout|Number||In|
|Timed Out?|Boolean||Out|

### Graph of Function

![Script Canvas graph of function](/images/01/ex-10.png)

### Graph Variables

|Variable Name|Variable Type|Default Value|Scope|
|-------------|-------------|-------------|-----|
|Previous Popup ID|Number||In|
|Tag Added|CRC||In/Out|
|Tag Toast Map|Map<CRC, String>||In|
|Toast Duration|Number||In|
|New Popup ID|Number||Out|

# Show Toast when a Tag is Added

Display Toast notifications as tags are added to the player. If a tag is in the **Tag Toast Map** as a key, it's value string will be displayed as a Toast notification for the **Toast Duration** in *seconds*. Connect this function after the output of the **On Tag Added** node and provide any existing **Previous Popup ID**. Any active Toast notification is hidden. The function outputs the **Tag Added** to the player as well as the **New Popup ID**.

### Function Node

![The Function](/images/01/ex-11.png "The Function")

### Graph Variables

|Variable Name|Variable Type|Default Value|Scope|
|-------------|-------------|-------------|-----|
|Previous Popup ID|Number||In|
|Tag Added|CRC||In/Out|
|Tag Toast Map|Map<CRC, String>||In|
|Toast Duration|Number||In|
|New Popup ID|Number||Out|

### Graph of Function

![Script Canvas graph of function](/images/01/ex-12.png)
