---
title: "Portfolio Introduction"
metaTitle: "This is the title tag of this page"
metaDescription: "This is the meta description"
---

# Introduction

Presentation of designs and Process
Motivations
My thinking and orientation towards all this
How I would divide the overall work up
How I DO divide a single topic up
The LY User and User Feedback, Forum Response
Design of a Tutorial Program


# Complete Tutorials
- UI: Popups and Toast
- Raycasting to the Cursor
- Group Selection

# User Feedback to Tutorial Design Process

Provide a sense of response to user feedback resulting in a tutorial design to meet their needs (stated and otherwise).
Identify as many as possible? State that as a secondary goal of the portfolio?  Maybe goal is just a reasonable broad selection from forum-only?

USERFEEDBACK1 - TUTORIAL OUTLINE
https://forums.awsgametech.com/t/multiplayer-tutorials-and-documentation/971

I’ve searched through all tutorials and guides and I followed every tutorial about multiplayer and networking. I have to say I didn’t learn much: some tutorials (like the Programming-Network-(01)_Creating_a_multiplayer_game_project) seem promising but eventually they are quite void (the named one makes you create an empty project with multiplayer gem selected, then instructs you how to launch the server console and an empty client, not very useful imho).

The Networking System in the Developer Guide is explained in a confused way (or at least I’m totally not able to understand it). It seems it uses and requires references to other objects or projects that I cannot figure out.

The MultiplayerSample project in the User Guide makes you launch the provided working example in a very easy way, but there’s no explanation of anything on how things work, what are the game objects involved, the API called, the architecture implemented… digging things out of the bare project is quite desolating.

I feel there’s need of a (as short as possible) complete tutorial about how to create a multiplayer game from scratch, with some minimal game objects, and step by step enabling them for working in a multiplayer context, applying the required gems and other facilities (GridMate? FlowGraph elements from the Multiplayer gem?), testing it in local then uploading it on GameLift (maybe integrating/linking the existing GameLift tutorial).

Thanks in advance,

Fabio

Thanks for your reply, much appreciated.

About the multiplayer tutorial series, I would love to have these steps/subjects covered:

create a multiplayer project from scratch, adding support for authoritative server (multiplayer gem? where is the component named GridMate? currently is not clear from the docs), integration with AWS (Cloud Canvas) and GameLift.
create a simple level with some environment element and the player avatar
add the multiplayer support (with Flow Graph? C++ API?), ideally to support different multiplay scenarios:
private game lobby peer to peer
private game lobby with remote authoritative server
open game lobby (mmo?) with remote authoritative server (with open game lobby I mean a different approach to multiplayer session where we don’t use the game lobby facilities seen in other tutorials to let the user choose the room to join: we implement the association user <-> session server side - the tutorial should show what apis to use in order to achieve this)
how to test the private game lobby peer to peer in LAN
how to test the private game lobby with dedicated server in LAN (showing how the movements are server-authoritative)
how to test the open game lobby in LAN (showing how the network connections work, components/api involved, etc. - what should I do if, for example, I wanted to make it work between two remote computers)
upload the dedicated server on GameLift and test it (private and open lobby)
add a bit of sandboxing spice: explain how the 3D environment works, how I can modify the environment programmatically (and/or with Flow Graph), implementing a user command with which the avatar put an item (for example, a tree) on the ground
use Cloud Canvas to save the user-created item (type, position, other game attributes) in the cloud (DynamoDB seems to me the best bet)
use Cloud Canvas to retrieve, at launch time, the terrain status from the cloud (i.e. all trees position, rotation, size, etc.) and sync it with local state (rebuild trees in the local level).

USERFEEDBACK2 - TUTORIAL OUTLINE
https://forums.awsgametech.com/t/gdc18-cloud-assisted-production-from-days-to-minutes-a-terrain-generation-use-case/5109

USERFEEDBACK3 - TUTORIAL OUTLINE
https://forums.awsgametech.com/t/video-tutorial-create-a-main-menu-screen-ui-editor-part-2-5/8368/5

https://forums.awsgametech.com/t/a-suggestion-environment-tutorials/7447

https://forums.awsgametech.com/t/waterworks-full-suite-tutorial/7025

https://forums.awsgametech.com/t/how-to-setup-ai-with-pathfinding-etc-from-scratch-tutorial-request/4542

https://forums.awsgametech.com/t/list-of-tutorials-i-would-like-to-see-eventually/1425

# Complete Tutorial Outlines

Provide a sense, beyond completed tutorials, of what an individual tutorial would look like.

Categories:
AI
UI
SC

# List of potential tutorials, categorized

Provide a sense, beyond what has been covered so far, of the topics that could be included in a complete program of tutorials.

UI
AI
ANIM
SKELETONS
3D MODELS
SOUND
SINGLE COMPONENT
SINGLE EDITOR TOOL
LANGUAGES LUA C++
VIEWPORT
LY BUILD
PROJECT BUILD
PROJECT DEPLOY
MULTIPLAYER
NETWORKING
SC
MATERIALS
NODE CATEGORY
GEMS
OTHER TOOLS OPEN-SOURCE LY-Specific
OTHER TOOLS 3rd Party GAME DESIGN/ART, GIVE THEM AN EX OF OPEN SOURCE TOOLCHAIN
BEST PRACTICES FOR EVERY CATEGORY
PERFORMANCY - General
PERFORMANCY - W/ regards to # ents, lights, textures, meshes, terrain and skybox'
OVERVIEW OF THE TOOLS AVAILABLE
GAME PROJECT WORKFLOW - BEST PRACTICES, ALSO BY GENRE

IMPORTANT (ALL IN THE CONTEXT OF LY/SC)
--------
GAME DESIGN
GENERAL PROGRAMMING
MATH FOR 2D AND 3D

# Auxiliary Materials
